//index.js
const defaultPath = '../../';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: '东南驾校桑园训练基地',
    logo: 'https://mmbiz.qpic.cn/mmbiz_png/MQ1w0ABHic53tMEDftZxecVRqaJDkvMteJv8tSmIQD8T3cxBjGWf6qRPAhTq7BZK46yRPC0PFuZrYWFtgVxGhjQ/0?wx_fmt=png',
    address: '东莞市东城区桑园狮环路(科技园路对面入200米)',
    timeText: '8:00-21:00',
    phoneNum: '13580719991',
    imageList: [
'https://mmbiz.qpic.cn/mmbiz_jpg/MQ1w0ABHic53tMEDftZxecVRqaJDkvMteqAHpP1cbd8urAjgYCbmia6GJ3BncCdjur8lL4kRytsfDUQKibwiaN6P3A/0?wx_fmt=jpeg',
      'https://mmbiz.qpic.cn/mmbiz_jpg/MQ1w0ABHic53tMEDftZxecVRqaJDkvMteuLKQrKCZ7jglAf1iaNqG4G8pjgNkkq0PsVE6Lyg0oBySamAYt8tiaic7g/0?wx_fmt=jpeg',
      'https://mmbiz.qpic.cn/mmbiz_jpg/MQ1w0ABHic53tMEDftZxecVRqaJDkvMte0TcmhgewmPHqibcspzVHag1iaJhSqOvmWNHTXJoVDTD1xQQ0mIvwF87w/0?wx_fmt=jpeg'
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
  openMap: function () {
    wx.openLocation({
      latitude: 23.0680771882,
      longitude: 113.8142964982,
      address: '广东省东莞市东城区桑园狮环路'
    });
  },
  makePhoneCall: function () {
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
      urls: imgList // 需要预览的图片http链接列表
    })
  },
  moreImg:function(){
    console.log('a');
    var list = this.data.imageList;
    list=list.concat([
      'https://mmbiz.qpic.cn/mmbiz_jpg/MQ1w0ABHic53tMEDftZxecVRqaJDkvMtePWeK2XnApVXrYogLRmGs2nib53OzJ1ibicfAvesphu5wrHEoM5TfibfFMg/0?wx_fmt=jpeg',
      'https://mmbiz.qpic.cn/mmbiz_jpg/MQ1w0ABHic53tMEDftZxecVRqaJDkvMteTnqRweJN0pjJ1rfRYh142801BQdm1851WS5P0OZmnmFmDeonQ6pfLQ/0?wx_fmt=jpeg',
      'https://mmbiz.qpic.cn/mmbiz_jpg/MQ1w0ABHic53tMEDftZxecVRqaJDkvMteicU2SQr8v7E5x1JcPC5YX13dH9P5JfGKs0ia2ZEKuK4YRbop6BHGCAbA/0?wx_fmt=jpeg',
      'https://mmbiz.qpic.cn/mmbiz_jpg/MQ1w0ABHic53tMEDftZxecVRqaJDkvMtekCwSPU6GEticMUdeEahCIgJeWwqHSbvdL0EhlC55MYOguJum90P743g/0?wx_fmt=jpeg',
      'https://mmbiz.qpic.cn/mmbiz_jpg/MQ1w0ABHic53tMEDftZxecVRqaJDkvMteTMRPAsHsx2U5ZltF2pf9xWAqzffpWsMTgpGiaMGJt2cciaJGRKtIP7rg/0?wx_fmt=jpeg',
      'https://mmbiz.qpic.cn/mmbiz_jpg/MQ1w0ABHic53tMEDftZxecVRqaJDkvMte6e5U62Y7PvUCb1o3xleg4yK0nXWN1cRZtl6eMQkNick49w1os0UaBQw/0?wx_fmt=jpeg'
    ]);
    this.setData({
      imageList:list
    })
  },
  goWeChatPublic:function(){
  
  }
})
