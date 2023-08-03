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

    // 3초 마다 실행
    setInterval(function () {
        slide();
    }, 3000);
    // 1000 = 1초 밀리세컨드

    function slide() {
        console.log("dd");
        // .lst-slide를 애니메이션(top: -300px)
        // 3초 후에 -100% 6초 후에 -200%
        $(".lst-slide").animate({ 
            top: 100 * now * -1 + "%", 
        });
    }
});
 