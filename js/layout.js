$(function(){
    /* 倒计时跳转 */
    countDown(3,'basic.html');

})

/* 倒计时跳转 */
function countDown(secs,surl){
    var jumpTo = document.getElementById('jumpTo');
    jumpTo.innerHTML=secs;
    if(--secs>0){
        setTimeout("countDown("+secs+",'"+surl+"')",1000);
    }
    else{
        location.href=surl;
        -ma
    }
}

