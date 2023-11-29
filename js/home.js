
// import img2 from "./../images/gif-home2.gif"
// import img3 from "./../images/gif-home3.gif"


$(document).ready(function() {
    var $bgImages = $('.bgimg1');
    var currentIndex = 0;
    var intervalTime = 10000; // 10秒

    function changeBackground() {
        // 显示当前背景图片
        $bgImages.eq(currentIndex).removeClass('bgimg2');
        // 隐藏其他背景图片
        $bgImages.not($bgImages.eq(currentIndex)).addClass('bgimg2');

        // 更新索引，确保在数组范围内循环
        currentIndex = (currentIndex + 1) % $bgImages.length;
    }

    // 初始加载
    changeBackground();

    // 设置定时器，每隔intervalTime调用一次changeBackground函数
    var interval = setInterval(changeBackground, intervalTime);

    // 如果需要在鼠标悬停时停止切换，可以取消下面的注释
    /*
    $('.bgimg').hover(
        function() {
            clearInterval(interval);
        },
        function() {
            interval = setInterval(changeBackground, intervalTime);
        }
    );
    */
});

