$(function () {
    // modal
    
    const modalWrap = $("#modal");
    // $("#modal").find("button");
    const modalBtn = modalWrap.find("button");
    const listbbsEl = $(".lst-bbs li:first-child");
    // id modal을 modalWrap이라는 변수에 넣음

    modalWrap.removeClass("active");
    // 이벤트 시작 시 modal을 없애고 홈페이지 시작!

    // modal 열기
    // .lst-bbs li:first-child 를 클릭했을 때
    listbbsEl.on("click", function() {
        // #modal에 .active를 추가
        modalWrap.addClass("active");
        // addClass도 카멜표기법
    });
    
    // modal 닫기
    // #modal button 을 클릭했을 때 
    modalBtn.on("click", function() {
        // #modal에 .active를 삭제
        modalWrap.removeClass("active");
    });

    // tabs
    const tabEl = $(".tab-item");
    const tabTit = tabEl.find(".tit");

    // .tab-item 옆에 .on 삭제
    tabEl.removeClass("on");
    // .tab-item:first-child 에게 .on 추가
    // $(".tab-item:first-child").addClass("on");
    tabEl.first().addClass("on");

    // .tab-item .tit 을 클릭했을 때
    tabTit.on("click", function() {
        // .tab-item에 붙어 있는 .on 삭제
        tabEl.removeClass("on");

        // 방금 클릭한 나(this)의 부모(parent())에게 .on 추가
        $(this).parent().addClass("on");
    });


    // slide
    let now = 1;
    const slideEls = $(".lst-slide");
    let height = 100;
    // 변수 재선언하기 위해서 const아닌 let 사용
    // 0이 아닌 1, 100곱했을 때 나는 -100%를 원하기 때문에 

    // 3초 마다 실행
    setInterval(function () {
        slide();
    }, 3000);
    // 1000 = 1초 밀리세컨드

    // 슬라이드 기능 만들기
    function slide() {
        console.log("dd"); 
        // 조건문
        // now : 0 - 1번째 슬라이드
        // now : 1 - 2번째 슬라이드
        // now : 2 - 3번째 슬라이드
        // 참 : 만약 1, 2번째 슬라이드일 경우
        // 거짓 : 3번째 슬라이드일 경우 
        if (now < 3) {
            // 참 일 경우 
            // 다음 슬라이드로 이동
            // .lst-slide를 애니메이션(top: -300px)
            // 3초 후에 -100% 6초 후에 -200%
            slideEls.animate({ 
                top: height * now * -1 + "%", 
            });
        // 변수 재선언
        now = now + 1;
        } else{
            // 거짓 일 경우
            // 첫번째 슬라이드로 이동
            slideEls.animate({
                top: 0,
            });
            now = 1,
         }
    }
});
 