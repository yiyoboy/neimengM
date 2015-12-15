$(function(){
    /* tab 切换 */
   tabMenu(".topTab","active");
   tabMenu(".menu-section-list","active");
   tabMenu(".topNav","active");
   toggleBox(".toggleBtn","open")
    toggleTable(".toggleBTable","active");
    collToggle(".collItem","active",".collBox","onSelect");
    toggleBtn(".btnItem","activeTwo");
    toggleLinks(".listGroup ul li a","active");
})
/* 简易表单验证 */
$(function(){
    $(".listGroup input, .listGroup select").click(function(){
        $("a.btnItem").addClass("activeOne")
    });
})
/* list 切换列表 */
function toggleLinks(className,activeName){
    var target = $(className);
    touch.on(target, 'hold tap doubletap', function(ev){
        $(this).toggleClass(activeName).parents("li").siblings("li").find("a").removeClass(activeName);
    });
}
/* btn 切换效果 */
function toggleBtn(className,activeName){
    var target = $(className);
    touch.on(target, 'hold tap doubletap', function(ev){
        $(this).toggleClass(activeName);
    });
}

/* 收藏切换 */
function collToggle(className,activeName,collListName,onSelect){
    var target = $(className).find("li a");
    var target02 = $(collListName).find("li");
    touch.on(target, 'hold tap doubletap', function(ev){
        $(this).addClass(activeName).parents("li").siblings("li").find("a").removeClass(activeName);
        var liIndex =$(this).parents("li").index();
        if(liIndex ==0){
            $(".collBox").removeClass("lineColl").addClass("lineColl");
        }
        else{
            $(".collBox").removeClass("lineColl");
        }
    });
    touch.on(target02, 'hold tap doubletap', function(ev){
        $(this).addClass(onSelect).siblings("li").removeClass(onSelect);
    });
}

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
        if(dateH > 130){
           $(this).addClass(activeName);
            $(".panel-body").height(panelBodyH+238);
            $(".dateHeader").height(130);
        }
        else
        {
            $(this).removeClass(activeName);
            $(".panel-body").height(panelBodyH-238);
            $(".dateHeader").height(368);
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

