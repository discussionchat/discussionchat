var enjoyhint_steps = [
    // {
    //     // 0
    //     "next .chatroom-content-container":
    //         "사회자를 따라 주제에 대해 자유롭게 토론하시면 됩니다.",
    //     showSkip: false,
    //     nextButton: { text: "다음" },
    //     onBeforeStart: {
    //         function() {
    //             setTimeout(function() {
    //                 document.querySelector(
    //                     ".enjoy_hint_label"
    //                 ).style.transform = "translateX(-400px)";
    //                 document.querySelector(
    //                     ".enjoyhint_svg_wrapper"
    //                 ).style.transform = "rotateY(180deg) translateX(400px)";
    //                 document.querySelector(
    //                     ".enjoyhint_next_btn"
    //                 ).style.transform = "translateX(-400px)";
    //             }, 800);
    //         }
    //     }
    // },
    // {
    //     // 1
    //     "next .overview-content-wrapper":
    //         "이곳은 <b>토의의 개요</b>를 볼 수 있는<br> 탭입니다.",
    //     showSkip: false,
    //     nextButton: { text: "다음" }
    // },
    // {
    //     // 2
    //     "next .overview-tabs":
    //         "<b>두 단계</b>를 거쳐 토의가 이루어집니다. 현재 '<b>문제 분석</b>' 단계에 있습니다.",
    //     showSkip: false,
    //     nextButton: { text: "다음" }
    // },
    // {
    //     // 3
    //     "next #question0":
    //         "현재는 <b>흰색 배경</b>의 <br>'최상의 상태를 막는 원인은 무엇입니까?'라는 질문에 대해 <br>토의가 이루어지고 있습니다.",
    //     showSkip: false,
    //     nextButton: { text: "다음" }
    // },
    {
        // 4
        "next .chatroom-container":
            "이곳은 토의가 이루어질 <b>채팅창</b>입니다!",
        showSkip: false,
        nextButton: { text: "다음" },
        onBeforeStart: function() {
            setTimeout(function() {
                document.querySelector(".enjoy_hint_label").style.transform =
                    "translateX(-400px)";
                document.querySelector(
                    ".enjoyhint_svg_wrapper"
                ).style.transform = "rotateY(180deg) translateX(400px)";
                document.querySelector(".enjoyhint_next_btn").style.transform =
                    "translateX(-400px)";
            }, 800);

            // Array.from(document.querySelectorAll(".list-item-like")).forEach(function(ele) {
            //     ele.removeEventListener("click", countVote);
            // });

            // add some chats
            // var chats = Array.from(
            //     document.querySelectorAll(".chatroom-utterances-wrapper.hide")
            // );
            // for (const [i, ele] of chats.entries()) {
            //     setTimeout(function() {
            //         ele.classList.remove("hide");
            //         ele.scrollIntoView(false);
            //     }, i * 100);

            //     if (ele.classList.contains("evidence")) break;
            // }
        }
    },
    {
        // 1
        "key .chatbox-input-wrapper":
            "채팅 창에서 자유롭게 의견을 나눠보세요. <b>엔터</b>를 눌러 등록하실 수 있어요!",
        keyCode: 13,
        showSkip: false,
        onBeforeStart: function() {
            // setTimeout(function() {
            //     document.querySelector(".enjoy_hint_label").style.transform =
            //         "translateX(-400px)";
            //     document.querySelector(
            //         ".enjoyhint_svg_wrapper"
            //     ).style.transform = "rotateY(180deg) translateX(400px)";
            //     document.querySelector(".enjoyhint_next_btn").style.transform =
            //         "translateX(-400px)";
            // }, 800);

            // Array.from(document.querySelectorAll(".list-item-like")).forEach(function(ele) {
            //     ele.removeEventListener("click", countVote);
            // });

            // add some chats
            var chats = Array.from(
                document.querySelectorAll(".chatroom-utterances-wrapper.hide")
            );
            for (const [i, ele] of chats.entries()) {
                setTimeout(function() {
                    ele.classList.remove("hide");
                    ele.scrollIntoView(false);
                }, i * 100);

                if (ele.classList.contains("evidence")) break;
            }

            document.querySelector(".enjoyhint_svg_wrapper").style.transform =
                "";
            document.querySelector(".enjoyhint_next_btn").style.transform = "";

            // give a placeholder
            var example = "개인정보 유출의 위험성";
            Array.from(example).forEach(function(ele, i) {
                setTimeout(function() {
                    chatInput.value += ele;
                }, i * 50);
            });

            chatInput.focus();
        }
    },
    {
        // 2
        event: "click",

        selector: ".evidence + .chatroom-utterances-wrapper .btn-add",
        description:
            "좋은 의견이 있다면, 모든 사람들이 볼 수 있도록 후보로 등록해보세요! <br>특정 메시지 위에 마우스를 두면 오른쪽에 나타나는 <b>'후보 등록'</b> 버튼으로 등록하실 수 있어요! ",
        showSkip: false
    },
    // {
    //     // 7
    //     "next .overview-section-container.current": "후보로 등록이 되었네요!",
    //     showSkip: false,
    //     nextButton: { text: "다음" }
    // },
    {
        // 3
        "key .input-list-new":
            "혹시 필요하면 직접 입력할 수도 있습니다. <b>엔터</b>를 눌러 원인을 입력해보세요!",
        keyCode: 13,
        showSkip: false,
        onBeforeStart: function() {
            var example = "데이터 수집 가이드라인 부족";
            Array.from(example).forEach(function(ele, i) {
                setTimeout(function() {
                    input.value += ele;
                }, i * 50);
            });

            input.focus();
        }
    },
    {
        // 4
        "custom a.list-item-like .current":
            "맘에 드는 의견이 있다면 손가락 버튼을 눌러 <b>투표</b>를 해보세요😃 중복 투표가 가능합니다.",
        // event: "vote",
        showSkip: false,
        nextButton: { text: "다음" },

        onBeforeStart: function() {
            Array.from(document.querySelectorAll(".list-item-like")).forEach(
                function(ele) {
                    ele.addEventListener("click", function(e) {
                        if (
                            enjoyhint_instance.getCurrentStep() == 4 ||
                            enjoyhint_instance.getCurrentStep() == 3
                        )
                            enjoyhint_instance.trigger("next");
                    });
                }
            );
        }
    },
    // {
    //     // 10
    //     "key .chatbox-input-wrapper":
    //         "사회자의 다음 단계로 넘어가겠냐는 제안에<br><b>엔터</b>를 눌러 <b>답변</b>해보세요!",
    //     keyCode: 13,
    //     showSkip: false,
    //     onBeforeStart: function() {
    //         // add some chats
    //         var chats = Array.from(
    //             document.querySelectorAll(".chatroom-utterances-wrapper.hide")
    //         );
    //         chats.forEach(function(ele, i) {
    //             setTimeout(function() {
    //                 ele.classList.remove("hide");
    //             }, i * 100);
    //         });

    //         // give a placeholder
    //         var example = "네, 알겠습니다!";
    //         Array.from(example).forEach(function(ele, i) {
    //             setTimeout(function() {
    //                 chatInput.value += ele;
    //             }, i * 50);
    //         });

    //         chatInput.focus();
    //     }
    // },
    {
        // 11
        "next .overview-wrapper":
            "참여자 튜토리얼이 끝났습니다. 사회자 튜토리얼로 들어가볼까요?",
        showSkip: false,
        nextButton: { text: "네!👍🏻" },
        onBeforeStart: function() {
            setTimeout(function() {
                var newCurrent = document.querySelector(
                    ".overview-section-container.current"
                );
                var content = "";
                newCurrent.classList.remove("current");
                Array.from(
                    newCurrent.querySelectorAll(".section-item-text")
                ).forEach(function(ele, i) {
                    content += '<div class="section-list-item';
                    if (i == 0) content += " active";
                    content += '">' + ele.innerText + "</div>";
                });
                newCurrent.querySelector(
                    ".overview-section-list"
                ).innerHTML = content;

                newCurrent = document.querySelector(
                    "#question0 .overview-section-container.later"
                );
                newCurrent.classList.add("current");
                newCurrent.querySelector(".overview-section").innerHTML +=
                    '<div class="overview-section-list"><div class="input-container"> <input class="input-list-new" type="text" placeholder="증거를 입력해보세요"> </div> </div>';

                let addTopicBtn = document.querySelector(".pseudo");
                if (addTopicBtn)
                    document
                        .getElementById("question0")
                        .insertBefore(
                            addTopicBtn,
                            newCurrent.nextElementSibling
                        );
            }, 1000);

            document.querySelector(".enjoyhint_svg_wrapper").style.transform =
                "";
            document.querySelector(".enjoyhint_next_btn").style.transform = "";
        }
    }
    // {
    //     // 12
    //     "click #step1": "'해결책 토의' 단계를 <b>클릭</b>해서 미리 살펴보세요!",
    //     showSkip: false
    // },
    // {
    //     // 13
    //     "next #question1":
    //         "'해결책 토의' 단계에서<br>토의자들이 답을 찾아나가야 할 질문들입니다.<br><b>질문 목록을 참고하며 채팅에 참여</b>해주시면 됩니다.",
    //     showSkip: false,
    //     nextButton: { text: "다음" }
    // },
    // {
    //     // 14
    //     "click #step0":
    //         "다시 '문제 분석' 단계로 돌아가 볼까요?<br>'문제 분석' 단계를 <b>클릭</b>하세요.",
    //     showSkip: false
    // },
    // {
    //     // 15
    //     "next .prev:first-child":
    //         "맨 처음 토의가 시작되면 <br><b>채팅을 통해 서로 간단히 인사</b>를 나누시면 되겠습니다. :)",
    //     showSkip: false,
    //     nextButton: { text: "종료" },
    //     onBeforeStart: function() {
    //         document.querySelector(".enjoyhint_svg_wrapper").style.transform =
    //             "";
    //         document.querySelector(".enjoyhint_next_btn").style.transform = "";
    //     }
    // }
    // {
    //     // 16
    //     "next .chatroom-time-container":
    //         "제한 시간은 20분입니다. 여기에 <b>경과 시간</b>이 표시가 됩니다.<br><b>20분 동안 '해결책 토의' 단계까지</b> 마치는 것이 목표입니다.",
    //     showSkip: false,
    //     nextButton: { text: "종료" },
    //     onBeforeStart: function() {
    //         document.querySelector(".enjoyhint_svg_wrapper").style.transform =
    //             "";
    //         document.querySelector(".enjoyhint_next_btn").style.transform = "";
    //     }
    // }
];

init();
