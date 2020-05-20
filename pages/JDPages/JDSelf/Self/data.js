/*小程序前端页面数据配置区*/
/*个人资产动态属性配置表：
  资产清单名称，动态配置在字典表中，和个人资产清单表联合查询；
  这样每个小程序客户可根据自己行业特性去配置资产清单表
  前端页面程序不用做改动;（后端程序也不用修改），只需在字典表中作配置即可；
  大客户：可单独做一张资产清单表，把各列列出来
  1）在设计明细表的同时，添加用户表字段，配置数据
*/
var Dicts=[
  {
    "DictId":"F001",
    "DictName":"待付款",
    "DictType":"OrderFlow",
    "Icon":"jzIcon-credit-card",/*既可以是图标类，也可以是img的路径*/
    "Navigator":"",
    "QueryParam":"",
    "Order":1
 },
   {
      "DictId":"F002",
      "DictName":"待收货",
      "DictType":"OrderFlow",
      "Icon":"jzIcon-plane",
      "Navigator":"",
      "QueryParam":"",
      "Order":2
   },
   {
      "DictId":"F003",
      "DictName":"待评价",
      "DictType":"OrderFlow",
      "Icon":"jzIcon-comment",
      "Navigator":"",
      "QueryParam":"",
      "Order":3
   },
   {
      "DictId":"F004",
      "DictName":"退换/售后",
      "DictType":"OrderFlow",
      "Icon":"jzIcon-yen",
      "Navigator":"",
      "QueryParam":"",
      "Order":4
   },
  {
    "DictId":"Ticket",
    "DictName":"J券",
    "DictType":"Asset",
    "Icon":"",
    "Navigator":"",
    "QueryParam":"",
    "Order":1
 },
   {
      "DictId":"Balance",
      "DictName":"账户余额",
      "DictType":"Asset",
      "Icon":"",
      "Navigator":"",
      "QueryParam":"",
      "Order":2
   },
   {
      "DictId":"Coin",
      "DictName":"J币",
      "DictType":"Asset",
      "Icon":"",
      "Navigator":"",
      "QueryParam":"",
      "Order":3
   },
   {
      "DictId":"RedPacket",
      "DictName":"红包",
      "DictType":"Asset",
      "Icon":"",
      "Navigator":"",
      "QueryParam":"",
      "Order":4
   },
   {
    "DictId":"FavorGood",
    "DictName":"商品收藏",
    "DictType":"Favorite",
    "Icon":"",
    "Navigator":"",
    "QueryParam":"",
    "Order":2
 },
 {
    "DictId":"FavorStore",
    "DictName":"店铺收藏",
    "DictType":"Favorite",
    "Icon":"",
    "Navigator":"",
    "QueryParam":"",
    "Order":3
 },
 {
    "DictId":"FavorFooter",
    "DictName":"我的足迹",
    "DictType":"Favorite",
    "Icon":"",
    "Navigator":"",
    "QueryParam":"",
    "Order":4
 },
 {
  "DictId":"O001",
  "DictName":"我的拼购",
  "DictType":"Others",
  "Icon":"jzIcon-user",
  "Navigator":"",
  "QueryParam":"",
  "Order":1
}, {
  "DictId":"O002",
  "DictName":"我的预约",
  "DictType":"Others",
  "Icon":"jzIcon-time",
  "Navigator":"",
  "QueryParam":"",
  "Order":2
},
{
  "DictId":"O003",
  "DictName":"賺30元",
  "DictType":"Others",
  "Icon":"jzIcon-money",
  "Navigator":"",
  "QueryParam":"",
  "Order":3
},
{
  "DictId":"O004",
  "DictName":"免费水果",
  "DictType":"Others",
  "Icon":"jzIcon-free",
  "Navigator":"",
  "QueryParam":"",
  "Order":4
},
{
  "DictId":"O005",
  "DictName":"J萌宠",
  "DictType":"Others",
  "Icon":"jzIcon-cute",
  "Navigator":"",
  "QueryParam":"",
  "Order":5
},
{
  "DictId":"O006",
  "DictName":"免单",
  "DictType":"Others",
  "Icon":"jzIcon-no-fee",
  "Navigator":"",
  "QueryParam":"",
  "Order":6
},
{
  "DictId":"O007",
  "DictName":"我的问答",
  "DictType":"Others",
  "Icon":"jzIcon-question-sign",
  "Navigator":"",
  "QueryParam":"",
  "Order":7
},
{
  "DictId":"O008",
  "DictName":"高价回收",
  "DictType":"Others",
  "Icon":"jzIcon-refresh",
  "Navigator":"",
  "QueryParam":"",
  "Order":8
},
{
  "DictId":"O009",
  "DictName":"寄件服务",
  "DictType":"Others",
  "Icon":"jzIcon-envelope",
  "Navigator":"",
  "QueryParam":"",
  "Order":9
},
{
  "DictId":"O010",
  "DictName":"闲置管家",
  "DictType":"Others",
  "Icon":"jzIcon-idle",
  "Navigator":"",
  "QueryParam":"",
  "Order":10
}
];
var Tickets=[
  {
     "UserId":"15002083067",
     "TicketId":"T00001",
     "TicketValue":100,
     "TicketType":"J券",
     "Status":"待使用",
     "ReceiveTime":"2020-05-20",/*收到时间*/
     "OverTime":"2020-10-01",/*到期时间*/
     "UseTime":null,/*使用时间*/
     "Memo":""
  },
  {
    "UserId":"15002083067",
    "TicketId":"T00002",
    "TicketValue":100,
    "TicketType":"Z券",
    "Status":"可赠送",
    "ReceiveTime":"2020-05-20",/*收到时间*/
    "OverTime":"2020-10-01",/*到期时间*/
    "UseTime":null,/*使用时间*/
    "Memo":""
 },
 {
  "UserId":"15002083067",
  "TicketId":"T00003",
  "TicketValue":100,
  "TicketType":"运费券",
  "Status":"已使用",
  "ReceiveTime":"2020-05-20",/*收到时间*/
  "OverTime":"2020-10-01",/*到期时间*/
  "UseTime":"2020-05-20",/*使用时间*/
  "Memo":""
},
{
  "UserId":"15002083067",
  "TicketId":"T00004",
  "TicketValue":100,
  "TicketType":"快递券",
  "Status":"已过期",
  "ReceiveTime":"2020-01-20",/*收到时间*/
  "OverTime":"2020-05-01",/*到期时间*/
  "UseTime":null,/*使用时间*/
  "Memo":""
}
];
var Expense=[
    {
      "UserId":"15002083067",
      "SheetId":"",
      "InOut":1,
      "Operate":"充值",
      "OperateTime":"2020-04-01",
      "Amt":100,
      "Memo":""
    },{
      "UserId":"15002083067",
      "SheetId":"",
      "InOut":1,
      "Operate":"退款",
      "OperateTime":"2020-04-01",
      "Amt":100,
      "Memo":""
    },{
      "UserId":"15002083067",
      "SheetId":"",
      "InOut":-1,
      "Operate":"消费",
      "OperateTime":"2020-04-01",
      "Amt":100,
      "Memo":""
    }
];
var JZConins=[
  {
    "UserId":"15002083067",
    "SheetId":"",
    "InOut":1,
    "Operate":"充值",
    "OperateTime":"2020-04-01",
    "Amt":100,
    "Memo":""
  },{
    "UserId":"15002083067",
    "SheetId":"",
    "InOut":1,
    "Operate":"消费",
    "OperateTime":"2020-04-01",
    "Amt":100,
    "Memo":""
  },{
    "UserId":"15002083067",
    "SheetId":"",
    "InOut":-1,
    "Operate":"消费换购",
    "OperateTime":"2020-04-01",
    "Amt":100,
    "Memo":""
  }  
];
var RedPackets=[
  {
    "UserId":"15002083067",
    "SheetId":"",
    "InOut":1,
    "Operate":"买满送",
    "OperateTime":"2020-04-01",
    "Amt":100,
    "Memo":""
  },{
    "UserId":"15002083067",
    "SheetId":"",
    "InOut":1,
    "Operate":"新店开张送",
    "OperateTime":"2020-04-01",
    "Amt":100,
    "Memo":""
  },{
    "UserId":"15002083067",
    "SheetId":"",
    "InOut":-1,
    "Operate":"消费换购",
    "OperateTime":"2020-04-01",
    "Amt":100,
    "Memo":""
  }  
];

var FavoriteGoods=[
  {
    "UserId":"15002083067",
    "GoodId":"G0001",
    "StoreId":"S0001",
    "OperateTime":"2020-04-01",
    "FavoriteType":"",
    "Memo":""
  },{
    "UserId":"15002083067",
    "GoodId":"G0002",
    "StoreId":"S0001",
    "OperateTime":"2020-04-01",
    "FavoriteType":"",
    "Memo":""
  }
];

var FavoriteStores=[
  {
    "UserId":"15002083067",
    "StoreId":"S0001",
    "OperateTime":"2020-04-01",
    "FavoriteType":"",
    "Memo":""
  },{
    "UserId":"15002083067",
    "StoreId":"S0002",
    "OperateTime":"2020-04-01",
    "FavoriteType":"",
    "Memo":""
  }
];

var FavoriteFooter=[
  {
    "UserId":"15002083067",
    "GoodId":"G0002",
    "StoreId":"S0001",
    "OperateTime":"2020-04-01",
    "FavoriteType":"",
    "Memo":""
  }
];

module.exports = {
  Dicts: Dicts,
  FavoriteGoods: FavoriteGoods,
  FavoriteStores: FavoriteStores,
  FavoriteFooter:FavoriteFooter
};