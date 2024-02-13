/*
    ? 형변환
    * JS - "10" + "10" = 1010 / 사람 - "10" + "10" = 20 - 이런 인식차를 해결하기위함.
    ! 암시적형변환 - js Engine이 자동으로 변환.  /  명시적 형변환 - 개발자가 직접 지정 변환.

    ? 암시적 형변환 CASE
    * 1. 숫자 + 문자 = 문자.
    * 2. 불린(ture==1, fales==0) + 숫자 = 숫자.
    * 3. 불린(ture==1, fales==0) + 문자 = 문자.
    
    ? 명시적 형변환
    * method 나 lib Core func를 이용하여 강제로 숫자 -> 문자 로 변환.
*/
/*
    십 으로 안 읽고 일영 이라고 읽음 
    프로그램 언어는 1+0은 연산자체 불가능이거나 10으로 나옴

    자바는 일단 처리를 해주고 사람이 잘못된 걸 인지해야 되는 언어임
*/
// *case.1 자신의 나이를 입력받고 20을 더한 값 출력
function agePlus(){
    var age = window.prompt('나이입력'); //? 임시로 입력 받는 법 - prompt 함수는 문자열로 반환
    // age += 20; -> 처리과정이 없이 20을 더하라는 거라서 잘못된 결과가 나옴
    // age = age + 20; -> 변수가 하나임
    var result = parseInt(age)+20;
    console.log(result);
}

// *case.2 강제 숫자 -> 문자형 변환
function forcedString(){
    var a='30';
    var result=1+a+10;
    console.log(result);
}

// *case.3 강제 불린 -> 숫자형 변환
function forcedNumber(){
    var result=2+true; //? ture==1, fales==0 
    console.log(result);
}

// *case.4 강제 불린 -> 문자형 변환
function forcedString2(){
    var a='2'+true;
    console.log(a);
}

// *case.5 test1에 들어잇는 숫자를 문자로 명시적 형변환
/*
    ? String - 전역함수 > 예전부터 있던 애들(앞자가 대문자)
    * String(value); - 문자형으로 변환

    ? .toString() - 꼬리함수 > 나중에 태어난 애들(cap방식의 문자표현)
    * number.toString(); - 문자형(진수) 변환

    ? .toFixed() - 꼬리함수
    * number.toFixed(); - 실수문자형 변환 - 소수점자리 반올림
 */

function stringNumb(){
    var test1=15;
    console.log('변환전 : '+typeof(test1)+' = '+test1);
    var result=String(test1); //문자를 강제 변환
    console.log('변환후 : '+typeof(result)+' = '+result);
}
function stringtoNumb(){
    var test1=15;
    var result=test1.toString(); //진수가 필요한 문자형태를 변환할 수 있다(?)
    console.log(typeof(result)+' = '+result);
}

// *case. 5-1 background-color random
function bgColorRandom(){
    setInterval(function(){
        var bgColor = Math.random()*0xfff;
        console.log(bgColor);
        bgColor = parseInt(bgColor);
        console.log(bgColor);
        bgColor = bgColor.toString(16);
        console.log("#" + bgColor);
        var hexCode = "#" + bgColor;
        $("body").css("background-color", hexCode);
    },1000);
}

// *case.6 test에 들어잇는 문자를 숫자로 형변환
/*
    ? Number
    * Number(value); - 정수, 실수 구분없이 형변환.

    ? parse
    * 1. parseInt(value); - 정수형변환
    * 2. parseFloat(value); - 실수형변환
*/
function numbString(){
    var test='300.15625';
    console.log('변환 전 : '+typeof(test)+' = '+test);
    var result=parseInt(test)+10;
    console.log('변환 후 : '+typeof(result)+' = '+result);
}

// todo. -1 암시적형변환 이용해보기
function todo1(){
    var test = 100;
    var result = test + "";
    console.log(typeof(result) + " = " + result);
}
// todo. -2 String 이용해보기
function todo2(){
    var test = 100;
    var result = String(test);
    console.log(typeof(result) + " = " + result);
}
// todo. -3 toString 이용해보기
function todo3(){
    var test = 100;
    var result = test.toString();
    console.log(typeof(result) + " = " + result);
}
// todo.2 문자 형을 숫자 형으로 변환하여 연산이 가능하게 만들기.

// todo. -1 parse 이용해보기
function todo4(){
    var test = '100.51';
    var result = parseFloat(test) + 150 + parseInt('20');
    console.log(typeof(result) + " = " + result);
}
// todo. -2 Number 이용해보기
function todo5(){
    var test = '100.51';
    var result = Number(test) + 150 + Number('20');
    console.log(typeof(result) + " = " + result);
}
