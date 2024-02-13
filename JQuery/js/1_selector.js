// 제이쿼리 시작 $는 제이쿼리를 알려주는 식별자


// 브라우저 = document
$(document).ready(function(){ // -> 문서(html)가 준비됐을 때 익명함수 실행
    // 제이쿼리는 선택자를 다 잡아냄 

    // *case.1 - 이 방법은 하며 안됨(전체선택이 되기 때문)
    var $divs=$("div");
    $divs.css("color","#f00");

    // ?case.2
    $("#btnCheck").click(sayHello);
    // 자바크스립트는 .onclick
    // 제이쿼리는 .click

    // !case.03
    $("#btnAddBorder").click(addBorder);

    // todo.
    $("#btnTextChange").click(textChange);
});
// window.onload -> 자바로 썼을 땐 이렇게 씀
// 함수를 패키징해서 써야됨

// ?case.2
function sayHello(){
    alert('hello');
}    

// !case.3
function addBorder(){
    $("#panel").css("border","5px solid black");
}
// css에서 작업을 하고 마무리 작업을 하는 거니까 html에 class를 가지고 제이쿼리하면 되겠지

// todo.
function textChange(){
    $("#panel2").css({
        "fontSize":"25px",
        "fontWeight":"bold",
        "color":"green"
    });
    //object가 가능함 중괄호를 넣으면 css치는 거처럼 할 수 있음
    // 함수에 적용할 게 많으면 다 중괄호를 치고 씀
    // 속성값과 숫자 두가지만 적용되는데 내가 원하는 만큼의 콤마를 써야돼 
    // 단, 마지막거엔 콤마를 찍으면 안돼 

    // 특정대상의 css를 많이 바꿔야될 때 사용하면 됨
    // 근데 인라인으로 css가 들어가니까 수정할 때 힘들어 그래서 변수를 줘야됨 / for, 그런...
}


