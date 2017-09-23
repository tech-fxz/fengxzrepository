Page({
  onLoad:function(option){
    wx.setNavigationBarTitle({
      title: '订单',
    })
  },
  data:{
    array:[
      {message:'foo'},
      {message:'bar'}
    ],
    objectArray:[
      { id: '1', name: "li" },
      { id: '2', name: "lis" },
      { id: '3', name: "liss" },
    ]
  }
})