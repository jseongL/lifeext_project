document.addEventListener("DOMContentLoaded", () => {


    loadFavorites();



    const deleteAllBtn = document.getElementById("deleteAllBtn");



    if (deleteAllBtn) {


        deleteAllBtn.addEventListener("click", () => {


            deleteAllFavorites();


        });


    }


});







// 즐겨찾기 목록 불러오기

function loadFavorites() {


    const favoriteList = document.getElementById("favoriteList");



    if (!favoriteList) {


        return;


    }



    const favorites = JSON.parse(

        localStorage.getItem("favorites")

    ) || [];





    favoriteList.innerHTML = "";





    if (favorites.length === 0) {



        favoriteList.innerHTML = `


            <div class="favorite-card">


                <p class="favorite-quote">

                    저장된 명언이 없습니다.

                </p>


            </div>


        `;



        return;


    }







    favorites.forEach((item) => {



        const card = document.createElement("div");



        card.className = "favorite-card";



        card.innerHTML = `


            <p class="favorite-quote">

                "${item.quote}"

            </p>



            <p class="favorite-author">

                - ${item.author}

            </p>



            <p>

                📌 ${item.category}

            </p>



            <button onclick="removeFavorite(${item.id})">

                삭제

            </button>


        `;



        favoriteList.appendChild(card);



    });



}








// 개별 삭제

function removeFavorite(id) {


    let favorites = JSON.parse(

        localStorage.getItem("favorites")

    ) || [];





    favorites = favorites.filter((item) => {


        return item.id !== id;


    });





    localStorage.setItem(

        "favorites",

        JSON.stringify(favorites)

    );





    loadFavorites();



}








// 전체 삭제

function deleteAllFavorites() {


    const check = confirm(

        "모든 즐겨찾기를 삭제하시겠습니까?"

    );



    if (!check) {


        return;


    }





    localStorage.removeItem("favorites");



    loadFavorites();



}