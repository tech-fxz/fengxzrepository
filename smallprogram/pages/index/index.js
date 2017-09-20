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
        { url: 'http://recipe.nlyeb.com/Upload/Files/2016/08/17/bac465fc177043c9b8377ce1afdfcd07.jpg',            name: '麻辣烫' 
        },
        { url: 'http://recipe.nlyeb.com/Upload/Files/2016/09/02/e221abb755f240bba33df0bc1e941c75.jpg',            name: '蛋糕' 
        },
        { url: 'http://recipe.nlyeb.com/Upload/Files/2016/08/17/bac465fc177043c9b8377ce1afdfcd07.jpg',            name: '海鲜'
         }
      ]}
    ],
    dashList:[
      { 
        name: '苹果沙拉', 
        url: 'http://recipe.nlyeb.com/Upload/Files/2016/09/02/e221abb755f240bba33df0bc1e941c75.jpg',
        desc: '民以食为天！好处：吃了不会挨饿、美丽的食物增加食欲、解馋饱眼福有营养' 
      },
      { 
        name: '香蕉派',
       url: 'http://recipe.nlyeb.com//Upload/Files/2016/08/13/1932bb32063e4acbbe95e13e1b2ba45f.jpg', 
       desc: '民以食为天！好处：吃了不会挨饿、美丽的食物增加食欲、解馋饱眼福有营养' 
      },
      { 
        name: '雪梨糖水', 
        url: 'http://recipe.nlyeb.com/Upload/Files/2016/08/17/bac465fc177043c9b8377ce1afdfcd07.jpg', 
        desc: '民以食为天！好处：吃了不会挨饿、美丽的食物增加食欲、解馋饱眼福有营养' 
      },
      { 
        name: '牛奶豆浆', 
        url: 'http://recipe.nlyeb.com/Upload/Files/2016/09/02/e221abb755f240bba33df0bc1e941c75.jpg', 
        desc: '民以食为天！好处：吃了不会挨饿、美丽的食物增加食欲、解馋饱眼福有营养' 
        },
      { 
        name: '米饭白菜', 
        url: 'http://recipe.nlyeb.com/Upload/Files/2016/08/17/bac465fc177043c9b8377ce1afdfcd07.jpg', 
        desc: '民以食为天！好处：吃了不会挨饿、美丽的食物增加食欲、解馋饱眼福有营养' 
      },
      { 
        name: '辣椒炒土豆丝', 
        url: 'http://recipe.nlyeb.com/Upload/Files/2016/09/02/e221abb755f240bba33df0bc1e941c75.jpg', 
        desc: '民以食为天！好处：吃了不会挨饿、美丽的食物增加食欲、解馋饱眼福有营养' 
      },
      { 
        name: '西红柿炒蛋', 
        url: 'http://recipe.nlyeb.com/Upload/Files/2016/09/02/40578233d4864c429c32650a6db4c0b5.jpg', 
        desc: '民以食为天！好处：吃了不会挨饿、美丽的食物增加食欲、解馋饱眼福有营养' 
        },
      { 
        name: '香煎鸡排',
         url: 'http://recipe.nlyeb.com//Upload/Files/2016/08/13/1932bb32063e4acbbe95e13e1b2ba45f.jpg', 
         desc: '民以食为天！好处：吃了不会挨饿、美丽的食物增加食欲、解馋饱眼福有营养' 
      },
      { 
        name: '黑椒牛扒', 
        url: 'http://recipe.nlyeb.com/Upload/Files/2016/09/02/e221abb755f240bba33df0bc1e941c75.jpg', 
        desc: '民以食为天！好处：吃了不会挨饿、美丽的食物增加食欲、解馋饱眼福有营养' 
      },
      { 
        name: '青辣椒炒肉', 
        url: 'http://recipe.nlyeb.com/Upload/Files/2016/09/02/40578233d4864c429c32650a6db4c0b5.jpg', 
        desc: '民以食为天！好处：吃了不会挨饿、美丽的食物增加食欲、解馋饱眼福有营养' 
      },
      { 
        name: '肥牛煲', 
        url: 'http://recipe.nlyeb.com/Upload/Files/2016/09/02/40578233d4864c429c32650a6db4c0b5.jpg', 
        desc: '民以食为天！好处：吃了不会挨饿、美丽的食物增加食欲、解馋饱眼福有营养' 
      },
      { 
        name: '香煎罗非鱼', 
        url: 'http://recipe.nlyeb.com/Upload/Files/2016/09/02/e221abb755f240bba33df0bc1e941c75.jpg', 
        desc: '民以食为天！好处：吃了不会挨饿、美丽的食物增加食欲、解馋饱眼福有营养' 
      },
      { 
        name: '红烧排骨', 
        url: 'http://recipe.nlyeb.com/Upload/Files/2016/09/02/40578233d4864c429c32650a6db4c0b5.jpg', 
        desc: '民以食为天！好处：吃了不会挨饿、美丽的食物增加食欲、解馋饱眼福有营养' 
      },
      { 
        name: '咸骨粥', 
        url: 'http://recipe.nlyeb.com/Upload/Files/2016/09/02/e221abb755f240bba33df0bc1e941c75.jpg', 
        desc: '民以食为天！好处：吃了不会挨饿、美丽的食物增加食欲、解馋饱眼福有营养' 
      },
      { 
        name: '干锅黄骨鱼',
        url: 'http://recipe.nlyeb.com/Upload/Files/2016/09/02/40578233d4864c429c32650a6db4c0b5.jpg', 
        desc: '民以食为天！好处：吃了不会挨饿、美丽的食物增加食欲、解馋饱眼福有营养' 
      },
      { 
        name: '海鲜火锅', 
        url: 'http://recipe.nlyeb.com//Upload/Files/2016/08/13/1932bb32063e4acbbe95e13e1b2ba45f.jpg', 
        desc: '民以食为天！好处：吃了不会挨饿、美丽的食物增加食欲、解馋饱眼福有营养' 
      },
      { 
        name: '猪肚煲', 
        url: 'http://recipe.nlyeb.com/Upload/Files/2016/09/02/e221abb755f240bba33df0bc1e941c75.jpg', 
        desc: '民以食为天！好处：吃了不会挨饿、美丽的食物增加食欲、解馋饱眼福有营养' 
      }, 
      { 
        name: '蛋糕', 
        url: 'http://recipe.nlyeb.com//Upload/Files/2016/08/13/1932bb32063e4acbbe95e13e1b2ba45f.jpg', 
        desc: '民以食为天！好处：吃了不会挨饿、美丽的食物增加食欲、解馋饱眼福有营养' 
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