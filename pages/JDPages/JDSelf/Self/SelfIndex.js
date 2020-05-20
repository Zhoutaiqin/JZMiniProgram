// pages/JDPages/JDSelf/Self/SelfIndex.js
var localData=require('data.js');
var basicData=require('../../../js/BasicData.js');
var appObj=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
      User:null,
      OrderFlows:[],
      Assets:[],
      Favorites:[],
      Others:[]
  },

  /**
   * 生命周期函数--监听页面加载;打开小程序后，只加载一次
   */
  onLoad: function (options) {
    var user=null;
    var openId;
    /*微信账号加载用户信息，微信小程序不需要登录*/
    if(appObj.globalData.userinfo==null){
        openId="jingzhe416926417";
    }
    else{
       openId=appObj.globalData.userinfo.OpenId;
    }
    user=basicData.UserList.find(curItem=>{
        return curItem.OpenId==openId;
    });
    var OrderFlows=localData.Dicts.filter(curItem=>{
        return curItem.DictType=="OrderFlow";
    }).map(curItem=>{
          return {
            FlowId:curItem.DictId,
            FlowName:curItem.DictName,
            Icon:curItem.Icon,
            Href:curItem.Navigator
        };
    });
    var Assets=localData.Dicts.filter(curItem=>{
        return curItem.DictType=="Asset";
    }).map(curItem=>{
        var value=0;
        if(curItem.DictId=="Balance"){
           value=user.Balance+"元";
        }
        else if(curItem.DictId=="Ticket"){
           value=user.Ticket+"张";
        }
        else if(curItem.DictId=="JZCoins")
        {
          value=user.JZCoins+"元";
        }
        else if(curItem.DictId=="RedPacket"){
           value=user.RedPacket+"元";
        }
        return {
          Id:curItem.DictId,
          Name:curItem.DictName,
          Value:value,
          Href:curItem.Navigator
        };
  });
  var Favorites=localData.Dicts.filter(curItem=>{
      return curItem.DictType=="Favorite";
  }).map(curItem=>{
    var value=0;
    if(curItem.DictId=="FavorGood"){
       value=localData.FavoriteGoods.length;
    }
    else if(curItem.DictId=="FavorStore"){
       value=localData.FavoriteStores.length;
    }
    else if(curItem.DictId=="FavorFooter"){
        value=localData.FavoriteFooter.length;
    }
    return {
        Id:curItem.DictId,
        Name:curItem.DictName,
        Value:value,
        Href:curItem.Navigator
    };
  });
  var Others=localData.Dicts.filter(curItem=>{
    return curItem.DictType=="Others";
  }).map(curItem=>{
    return {
        Id:curItem.DictId,
        Name:curItem.DictName,
        Icon:curItem.Icon,
        Href:curItem.Navigator
    };
});
   this.setData({
       User:user,
       OrderFlows:OrderFlows,
       Assets:Assets,
       Favorites:Favorites,
       Others:Others
   });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示；每显示一次，就会加载一次
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})