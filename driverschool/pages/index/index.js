// pages/detail/detail.js
const defaultPath='../../';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:'东南驾校桑园训练基地',
    logo: defaultPath+'images/logo.png',
    address:'广东省东莞市东城区桑园狮长路51号',
    timeText:'8:00-21:00',
    phoneNum:'13580719991',
    imageList: [
      defaultPath + 'images/1.jpg',
      defaultPath + 'images/2.jpg',
      defaultPath + 'images/3.jpg',
      defaultPath + 'images/4.jpg',
      defaultPath + 'images/5.jpg',
      defaultPath + 'images/6.jpg',
      defaultPath + 'images/7.jpg',
      defaultPath + 'images/8.jpg',
      defaultPath + 'images/9.jpg',
    ]
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
  openMap:function(){
    wx.openLocation({
      latitude: 23.0680771882,
      longitude: 113.8142964982,
      address: '广东省东莞市东城区桑园狮环路'
    });
  },
  makePhoneCall:function(){
    const phoneNum = this.data.phoneNum;
    wx.makePhoneCall({
      phoneNumber: phoneNum,
      fail: function () {
        console.log('无法接通')
      }
    })
  },
  previewImage: function (event) {
    const app = getApp();
    const imgList = this.data.imageList;
    wx.previewImage({
      current: '', // 当前显示图片的http链接
      urls: ['images/1.jpg'] // 需要预览的图片http链接列表
    })
  }
})