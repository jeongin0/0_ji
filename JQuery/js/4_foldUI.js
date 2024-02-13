$(document).ready(function(){
    // *case.1 이미지 가로 배치 하기
    imgContainer();

    // todo
    imgAlignMix();
});

function imgContainer(){
    // ? 선언
    var img=$(".imgContainer img");
    var xpos=0;

    // ?
    $(".alignHori").click(function(){
        var imgLength=img.length; // 이미지 갯수 파악 = 9
        var imgWidth=img.width();  // 너비 불러오는 방법
        for(var i=0; i<imgLength; i++){
            var image=img.eq(i); // ? eq : nth- / 철저히 n번째 대상 구하기
            xpos=imgWidth*i;
            // console.log(xpos);
            image.css("left",xpos);
        }
    });
    $(".reset").click(function(){
        img.css("left",0);
    }); 
}

// todo
function imgAlignMix(){
    // ? 선언
    var img=$(".imgContainerMix img");
    var xpos=0;
    var ypos=0;

    // ?
    $(".alignMix").click(function(){
        var imgLength=img.length;
        var imgHeight=img.height();

        for(var i=0; i<imgLength; i++){
            var image=img.eq(i);
            xpos=(i%3)*imgHeight;  // ? 012 012 012 = 3을 기준으로 -> %(나머지)

            ypos=parseInt(i/3)*imgHeight;  // ? 000 111 222 = 3을 기준으로 -> /(나누기)

            // ! parseInt : 실수로 만들어 줌 / 소수점을 없애줌 
            
            image.css({
                "left":xpos,
                "top":ypos
            });
        }
    }); 
    $(".resetMix").click(function(){
        // img.css("left",0);
        // img.css("top",0);
        img.css({
            "left":0,
            "top":0
        });
    });
}
