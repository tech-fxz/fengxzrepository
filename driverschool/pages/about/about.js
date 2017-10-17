// pages/detail/detail.js
const defaultPath='../../';
Page({

  /**
   * 页面的初始数据
   */
  data: { img:'https://mmbiz.qpic.cn/mmbiz_jpg/MQ1w0ABHic50ym5JYmsqf0q4LNtxwtUbpHc02r12mxFKAbKEaDAeYxcNuIeRFleeuCIz7zQVIbyvbghyIkeJGAw/0?wx_fmt=jpeg'
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
  previewImage: function (event) {
    const app = getApp();
    const img = this.data.img;
    wx.previewImage({
      current: '', // 当前显示图片的http链接
      urls: [img] // 需要预览的图片http链接列表
    })
  }
})