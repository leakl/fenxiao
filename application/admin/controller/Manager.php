<?php
namespace app\admin\controller;

use app\admin\model\AdminUser;

class Manager extends Base
{
     //定义当前菜单id
    private static $menu_id = 23;
	
    public function getlist(){
		$page = input("page",1,"intval");
		$limit = config('paginate.list_rows');
		$map = [];
		$keyword = input("keyword","","trim");
		$map['is_show'] = 1;
		if($keyword){
           $map['nickname']  =   array('like', '%'.(string)$keyword.'%');	
		}
		
		$count =db('admin_user')->where($map)->count();
		$list=db('admin_user')						
			->where($map)
			->order('id desc')
			->page($page,$limit)
			->select();
		
		foreach($list as $key=>$row){
				$row['role_name']=db('admin_user_role')->where("id=".$row['role_id'])->value('role_name');	
				$list[$key]=$row;
		}	
	
		$result['list'] = $list;
        $result['total'] = $count;
        $result['limit'] = $limit;
        
        $this->success("成功","",$result);
    }
	
	
	//  修改/添加角色页
	public function add_user(){
		
		$user_id = input("user_id","","trim");	
		$user = db('admin_user')->where('id ='.$user_id)->find();
		
		$role = db('admin_user_role')->where("role_name !='超级管理员'")->order('sort,id desc')->select();		
		
		
		$result['user'] = $user;
        $result['role'] = $role;
    
        $this->success("成功","",$result);
	
	}
	
	// 保存/新增管理员
	public function save_role(){ 
		$user_id = input("user_id","","trim");	
		$password = input("password","","trim");
		if($password){ 
			$data['password'] = md5($password);
		}
	
		if($user_id){
			$data = [
				'id'  => $user_id,
				'user_name'  => input("user_name","","trim"),
				'nickname' = > input("nickname","","trim"),
				'role_id'  => input("role_id","","trim"),
				'status' = > input("status","","trim"),
			];
			$validate_res = $this->validate($data,[
				'id'  => 'require|number',
				'role_name'  => 'require|unique:role_name',
			],[
				'id.require' => '参数错误',
				'id.number' => '参数格式错误',
				'user_name.require' => '后台登录账号不能为空！',
				'user_name.unique' => '该后台登录账号已存在！',
				'nickname.require' => '管理员姓名不能为空！',
				'role_id.require' => '所属角色不能为空！',           
			]); 
			
			if ($validate_res !== true) {
				$this->error($validate_res);
			}
			
			$data['edit_time'] = time();
			$new_user = db('admin_user')->where('id='.$user_id)->update($data);		
			//写入日志表
			$this->add_log(self::$menu_id,['title' => '更新管理员', 'admin_user' => $data]);           
			//=============================

			$this->success("修改成功");		
		}else{
			$data = [				
				'user_name'  => input("user_name","","trim"),
				'nickname' = > input("nickname","","trim"),
				'role_id'  => input("role_id","","trim"),
				'status' = > input("status","","trim"),
			];
			$validate_res = $this->validate($data,[
				'id'  => 'require|number',
				'role_name'  => 'require|unique:role_name',
			],[
				'id.require' => '参数错误',
				'id.number' => '参数格式错误',
				'user_name.require' => '后台登录账号不能为空！',
				'user_name.unique' => '该后台登录账号已存在！',
				'nickname.require' => '管理员姓名不能为空！',
				'role_id.require' => '所属角色不能为空！',           
			]); 
			
			if ($validate_res !== true) {
				$this->error($validate_res);
			}
			$data['add_time'] = time();			
			$new_user =  db('admin_user')->insertGetId($data);
			$data['id'] = $new_user;	
			//写入日志表
			$this->add_log(self::$menu_id,['title' => '新增管理员', 'admin_user' => $data]);
			//=============================	
			$this->success("新增成功");
		}	

	}
	
	//   启用/禁用管理员
	public function modify_user(){ 
		$user_id = input("user_id","","trim");
		$status = input("status","","trim");	
		if(!$user_id){ 
			$this->error("用户不存在！");
		}
		if($status == 1){ 
			$data['status'] = 2;
			$val = '禁用管理员';
		}elseif($status == 2){ 
			$data['status'] = 1;
			$val = '启用管理员';
		}else{ 
			$this->error("数据错误！！");
		}
		$data['edit_time'] = time();
		$update = db('admin_user')->where('id='.$user_id)->update($data);
		$data['id'] = $user_id;
		//写入日志表		
		$this->add_log(self::$menu_id,['title' => $val, 'admin_user' => $data]);
		//=============================
		$this->success("修改成功");
		
	}

	
	//删除管理员
	public function del_user(){ 
		$user_id = input("user_id","","trim");	
		if(!$user_id){ 
			$this->error("用户不存在！");
		}
		$data['is_show'] = 2;
		$data['edit_time'] = time();
		$del = db('admin_user')->where('id='.$user_id)->update($data);
		
		$data['id'] = $user_id;
		//写入日志表
		$this->add_log(self::$menu_id,['title' => '删除管理员', 'admin_user' => $data]);		
		//=============================	
		$this->success("删除成功");	
	
	}
    
   
}