// pages/index/index.js
// var bmap = require('../../libs/bmap-wx/bmap-wx.min.js'); 

Page({

  /**
   * 页面的初始数据
   */
  data: {
    ak:'NsGGjnnu1aphcN6vfgHKMIfvqfUx2Idi',
    classsifys:[
      {list:[
        { url: 'food6.jpg', name: '美食' },
        { url: 'c3.jpg', name: '点心' },
        { url: 'c4.jpg', name: '粥面' },
        { url: 'c5.jpg', name: '西餐' },
        { url: 'c6.jpg', name: '湘菜' },
        { url: 'c7.jpg', name: '饮品' },
        { url: 'c1.jpg', name: '鲜果' },
        { url: 'c8.jpg', name: '麦当劳' }
      ]},
      {list:[
        { url: 'c9.jpg', name: 'KFC' },
        { url: 'c10.jpg', name: '快餐' },
        { url: 'c11.jpg', name: '鲜花' },
        { url: 'c12.jpg', name: '火锅' },
        { url: 'c13.jpg', name: '海鲜' },
        { url: 'c6.jpg', name: '湘菜' },
        { url: 'c7.jpg', name: '饮品' },
        { url: 'c2.jpg', name: '蛋糕' }
      ]}
    ],
    dashList:[
      { 
        name: '学之面', 
        url: '../../images/res1.jpg',
        straList:[
          '../../images/star.jpg',
          '../../images/star.jpg',
          '../../images/star.jpg',
          '../../images/star.jpg',
          '../../images/space.jpg'
        ],
        mark:4.5,
        count:198,
        spirit: false,
        hasOnTimeTag: true,
        startingPrice:15,
        price:2,
        long:2.5,
        time:30,
        activityList: [
          { icon: 'reduce.jpg', name:'满20减2，满30减5，满50减10'},
          { icon: 'super.jpg', name: '金秋好礼' }
        ]
      },
      { 
        name: '超级美味',
        url: '../../images/res2.jpg', 
        straList: [
          '../../images/star.jpg',
          '../../images/star.jpg',
          '../../images/star.jpg',
          '../../images/star.jpg',
          '../../images/space.jpg'
        ],
        mark: 4.5,
        count: 198,
        spirit: true,
        hasOnTimeTag: true,
        startingPrice: 15,
        price: 2,
        long: 2.5,
        time: 30,
        activityList: [
          { icon: 'start.jpg', name: '新用户下单立减10' },
          { icon: 'reduce.jpg', name: '满20减2，满30减5，满50减10' }
        ]
      },
      { 
        name: '台资味', 
        url: '../../images/res3.jpg', 
        straList: [
          '../../images/star.jpg',
          '../../images/star.jpg',
          '../../images/star.jpg',
          '../../images/star.jpg',
          '../../images/space.jpg'
        ],
        mark: 4.5,
        count: 198,
        startingPrice: 15,
        price: 2,
        long: 2.5,
        time: 30,
        activityList: [
          { icon: 'start.jpg', name: '新用户下单立减10' },
          { icon: 'reduce.jpg', name: '满20减2，满30减5，满50减10' }
        ]
      },
      { 
        name: '牛奶豆浆', 
        url: '../../images/res4.jpg',
        straList: [
          '../../images/star.jpg',
          '../../images/star.jpg',
          '../../images/star.jpg',
          '../../images/star.jpg',
          '../../images/space.jpg'
        ],
        mark: 4.5,
        count: 198,
        spirit: false,
        hasOnTimeTag: true,
        startingPrice: 15,
        price: 2,
        long: 2.5,
        time: 30,
        activityList: [
          { icon: 'reduce.jpg', name: '满20减2，满30减5，满50减10' },
          { icon: 'discount.jpg', name: '五折深秋双人套餐，特惠来袭~' }
        ]
        },
      { 
        name: '米饭白菜', 
        url: '../../images/res5.jpg',
        straList: [
          '../../images/star.jpg',
          '../../images/star.jpg',
          '../../images/star.jpg',
          '../../images/star.jpg',
          '../../images/space.jpg'
        ],
        mark: 4.5,
        count: 198,
        spirit: true,
        hasOnTimeTag: true,
        startingPrice: 15,
        price: 2,
        long: 2.5,
        time: 30,
        activityList: [
          { icon: 'reduce.jpg', name: '满20减2，满30减5，满50减10' },
          { icon: 'super.jpg', name: '金秋好礼' }
        ]
      },
      { 
        name: '辣椒炒土豆丝', 
        url: '../../images/res6.jpg',
        straList: [
          '../../images/star.jpg',
          '../../images/star.jpg',
          '../../images/star.jpg',
          '../../images/star.jpg',
          '../../images/space.jpg'
        ],
        mark: 4.5,
        count: 198,
        spirit: false,
        hasOnTimeTag: false,
        startingPrice: 15,
        price: 2,
        long: 2.5,
        time: 30,
        activityList: [
          { icon: 'reduce.jpg', name: '满20减2，满30减5，满50减10' },
          { icon: 'discount.jpg', name: '五折深秋双人套餐，特惠来袭~' }
        ]
      },
      { 
        name: '西红柿炒蛋', 
        url: '../../images/res7.jpg',
        straList: [
          '../../images/star.jpg',
          '../../images/star.jpg',
          '../../images/star.jpg',
          '../../images/star.jpg',
          '../../images/space.jpg'
        ],
        mark: 4.5,
        count: 198,
        spirit: true,
        hasOnTimeTag: true,
        startingPrice: 15,
        price: 2,
        long: 2.5,
        time: 30,
        activityList: [
          { icon: 'reduce.jpg', name: '满20减2，满30减5，满50减10' },
          { icon: 'discount.jpg', name: '五折深秋双人套餐，特惠来袭~' }
        ]
        },
      { 
        name: '香煎鸡排',
        url: '../../images/res8.jpg', 
        straList: [
          '../../images/star.jpg',
          '../../images/star.jpg',
          '../../images/star.jpg',
          '../../images/star.jpg',
          '../../images/space.jpg'
        ],
        mark: 4.5,
        count: 198,
        spirit: true,
        hasOnTimeTag: true,
        startingPrice: 15,
        price: 2,
        long: 2.5,
        time: 30,
        activityList: [
          { icon: 'reduce.jpg', name: '满20减2，满30减5，满50减10' },
          { icon: 'super.jpg', name: '金秋好礼' }
        ]
      }
    ],
    indicatorDots:false,
    autoplay:true,
    interval:5*1000,
    duration:1000
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this;
    // var BMap = new bmap.BMapWX({
    //   ak: _this.data.ak
    // }); 
    // var fail = function (data) {
    //   console.log(data);
    // };
    // var success = function (data) {
    //   //返回数据内，已经包含经纬度  
    //   console.log(data);
    //   //使用wxMarkerData获取数据  
    //   wxMarkerData = data.wxMarkerData;
    //   //把所有数据放在初始化data内  
    //   _this.setData({
    //     markers: wxMarkerData,
    //     latitude: wxMarkerData[0].latitude,
    //     longitude: wxMarkerData[0].longitude,
    //     address: wxMarkerData[0].address,
    //     cityInfo: data.originalData.result.addressComponent
    //   });
    // }   

    // // 发起regeocoding检索请求   
    // BMap.regeocoding({
    //   fail: fail,
    //   success: success
    // });  
    // wx.getLocation({
    //   success: function(res) {
    //     console.log(res);
    //   },
    // })
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
  
  }
})