<?php
namespace app\mini\controller;

use think\Controller;

class Base extends Controller
{

    public function __construct(){
//        $user_info = db('users')->find(1);
//        session("mini",$user_info);
//        session("mini.uid",1);        
        
        if(!session("mini.uid")){
            $url = "/admin/login";
            if(\think\Request::instance()->isAjax()){
                $result['code'] == 2;
                $result['msg'] == "请登录后操作";
                $result['url'] == $url;
                exit(json_encode($result));
            }else{
                $this->redirect($url);
            }
        }
        
        //配置信息
        $config = db("Config")->column("c_name, c_value");
        config($config);
    }
}
