Page({
  onLoad:function(option){
    console.log(option)
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