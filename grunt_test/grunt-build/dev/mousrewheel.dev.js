/*grunt_test-1.0.0.js 2016-04-30 18:41*/
//initialize Swiper
var swiper=new Swiper('.swiper-container',{
    pagination:'.swiper-container',
    direction:'vertical',
    slidesPerView:1,
    paginationClickable:true,
    spaceBetween:30,
    mousewheelControl:true
});
swiper.show();