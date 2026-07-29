document.addEventListener("DOMContentLoaded", () => {


    requestNotificationPermission();



});







// 알림 권한 요청

function requestNotificationPermission() {


    if (!("Notification" in window)) {


        console.log("이 브라우저는 알림을 지원하지 않습니다.");

        return;


    }





    if (Notification.permission === "default") {



        Notification.requestPermission()

            .then((permission) => {


                if (permission === "granted") {


                    checkMorningNotification();


                }


            });



    } else if (Notification.permission === "granted") {


        checkMorningNotification();


    }


}








// 오전 명언 알림 확인

function checkMorningNotification() {


    const now = new Date();



    const hour = now.getHours();





    if (hour >= 7 && hour < 8) {



        showQuoteNotification();



    }


}








// 알림 표시

function showQuoteNotification() {



    const todayQuote =

        quotes[

            Math.floor(

                Math.random() * quotes.length

            )

        ];





    new Notification("🌞 LifeExt 오늘의 명언", {


        body:

            `"${todayQuote.quote}"\n\n- ${todayQuote.author}`,



        icon: "icons/icon-192.png"


    });



}