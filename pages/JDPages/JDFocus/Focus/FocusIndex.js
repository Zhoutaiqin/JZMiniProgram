// pages/JDPages/JDFocus/Focus/FocusIndex.js
var localData=require('data.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
      BigClsList:[],
      GoodList:[],
      SelectId:'',
      TopNavBar:'',
      ErrorImg:"../../../img/ErrorImg.png"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
     var bigClsId=localData.BigClsList[0].ClsId;
     this.BindPage(bigClsId);
     this.setData({
         BigClsList:localData.BigClsList
     });
  },
  NavTabClick:function(e){
    var obj=e.currentTarget;
    var bigClsId=obj.dataset.id;
    this.BindPage(bigClsId);
  },
  BindPage:function(bigClsId){
       var goodList=localData.GoodList.filter(curItem=>{
           
           return curItem.ClsId==bigClsId;
       });
       //建议用缓存
       this.setData({
          GoodList:goodList,
          SelectId:bigClsId
       });
  },
  OpenGoodDetail:function(e){
      var obj=e.currentTarget;
      var goodId=obj.dataset.id;
      console.log(goodId);
      wx.navigateTo({
        url: '../../JZDetails/Details/GoodDetail?id='+goodId,
      })
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
      this.setData({
         TopNavBar:'TopNavBar'
      });
  },
  //页面滚动事件
  onPageScroll:function(e){

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