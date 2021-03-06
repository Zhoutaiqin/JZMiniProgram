/*data.js作为独立的表存在
  *.js:作为独立的对象存在：构建其属性，进行页面数据绑定
*/
var GoodList=
[
{
  "Id":"B001G003",
  "Barcode":"B001G003001",
  "Name":"俞兆林女装 韩版时尚假两件收腰长裙甜美百搭短袖连衣裙女 YWQZ202570 黄色 M",
  "ImgUrl":"../../../img/Details/连衣裙1.png",
  "ClsId":"B001",
  "BrandId":"",
  "GoodType":"自营",
  "Price":238,
  "Weight":""
},
{
        "Id":"B001G005",
        "Name":"统一萨姆奶茶 原味奶茶 500ml*15瓶 整箱精选喜马拉雅山麓红茶",
        "ImgUrl":"../../../img/Focus/奶茶a.png",
        "ClsId":"B001",
        "BrandId":"",
        "GoodType":"",
        "Price":52.90,
        "Weight":"8.52kg"
}
];
var Stores=[
  {
    "StoreId":"S001",
    "StoreName":"JZ超市",
    "GoodId":"B001G003"
  }
];
var GoodImgs=[
  {
    "Id":"B001G003",
    "ImgUrl":"../../../img/Details/连衣裙1.png"
  },{
    "Id":"B001G003",
    "ImgUrl":"../../../img/Details/连衣裙2.png"
  },{
    "Id":"B001G003",
    "ImgUrl":"../../../img/Details/连衣裙3.png"
  },{
    "Id":"B001G003",
    "ImgUrl":"../../../img/Details/连衣裙4.png"
  },{
    "Id":"B001G003",
    "ImgUrl":"../../../img/Details/连衣裙5.png"
  }
];
var Introductions=[
  {
    "Id":"B001G003",
    "ImgUrl":"../../../img/Details/连衣裙1.png"
  },{
    "Id":"B001G003",
    "ImgUrl":"../../../img/Details/连衣裙2.png"
  },{
    "Id":"B001G003",
    "ImgUrl":"../../../img/Details/连衣裙3.png"
  },{
    "Id":"B001G003",
    "ImgUrl":"../../../img/Details/连衣裙4.png"
  },{
    "Id":"B001G003",
    "ImgUrl":"../../../img/Details/连衣裙5.png"
  }
];
var Promotions=[
  {
    "SheetId":"",
    "PromotionTime":"05月18日",
    "Title":"跨自营/店铺满折",
    "PromotType":"满折", 
    "GoodId":"B001G003",
    "PromotDetails":[
        {
           "SheetId":"",
           "Num":2,
           "Discount":0.8
        },
        {
          "SheetId":"",
          "Num":3,
          "Discount":0.7
       }
    ] 
  },
  {
    "SheetId":"",
    "PromotionTime":"",
    "Title":"多买优惠",
    "PromotType":"满折", 
    "GoodId":"B001G003",
    "PromotDetails":[
        {
           "SheetId":"",
           "Num":2,
           "Discount":0.8
        }
    ] 
  }
];
var GoodSizes=[
  {
     "GoodId":"B001G003",
     "Barcode":"B001G003001",
     "SizeType":"衣服",/*商品类型：衣服，牛奶等*/
     "Size":"M",
     "Color":"黄色",
     "Price":52.9,
     "Specification":"../../../img/Details/Specification.png"
  },
  {
    "GoodId":"B001G003",
    "Barcode":"B001G003002",
    "SizeType":"衣服",
    "Size":"L",
    "Color":"黄色",
    "Price":52.9,
    "Specification":"../../../img/Details/Specification.png"
 }
];
var UserList=[
    {
    "UserId":"15002083067",
    "UserName":"jingzhe",
    "Sex":"男",
    "Photo":"../../../img/UserInfo/jingzhe.jpg"
  },{
    "UserId":"15002083068",
    "UserName":"zhoutq",
    "Sex":"男",
    "Photo":"../../../img/UserInfo/jingzhe.jpg"
  }
];
var UserDetails=[
    {
       "UserId":"15002083067",
       "Address":"江西省上饶市信州区凤凰中道39号龙华凤凰城",
       "IsDefault":"1"
    },{
      "UserId":"15002083067",
      "Address":"广东省深圳市南山区蛇口湾厦旧村一巷41号701",
      "IsDefault":"0"
   }
];
var Services=[
  {
     "GoodId":"B001G003",
     "Title":"99元免基础运费(10kg内)"
  },{
    "GoodId":"B001G003",
    "Title":"JZ发货&售后"
 },{
  "GoodId":"B001G003",
  "Title":"支持7天无理由退货"
},{
  "GoodId":"B001G003",
  "Title":"可配送港澳台及海外"
}
];
var EvaluateList=[
    {
       "SheetId":"B15001",
       "GoodId":"B001G003",
       "UserId":"15002083067",
       "Content":"好看是好看，就是太薄了，不穿打底都没法用",
       "ETime":"2020-05-15",
       "EStar":5,
       "EMemo":"",
       "EDetails":[
         {
           "SheetId":"B15001",
           "ImgUrl":"../../../img/Details/连衣裙1.png"
         }
       ]
    },{
      "SheetId":"B15002",
      "GoodId":"B001G003",
      "UserId":"15002083068",
      "Content":"舒适程度，凉快透气，穿起来很舒服",
      "ETime":"2020-05-15",
      "EStar":5,
      "EMemo":"",
      "EDetails":[]
   }
];
var Loginstic=null;
module.exports = {
  GoodList:GoodList,
  GoodImgs:GoodImgs,
  Promotions:Promotions,
  GoodSizes:GoodSizes,
  Services:Services,
  UserList:UserList,
  UserDetails:UserDetails,
  EvaluateList:EvaluateList,
  Introductions:Introductions,
  Stores:Stores
};