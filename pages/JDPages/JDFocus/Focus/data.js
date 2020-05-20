
/*大类
  ClsType:0:普通；1:推荐
  ParentId:上一级类别
  ImgUrl:类别图标
  EnglishName:英文名称
  商品
  GoodType:0自营，1JZ物流，2JZ超市，3其他店铺
  不同商品，详情页面是不一样的
*/
var BigClsList = [
  {
      "ClsId": "B001",
      "ClsName": "精选",
      "ParentId":"",
      "ImgUrl":"",
      "ClsType":"1",
      "EnglishName":""
    },
    {
      "ClsId": "B002",
      "ClsName": "女装",
      "ParentId":"",
      "ImgUrl":"",
      "ClsType":"1",
      "EnglishName":""
    },
    {
      "ClsId": "B003",
      "ClsName": "数码",
      "ParentId":"",
      "ImgUrl":"",
      "ClsType":"1",
      "EnglishName":""
    },
    {
      "ClsId": "B004",
      "ClsName": "超市",
      "ParentId":"",
      "ImgUrl":"",
      "ClsType":"1",
      "EnglishName":""
    },
    {
      "ClsId": "B005",
      "ClsName": "美妆",
      "ParentId":"",
      "ImgUrl":"",
      "ClsType":"1",
      "EnglishName":""
    },
    {
      "ClsId": "B006",
      "ClsName": "男装",
      "ParentId":"",
      "ImgUrl":"",
      "ClsType":"1",
      "EnglishName":""
    },
    {
      "ClsId": "B007",
      "ClsName": "家具",
      "ParentId":"",
      "ImgUrl":"",
      "ClsType":"1",
      "EnglishName":""
    },
    {
      "ClsId": "B008",
      "ClsName": "母婴",
      "ParentId":"",
      "ImgUrl":"",
      "ClsType":"1",
      "EnglishName":""
    },
    {
      "ClsId": "B009",
      "ClsName": "手机",
      "ParentId":"",
      "ImgUrl":"",
      "ClsType":"1",
      "EnglishName":""
    },
    {
      "ClsId": "B010",
      "ClsName": "电脑",
      "ParentId":"",
      "ImgUrl":"",
      "ClsType":"1",
      "EnglishName":""
    },
    {
      "ClsId": "B011",
      "ClsName": "鞋包",
      "ParentId":"",
      "ImgUrl":"",
      "ClsType":"1",
      "EnglishName":""
    },
    {
      "ClsId": "B012",
      "ClsName": "家电",
      "ParentId":"",
      "ImgUrl":"",
      "ClsType":"1",
      "EnglishName":""
    }
];

var GoodList=
[
{
"Id":"B001G001",
"Name":"戴森(DYSON)V11 Absolute Extra 手持吸尘器家用除螨无线宠物家庭适用",
"ImgUrl":"../../../img/Focus/戴森a.png",
"ClsId":"B001",
"BrandId":"",
"GoodType":"JZ超市",
"Price":5490,
"Weight":"7.4kg"
},
{
  "Id":"B001G003",
  "Name":"雅鹿 自由自在 连衣裙碎花收腰雪纺春夏季流行气质中长女装显瘦 YZ8972 黄色 L",
  "ImgUrl":"../../../img/Focus/女装a.png",
  "ClsId":"B001",
  "BrandId":"",
  "GoodType":"自营",
  "Price":238,
  "Weight":"7.4kg"
  },
  {
    "Id":"B001G002",
    "Name":"茶烟控烟一条茶烟专卖茉莉花烟龙井爆珠烟制品【爆款】茉莉花1条10盒",
    "ImgUrl":"../../../img/Focus/茶烟a.png",
    "ClsId":"B001",
    "BrandId":"",
    "GoodType":"",
    "Price":88,
    "Weight":""
    },
    {
      "Id":"B001G004",
      "Name":"惠威HiVi GT1000 游戏蓝牙音箱 2.1笔记本台式电脑音响 家庭家用有源低音炮 HIFI电视播放器",
      "ImgUrl":"../../../img/Focus/音响a.png",
      "ClsId":"B001",
      "BrandId":"",
      "GoodType":"JZ物流",
      "Price":780,
      "Weight":"10.97kg"
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
        },
        {
          "Id":"B001G006",
          "Name":"统一萨姆奶茶 原味奶茶 500ml*15瓶 整箱精选喜马拉雅山麓红茶",
          "ImgUrl":"../../../img/Focus/奶茶a.png",
          "ClsId":"B001",
          "BrandId":"",
          "GoodType":"",
          "Price":52.90,
          "Weight":"8.52kg"
          },
          {
            "Id":"B001G007",
            "Name":"统一萨姆奶茶 原味奶茶 500ml*15瓶 整箱精选喜马拉雅山麓红茶",
            "ImgUrl":"../../../img/Focus/奶茶a.png",
            "ClsId":"B001",
            "BrandId":"",
            "GoodType":"",
            "Price":52.90,
            "Weight":"8.52kg"
            },
            {
              "Id":"B001G008",
              "Name":"统一萨姆奶茶 原味奶茶 500ml*15瓶 整箱精选喜马拉雅山麓红茶",
              "ImgUrl":"../../../img/Focus/奶茶a.png",
              "ClsId":"B001",
              "BrandId":"",
              "GoodType":"",
              "Price":52.90,
              "Weight":"8.52kg"
              }
];

module.exports = {
BigClsList:BigClsList,
GoodList:GoodList
};