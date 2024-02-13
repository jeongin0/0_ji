$(document).ready(function(){

    // *case.1
    $("#btnMoveCircle").click(moveCircle);

    // *case.2
    $("#btnDetailMove").click(detailMoveCircle);

    // *case.3
    keyControl();
});

function moveCircle(){
    // ? 선언
    var $circle=$(".circleWrap .circle");
    var xpos=window.prompt("0부터 380이하의 숫자만 입력하세요"); // css에 width 430-50 = 380
    // prompt로 숫자를 입력하면 -> 문자 됨

     // ? 처리
    xpos=parseInt(xpos);  //형변환?
    if(xpos>=0&&xpos<=380){
        $circle.css("left",xpos);
    }
    else{
        alert("잘못된 수치입니다");
    }

    // ? 출력
}

function detailMoveCircle(){
    // ? 선언
    var $circle=$(".circleDetail");
    var xpos=$("#xpos").val();
    var ypos=$("#ypos").val();

    //! 제이쿼리에서 값을 당기는 방법 = .val();
    // 단, select는 안되고 option엔 값을 가져올 수 있음

    // val() 를 작성하면 값을 가져온다는 뜻 
    // val(00)안에 값이 있으면 원래 있던 값을 괄호 안의 값으로 바꿔라

    // ? 처리
    xpos=parseInt(xpos);
    ypos=parseInt(ypos);
    if(xpos>=0&&xpos<=380&&ypos>=0&&ypos<=380){
        $circle.css({
            "left":xpos,
            "top":ypos
        });
    }
    else{
        alert("잘못된 수치입니다");
    }

    // ? 출력
}

// // *exp.2ext function grouping
// function detailMoveCircleExt(){
//     var $circle = null;
//     circleInit();
//     $("#btnDetailMove").click(circleEvent);
// }
// function circleInit(){
//     $circle = $(".circleDetail");
// }
// function circleEvent(){
//     var xpos = $("#xpos").val();
//     var ypos = $("#ypos").val();
//     xpos = parseInt(xpos);
//     ypos = parseInt(ypos);
//     circleMovCommand(xpos, ypos);
// }
// function circleMovCommand(xpos, ypos){
//     if(xpos > 380 || ypos > 380 || xpos < 0 || ypos < 0){
//         alert("잘못된 수치입니다. 0 ~ 380 이내로 입력하세요.");
//     }else{
//         $circle.css({
//             "left" : xpos,
//             "top" : ypos
//         });
//     }
// }

// 키보드 바인딩 -> 키프레스
function keyControl(){
    var $circle=$(".circleKey");
    var range=50;
    //현재의 위치를 나타내는 걸 지어줘야 됨 / 저장을 못하기 때문에 계속 0으로 돌아가기 때문
    var currentXpos=0;
    var currentYpos=0;

    $(document).keydown(function(e){  // 이벤트 = e
    // 키보드 누르는 키가 너무 많은데 기명함수를 쓰면 어떤 키를 누르는지 모름
    // 익명함수로 해야 e가 무슨 키보드를 눌렀는지 알 수 있게

    // 키보트가 키가 눌렸다 라는 판단은 usb라인으로 통해 전력이 이동되는데 그 자체가 false 
    // 키보트를 누르면 저항이 생겨 그럼 키를 누른 옆엔 전력이 증가되겠지 그래서 키가 눌렸다 라는 걸 알아냄 
    // -> 디지털 신호 / 프로그밍은 못 알아들음 

    // e = 핸재 누르고 있는 키 

    console.log("입력한 keyCode : "+ typeof(e.keyCode)+e.keyCode);
    // w=87(ypos-), a=65(xpos-), s=83(ypos+), d=68(xpos+) / 가시영역이 +
    switch(e.keyCode){ // 딱 떨어지는 케이스일 때
        case 87:
            currentYpos-=range;
            break;
        case 68:
            currentXpos+=range;
            break;
        case 83:
            currentYpos+=range;
            break;
        case 65:
            currentXpos-=range;
            break;
        }
            
        // todo. 자유분방한 원 가둬두기
        if(currentXpos<0){
            currentXpos=0;
        }
        if(currentXpos>380){
            currentXpos=380;
        }
        if(currentYpos<0){
            currentYpos=0;
        }
        if(currentYpos>380){
            currentYpos=380;
        }

        $circle.css("left",currentXpos);
        $circle.css("top",currentYpos);
        
        // width 430안에 가두기


            
    }); //예외할 대상이 많을 때는 difult 안 써
}




