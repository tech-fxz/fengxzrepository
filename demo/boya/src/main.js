/**
 * Created by zhen on 2017/9/16.
 */
var app=angular.module('my-app',[]);
app.controller('Content',['$scope',function($scope){
    $scope.news=[
        {
            day:'18',
            month:'09',
            text:'2015博雅国际扑克大赛（BPT）在澳门开幕'
        },
        {
            day:'26',
            month:'09',
            text:'2015博雅国际扑克大赛（BPT）在澳门进行'
        },
        {
            day:'28',
            month:'09',
            text:'2015博雅国际扑克大赛（BPT）在澳门落幕'
        },
        {
            day:'28',
            month:'09',
            text:'2015博雅国际扑克大赛（BPT）在澳门落幕'
        }
    ];
    $scope.recruitList=[
        {jopName:'PHP开发工程师'},
        {jopName:'java开发工程师'},
        {jopName:'web开发工程师'},
        {jopName:'.net开发工程师'},
        {jopName:''}
    ];
}]) ;