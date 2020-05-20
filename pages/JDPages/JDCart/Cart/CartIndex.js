// pages/JDPages/JDCart/Cart/CartIndex.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      Stores:[],
      ErrorImg:"../../../img/ErrorImg.png",
      TotalAmt:0,
      TotalNum:0
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
      this.CalcuAmt(Carts,Stores);
  },
  CalcuAmt:function(Carts,Stores){
        var totalAmt=0;
        var totalNum=0;
        Carts.forEach(curItem=>{
            totalAmt+=Number(curItem.Price)+Number(curItem.Num);
            totalNum+=Number(curItem.Num);
        });
        this.setData({
            Stores:Stores,
            TotalAmt:totalAmt,
            TotalNum:totalNum
        });
  },
  BadgeClick:function(e){
      var Stores=this.data.Stores;
      var obj=e.currentTarget;
      var storeIndex=obj.dataset.storeIndex;
      var goodIndex=obj.dataset.goodIndex;
      var badgeType=obj.dataset.type;
      var good=Stores[storeIndex].Goods[goodIndex];
      
      if(badgeType=="-"){
          if((good.Num-1)<1){
              return;
          }
          good.Num-=1;
      }
      else if(badgeType=="+"){
          good.Num+=1;
      }
      var Carts=wx.getStorageSync('cart') || [];
      for(var i=0;i<Carts.length;i++)
      {
          var curItem=Carts[i];
          if(curItem.Id==good.Id && curItem.StoreName==good.StoreName){
              curItem.Num=good.Num;
              break;
          }
      }
      wx.setStorageSync('cart', Carts);
      this.CalcuAmt(Carts,Stores);
  },
  Settle:function(e){
     wx.navigateTo({
       url: '../Settle/SettleDetail',
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