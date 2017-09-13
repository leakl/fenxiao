<?php
namespace app\admin\controller;

use app\admin\model\AdminUserRole;

class Role extends Base
{
	 //定义当前菜单id
    private static $menu_id = 21;
	
    public function getlist(){
		$page = input("page",1,"intval");
		$limit = config('paginate.list_rows');
		$map = [];
		$keyword = input("keyword","","trim");
		if($keyword){
           $map['role_name']  =   array('like', '%'.(string)$keyword.'%');	
		}
		
		$count =db('admin_user_role')->where($map)->count();
		$list=db('admin_user_role')						
			->where($map)
			->order('id desc')
			->page($page,$limit)
			->select();
	/*	
		foreach($list as $key=>$row){
			$row['type']=db('admin_user')->where("role_id=".$row['id'])->count();	//type=1表示该角色已被使用	
			$list[$key]=$row;
		}	
	*/	
		$result['list'] = $list;
        $result['total'] = $count;
        $result['limit'] = $limit;
        
        $this->success("成功","",$result);
    }
	
	
	//  修改/添加角色页
	public function add_role(){
		
		$role_id = input("role_id","","trim");	
		$role = db('admin_user_role')->where('id ='.$role_id)->find();
		$role['menu_auth'] = explode(',',$role['menu_auth']);
		
		
		$menu = db('admin_menu')->where('pid=0 and status = 1')->order('sort,id desc')->select();		
		foreach($menu as &$row){ 
			$row['child_list']=db('admin_menu')->where('status = 1 and pid='.$row['id'])->order('sort,id desc')->select();	
		}

		$result['role'] = $role;
        $result['menu'] = $menu;
    
        $this->success("成功","",$result);
		
		
	}
	
	// 保存/新增角色
	public function save_role(){ 
		$role_id = input("role_id","","trim");	
		if($role_id){
			$data = [
				'id'  => $role_id,
				'role_name'  => input("role_name","","trim"),
				'menu_auth' = > input("menu_auth","","trim"),//逗号隔开的菜单id
			];
			$validate_res = $this->validate($data,[
				'id'  => 'require|number',
				'role_name'  => 'require|unique:role_name',
			],[
				'id.require' => '参数错误',
				'id.number' => '参数格式错误',
				'role_name.require' => '角色名不能为空！',
				'role_name.unique' => '该角色已存在！',           
			]); 
			
			if ($validate_res !== true) {
				$this->error($validate_res);
			}
			
			$data['edit_time'] = time();
			$new_role = db('admin_user_role')->where('id='.$role_id)->update($data);	
			//写入日志表			
			$this->add_log(self::$menu_id,['title' => '更新角色', 'admin_user_role' => $data]);		
			//=============================
			$this->success("修改成功");

		}else{
			$data = [				
				'role_name'  => input("role_name","","trim"),
				'menu_auth' = > input("menu_auth","","trim"),//逗号隔开的菜单id
			];
			$validate_res = $this->validate($data,[	
				'role_name'  => 'require|unique:role_name',
			],[				
				'role_name.require' => '角色名不能为空！',
				'role_name.unique' => '该角色已存在！',           
			]); 
			
			if ($validate_res !== true) {
				$this->error($validate_res);
			}
			$data['add_time'] = time();			
			$new_role =  db('admin_user_role')->insertGetId($data);	
			$data['id'] = $new_role;
			//写入日志表
			$this->add_log(self::$menu_id,['title' => '新增角色', 'admin_user_role' => $data]);				
			//=============================
			
			$this->success("新增成功");
			
		}	

	}
	
	//删除角色
	public function del_role(){ 
		$role_id = input("role_id","","trim");	
		if(!$role_id){ 
			$this->error("参数错误");
		}
		$type=db('admin_user')->where("role_id=".$role_id)->count();	//type=1表示该角色已被使用
		if($type){ 
			$this->error("该角色已被使用！");
		}
		
        $role = AdminUserRole::get($role_id);
        if(!$role){
            $this->error("数据不存在");
        }
        $res = $role->delete();
        if($res){
            //写日志
			$this->add_log(self::$menu_id,['title' => '删除角色', 'admin_user_role' => $role]);	
            
            $this->success('删除成功');
        }else{
            $this->error('删除失败');
        }

	}
    
   
}