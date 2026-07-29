let currentQuote = null;


// 페이지 로드

document.addEventListener("DOMContentLoaded", () => {


    showRandomQuote();



    const nextBtn = document.getElementById("nextBtn");

    nextBtn.addEventListener("click", () => {

        showRandomQuote();

    });



    const favoriteBtn = document.getElementById("favoriteBtn");


    favoriteBtn.addEventListener("click", () => {


        addFavorite(currentQuote);


    });



    setupCategoryButtons();


});





// 랜덤 명언 출력

function showRandomQuote(category = "전체") {


    let filteredQuotes = quotes;



    if (category !== "전체") {


        filteredQuotes = quotes.filter((item) => {

            return item.category === category;

        });


    }



    if (filteredQuotes.length === 0) {

        return;

    }



    const randomIndex = Math.floor(

        Math.random() * filteredQuotes.length

    );



    currentQuote = filteredQuotes[randomIndex];



    document.getElementById("quote").textContent =

        currentQuote.quote;



    document.getElementById("author").textContent =

        "- " + currentQuote.author;



}







// 카테고리 버튼 설정

function setupCategoryButtons() {


    const categoryButtons = document.querySelectorAll(".category-btn");



    categoryButtons.forEach((button) => {



        button.addEventListener("click", () => {



            categoryButtons.forEach((btn) => {


                btn.classList.remove("active-category");


            });



            button.classList.add("active-category");



            const category = button.dataset.category;



            showRandomQuote(category);



        });



    });



}







// 즐겨찾기 저장

function addFavorite(quote) {


    if (!quote) {

        return;

    }



    let favorites = JSON.parse(

        localStorage.getItem("favorites")

    ) || [];





    const exists = favorites.some((item) => {


        return item.id === quote.id;


    });





    if (exists) {


        alert("이미 저장된 명언입니다.");

        return;


    }





    favorites.push(quote);



    localStorage.setItem(

        "favorites",

        JSON.stringify(favorites)

    );



    alert("즐겨찾기에 저장되었습니다.");



}