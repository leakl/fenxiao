const state ={
    count : 1,
    DEV : window.location.port == '8080',
    breadcrumb:[],
    cat_list:[],
    nav_list:[],
    RoseDialogVisible:false,
    LoginDialogVisible:false,
    GOODTYPE:[
        {label:'实物类商品(微信支付 需要快递)',id:1},
        {label:'拟类商品(微信支付 无需快递)',id:2},
        {label:'预约类商品(线下支付 无需快递)',id:3},
        {label:'积分实物类商品(积分兑换 需要快递)',id:4},
        {label:'积分虚拟类商品(积分兑换 无需快递)',id:5},

    ]
 
}
export default state;