$(function(){
    /* tab 切换 */
   tabMenu(".topTab","active");
   tabMenu(".menu-section-list","active");
   tabMenu(".topNav","active");
   toggleBox(".toggleBtn","open",".dateGuide",".picker__table")

})
/* menu 切换效果 */
function tabMenu(className,activeName){
    var target = $(className).find("li a");
    touch.on(target, 'hold tap doubletap', function(ev){
        $(this).addClass(activeName).parents("li").siblings("li").find("a").removeClass(activeName);
    });
}

/* 收缩展开 */

function toggleBox (btnName,activeName,parBox,hideBox){
    $(btnName).click(function(){
        var display = $(this).parents(parBox).find(hideBox).css("display");
        console.log(display);
        if(display=="block"){
           $(this).addClass("open");
            $(this).parents(parBox).find(hideBox).css("display","none");
        }
        else
        {
               $(this).removeClass(activeName);
            $(this).parents(parBox).find(hideBox).css("display","block");

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

