// pages/my/my.js

Page({

  /**
   * 页面的初始数据
   */
  data: {},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '我的',
    });

    let app = getApp();
    let globalData = app.globalData;
    if (globalData.islogin){
      let userInfo = globalData.userInfo;
      userInfo.mobile='159****5705';
      console.log(userInfo);
      this.setData({
        islogin: true,
        islogout: false,
        userInfo: userInfo,
        navbar: [
          { name: '余额', value: '0元', css:'balance'},
          { name: '红包', value: '0个', css: 'redPacket'},
          { name: '积分', value: '293分', css: 'integral'}
        ]
      });
      console.log(app);
    }else{
      this.setData({
        islogin: false,
        islogout: true,
        navbar: [
          { name: '我的余额' },
          { name: '我的红包' },
          { name: '我的特权' }
        ]
      });
    }
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
  logoutFn:function(){
    this.setData({
      islogin: false,
      islogout: true,
      navbar: [
        { name: '我的余额' },
        { name: '我的红包' },
        { name: '我的特权' }
      ]
    });
  }
})