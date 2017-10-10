<?php
namespace app\mini\controller;

use GatewayClient\Gateway;

class Message extends Base
{
    public $register_address = '127.0.0.1:1238';
    
    public function __construct() {
        parent::__construct();
        
        // 设置GatewayWorker服务的Register服务ip和端口，请根据实际情况改成实际值
        Gateway::$registerAddress = $this->register_address;
    }
    
    //绑定客户端和uid
    public function bind(){
        $client_id = input("param.client_id", "", "trim");

        // 假设用户已经登录，用户uid和群组id在session中
        $uid      = session("mini.uid");
        $group_id = get_group_id($uid);
        // client_id与uid绑定
        Gateway::bindUid($client_id, $uid);
        // 加入某个群组（可调用多次加入多个群组）
        Gateway::joinGroup($client_id, $group_id);
    }
    
    /**
     * 发送消息
     * @param string $content 消息内容
     * @param int $type 消息类型 1文本 2图片 3商品 
     */
    public function send_msg(){
        $type = input('param.type', '', 'intval');
        $content = input('param.content', '', 'trim');
        if(!$type || !$content){
            $this->error('参数错误');
        }
        $uid = session("mini.uid");
        if($type == 3){
            $good_info = db('goods')->field('id good_id,good_title,good_img,price good_price')->find($content);
            if(!$good_info){
                $this->error('商品信息不存在');
            }
            $content = json_encode($good_info);
        }
        $group_info = db('message_group')->where('user_id='. $uid. ' AND type = 1')->find();
        if(!$group_info){
            $group_info['id'] = db('message_group')->insertGetId([
                'user_id' => $uid,
                'add_time' => date('Y-m-d H:i:s'),
                'type' => 1
            ]);
        }
        
        //保存到数据库
        $res = db('message')->insert([
            'message_group_id' => $group_info['id'],
            'send_user_id' => $uid,
            'send_user' => 1,
            'content' => $content,
            'add_time' => date('Y-m-d H:i:s'),
            'type' => $type,
        ]);
        
        if($res){
            //推送消息
            $group = get_group_id($uid);
            $exclude_user = Gateway::getClientIdByUid($uid);
            // 向任意群组的网站页面发送数据
            Gateway::sendToGroup($group, $content, [$exclude_user]);
            
            $this->success('发送成功');
        }else{
            $this->error('发送失败');
        }
    }
    
    /**
     * 会话内容
     */
    public function chat_list(){
        
        $page = input("param.page", 1, 'intval');
        $limit = config('mini_page_limit');
        
        $user_id = session('mini.uid');
        
        $group = db('message_group')->where('user_id='. $user_id. ' AND type = 1')->find();
        if(!$group){
            $group['id'] = db('message_group')->insertGetId([
                'user_id' => $user_id,
                'add_time' => date('Y-m-d H:i:s'),
                'type' => 1
            ]);
        }
        
        $where = 'message_group_id='. $group['id'];
        $list = db('message')
                ->where($where)
                ->field("send_user_id,send_user,content,read_status,add_time,type")
                ->page($page,$limit)
                ->order('id ASC')
                ->select();
        $total = db('message')
                ->where($where)
                ->count();
        if($list){
            foreach($list as $k=>$v){
                if($v['type'] == 3){
                    $list[$k]['content'] = json_decode($v['content'], true);
                }elseif($v['type'] == 2){
                    $list[$k]['content'] = ['img_url' => getThumbUrl($v['content'], 1), 'thumb_img_url' => $v['content']];                            
                }
                if($v['send_user'] == 1){
                    $list[$k]['user_name'] = session('mini.nickname');
                    $list[$k]['head_img'] = session('mini.img_url');
                }else{
                    $list[$k]['user_name'] = '客服';
                    $list[$k]['head_img'] = '';
                }
            }
        }
        
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
//        echo "<pre>";print_r($result);exit;
        $this->success("成功", "", $result);
    }
}