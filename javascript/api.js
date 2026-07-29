const aiBtn = document.getElementById("aiBtn");



if (aiBtn) {


    aiBtn.addEventListener("click", () => {


        getAIQuote();


    });


}







// AI 명언 요청

async function getAIQuote() {


    const quoteElement = document.getElementById("quote");

    const authorElement = document.getElementById("author");





    quoteElement.textContent = "AI가 새로운 명언을 생각하고 있습니다...";

    authorElement.textContent = "";





    try {



        const response = await fetch("/api/quote", {


            method: "POST",


            headers: {


                "Content-Type": "application/json"


            },


            body: JSON.stringify({


                request: "오늘 하루 힘이 되는 명언을 만들어줘"


            })


        });







        const data = await response.json();







        quoteElement.textContent = data.quote;



        authorElement.textContent =

            "- " + data.author;







    } catch (error) {



        console.error(error);



        quoteElement.textContent =

            "AI 명언을 가져오지 못했습니다.";



        authorElement.textContent =

            "잠시 후 다시 시도해주세요.";

    }



}