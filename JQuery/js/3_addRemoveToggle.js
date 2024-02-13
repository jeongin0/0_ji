// 자바의 장점 = 이벤트를 모두에게 줄 수 있다

// 자바에서 체크박스 만드는 방법
$(document).ready(function(){
    // *case.1
    toggleCheck();

    // *todo
    toggleTodo();

    // *case.2
    tabUI();

    // *case.3
    accControl(".accComponent li h3"); //매개변수 이용
});
function toggleCheck(){
    var $checkTarget=$(".material-icons.checkIco");
    var $checkLabel=$(".label.checkLabel");
    var checkStatus=false;
    $checkLabel.click(function(){
        checkStatus=!checkStatus;
        console.log(checkStatus);
        if(checkStatus==true){
            $checkTarget.text("check_box"); //! 글자를 바꾸는 함수 = text
        }
        else{
            $checkTarget.text("check_box_outline_blank");
        }
    });
    // 실직적인 체크박스가 아니니까 실직적인 체크박스처럼 만들어야 됨
    // 반복적인 형태로 / 상황별로 작동이 되어야하는데 그게 var checkStatus=false; 임
    // 반대값을 적용해야 되는건데 그떄 부정연산자를 쓰기
    // (); 라고만 쓰면 안에있는 글자를 가져오기만 하고 (00); 글을 적으면 적은 글로 바꾸라는 뜻 = var();
}


// todo1 눈알 키고 끄기
// todo2 password -> text로 바꾸는 방법 : $(대상).attr("속성명-type","속성값-password");
function toggleTodo(){
    var $toggleTarget = $(".material-icons.toggleVisible");
    var $toggleInput = $("#userPW");
    var toggleStatus = false;
    $toggleTarget.click(function(){
        toggleStatus = !toggleStatus;
        if(toggleStatus == true){
            // 1 눈알 켜고 끄기 -
            $toggleTarget.text("visibility");
            // 2 password -> text : $(대상).attr("속성명-type","속성값-password");
            $toggleInput.attr("type","text");
        }
        else{
            $toggleTarget.text("visibility_off");
            $toggleInput.attr("type","password");
        }
    });
}


function tabUI(){
    $(".tabMenu li").click(function(){
        var activeTab=$(this).attr("data-tabNumb"); // data-tabNumb 값 가져오기
        $(".tabMenu li").removeClass("activated");
        $(this).addClass("activated");
        $(".tabPage").removeClass("activated");
        $("#"+activeTab).addClass("activated");
        // console.log(activeTab);
    });
}
// attr = attr의 값을 가져오고싶으면 attr의 이름을 적어야 값을 가져올 수 있음
// 그냥 attr이라고 적으면 값을 찾지 못함

// 이벤트가 일어난 당사자 = this(당사자) -> 얘가 속해있는 곳에서 작동된 당사자

function accControl(target){
    $(target).click(function(){
        $(this).toggleClass("active");
    })
}




