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
            return (movie.genres.includes(qurey) && movie.vote_average >= qurey1 && new Date(movie.release_date).getFullYear() === qurey2 && movie.original_language.includes(qurey3))
        });
        Displayresult(result)

    }

    function Displayresult(result) {
        list.innerHTML = ""
        result.forEach(function (movie) {

            var tr = document.createElement('tr');
            var td1 = document.createElement('td');
            var td2 = document.createElement('td');
            var td3 = document.createElement('td');
            var td4 = document.createElement('td');
            var td5 = document.createElement('td');
            var td6 = document.createElement('td')

            var text1 = document.createTextNode(`${movie.id}`);
            td2.innerHTML = `<img src=${movie.poster_path}/> ${movie.title}`;
            var text3 =document.createTextNode(`${movie.original_language}`)
            var text4 = document.createTextNode(`${movie.genres}`);
            var text5 = document.createTextNode(`${movie.vote_average}`);
            var text6 = document.createTextNode(`${movie.release_date}`);



            td1.appendChild(text1);
            td3.appendChild(text3);
            td4.appendChild(text4);
            td5.appendChild(text5);
            td6.appendChild(text6)


            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(td4);
            tr.appendChild(td5);
            tr.appendChild(td6)
            list.appendChild(tr);

        });
    }

    btn.addEventListener("click", search);


})();