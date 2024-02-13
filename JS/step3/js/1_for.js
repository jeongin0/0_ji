/*
    ?for
    *특정구문을 정해진 횟수 만큼 반복해야 할 경우 사용하는 반복문.
    실무사용의 예
    1. 게시판의 게시글 목록 불러올 때
    2. 구글 맵, 네이버 맵 등의 정보를 출력 할 때
    3. 메뉴의 항목(관리자제어가능한) 출력 할 때
    4. 갤러리의 이미지 목록을 출력 할 때
    5. os 등의 파일 탐색기의 파일 목록 출력 할 때...

    *루프
    1. 초기식실행 > 2. 조건식 비교, 조건이 거짓일 경우 반복문 종료 > 
    3. 참일경우 이하 구문 실행 > 4. 증감부 실행 > 5. 2단계

for (var index = 0; index < 10; index++) {
    console.log(index);
    
}
*/

//  ! <단일 for문>

// *case.1 이름을 10번 출력하자
function namePrint10(){
    var userName="jeongin";
    for(var i=1; i<=10; i++){
        document.write(i+'. '+userName+'<br>');
    }
}
// 1. var 변수 선언
// 2. i로 1로 만들었음 -> 그리고 옆으로 전달해(비교판결, 판결식 = 구동해도 되느냐를 판단)->그럼 i가 1이 되니까 1과 10을 비교함 그럼 true가 떨어질거임
// 3. ture가 떨어지면 오른쪽으로 가는게 아니라 아래로 떨어짐(조건이 맞으면 실행시킴)
// 4. 숫자+문자+문자 식이면 그냥 문자로 처리됨
// 5. 그 다음이 i++로 들어감 그럼 i가 2가 되고 다시 아래로 떨어져서 반복적으로 실행됨
// 6. fales가 나오게 되면 함수가 끝남

// todo. 이름을 1000번 출력하기
function namePrint1000(){
    var userName="jeongin";
    for(var i=1; i<=1000; i++){
        document.write(i+'. '+userName+'<br>');
    }
}

// *case.2 1000번 출력될 이름에서 홀수번째만 출력
function namePrint500(){
    var userName="jeongin";
    for(var i=1; i<=1000; i+=2){
        document.write(i+'. '+userName+'<br>');
        // i에 숫자를 써주지 않으면 무한루프가 생김
    }
}

//  todo. 1-10까지 출력되는 반복문을 여러가지로 직접 짜보기
function answer1(){
    for(var i=1; i<=10; i++){
        document.write(i+'<br>');
        document.write((i+1)+'<br>');
    }
}
function answer2(){
    for (var i = 0; i<10; i++){
        document.write((i+1) + "<br>");
    }
}
function answer3(){
    for (var i=100; i<110; i++){
        document.write((i-99) + "<br>");
    }
}
function answer4(){
    for (var i = 10; i>=1; i--){
        document.write((11-i) +"<br>");
    }
}
function answer5(){
    for (var i = 1; i<=10; i++){
        document.write(i+"<br>");
    }
}

// *case.3 자신이 좋아하는 과일 4개를 배열로 배치하고, alert으로 출력
function favorFruit(){
    var array=["귤","포도","메론","딸기","수박"];  //? array(배열)->data들이 저장되는 공간
    // ? ["귤"] -> data[0]
    // 변수는 담으면 운반하는 앤데 귤을 보고싶으면 data0이 생긴거긴 한데 array[0]과 같은거임
    // 임시로 담는 공간으로 쓸 수 잇고 등등...이미지의 이미지들도 배열로 잡아놓을수있음
    // 저장되는건 번호가 발생되는데 0부터 시작됨
    // 저장되는 방식을 따로 저장하겠다 싶으면 에스큐엘..?을 함 잘 다뤄야 좋음 무조건
    // 아무것도 안적혔을 땐 빈 배열임 그냥 선언만 된 거임
    for(var i=0; i<array.length; i++){
        // console.log(i);
        alert(array[i]);
    }
    // 데이터에 숫자가 생기는데 index임
    // 0~3까지 있어서 4이하로 담음

    // 갯수 (변수).length li의 개수를 세줌

    // 모든 데이터는 0부터 시작함

    // let(건드릴수있는변수) / const(건드릴수없는변수) - 위에있는 변수(var)
}

// todo. 지금가지 배웠던 js단원명을 배열을 통해 출력
function arrayFor(){
    var data=["변수", "연산자", "형변환", "조건문 if", "조건문 switch", "반복문 while", "반복문 for"];
    // 0.변수,1.연산자,2.형변환,3.조건문 if.....출력되게
    for(var i=0; i<data.length; i++){
        document.write(i+'. '+data[i]+'<br>');
    }
}

// todo. 과제 0>첫번째, 1>두번째
// 1. 스위치문법 사용 switch
// 2. 배열 사용 array

function arrayFor1(){
    var data=["변수", "연산자", "형변환", "조건문 if", "조건문 switch", "반복문 while", "반복문 for"];
    var swapNumb='';
    for(var i=0; i<data.length; i++){
        swapNumb=i;
        switch(i){
            case 0:
                swapNumb = '첫';
                break;
            case 1:
                swapNumb = '두';
                break;
            case 2:
                swapNumb = '세';
                break;
            case 3:
                swapNumb = '네';
                break;
            case 4:
                swapNumb = '다섯';
                break;
            case 5:
                swapNumb = '여섯';
                break;
            case 6:
                swapNumb = '일곱';
                break;
            default:
                i = "x";
                break;
        }
        document.write(swapNumb + "번째 내용 = " + data[i] + '<br>');
    }
}

