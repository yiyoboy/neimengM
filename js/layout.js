$(function(){
    /* tab 切换 */
   tabMenu(".topTab","active");
   tabMenu(".menu-section-list","active");
   tabMenu(".topNav","active");
   toggleBox(".toggleBtn","open")
    toggleTable(".toggleBTable","active");

})
/* menu 切换效果 */
function tabMenu(className,activeName){
    var target = $(className).find("li a");
    touch.on(target, 'hold tap doubletap', function(ev){
        $(this).addClass(activeName).parents("li").siblings("li").find("a").removeClass(activeName);
    });
}

/* 收缩展开 */
function toggleTable(btnName,activeName){
    $(btnName).click(function(){
             $(this).toggleClass(activeName);
           $(this).parents(".tableBox").find("tbody").toggle();
    })

}
function toggleBox (btnName,activeName){
    $(btnName).click(function(){
        var panelBodyH = $(".panel-body").height();
        var dateH = $(".dateHeader").height();
        if(dateH > 90){
           $(this).addClass(activeName);
            $(".panel-body").height(panelBodyH+235);
            $(".dateHeader").height(90);
        }
        else
        {
            $(this).removeClass(activeName);
            $(".panel-body").height(panelBodyH-235);
            $(".dateHeader").height(325);
        }

    })
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

