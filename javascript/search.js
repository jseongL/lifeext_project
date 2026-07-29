const searchInput = document.getElementById("searchInput");

const searchResults = document.getElementById("searchResults");




// 검색 이벤트

searchInput.addEventListener("input", () => {


    const keyword = searchInput.value.trim();



    if (keyword === "") {


        searchResults.innerHTML = "";


        return;


    }



    searchQuotes(keyword);



});







// 명언 검색

function searchQuotes(keyword) {


    const results = quotes.filter((item) => {



        return (

            item.quote.includes(keyword) ||

            item.author.includes(keyword) ||

            item.category.includes(keyword)

        );



    });



    displaySearchResults(results);



}







// 검색 결과 출력

function displaySearchResults(results) {


    searchResults.innerHTML = "";



    if (results.length === 0) {



        searchResults.innerHTML = `

            <div class="search-card">

                <p>검색 결과가 없습니다.</p>

            </div>

        `;



        return;


    }






    results.forEach((item) => {



        const card = document.createElement("div");



        card.className = "search-card";



        card.innerHTML = `


            <p>
                "${item.quote}"
            </p>


            <strong>
                - ${item.author}
            </strong>


            <small>
                ${item.category}
            </small>


        `;



        searchResults.appendChild(card);



    });



}