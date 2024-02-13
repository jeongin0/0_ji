$(document).ready(function(){
    tabMenu("#tabMenuDepth0 li");
    tabMenu("#tabMenuDepth1 li");
    // tabMenu("#tabMenuDepth2 li");
});
function tabMenu(tabNumb){
    var $selectMenu=null; //? null = element(tag) 태그를 넣을 예정일 때 null 선언 함
    $(tabNumb).click(function(){
 // ! closureEffect(function) - 클로저함수 = 함수가 실행된 이후 내부 값을 외부로 보내 사라지지 않게 함
        if($selectMenu !=null){  // ? = 대상이 담긴 상태(#tabMenuDepth0 li 중 하나가 담긴 상태)
            $selectMenu.removeClass("activated");
        }
        $selectMenu=$(this);  // ! 이벤트가 일어난 당사자를 짚는 거 this
        $selectMenu.addClass("activated");  
        // * 클릭이 일어난 당사자를 저장해서 취소시키는 걸 만듦 클릭을 안 해도 저장이 돼..?
        // 외부변수에 값을 저장해서 그 값이 사라지지 않고 진행되는 함수 = 클로저 함수
    }); 
}
// 한개의 화면에서 탭메누가 여러개면 다 따로 만들어야 되는데 그럴 때 이렇게 하는 거임

// ! 한개의 함수로 다중을 제어할 수 있는 예제