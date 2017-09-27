// login.js
const util = require('../../utils/util.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    phoneNumber:'',
    buttonText:'发送验证码'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '登录',
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
  
  },
  bindKeyInput:function(event){
    this.setData({
      phoneNumber: event.detail.value
    });
    console.log(this.data.phoneNumber); 
  },
  sendIdentifyingCode:function(event){
    var _this = this;
    var phone=this.data.phoneNumber;
    var isPhone=util.checkPhoneNumber(phone);

    console.log(phone);
    if(!isPhone){
      wx.showModal({
        title:'温馨提示：',
        content:'请输入合法的手机号',
        showCancel:false
      });
    }else{
      var count=59;
      var countDown= setInterval(function(){
        var btnText=count+'秒后重试';

        if(count===0){
          clearInterval(countDown);
          btnText='发送验证码';
        }
        _this.setData({ buttonText: btnText });

        count = count - 1;
      },1000);
    }
  },
  getIdentifyingCode:function(event){
    this.setData({
      code: event.detail.value
    });
  },
  formSubmit:function(){
    var code=this.data.code;
    var app = getApp();
    var userInfo = app.globalData.userInfo;
    if(!!code){
      App({
        globalData:{
          islogin:true,
          userInfo
        }
      });
      wx.switchTab({
        url: '../my/my'
      });
    }else{
      wx.showModal({
        title:'温馨提示：',
        content:'请输入验证码',
        isShowCancal:false
      });
    }
  }
})