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
        snowJs.tool.extend(initParameter, Parameter);

        var chartTag = document.getElementById('chart');
        var canvasId = snowJs.tool.getRandom();
        var canvas = snowJs.tool.createElement({
            tag: 'canvas',
            id: canvasId
        });
        canvas.setAttribute('width', 740);
        canvas.setAttribute('height', 248);
        chartTag.appendChild(canvas);

        var createBarChart = function () {
            var data = initParameter.data;
            var canvas = document.getElementById(canvasId);
            var chart = canvas.getContext('2d');
            chart.lineWidth = 1;

            chart.beginPath();//开始一条路径或重置当前的路径
            chart.moveTo(65, 0);//开始一条路径 ，移动到0，0位置，语法：moveTo（x,y），start点
            chart.lineTo(65, 230);//开始一条路径，移动到0,600位置，语法：lineTo（x，y）,end点
            chart.stroke();//确认创建路径

            chart.beginPath();
            chart.moveTo(60, 230);
            chart.lineTo(740, 230);
            chart.stroke();

            var len = data.length;
            var intervalX = 660 / len;
            for (var i = 1; i <= len; i++) {
                var x = intervalX * i;
                chart.beginPath();
                chart.moveTo(x, 230);
                chart.lineTo(x, 235);
                chart.stroke();

                chart.beginPath();
                chart
            }

            var maxVal = Number(data[0].y), minVal = Number(data[0].y);
            snowJs.tool.each(data, function (en, index) {
                var val = Number(en.y);
                maxVal < val ? maxVal = val : maxVal;
                minVal > val ? minVal = val : minVal;
            });
            var intervalY = 220 / data.length;
            for (var i = 1; i <= len; i++) {
                var y = 230 - intervalY * i;
                chart.beginPath();
                chart.moveTo(65, y);
                chart.lineTo(60, y);
                chart.stroke();

                chart.beginPath();
                chart.strokeStyle = '#ccc';
                chart.moveTo(65, y);
                chart.lineTo(740, y);
                chart.stroke();
            }
        };
        var createSectorChart = function () {
        };
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