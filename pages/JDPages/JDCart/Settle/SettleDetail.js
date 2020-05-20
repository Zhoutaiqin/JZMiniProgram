// pages/JDPages/JDCart/Settle/SettleDetail.js
var appObj=getApp();
var localData=require('../../../js/BasicData.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    Stores:[],
    ErrorImg:"../../../img/ErrorImg.png",
    TotalAmt:0,
    DeliveryAmt:0,
    ActualAmt:0,
    User:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var Stores=[];
    var Carts=wx.getStorageSync('cart') || [];
    Carts.forEach(curItem=>{
        var storeIndex=-1;
        var existStore=Stores.some((curStore,index)=>{
             storeIndex=index;
             return curStore.StoreName==curItem.StoreName;
        });
        if(existStore){
            Stores[storeIndex].Goods.push(curItem);
        }
        else{
           Stores.push({
               StoreName:curItem.StoreName,
               Goods:[curItem]
           });
        }
    });
    //获取用户信息：地址，用户名，地址，照片及相关的卡券
    var user=null;
    var openId;
    if(appObj.globalData.userinfo==null){
        openId="jingzhe416926417";
    }
    else{
       openId=appObj.globalData.userinfo.OpenId;
    }
    user=localData.UserList.find(curItem=>{
        return curItem.OpenId==openId;
    });
    var AddrObj=localData.UserDetails.find(curItem=>{
        return curItem.UserId==user.UserId && curItem.IsDefault=="1";
    });
    if(AddrObj && AddrObj!=null){
        user.Address=AddrObj.Address;
    }else{
      /*用手机可读取到正确的地址，应该放置在打开页面后的单击中；且后续的直接从后台数据库中读取
        wx.chooseAddress({
          complete: (res) => {
            user.Address=res.detailInfo;
          }
        })*/
    }
    var totalAmt=0;
    var deliveryFee=0
    var ActualAmt=0;
    Carts.forEach(curItem=>{
        totalAmt+=Number(curItem.Price)*Number(curItem.Num);
    });
    this.setData({
        Stores:Stores,
        TotalAmt:totalAmt,
        DeliveryAmt:deliveryFee,
        ActualAmt:deliveryFee+ActualAmt,
        User:user
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },
  Settle:function(e){
    /*wx38319e6860fad11b
      var d=new Date();
      var timeStamp=d.getTime()/1000;
      wx.requestPayment({
        nonceStr: 'nonceStr',
        package: 'package',
        paySign: 'paySign',
        timeStamp: timeStamp
      });*/
      /*结算成功后，清除本地购物车*/
      wx.removeStorageSync('cart');
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