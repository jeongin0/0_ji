// 내가 원할 때만 나오게 하기 위해 함수를 만드는 방법을 알아야 됨

function runAlert(){
    alert("hello?");
}

// 1. 함수를 선언하기
// 2. 이름 짓기
// -> runAlert 이라는 함수를 지음
// () 함수를 담을 그릇이 필요함 함수가 실행될 수 있는 근거를 만들어주는거임 괄호가
// 적립해 놓은 약속같은 거임 이름이나 괄호는 크게 의미 없음 그냥 실행식임
// ; 종결의 의미(세미콜론)

function runWrite(){
    document.write('hi' + '<br>' + 'js..!');
}
// document (.접근연산자) <~에> body를 지칭함 문서를 기준으로 나옴 

function runLog(){
    console.log('hi? js!');
}
// console에 텍스트를 보낸거야 body를 건드리지않고 실행탭에서 볼 수 있음 write는 body를 건드림
// write랑 log를 바꿔서 쓸 수 없음 지정된 함수임 

/* checktarget 점검할 대상을 넣어주는 거임 */