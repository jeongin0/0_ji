$(document).ready(function(){
    // todo case.1 parameter를 이용한 방법 - click 일어날 때 헤당 열,너비,높이 함수에 전달
    // todo case.2 parameter를 사용하지 않고 한번에 해결 - .replace(); 함수 찾아적용
    imgContainer();
});


function imgContainer(){
    var img=$(".imgContainer img");
    var ypos=0;

    $(".1way").click(function(){
        var imgLength=img.length;
        var imgHeight=img.height();
        for(var i=0; i<imgLength; i++){
            var image=img.eq(i);
            ypos=imgHeight*i;
            image.css("top",ypos);
        }
    });
}






