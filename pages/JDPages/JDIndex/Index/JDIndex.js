// pages/JDPages/JDIndex/Index/JDIndex.js
var localData=require("data.js");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    HotSearchs:[],
    AdPromotions:[],
    BigClsList:[],
    indicatorDots:false,
    autoPlay:false,
    interval:5000,
    duration:500,
    Advertise:"",
    KillTime:"0",
    Times:"0",
    SeckillPromotions:null,
    Promotions:[],
    HandPick:null,
    JDSelf:null,
    GoodClsNavs:[],
    Goods:[],
    CurrentId:"",
    AdPromoteIndex:0,
    BigClsIndex:0,
    src:""
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
  queryTime:function(){
    var that=this;
    setInterval(function(){
        var currentTime=new Date();
        //构建时间
         var m=currentTime.getMonth()+1;
         if(m<=9){
            m="0"+m;
         }
         var d=currentTime.getDate();
         if(d<=9){
           d="0"+d;
         }
         /*微信时间的标准格式是yyyy/MM/dd hh:mm:ss*/
         var sKill=currentTime.getFullYear()+"/"+m+"/"+d+" "+that.data.SeckillPromotions.KillTime+":00";
         var dKill=new Date(sKill);
         var totalSeconds=Math.ceil((dKill.getTime()-currentTime.getTime())/1000);
         var hour=0;
         var minutes=0;
         var seconds=0;
         if(totalSeconds>0){
            hour=Math.floor(totalSeconds/3600);
            minutes=Math.floor((totalSeconds-hour*3600)/60);
            seconds=(totalSeconds-hour*3600)%60;
         }
         if(hour<=9){
             hour="0"+hour;
         }
         if(minutes<=9){
            minutes="0"+minutes;
         }
         if(seconds<=9){
           seconds="0"+seconds;
         }
          that.setData({//this容易造成指代不清
            Times:dKill.getHours(),
            KillTime:hour+":"+minutes+":"+seconds
          });
      },1000);
  },
  AdPromotChange:function(e){
     var obj=e.detail;
     this.setData({
      AdPromoteIndex:obj.current
     });    
  },
  BigClsChange:function(e){
    var obj=e.detail;
    this.setData({
     BigClsIndex:obj.current
    });    
 },
 TakePhoto:function(e){
   var that=this;
     var ctx=wx.chooseImage({
       count:1,
       complete: (res) => {
        console.log(res.tempFiles[0].path);
        that.setData({
           src:res.tempFiles[0].path+"；待搜索功能完善"
        });//拍照，使用照片；使用相机中图片；可以设置count为9循环设置图片
     }
    });
 },
 error:function(e){
    console.log(e.detail);
 },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
      this.setData({
           HotSearchs:localData.HotSearchs,
           AdPromotions:localData.AdPromotions,
           BigClsList:localData.BigClsList,
           SeckillPromotions:localData.SeckillPromotions,
           Promotions:localData.Promotions,
           HandPick:localData.HandPick,
           JDSelf:localData.JDSelf,
           GoodClsNavs:localData.GoodClsNavs,
           CurrentId:localData.GoodClsNavs[0].ClsId,
           Goods:localData.Goods
      });
      this.queryTime();
      //clearInterval(that.data.timer);
  },
  TabToggle:function(e){
      var obj=e.currentTarget;
      this.setData({
         CurrentId:obj.dataset.target
      });
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