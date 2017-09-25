// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    classsifys:[
      {list:[
        { 
          url: 'http://recipe.nlyeb.com//Upload/Files/2016/08/13/1932bb32063e4acbbe95e13e1b2ba45f.jpg',           name: '美食'
       },
        { url: 'http://recipe.nlyeb.com/Upload/Files/2016/09/02/40578233d4864c429c32650a6db4c0b5.jpg',            name: '甜品饮品' 
        },
        { url: 'http://recipe.nlyeb.com/Upload/Files/2016/09/02/e221abb755f240bba33df0bc1e941c75.jpg',            name: '商超便利' 
        },
        { url: 'http://recipe.nlyeb.com/Upload/Files/2016/08/17/bac465fc177043c9b8377ce1afdfcd07.jpg',          name: '果蔬生鲜' 
        },
        { url: 'http://recipe.nlyeb.com/Upload/Files/2016/09/02/e221abb755f240bba33df0bc1e941c75.jpg',            name: '新店特惠'
         },
        { url: 'http://recipe.nlyeb.com//Upload/Files/2016/08/13/1932bb32063e4acbbe95e13e1b2ba45f.jpg',           name: '大牌必吃' 
        },
        { url: 'http://recipe.nlyeb.com/Upload/Files/2016/09/02/e221abb755f240bba33df0bc1e941c75.jpg',            name: '午餐' 
        },
        { url: 'http://recipe.nlyeb.com//Upload/Files/2016/08/13/1932bb32063e4acbbe95e13e1b2ba45f.jpg',           name: '浪漫鲜花' 
        }
      ]},
      {list:[
        { url: 'http://recipe.nlyeb.com/Upload/Files/2016/09/02/e221abb755f240bba33df0bc1e941c75.jpg',            name: '汉堡薯条' 
        },
        { url: 'http://recipe.nlyeb.com/Upload/Files/2016/09/02/e221abb755f240bba33df0bc1e941c75.jpg',            name: '包子粥店'
         },
        { url: 'http://recipe.nlyeb.com//Upload/Files/2016/08/13/1932bb32063e4acbbe95e13e1b2ba45f.jpg',           name: '地方菜系'
         },
        { url: 'http://recipe.nlyeb.com/Upload/Files/2016/09/02/e221abb755f240bba33df0bc1e941c75.jpg',            name: '披萨' 
        },
        { url: 'http://recipe.nlyeb.com//Upload/Files/2016/08/13/1932bb32063e4acbbe95e13e1b2ba45f.jpg',             name: '西餐' 
        },
        { url: 'http://recipe.nlyeb.com/Upload/Files/2016/08/17/bac465fc177043c9b8377ce1afdfcd07.jpg',            name: '海鲜'
        },
        {
          url: 'http://recipe.nlyeb.com//Upload/Files/2016/08/13/1932bb32063e4acbbe95e13e1b2ba45f.jpg',           name: '西餐'
        },
        {
          url: 'http://recipe.nlyeb.com//Upload/Files/2016/08/13/1932bb32063e4acbbe95e13e1b2ba45f.jpg',           name: '披萨'
        }
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
        spirit: true,
        hasOnTimeTag: true,
        startingPrice:15,
        price:2,
        long:2.5,
        time:30,
        activityList: [
          {icon:'',name:'新用户下单立减10'},
          {icon:'',name:'满20减2，满30减5，满50减10'}
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
          { icon: '', name: '新用户下单立减10' },
          { icon: '', name: '满20减2，满30减5，满50减10' }
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
          { icon: '', name: '新用户下单立减10' },
          { icon: '', name: '满20减2，满30减5，满50减10' }
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
        spirit: true,
        hasOnTimeTag: true,
        startingPrice: 15,
        price: 2,
        long: 2.5,
        time: 30,
        activityList: [
          { icon: '', name: '新用户下单立减10' },
          { icon: '', name: '满20减2，满30减5，满50减10' }
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
          { icon: '', name: '新用户下单立减10' },
          { icon: '', name: '满20减2，满30减5，满50减10' }
        ]
      },
      { 
        name: '辣椒炒土豆丝', 
        url: '../../images/res6.jpg',
        straList: [
          '../../images/star.jpg',
          '../../images/star.jpg',
          '../../images/star.jpg',
          '../../images/start.jpg',
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
          { icon: '', name: '新用户下单立减10' },
          { icon: '', name: '满20减2，满30减5，满50减10' }
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
          { icon: '', name: '新用户下单立减10' },
          { icon: '', name: '满20减2，满30减5，满50减10' }
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
          { icon: '', name: '新用户下单立减10' },
          { icon: '', name: '满20减2，满30减5，满50减10' }
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