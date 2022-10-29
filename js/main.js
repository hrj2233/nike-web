$(function () {
    $("body").mousemove(function (e) {
        xVal = e.clientX - $(".cursor").width() / 2;
        yVal = e.clientY - $(".cursor").height() / 2;
        gsap.to(".cursor", {
            x: xVal,
            y: yVal
        });
    });

    $("a").mouseover(function (e) {
        gsap.to(".cursor", {
            scale: 3,
            duration: 0.1
        });
    });

    $("a").mouseleave(function (e) {
        gsap.to(".cursor", {
            scale: 1,
        });
    });

    $(".dept1").click(function (e) {
        e.preventDefault();

        $(this).parent("li").toggleClass("on");

    });

    $(".curr_lang").click(function (e) {
        e.preventDefault();

        $(this).parent(".lang").toggleClass("on");
    });

    let swiperOne = new Swiper(".slide01", {
        effect: "fade",
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        speed: 1000,
        loop: true,
    });

    let motion01 = gsap.timeline({});

    motion01.fromTo(".sc_promise .inner .group_list ul", {
        yPercent: 20
    }, {
        yPercent: -70
    });
    ScrollTrigger.create({
        animation: motion01,
        trigger: ".sc_promise",
        start: "top top",
        end: "+=250%",
        // markers: true,
        scrub: 1,
        pin: true
    });

    $(".sc_promise .inner .group_list ul li").each(function (index, item) {
        ScrollTrigger.create({
            trigger: item,
            start: "top 50%",
            end: "bottom 70%",
            // markers: true,

            onLeave: () => {
                $(this).removeClass("on");
                // idx = $(this).index();
                $(".sc_promise .inner .group_desc ul li").removeClass("on");
            },
            onLeaveBack: () => {
                $(this).removeClass("on");
            },
            onEnter: () => {
                $(this).addClass("on");
                // eq는 선택
                idx = $(this).index();
                $(".sc_promise .inner .group_desc ul li").removeClass("on");
                $(".sc_promise .inner .group_desc ul li").eq(idx).addClass("on");
            },
            onEnterBack: () => {
                $(this).addClass("on");
                idx = $(this).index();
                $(".sc_promise .inner .group_desc ul li").removeClass("on");
                $(".sc_promise .inner .group_desc ul li").eq(idx).addClass("on");
            }
        });
    }),

        $(".sc_approach .wrap").mousemove(function (e) {
            x = e.offsetX;
            y = e.offsetY;
            console.log(x + "//" + y);
            // 분기점
            // 조건문 변수쓰기
            //(x변수 써서 숫자 말고.)
            if (x < 214 && y < 133) {
                x = 10;
                y = 10;
            } else if (x < 214 && y > 133) {
                x = -10;
                y = -10;
            } else if (x > 314 && y > 233) {
                x = -10;
                y = 10;
            } else if (x > 314 && y < 233) {
                x = 10;
                y = -10;
            } else {
                x = 0;
                y = 0;
            }
            gsap.to($(this), {
                rotateX: x,
                rotateY: y
            });

            //위
            //아래로
            //왼쪽
            //오른쪽 

            //왼쪽 상단           //오른쪽상단 
            // rotateX:10(-)
            // rotateX:10(-)
            // 왼쪽 하단          //오른쪽 하단
            // rotateX:10(+)
            // rotateX:10(+)
        });

    $(".sc_approach .wrap").mouseleave(function (e) {
        gsap.to($(this), {
            rotateX: 0,
            rotateY: 0
        });
    }
    );
    let motion02 = gsap.timeline({});

    motion02.addLabel("label01")
        .fromTo(".text01", { xPercent: -20 }, { xPercent: 10 }, "label01")
        .fromTo(".text02", { xPercent: 20 }, { xPercent: -10 }, "label01");

    ScrollTrigger.create({
        animation: motion02,
        trigger: ".sc_story > .img_wrap h2",
        start: "top 100%",
        end: "bottom top",
        // markers: true,
        scrub: 1,
    });


    let motion03 = gsap.timeline({});
    motion03.fromTo(".bg_news", { yPercent: 0 }, { yPercent: 180 });

    ScrollTrigger.create({
        animation: motion03,
        trigger: ".bg_news",
        start: "top 50%",
        end: "bottom top",
        // markers: true,
        scrub: 1,
        onLeave: () => {
            $(".bg_news span").removeClass("on");
        },
        onLeaveBack: () => {
            $(".bg_news span").removeClass("on");
        },
        onEnter: () => {
            $(".bg_news span").addClass("on");
        },
        onEnterBack: () => {
            $(".bg_news span").addClass("on");
        }
    });

    let motion04 = gsap.timeline({});
    motion04.fromTo(".slide03", { xPercent: 0 }, { xPercent: -20 });

    ScrollTrigger.create({
        animation: motion04,
        trigger: ".slide03",
        start: "top 50%",
        end: "bottom top",
        // markers: true,
        scrub: 1,
    });
});