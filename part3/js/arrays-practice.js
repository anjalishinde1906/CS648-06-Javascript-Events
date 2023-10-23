//STEP 1
var favMovies = ["TOP gun", "HeraPheri", "DILWALE", "MoneyHeist", "Panther"];
window.console.log(favMovies[1]);

//STEP 2
var movies = new Array(5);
movies[0] = "Top gun";
movies[1] = "HerPheri";
movies[2] = "DILWALE";
movies[3] = "MoneyHeist";
movies[4] = "Panther";
window.console.log(movies[0]);

//STEP 3
var movies2 = new Array(5);
movies2[0] = "Top gun";
movies2[1] = "HeraPheri";
movies2[2] = "DILWALE";
movies2[3] = "MoneyHeist";
movies2[4] = "Panther";

movies2.splice(2, 0, "Maids");
window.console.log(movies2.length);

//STEP 4
var favMovies2 = [];
favMovies2[0] = "Top gun";
favMovies2[1] = "HeraPheri";
favMovies2[2] = "DILWALE";
favMovies2[3] = "MoneyHeist";
favMovies2[4] = "Panther";
delete favMovies2[0];
window.console.log(favMovies2);

//STEP 5
var favMovies3 = [];
favMovies3[0] = "Top gun";
favMovies3[1] = "HeraPheri";
favMovies3[2] = "DILWALE";
favMovies3[3] = "MoneyHeist";
favMovies3[4] = "Panther";
favMovies3[5] = "Black";
favMovies3[6] = "Leo";

for (let index = 0; index < favMovies3.length; index++) {
    window.console.log(favMovies3[index]);
}

//STEP 6
var favMovies4 = [];
favMovies4[0] = "Top gun";
favMovies4[1] = "HeraPheri";
favMovies4[2] = "DILWALE";
favMovies4[3] = "MoneyHeist";
favMovies4[4] = "Panther";
favMovies4[5] = "Black";
favMovies4[6] = "Leo";

for (index in favMovies4) {
    if (favMovies4.hasOwnProperty(index)) {
        window.console.log(favMovies4[index]);
    }
}

//STEP 7
var favMovies5 = [];
favMovies5[0] = "Top gun";
favMovies5[1] = "HeraPheri";
favMovies5[2] = "DILWALE";
favMovies5[3] = "MoneyHeist";
favMovies5[4] = "Panther";
favMovies5[5] = "Black";
favMovies5[6] = "Leo";

favMovies5.sort();
for (index in favMovies5) {
    if (favMovies5.hasOwnProperty(index)) {
        window.console.log(favMovies5[index]);
    }
}

//STEP 8
var favMovies6 = [];
favMovies6[0] = "Top gun";
favMovies6[1] = "HeraPheri";
favMovies6[2] = "DILWALE";
favMovies6[3] = "MoneyHeist";
favMovies6[4] = "Panther";
favMovies6[5] = "Black";
favMovies6[6] = "Leo";

var leastFavMovies = [];
leastFavMovies[0] = "Expendables";
leastFavMovies[1] = "Benjamin Button";
leastFavMovies[2] = "Flash";

window.console.log("Movies I like:\n\n");
for (let index = 0; index < favMovies6.length; index++) {
    window.console.log(favMovies6[index]);
}
window.console.log("\n");

window.console.log("Movies I regret watching:\n\n");
for (let index = 0; index < leastFavMovies.length; index++) {
    window.console.log(leastFavMovies[index]);
}
window.console.log("\n");

//STEP 9
var movies = favMovies6.concat(leastFavMovies);
movies.reverse();
for (let index = 0; index < movies.length; index++) {
    window.console.log(movies[index]);
}
window.console.log("\n");

//STEP 10
var movies2 = favMovies6.concat(leastFavMovies);
window.console.log(movies.pop());