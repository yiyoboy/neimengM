$(function(){
    /* tab 切换 */
   tabMenu(".topTab","active");
   tabMenu(".menu-section-list","active");
})
/* menu 切换效果 */
function tabMenu(className,activeName){
    var target = $(className).find("li a");
    touch.on(target, 'hold tap doubletap', function(ev){
        $(this).addClass(activeName).parents("li").siblings("li").find("a").removeClass(activeName);
    });
}


/* 倒计时跳转 */
function countDown(secs,surl){
    var jumpTo = document.getElementById('jumpTo');
    $(jumpTo).html(secs);
    if(--secs>0){
        setTimeout("countDown("+secs+",'"+surl+"')",1000);
    }
    else{
        location.href=surl;
        -ma
    }
}

