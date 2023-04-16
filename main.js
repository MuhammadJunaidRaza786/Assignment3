// fetch('./data.json')
// .then(response => response.json())
// .then(data => {
//     console.log(data)
// })
(async function () {
    const response = await fetch("./data.json")
    const data = await response.json()

    const genreinput = document.getElementById("genre")
    const ratinginput = document.getElementById("rating")
    const yearinput = document.getElementById("year")
    const languageinput = document.getElementById("language")
    const btn = document.getElementById("submit")
    const list = document.getElementById("recommendations")

    function search() {
        const qurey = genreinput.value
        const qurey1 = Number(ratinginput.value)
        const qurey2 = new Date(yearinput.value).getFullYear()
        const qurey3 = languageinput.value

        const result = data.filter(function (movie) {
            return (movie.genres.includes(qurey) && movie.vote_average >= qurey1 && new Date(movie.release_date).getFullYear() == qurey2 && movie.original_language.includes(qurey3))

        });
        Displayresult(result)

    }

    function Displayresult(result) {
        list.innerHTML = ""
        result.forEach(function (movie) {
            const movieElement = document.createElement("div");
            movieElement.classList.add("movie");

            const titleElement = document.createElement("h2");
            titleElement.textContent = movie.title;

            const genreElement = document.createElement("p");
            genreElement.textContent = `Genre: ${movie.genres}`;

            const ratingElement = document.createElement("p");
            ratingElement.textContent = `Rating: ${movie.vote_average}`;

            const yearElement = document.createElement("p");
            yearElement.textContent = `Year: ${movie.release_date}`;

            const languagesElement = document.createElement("p");
            languagesElement.textContent = `Languages: ${movie.original_language}`;

            movieElement.appendChild(titleElement);
            movieElement.appendChild(genreElement);
            movieElement.appendChild(ratingElement);
            movieElement.appendChild(yearElement);
            movieElement.appendChild(languagesElement);

            list.appendChild(movieElement);

        });
    }

    btn.addEventListener("click", search);

    // data.forEach(function (movie) {
    //     const item = movie.original_language == "All"
    //     console.log(item)
    // })

})();