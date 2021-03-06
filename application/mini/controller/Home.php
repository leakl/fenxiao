<?php
namespace app\mini\controller;

use think\Db;

class Home extends Base
{
    /**
     * 获取banner图
     * @return type
     */
    public function banner(){
        $list = db('banner')->where('status=1')->select();
        
        $this->success('成功', '', $list);
    }
    
    /**
     * 获取分类列表
     * @return type
     */
    public function get_cat_list(){
        $page = input('param.page', 1, 'intval');
        $limit = input('param.limit', 0, 'intval');
        
        if($limit){
            $list = db('goods_category')->order('sort DESC')->limit($limit)->field('id,cat_name,cat_img')->select();            
        }else{            
            $list = db('goods_category')->order('sort DESC')->field('id,cat_name,cat_img')->select();    
        }
        
        $this->success('成功', '', $list);
    }
    
    /**
     * 个人中心信息
     */
    public function center_info(){
        $user_info = db('users')->field('id,credits,earn_total,nickname,img_url,distribution_level,account_balance,sex,phone_number')->find(session('mini.uid'));
        
        $user_info['user_center_sale_total_show'] = config('user_center_sale_total_show');
        //营业总额，统计所有订单的总额
        if($user_info['distribution_level'] == 2){
            if(config('user_center_sale_total_show') == 1){
                $user_info['business_total_amount'] = db('orders')->where('order_status', 5)->where('pay_method', 'IN', [1, 2])->sum('total_amount');
                $user_info['business_total_amount'] = $user_info['business_total_amount'] ? $user_info['business_total_amount'] : 0;
            }
            //分销二维码
            $user_info['dis_qrcode'] = db('qrcode')->where('user_id', $user_info['id'])->value('qrcode_url');
        }
        
        //签到天数
        $user_info['sign_total'] = db('signin')->where('user_id', session('mini.uid'))->count();
        
        //今天是否签到
        $user_info['sign_in'] = db('signin')->where('user_id', session('mini.uid'))->where('signin_date', date('Y-m-d'))->count();
        
        $this->success('成功', '', $user_info);
    }
    
    /**
     * 佣金记录
     */
    public function distribution_list(){
        $page = input('param.page', 1, 'intval');
        $limit = config('mini_page_limit');
        
        $where = 'earn_user_id='. session('mini.uid'). ' AND status=2';
        $list = db('order_distribution_log')->where($where)->order('earn_time DESC')->page($page, $limit)
                ->field('id,earn_amount_input,level,earn_time')->select();
        
        $total = db('order_distribution_log')->where($where)->count();
        
        $total_page = ceil($total/$limit);
        
        $result = [
            "list" => $list,
            "pages" => [
                "total" => $total,
                "total_page" => $total_page,
                "limit" => $limit,
                "current_page" => $page,
            ]            
        ];
        
        $this->success('成功', '', $result);
    }
    
    /**
     * 积分记录
     */
    public function credits_list(){
        $page = input('param.page', 1, 'intval');
        $limit = config('mini_page_limit');
        
        $where = 'user_id='. session('mini.uid');
        $list = db('users_credits_records')->where($where)->order('id DESC')->page($page, $limit)
                ->field('id,credits_in,credits_out,credits_from,add_time')->select();
        
        if($list){
            $credits_from = ['', '签到收入', '购买商品收入', '分享收入', '积分兑换支出', '后台操作收入', '后台操作支出'];
            foreach($list as $k=>$v){
                $list[$k]['credits_from_txt'] = $credits_from[$v['credits_from']];
            }
        }
        
        $total = db('users_credits_records')->where($where)->count();
        
        $total_page = ceil($total/$limit);
        
        $result = [
            "list" => $list,
            "pages" => [
                "total" => $total,
                "total_page" => $total_page,
                "limit" => $limit,
                "current_page" => $page,
            ]            
        ];
        
        $this->success('成功', '', $result);
    }
    
    /**
     * 签到
     */
    public function signin(){
        Db::startTrans();
        try{
            //签到记录
            $singin_id = db('signin')->insertGetId([
                'user_id' => session('mini.uid'),
                'signin_date' => date('Y-m-d'),
                'add_time' => date('Y-m-d H:i:s'),
            ]);
            //积分记录
            db('users_credits_records')->insert([
                'user_id' => session('mini.uid'),
                'credits_in' => config('signin_credits'),
                'credits_from' => 1,
                'track_id' => $singin_id,
                'add_time' => date('Y-m-d H:i:s'),
            ]);
            //修改用户积分
            db('users')->where('id', session('mini.uid'))->setInc('credits', config('signin_credits'));
            
            // 提交事务
            Db::commit();  
        } catch (\Exception $e) {
            // 回滚事务
            Db::rollback();
//            $this->error("发货失败");
            $this->error($e->getMessage());
        }
        $this->success('今天已签到  +'. config('signin_credits'). '积分', '', config('signin_credits'));
    }
    
