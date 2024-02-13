/*
    ? function (함수)

    기존 반복문의 유지보수가 어려운 문제(여러개의 반복문의 각기 다른 value를 수정하기 등..),
    중복코드가 많은 문제를 근본적으로 해결하여 코드의 재 사용 및 중복 제거,
     유지보수의 용이성을 확보하기 위한 수단.
*/
// *case.1 필요성
function helloFunc(){
    var comment="hi";
    document.write(comment,"<br>");
}

//*case.2 매개변수(parameter)가 있는 함수 만들기
//? 함수 내 정해진 변수의 value(값)을 변경하여, 기존의 함수가 실행된 이후 접근이 불가한 부분을 해결하기 위함
function sumParam(numb1,numb2){
    var result=numb1+numb2;
    alert("두 수의 합은 = "+result);
    // 매개변수를 선언만하고 초기화 하지 않았을 때 = undefined
    // undefined+undefined 말이 안 되는 것 -> 그래서 오류가 남
    //  , 를 만들게 되면 따로 ㅈㅣ정됨
    // 매개변수 == 고정인자 / 고정변수 == 갯수가 정해짐
}

// *case.3 arguments(가변-변할 수 있는 인자) = 매개변수의 자리가 없어도 있는거처럼
/*
    ? arguments(배열같지만 배열은 아닌)

    *arguments 객체(object)는 모든 함수 안에서 사용하는 지역변수 (장점)
    지역변수 = 함수 안에서 사용되는 함수
    *arguments를 이용해서 함수 내 인수들을 참조 할 수 있고 이 객체의 함수에 전달된 각 인수항목을 포함한다
    -> 함수 안에서도 인자로 들어온 것들을 참조할 수 있고 바깥쪽에서 안으로 전달된 것들도 안에서 참조할 수 있다는 얘기
    ->arguments가 없어도 가동할 수 있다는 예기 결정은 console에서 숫자를 넣어서 하니까 
    *단, arguments는 array와 비슷해보이지만 length를 구하는 방식을 제외하고 array와 다르다 (단점?)
    *배열이 필요하다면 변환하여 사용할 수는 있다(배열을 의미하는 건 아님)
 */
function sumAll(){
    console.log(typeof(arguments)+':'+arguments.length);
    // 가변인자는 ()안에가 변할 수 있는데 그걸 잡아주는거고 
    var willReturn=0;
    for(var i=0; i<arguments.length; i++){
        willReturn+=arguments[i];
        // [i] = 0번
    }
    console.log(willReturn);
}
// 형태 바꿔서 해봄
function sumAllEX(){
    var willReturn=0;
    for(var i in arguments){ //? for in loop는 ie9이하 작업 불가
        willReturn+=arguments[i];
        // 이크먼스티피..?(in 저거 )
    }
    return willReturn;
}

// *case.4 "자신의 이름"의 나이는 "자신의 나이"세 입니다 를 arguments로 만들어보기
function showInfo(){
    console.log("0번방 = "+arguments[0]);
    console.log("1번방 = "+arguments[1]);
    alert(arguments[0]+"의 나이는 "+arguments[1]+"입니다.");
    // arguments는 단독으로 사용할 때 많이 씀 
    // 예외가 있을 때를 
}
/*
    ? ★ return (리턴) 

    * 함수 내부는 함수라는 범위 안에 갇히기 때문에, 한번 실행되면 함수 외부에서 접근 불가.
    * 이 때 매개변수를 활용하면 함수 내부로 data를 전달 할 수 있는데, return value는 이와 반대 되는 값.
    * 즉, 매개변수 값이 함수 외부에서 내부로 들어오는 입력 부라면, 
    * 리턴값은 함수 내부에서 처리한 결과를 함수 외부로 전달하기 위해 사용하는 출력 부.
    !ex.1 함수f(x)안에 넣는 값이 매개변수, 결과로 나오는 x*x 가 리턴값.
        function f(x) { return x * x; }
        alert(f(3));
    !ex.2 alert에서 매개변수를 두개를 선언하면 추가된 매개변수를 무시한다.
    //*(매개변수가 초과 됐을 시) 또한 원래 함수의 매개변수보다 적게 입력하면 undefined를 출력한다.
        alert('기존매개변수', '추가매개변수');
        prompt('기존매개변수');

        함수지향적 프로그램
        객체지향적 프로그램

        호출부 리턴

        이해 하나도 못 함
*/
function sumReturn1(num1,num2){
    var result=num1+num2;
    return result;
    // 실행된 위치로 값을 줌
}
function infiniteSum(){
    var sum = 0; //? sum 변수에 0 선언및초기화
    var count = 1; //? count 변수에 1  선언및초기화
    while(true){ //? 무한반복
        var value = parseInt(window.prompt("숫자만 입력해라.")); //? prompt로 입력받은 문자를 정수형변환. -> value변수에
        if(value ==0){ //? 만약에 위 value가 0과 같다면
            document.write("종료."); //? body에 종료 메시지 출력
            return; //? - 함수 즉시 종료
        }
        sum += value; //? if 조건에 해당하지 않는다면 현재 sum 변수에 입력된 value를 더해서 대입하라.
        document.write(count + ". " + sum + "<br>"); //? body에  1. xx(sum) <br> 를 출력해라.
        count++; //? 현재 count 변수를 증가시켜라
    }
    document.write("총 " + count + "번 실행함."); //? - 함수 즉시 종료됨으로 인하여  실행 안됨.
}
// break를 썻을 때는 마지막 도큐먼트가 실행되는데 return은 안 나왔음 이유는?
// 브레이크는 속해잇는 걸 중단시킴 중단시킬 수 있는 건 while뿐인거임
// 근데 리턴은 호출한 위치로 값을 보내는건데 지금은 반환할 값이 없는 상태임
// 함수처리가 끝낫을 때 값을 가지고 나가는 건데 지금 리턴은 가지고 갈 함수가 없어서 마지막 도큐먼트가 안 나온 거임
// 리턴만 적으면 함수부 종료 를 뜻 함 값을 지정하고 리턴을 하면 값을 이동해라 라는 뜻
// 기본 동작은 안 바뀌고 값이 달라질 뿐

