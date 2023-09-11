// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const directorsArr = moviesArray.map((oneMovie) =>{
        
        return oneMovie.director;
    });
    return directorsArr
}



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const dramaSpielbergArr = moviesArray.filter(oneMovie => oneMovie.genre.includes('Drama') && oneMovie.director === "Steven Spielberg")
    return dramaSpielbergArr.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0){
        return 0
    }
    const totalScore = moviesArray.reduce((accumulator,currentMovie) => {
        if(currentMovie.score){
        return accumulator + currentMovie.score;
        } else {
            return accumulator
        }
    },0)
    return Math.round(totalScore/moviesArray.length * 100)/100
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    
    const dramaArr = moviesArray.filter(oneMovie => oneMovie.genre.includes('Drama'))
    if (dramaArr.length === 0){
        return 0
    }
    const totalScore = dramaArr.reduce((accumulator,currentMovie) => {
        if(currentMovie.score){
        return accumulator + currentMovie.score;
        } else {
            return accumulator
        }
    },0)
    return Math.round(totalScore/dramaArr.length * 100)/100
}
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const copyOfMovies = moviesArray.slice();
    const orderedYear = copyOfMovies.sort((a,b) => {
        if(a.year === b.year){
            return a.title.localeCompare(b.title);
        } else{
         return a.year - b.year}
        
    })
    return orderedYear
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const copyOfMovies = moviesArray.slice();
    const orderedTitle = copyOfMovies.sort((a,b) => {
        if (a.title <  b.title){
            return -1
        } else if(a.title > b.title){
            return 1
        } else {
            return 0 
        }
    })
    const first20 = orderedTitle.slice(0,20)
    const first20Titles = []
    first20.forEach(movie => {
        first20Titles.push(movie.title)
    })
    return first20Titles
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