    /**
     * 获取验证码
     */
    public function get_verify(){
        $captcha = new \think\captcha\Captcha;
        $captcha->fontSize = 30;
        $captcha->length   = 4;
        $captcha->useCurve = false;
        return $captcha->entry();
    }
    
    /**
     * 发送短信验证码
     */
    public function send_phone_code(){
        $data = [
            'phone' => input("phone","","trim"),
            'verify' => input("verify","","trim"),
        ];
        $validate_res = $this->validate($data,[
            'phone'  => 'require|regex:1[3-9]{1}\d{9}$',
            'verify' => 'require|captcha',
        ],[
            'phone.require' => '请输入手机号码',
            'phone.regex' => '手机号码格式不正确',
            'verify.require' => '请输入验证码',
            'verify.captcha' => '验证码不正确',
        ]); 
        if ($validate_res !== true) {
            $this->error($validate_res);
        }
        
        $phone = db('users')->where('id', session('mini.uid'))->value('phone_number');
        if($phone == $data['phone']){
            $this->error('请不要绑定同一个手机号');
        }
        
        //发送短信验证码
        $sms = new Sms();
        $res = $sms->send_sms($data['phone']);
        if($res['code'] == 40000){
            $this->success('验证码发送成功');
        }else{
            $this->error($res['msg']);
        }
    }
    
    /**
     * 绑定手机号
     */
    public function bind(){
        $data = [
            'phone' => input("phone","","trim"),
            'phone_code' => input("phone_code","","trim"),
        ];
        $validate_res = $this->validate($data,[
            'phone'  => 'require|regex:1[3-9]{1}\d{9}$',
            'phone_code' => 'require',
        ],[
            'phone.require' => '请输入手机号码',
            'phone.regex' => '手机号码格式不正确',
            'phone_code.require' => '请输入短信验证码',
        ]); 
        if ($validate_res !== true) {
            $this->error($validate_res);
        }
        $sms = new Sms();
        $res = $sms->check_code($data);
        if($res['code'] != 40000){
            $this->error($res['msg']);
        }
        
        $update_res = db('users')->update([
            'id' => session('mini.uid'),
            'phone_number' => $data['phone']
        ]);
        if($update_res){
            $this->success('绑定成功');
        }else{
            $this->error('绑定失败');
        }
    }
    
    /**
     * 查看是否已申请代理
     */
    public function dis_applly_check(){
        $apply = db('distribution_apply')->where('user_id', session('mini.uid'))->count();
        $this->success('成功', '', $apply);
    }
    /**
     * 申请代理
     */
    public function dis_apply(){
        $user_info = db('users')->field('phone_number')->find(session('mini.uid'));
        if(!$user_info['phone_number']){
            $this->error('未绑定手机号', '/reg');
        }
        $apply = db('distribution_apply')->where('user_id', session('mini.uid'))->count();
        if($apply){
            $this->success('已申请，请不要重复申请');
        }
        $res = db('distribution_apply')->insert([
            'user_id' => session('mini.uid'),
            'status' => 1,
            'add_time' => date('Y-m-d H:i:s'),
        ]);
        if($res){
            $this->success('申请成功');
        }else{
            $this->error('申请失败');
        }
    }
    
    /**
     * 商品分享成功后给用户添加相应的积分
     */
    public function share_credits(){
        $good_id = input('param.good_id', 0, 'intval');
        if(!$good_id){
            $this->error('参数错误');
        }
        Db::startTrans();
        try{
            //积分记录
            db('users_credits_records')->insert([
                'user_id' => session('mini.uid'),
                'credits_in' => config('share_good_credits'),
                'credits_from' => 3,
                'track_id' => $good_id,
                'add_time' => date('Y-m-d H:i:s'),
            ]);
            //修改用户积分
            db('users')->where('id', session('mini.uid'))->setInc('credits', config('share_good_credits'));
            
            // 提交事务
            Db::commit();  
        } catch (\Exception $e) {
            // 回滚事务
            Db::rollback();
//            $this->error("发货失败");
            $this->error($e->getMessage());
        }
        $this->success('分享成功', '', config('share_good_credits'));
    }
}
