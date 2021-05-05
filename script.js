// $('#button-search').on('click', function() {
//     $('header').addClass('headernew');
//     $('form').addClass('formnew');
//     $('h1').addClass('titlenew');
//     $('#button-search').addClass('submitnew');
// })


let letters = document.getElementsByClassName('letter')
const timer = ms => new Promise (res => setTimeout(res,ms))

async function load () {
for(let i = 0; i < 9; i++){
        $(letters[i]).addClass('addAnimationLetters');
        await timer(50)
    }
}

load ();


let movies = [];
let searching = '';

const fetchMovies = () => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=7c66542d9414492cac50dd4c83cb6ab7&language=fr-FR&query=${searching}`)
        .then((res) => res.json())
        .then((data) =>  movies = data.results)

    console.log(movies);
}


const inputValue = document.getElementById('search');
const buttonSearch = document.getElementById('button-search');
const mainForm = document.getElementById('main-form');
const header = document.getElementById('header');
const mainTitle = document.getElementById('main-title');
const search = document.getElementById('search');
const errorNoText = document.getElementById('notextdiv');
const movieList = document.getElementById('movie-list')



    buttonSearch.addEventListener("click", (clickEvent) => {

        

        if(searching.length < 3){
            
            errorNoText.classList.add("displaynotextdiv");
            clickEvent.preventDefault();
        }
    
        else{
            buttonSearch.classList.add("submitnew");
            mainForm.classList.add("formnew");
            header.classList.add("headernew");
            mainTitle.classList.add("titlenew");
            search.classList.add("searchnew");
            errorNoText.classList.remove("displaynotextdiv");
            fetchMovies();
            clickEvent.preventDefault();
            moviesDisplay();
            
           
        }
        
    })

    search.addEventListener("input", (e) => {

       
        buttonSearch.classList.add("submitnew");
        mainForm.classList.add("formnew");
        header.classList.add("headernew");
        mainTitle.classList.add("titlenew");
        search.classList.add("searchnew");
        errorNoText.classList.add("notextdivnew");
        errorNoText.classList.remove("displaynotextdiv");

        searching = e.target.value;
        fetchMovies();
        e.preventDefault();
        moviesDisplay();
        
    })

   







const moviesDisplay = () => {
    
    movieList.innerHTML = movies.map((movie) => 
        `
        <li class="movie-card" style="background-image: url('https://image.tmdb.org/t/p/w500${movie.poster_path}');">

            <div id=vignette>

                <h2> ${movie.title} </h2>
                <p>  ${movie.release_date.split('-')[2]}/${movie.release_date.split('-')[1]}/${movie.release_date.split('-')[0]} </p>
                <p  id="resume">  ${movie.overview} </p>
                <p>  ${movie.vote_average} </p>

            </div>

        </li>

        `
    ).join('')



    inputValue.addEventListener("input", (e) => {

    });
};