// todo.1 구구단 출력을 함수로 만들기
function printGugudan(numb){
    for(var i=2; i<=numb; i++){
        document.write(i+"단 출력", "<br>");
        for(var m=1; m<=numb; m++){
            document.write(i+'x'+m+'='+(i*m),"<br>");
        }
        document.write("<br>");
    }
}

// todo.2 다음 실행구문으로 전달받은 매개변수로 계산하여 결과를 출력하는 함수 만들기
function calculator(op,numb1,numb2){
    var result='';
    switch(op){
        case "+":
            result=numb1+numb2;
            break;
        case "-":
            result=numb1-numb2;
            break;
        case "*":
            result=numb1*numb2;
            break;
        case "/":
            result=numb1/numb2;
            break;
        default:
    }
    return result;
}

// todo.3 위의 예제에 추가로 사칙연산 부분을 함수로 변환하여 편하게 사용할 수 있게 만들기
function calculator2(op,numb1,numb2){
    var result='';
    switch(op){
        case "+":
            result= add(numb1,numb2);
            break;
        case "-":
            result=sub(numb1-numb2);
            break;
        case "*":
            result=mul(numb1*numb2);
            break;
        case "/":
            result=div(numb1/numb2);
            break;
        default:
    }
    return result;
}
function add(numb1,numb2){
    var result = numb1+numb2;
    return result;
}
function sub(numb1,numb2){
    var result=numb1-numb2;
    return result;
}
function mul(numb1,numb2){
    var result=numb1*numb2;
    return result;
}
function div(numb1,numb2){
    var result=numb1/numb2;
    return result;
}
// 매개변수는 변수 안에서는 변수 이름을 지켜서 써야되지만 다른 변수에 끌어다 쓸 때의
// 변수는 자리 지정이라서 변수 이름이 다르게 들어갈 수 있음

// *case.5 함수를 변수에 담기
function hello(name){
    console.log(name+"환영합니다.");
}
var func=hello;
// 매개변수자리에 함수를 담을 수 있음

// *case.6 매개변수 값으로 함수 사용하기
function hi1(){
    console.log("hello");
}
function hi2(){
    console.log("안녕");
}
function execute(func){
    func();
}
// 실행식 = ();

// *case.7 button click 시 매개변수 값으로 넘긴 함수 호출하기
function welcome(){
    alert("환영합니다.");
}
$(function(){
    $("#runEx7").click(welcome); //기명함수(이름을 기재한 함수) / function(){} 익명함수
});

// 기명함수는 한칸 띄어서 이름을 지어줌
// 익명함수는 ()앞에 띄어쓰지 않음

// *case.8 1초마다 매개변수 값으로 넘긴 익명함수 호출
// setInterval(실행될 함수,간격의 기준이 되는 시간)
function loopStart(){
    setInterval(function(){
        document.write("hi");
    },1000); //? m/s기준이라서 1초가 1000
}
// setInterval 타임클래스 / 클리어인터벌 이라는 인터벌을 멈출 수 있는 함수가 따로 있음 지금은 멈출 수 없어
// 익명함수는 실행할 수는 있는데 () 안에 함수를 넣으면 함수가 구동되는거임
// 익명함수는 한 번만 쓸 수 있을 때만 쓰는 거임 
// ex) 저장함수는 익명함수가 아니어도 됨 저장이라는 행위가 어디서든 일어나는 행위인데 보안도 겹쳐있어서 방법이 달라지는 거임
// 익명함수는 일회성 - 기준을 잘 잡고 함수를 만들어야 됨

// *case.9 함수를 매개변수로 전달받아 반복호출하기
function callFunctionTenTimes(orderFunction){
    for(var i=0; i<10; i++){
        orderFunction();
    }
}

// todo. 시용하기 불편한 상태인 현 상태를 편하게 기명수를 활용하여 해결
function justFunction(){
    document.write("hello");
}

// *fin returnValue로 함수 사용하기
function createHello(){
    function hello(user){
        document.write(user+' welcome');
    }
    return hello;
    // 리턴은 자기가 속해있는 함수가 실행될 위치로 데리고 있는 애를 보내는 것
}
var result=createHello();
// 지금 result에는 function hello가 들어있음 왜냐면 return이 hello함수를 보내기 때문에

// 함수는 원래 폐쇄적인 공간인데(갇혀있는 함수)
// 근데 함수안에 함수를 넣는다는 것은 실행할 수 있는 방법이 없어
// 페러리턴? / 리턴 을 알아야 함수를 할 수 있음 


