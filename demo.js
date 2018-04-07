

$(function (){
    $('#dowebok').fullpage({
        //设置没一屏的颜色
        sectionsColor:['#0da5d6', '#2AB561', '#DE8910', '#16BA9D', '#0DA5D6'],
        afterLoad:function (anchorLink,index){
            //index 当前屏幕的编号 顺序是从1开始 所以要index-1
            //current类加给谁，谁就做动画
            $('.section').removeClass('current');
            //让动画延迟100ms执行  
            setTimeout(function (){
                $('.section').eq(index-1).addClass('current');
            },100);
        }
    })
})