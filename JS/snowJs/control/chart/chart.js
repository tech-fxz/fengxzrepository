/**
 * Created by Administrator on 2017/7/18.
 */
/**
 * @class snowJs.Chart
 * @param Parameter
 * @param Parameter.type 图表类型：bar【柱形图】，sector【扇形图】,line【线形图】,默认值：bar
 * @desc 统计图形表
 *
 */
snowJs.Chart = (function () {
    var constructor = function (Parameter) {
        var initParameter = {};
        initParameter.type = 'bar';
        _s.extend(initParameter, Parameter);

        var container = initParameter.container;

        var chartTag = initParameter.$e;
        var canvasId = _s.getRandom();
        var canvas = chartTag.createElement({
            tag: 'canvas'
        });

        var canvasWidth = 740;
        var canvasHeight = 248;
        var cssClass=initParameter.cssClass||'';
        canvas.setAttribute('class', cssClass);
        canvas.setAttribute('id', canvasId);
        canvas.setAttribute('width', canvasWidth.toString());
        canvas.setAttribute('height', canvasHeight.toString());

        //矩形统计图
        var createBarChart = function () {
            var data = initParameter.data;
            var canvas = document.getElementById(canvasId);
            var chart = canvas.getContext('2d');
            var X = 65,
                Y = 230,
                intervalLineX = X - 5,//这个坐标是指X轴坐标往上移5，绘制Y轴上的间隔线终点的X坐标，并且是绘制X轴起点的X坐标
                intervalLineY = Y - 5;//这个坐标是指Y轴坐标往左移5，绘制X轴上的间隔线起点的Y坐标，并且是绘制X轴起点的Y坐标
            chart.lineWidth = 1;

            //Y轴绘制
            chart.beginPath();//开始一条路径或重置当前的路径
            chart.moveTo(X, 0);//开始一条路径 ，移动到0，0位置，语法：moveTo（x,y），start点
            chart.lineTo(X, Y);//开始一条路径，移动到0,600位置，语法：lineTo（x，y）,end点
            chart.stroke();//确认创建路径

            //X轴绘制
            chart.beginPath();
            chart.moveTo(intervalLineX, intervalLineY);
            chart.lineTo(canvasWidth, intervalLineY);
            chart.stroke();

            var len = data.length;
            var intervalX = parseInt((canvasWidth - X - 40) / len);//X轴间隔的坐标数值值

            //绘制X轴上的内容：间隔线、文本
            var canvasX = function () {
                for (var i = 1; i <= len; i++) {
                    var x = intervalX * i;
                    x += X;

                    //绘制X轴上的间隔线
                    chart.beginPath();
                    chart.moveTo(x, intervalLineY);
                    chart.lineTo(x, Y);
                    chart.stroke();

                    //绘制矩形

                    //绘制X轴上的文本,文本来源于数据源
                    var text = data[i - 1].x;
                    if (text) {
                        //水平方向对齐方式：文本会从指定位置开始
                        //textAlign值有:
                        //start：默认，文本在指定的位置开始；
                        // end：文本在指定的位置结束；
                        // center：文本的中心被放置在指定的位置；
                        // left：文本左对齐；
                        // right：文本右对齐;
                        chart.textAlign = 'center';
                        var textX = x - intervalX / 2;
                        chart.fillText(text, textX, Y + 10);
                    }
                }
            };

            var maxVal = Number(data[0].y),//Y轴数据中的最大值
                minVal = Number(data[0].y);//Y轴数据中的最小值
            _s.each(data, function (en, index) {
                var val = Number(en.y);
                maxVal < val ? maxVal = val : maxVal;
                minVal > val ? minVal = val : minVal;
            });

            var firstVal = parseInt(maxVal.toString()[0]);//Y轴数据中最大值的第一位数值
            var intervalVal = parseInt(maxVal / firstVal);//Y轴间隔的数据数值，比如5,10,100,1000
            var intervalY = (Y - 30) / firstVal;//Y轴间隔的坐标数值值

            //绘制Y轴上的内容：间隔线、辅助线、文本
            var canvasY = function () {
                for (var i = 1; i <= firstVal; i++) {
                    //绘制Y轴上的间隔线
                    var y = intervalLineY - intervalY * i;//Y轴间隔线终点的Y轴坐标
                    chart.beginPath();
                    chart.moveTo(X, y);
                    chart.lineTo(intervalLineX, y);
                    chart.stroke();

                    //绘制矩形图的辅助线
                    chart.beginPath();
                    chart.strokeStyle = '#ccc';
                    chart.moveTo(X, y);
                    chart.lineTo(canvasWidth + 20, y);
                    chart.stroke();

                    //绘制Y轴上的文本，文本来源：根据数据中的最大值推算出间隔的数值，比如最大值为400，间隔值为100，即Y轴上的文本为100，200,300,400；
                    var text = intervalVal * i;
                    if (text) {
                        var textY = y;

                        //设置垂直方向对齐方式：
                        // textBaseline的值有：
                        // alphabetic默认，文本基线是普通的字母基线；
                        // top em方框的顶端；
                        // middle em方框的居中；
                        // bottom em方框的底部
                        // hanging悬挂；
                        // ideographic表意；
                        chart.textBaseline = 'middle';
                        chart.textAlign = 'end';
                        chart.fillText(text.toString(), intervalLineX, textY);
                    }
                }
            };

            var canvasChart = function () {
                for (var i = 0; i < data.length; i++) {
                    var x = intervalX * (i + 1);
                    x += X - intervalX / 2 - 10;

                    var val = Number(data[i].y);
                    var n = parseInt(val / intervalVal);
                    var m = val % intervalVal;
                    var y = intervalLineY - (n * intervalY + m * intervalY / intervalVal);
                    var x1 = x + 20;


                    chart.fillStyle = '#4bbfbf';
                    chart.beginPath();
                    chart.moveTo(x, intervalLineY);
                    chart.lineTo(x, y);
                    chart.lineTo(x1, y);
                    chart.lineTo(x1, intervalLineY);
                    chart.lineTo(x, intervalLineY);
                    chart.fill();

                    chart.textAlign = 'center';
                    chart.fillStyle = "white";
                    chart.fillText(val.toString(), x1 - 10, y + (Y - y) / 2);
                }
            };

            canvasX();
            canvasY();
            canvasChart()
        };

        //原型统计图
        var createSectorChart = function () {
            var chartTag = document.getElementById('chart');
            var chart = chartTag.getContext('2d');

            chart.beginPath();
            chart.arc(75, 75, 50, 0, Math.PI * 2, true);
            chart.stroke();
        };
        //线形统计图
        var createLineChart = function () {
        };

        switch (initParameter.type) {
            case 'bar':
                createBarChart();
                break;
            case 'sector':
                createSectorChart();
                break;
            case 'line':
                createLineChart();
                break;
        }
    };
    return constructor;
})();