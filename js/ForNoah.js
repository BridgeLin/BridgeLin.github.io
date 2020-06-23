
var cow_num=0
var milk_num=0
var ship=100
$(()=>{
    refresh()
  setInterval(produce_cow,10000);
})
var refresh=function(){
    cow_num=2
    milk_num=0
    $('.square').empty()
    $('#cow_num').text("牛群數量/船隻容量："+cow_num+"/"+ship)
    $('#milk_num').text("牛奶數："+milk_num)
    for(let i=0;i<2;i++){
        var $img =$('<img>').attr('src','./img/cow.gif').attr('class','cow_reverse')
        $img.on('click', (eventObject) => {
            // 取得引發事件的人是那隻牛
            $this = $(eventObject.target)
            //變成牛奶罐
            $this.attr('src','./img/milk.svg')
            setInterval(function(){$this.remove()},200);
            //牛群數減一
            cow_num--
            $('#cow_num').text("牛群數量/船隻容量："+cow_num+"/"+ship)
            //牛奶數加一
            milk_num++
            $('#milk_num').text("牛奶數："+milk_num)
            if(cow_num<2){
                alert('牛群死光了！')
                refresh()   
            }
        })
        $('.square').append($img)
    }
}
var produce_cow=function(){
    num=parseInt(cow_num/2)
    if(cow_num%4==0||cow_num%7==0){
        var $img =$('<img>').attr('src','./img/cow.gif').attr('class','cow_reverse') 
    }else{
        var $img =$('<img>').attr('src','./img/cow.gif').attr('class','cow') 
    }
    $img.on('click', (eventObject) => {
        // 取得引發事件的人是那隻牛
        $this = $(eventObject.target)
        //變成牛奶罐
        $this.attr('src','./img/milk.svg')
        setInterval(function(){$this.remove()},500);
        //牛群數減一
        cow_num--
        $('#cow_num').text("牛群數量/船隻容量："+cow_num+"/"+ship)
        //牛奶數加一
        milk_num++
        $('#milk_num').text("牛奶數："+milk_num)
        if(cow_num<2){
            alert('牛群死光了！')
            refresh()
        }
    })
    cow_num++
    $('.square').append($img)
    $('#cow_num').text("牛群數量/船隻容量："+cow_num+"/"+ship)
    if(cow_num>ship){
       alert('船沉了！')
       refresh()
    }

}  