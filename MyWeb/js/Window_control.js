var showList=['./img/Giagin2X.png','./img/Title.png','./img/AsiaToGlobe.png','./img/AsiaToGlobe(bandw).png']
var flag=1
var str0='中國版的大航海時代，參與在明朝的大倭寇事件中，扮演一個小人物試圖於各種勢力的角力間求生存。本作主打劇情、商業、探索的互動。一個無力改變歷史的小人物，玩家將決定他如何活下去！'
var str1='走私與倭寇的老巢--雙嶼，有葡萄牙、日本、廣東與福建的各種勢力在此合作，卻也暗潮洶湧。不經世事的少年林懋和，獨自踏上雙嶼，與來自英格蘭的少女珍的邂逅，究竟會經歷怎麼樣的冒險呢！'
var str2='參與2019史學營 Asia-to-Globe各項展品的設計。這一白一黑的LOGO正是我的得意之作，展現分別從陸上、海上的亞洲，出發到全世界。'
var articleList=[str0,str1,str2]
var T0='嘉靖大倭寇：懋和傳'
var T1='少年林懋和'
var T2='藝術設計'
var TitleList=[T0,T1,T2]
$(document).ready(function(){
    $('.pic_left').click(left_click)
    $('.pic_right').click(right_click)
    //超過52字使用...替代
    ellipsis();
} );


var pos_change=function(pos,str){
    $(pos).attr('src',str)
}
var article_change=function(p,str){
    $(p).text(str)
}
var left_click=function(){
    flag-=1
    let left_flag=flag-1
    let right_flag=flag+1
    if(flag<0){
        flag=2
        left_flag=flag-1
    }else if(flag-1<0){
        left_flag=2 
    }
    $('.yellow').hide()
    pos_change('.pic_left',showList[left_flag])
    article_change('.left_top_article',articleList[left_flag])
    article_change('.left_top_title',TitleList[left_flag])
    if(flag==2){
        pos_change('.pic_center',showList[3])
        article_change('.articlebox p',articleList[flag])
        article_change('.blue',TitleList[flag])
    }else {
        pos_change('.pic_center',showList[flag])
        article_change('.articlebox p',articleList[flag])
        article_change('.blue',TitleList[flag])
        if(flag==1){
            $('.yellow').show()
        }
    }
    pos_change('.pic_right',showList[right_flag])
    article_change('.right_bottom_article',articleList[right_flag])
    article_change('.right_bottom_title',TitleList[right_flag])
    ellipsis()
}
var right_click=function(){
    flag+=1
    let left_flag=flag-1
    let right_flag=flag+1
    if(flag>2){
        flag=0
        right_flag=flag+1
    }else if(flag==2){
        right_flag=0
    } 
    $('.yellow').hide()
    pos_change('.pic_left',showList[left_flag])
    article_change('.left_top_article',articleList[left_flag])
    article_change('.left_top_title',TitleList[left_flag])
    if(flag==2){
        pos_change('.pic_center',showList[3])
        article_change('.articlebox p',articleList[flag])
        article_change('.blue',TitleList[flag])
    }else {
        pos_change('.pic_center',showList[flag])
        article_change('.articlebox p',articleList[flag])
        article_change('.blue',TitleList[flag])
        if(flag==1){
            $('.yellow').show()
        }
    }
    pos_change('.pic_right',showList[right_flag])
    article_change('.right_bottom_article',articleList[right_flag])
    article_change('.right_bottom_title',TitleList[right_flag])
    ellipsis()
}
var ellipsis=function(){
    var len = 52; 
    $(".left_top_article").each(function(i){
        if($(this).text().length>len){
            $(this).attr("title",$(this).text());
            var text=$(this).text().substring(0,len-1)+"...";
            $(this).text(text);
        }
    });
    $(".right_bottom_article").each(function(i){
        if($(this).text().length>len){
            $(this).attr("title",$(this).text());
            var text=$(this).text().substring(0,len-1)+"...";
            $(this).text(text);
        }
    });
};