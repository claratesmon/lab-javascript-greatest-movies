// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?


function getAllDirectors(moviesArray) {

    const directorsArray = moviesArray.map((movie) => {
        return movie.director;
        
    }) 
    return directorsArray;
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {


    const spielbergDrama = moviesArray.filter((movie) => {
        
        const movieDirector = movie.director === 'Steven Spielberg';
        const movieGenre = movie.genre.includes('Drama');
         
        return movieDirector && movieGenre;
         
    })

    if (!moviesArray.length) {
        return 0;
        
    } else {
        return spielbergDrama.length;
    }
    
}



// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    const sumScore = moviesArray.reduce((accumulator, currentValue) => {
        if (!currentValue.score) {
            return accumulator += 0;
        } else {
        return accumulator + currentValue.score;
        }
    },0)

    if (!moviesArray.length) {
        return 0;

    } else {
        return Math.round((sumScore / moviesArray.length) *100)/100
    }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    
    let dramaIndexes = 0;

    const sumDramaScore = moviesArray.reduce((acc, current) => {
        if (!current.score) {
            return acc += 0;

        } else if (!current.genre.includes("Drama")) {
            return acc += 0;

        } else if (current.genre.includes("Drama")) {
            
            dramaIndexes++;
            return acc + current.score;
        } 

    }, 0)

    if (dramaIndexes === 0) {
        return 0;
    } else if (dramaIndexes > 0) {
        
        return (Math.round((sumDramaScore / dramaIndexes) * 100)) / 100
    }   
    
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {

}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    
    const allTitles = moviesArray.map((movie) => {
        return movie.title
    })
    

    const titlesSorted = allTitles.toSorted((a,b) => {

        if (a < b) {
            return -1;
        } else if (a > b) {
            return 1;
        } else {
            return 0;
        }
        
    }) 
    if (titlesSorted.length < 20) {
        return titlesSorted
    } else if (titlesSorted.length > 20) {
        return titlesSorted.slice(0,20)
    }
   
    
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}


//const reversedCopy = array.map((number) => number).reverse()