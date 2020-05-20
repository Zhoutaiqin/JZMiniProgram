// pages/JDPages/JZDetails/Details/GoodDetail.js
var localData=require('data.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
     Good:null,
     User:null,
     CurrentId:'ItemIntroduction',
     indicatorDots:false,
     autoPlay:false,
     SelectIndex:1,
     CartNum:0,
     AfterSale:[
           {
             "Title":"服务承诺",
             "Content":"京东商城向您保证所售商品均为正品行货，京东自营商品开具机打发票或电子发票。凭质保证书及京东商城发票，"+
                       "可享受全国联保服务（奢侈品、钟表除外；奢侈品、钟表由京东联系保修，享受法定三包售后服务），与您亲临商场"+
                       "选购的商品享受相同的质量保证。京东商城还为您提供具有竞争力的商品价格和运费政策，请您放心购买！<br>"+
                       "注：因厂家会在没有任何提前通知的情况下更改产品包装、产地或者一些附件，本司不能确保客户收到的货物与商城图片、"+
                       "产地、附件说明完全一致。只能确保为原厂正货！并且保证与当时市场上同样主流新品一致。若本商城没有及时更新，请大家谅解！"
           },
           {
             "Title":"权利声明",
             "Content":"京东上的所有商品信息、客户评价、商品咨询、网友讨论等内容，是京东重要的经营资源，未经许可，禁止非法转载使用。<br>"+
                      "注：本站商品信息均来自于合作方，其真实性、准确性和合法性由信息拥有者（合作方）负责。本站不提供任何保证，并不承担任何法律责任。"
           },
           {
             "Title":"价格说明",
             "Content":"京东价：京东价为商品的销售价，是您最终决定是否购买商品的依据。"+
                      "划线价：商品展示的划横线价格为参考价，并非原价，该价格可能是品牌专柜标价、商品吊牌价或由品牌供应商提供的正品零售价（如厂商指导价、建议零售价等）或该商品在京东平台上曾经展示过的销售价；<br>"+
                      "由于地区、时间的差异性和市场行情波动，品牌专柜标价、商品吊牌价等可能会与您购物时展示的不一致，该价格仅供您参考。"+
                      "折扣：如无特殊说明，折扣指销售商在原价、或划线价（如品牌专柜标价、商品吊牌价、厂商指导价、厂商建议零售价）等某一价格基础上计算出的优惠比例或优惠金额；如有疑问，您可在购买前联系销售商进行咨询。<br>"+
                      "异常问题：商品促销信息以商品详情页“促销”栏中的信息为准；商品的具体售价以订单结算页价格为准；如您发现活动商品售价或促销信息有异常，建议购买前先联系销售商咨询。"
           }
     ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var goodId=options.id;
    goodId="B001G003";
    this.BindPage(goodId);
  },
  AddCart:function(e){
     var good=this.data.Good;
     var cartNum=this.data.CartNum;
     var cart=wx.getStorageSync('cart') || [];
     /*不同店铺的商品的Id不一样，id一样，但barcode不一样，总有一个区别的唯一标识*/
     var curIndex=-1;
     var exists=cart.some((curItem,index)=>{
         curIndex=index;
         return curItem.Id==good.Id && curItem.StoreName==good.StoreName;
     });
     if(exists){
         cart[curIndex].Num+=1;
     }
     else{
         good.Num=1;
         good.GoodImgs=null;
         //good.Services=null;
         good.EvaluateList=null;
         //good.Introduction=null;
         cart.push(good);
     }
     cartNum+=1;
     wx.setStorageSync('cart', cart);
     this.setData({
       CartNum:cartNum
     });
  },
  OpenCart:function(e){
    wx.switchTab({
      url:'../../../JDPages/JDCart/Cart/CartIndex'
   });
  },
  Settle:function(e){
     var goodId=e.currentTarget.dataset.Id;
     wx.navigateTo({
       url: '../../JDCart/Settle/SettleDetail?id='+goodId,
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
  onShow: function (e) {

  },
  NavTabClick:function(e){
      var obj=e.currentTarget;
      var id=obj.dataset.target;
      this.setData({
        CurrentId:id
      });
  },
  ChangeImg:function(e){
      this.setData({
        SelectIndex:e.detail.current
      });
  },
  BindPage:function(goodId){
      /*商品基本信息*/
      var good=localData.GoodList.find(curItem=>{
           return curItem.Id==goodId;
      }); 
      good.StoreName="JZ商城";
      /*商品轮播图片*/
      good.GoodImgs=localData.GoodImgs.filter(curItem=>{
          return curItem.Id==goodId;
      });  
      good.Colors=[];
      /*商品关联的促销信息*/
      good.Promotions=localData.Promotions.map(curItem=>{
          if(curItem.GoodId==goodId){
              var promote={};
              promote.Title=curItem.Title;
              var fullTitle=[];
              if(curItem.PromotionTime!=""){
                  fullTitle.push(curItem.PromotionTime);
              }
              fullTitle.push(curItem.PromotType);
              fullTitle=curItem.PromotDetails.map(curObj=>{
                  if(curItem.PromotType=="满折"){
                       return "满"+curObj.Num+"件，总价打"+(curObj.Discount*10)+"折;"; 
                  }
                  else{
                     
                  }
              });
              promote.FullTitle=fullTitle.join(',');              
              promote.SubTitle=""
              return promote;
          }
      });
      var SelectObj=localData.GoodSizes.find(curItem=>{
          return curItem.Barcode==good.Barcode; 
      });
      /*商品包装信息*/
      good.SelectObj=new Object();
      good.SelectObj.Title=SelectObj.Color+" "+SelectObj.Size;
      good.SelectObj.Barcode=SelectObj.Barcode;
      good.Specification=SelectObj.Specification;
      /*用户信息*/
      var user=localData.UserDetails.find(curUSer=>{
          return curUSer.UserId=="15002083067";//userId由微信端获取
      });
      /*商品服务信息*/
      good.Services=localData.Services.filter(curItem=>{
          return curItem.GoodId==goodId;
      });
      var goodStar=0;
      var badStar=0;
      /*商品评价信息*/
      good.EvaluateList=localData.EvaluateList.map(curItem=>{
          if(curItem.GoodId==goodId){
            var evaluate=curItem;
            if(curItem.EStar>=5){
                goodStar++
            }
            else{
               badStar++;
            }
            localData.UserList.forEach(curUser=>{
                 if(curUser.UserId==curItem.UserId){
                     evaluate.UserName=curUser.UserName;
                     evaluate.UserPhoto=curUser.Photo;
                 }
            });
            return evaluate;
          }
      });
      good.EvaluateNum=good.EvaluateList.length;
      good.EvaluateRate=(goodStar/good.EvaluateList.length)*100+'%';
            /*商品轮播图片*/
      good.Introduction=localData.Introductions.filter(curItem=>{
              return curItem.Id==goodId;
      });  
      this.setData({
        Good:good,
        User:user
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