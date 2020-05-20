// pages/JDPages/JDCls/Cls/ClsIndex.js
var localData=require("data.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
      BigClsList:[],
      AdvertiseList:[],
      Advertise:null,
      PromotionList:[],
      SmallClsList:[],
      indicatorDots:false,
      autoPlay:false,
      SelectId:'',
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
       //wx.clearStorageSync();
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
    var ClsData=null;//wx.getStorageSync(bigClsId) || null;
    var AdvertiseList=[];
    var PromotionList=[];    
    var SmallClsList=[];
    if(ClsData!=null){
       AdvertiseList=ClsData.AdvertiseList;
       PromotionList=ClsData.PromotionList;
       SmallClsList=ClsData.SmallClsList
    }else{
        AdvertiseList=localData.AdvertiseList.filter(function(curItem){
            return curItem.ClsId==bigClsId;
        });
        PromotionList=localData.PromotionList.filter((curItem)=>{
            return curItem.ClsId==bigClsId
        });
        SmallClsList=localData.SmallClsList.filter((curItem)=>{
            return curItem.ParentId==bigClsId;
        });
        SmallClsList.forEach((curItem)=>{
            curItem.Cls=localData.SmallClsList.filter(cur=>{
                return cur.ParentId==curItem.ClsId;
            });
        });
       /* wx.setStorageSync(bigClsId, {
            AdvertiseList:AdvertiseList,
            PromotionList:PromotionList,
            SmallClsList:SmallClsList
        });*/
    }
    var tempAdvertiseList=[];
    if(AdvertiseList!=null && AdvertiseList.length>1){
        tempAdvertiseList=tempAdvertiseList.concat(AdvertiseList);
    }
    var tempAdvertise=null;
    if(AdvertiseList!=null && AdvertiseList.length==1){
        tempAdvertise=AdvertiseList[0];
    }
    this.setData({
        SelectId:bigClsId,
        AdvertiseList:tempAdvertiseList,
        Advertise:tempAdvertise,
        PromotionList:PromotionList,
        SmallClsList:SmallClsList,
        indicatorDots:false,
        autoPlay:false
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