function arrayFor2(){
    var data=["변수", "연산자", "형변환", "조건문 if", "조건문 switch", "반복문 while", "반복문 for"];
    var data1=["첫","두","세","네","다섯","여섯","일곱"];
    for(var i=0; i<data.length; i++){
        document.write(data1[i]+'번째 내용'+' = '+data[i]+'<br>');
    }
}
// 배열은 서버에 데이터를 받아서 쓰는거라서 지금 하는건 서버에 이렇게 있다라는 가정으로 하는 거임
// 원래는 switch로 씀

// *case.4 continue
function forContinue(){
    for(var i=0; i<=10; i++){
        continue;
        document.write(i+'<br>');
        // 어둡게 처리되면 실행 못하는 규칙
        // break = 속하는 그룹을 중단시킴
        // continue = 위로 올려침 밑으로 내려가지 못함 / if문을 이용해서 걸러내는 상황을 만듦
        // if로 홀수인 상황을 만들어 놓으면 if가 돌면서 continue가 올려쳐버려서 짝수만 나오게 됨
        // 필터 정렬할 때 많이 씀(제외시키고 싶은 거)
    }
    document.write('최종 i = '+i+'<br>');
        // for가 완료가 되어야 (동기방식) 조건이 위배되면 최종i로 내려감
}

// *case.4-1 continue - 문제1
function continueEx(){
    let text='';
    for(let i=0; i<10; i++){
        if(i==3){
            continue;
        }
        text=text+i
    }
    console.log(text);  // 012456789
}

// *case.4-2 continue - 문제2
function runContinue(){
    var output=0;
    for(var i=1; i<=10; i++){
        if(i%2==1){
            continue;
        }
        output+=i;  //2
        console.log(output);  //2 6 12 20 30
    }
}

// *case.5 break
function forBreak(){
    for(var i=1; i<=10; i++){
        break;
        document.write(i+'<br>');
        // break는 만나는 즉시 죽는거임 그래서 바로 1이 출력
    }
    document.write('최종 i ='+i+'<br>'); //최종 i =1
}

// *case.5-1 break 문제
function breakEx(){
    var i=0;

    while(i<6){
        // while = 반복문 / 선언 증가를 같이 쓸 수 없는 
        if(i==3){
            break;
        }
        i=i+1;
    }
    console.log(i);  //3
    
}

// *case.5-2 break 문제
function runBreak(){
    for(var i=0; true; i++){ //for 무한반복 방법 ture; / 근데 무한반복은 for로 쓰지않고 while로 씀 while(ture)하면 끝
        alert(i+'번째 반복문');
        if(!confirm('계속 할래?')){ 
            // break가 구동되려면 if 는 ture = confirm 확인(ture)/취소()false
            // ture는 부정이 되려면 !
            break;
        }
        // todo. 확인을 누르면 계속 진행되고 최소를 누르면 중단
    }
}

// ! 다중 for

// *case.1 변질 피라미드
function halfPyramid(){
    var star='';
    for(var i=1; i<=10; i++){
        for(var j=0; j<i; j++){
            star+='*';
            // for문이 죽으면 중단됨
        }
        star+='<br>';
    }
    document.write(star);
    // 중첩 for를 여러개만들지 말고 위에를 단순하게 만들고 하기  
}
// 루프를 이중으로 

// todo. 역반절피라미드
function reverseHalfPyramid(){
    var star = '';
    for (var i = 10; i >= 1; i--) {//? 1. ifor = 10~1 까지 수행
        for (var j = 0; j < i; j++) { //? jfor = j가 i보다 작을때 까지 반복 수행 10,9,8,7,6....
            star += '*';//? 변수 star에 반복생성된 만큼 *을 넣음.
        }
        star += '<br>';//? ifor 만큼 <br>을 변수 star에 넣음.
    }
    document.write(star);
}
// 실행하기 전에 직접 머리속으로 생각하면서 시뮬레이션 돌리고 실행하기

// todo. pyramid 만들기 - 과제
function pyramid(){
    var star='';
    // * 반복시켜야 되는 대상 수 - &nbsp; , *, <br> / 만큼의 for문 작성 
    // ! 각 루프가 할당해야 하는 대상을 정확히 지정하기 (i loop, s loop, e loop ...)
    // * 한 번 반복이 완성 할 때 형태가 star 변수에 어떻게 당기는지 예측하면서 작성
    for (var i = 1; i <= 10; i++) { //? 1. ifor = 1~10 까지 수행
        for (var e = 10; e >= i; e--) { //? 2. efor = 10 ~ 1까지 수행
            star += '&nbsp;'; //?. 공백이 10개부터 1개까지 들어감.
        }
        for (var s = 0; s < 2*i-1; s++){ //? 3. sfor = i가 들어올때마다 홀수화 됨. (1,3,5,7,9,11,13,15,17,19)
            star += '*';//? 홀수화 된 s의 수치만큼 반복해서 *이 들어감.
        }
        star += '<br>';//? ifor 만큼 <br>을 변수 star에 넣음
    }
    document.write(star);
}
function pyramidCustom(n) {
    //?var n = 6; 매개변수시 밖으로 
   for (var i = 1; i <= n; i++) { //? 1~6. 초기 iloop시작.
       var s = "";
       for (var j = 1; j <= (2 * n - 1); j++) { //? 1~11. 초기 jloop 시작
           (j >= n + 1 - i && j <= n - 1 + i) ? s += "*" : s += " ";
           //? j가 6보다 크거나 같고 j가 6보다 작거나 같을때 *을 찍고 아닐땐 공백. loop.1 
           // (j >= n + 1 - i && j <= n - 1 + i) ? s += "*" : s += "&nbsp;";
       }
       console.log(s);
       // document.write(s + "<br>");
   }
}




