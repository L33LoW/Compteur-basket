let score_domicile = document.getElementById("score_domicile")
let score_exterieur = document.getElementById("score_exterieur")

let points_domicile = 0
let points_exterieur = 0


// Fonction score domicile
function add1Domicile() {
    points_domicile++
    score_domicile.innerText = points_domicile
}

function add2Domicile() {
    points_domicile += 2
    score_domicile.innerText = points_domicile
}

function add3Domicile() {
    points_domicile += 3
    score_domicile.innerText = points_domicile
}

// Fonction score exterieur
function add1Exterieur() {
    points_exterieur += 1
    score_exterieur.innerText = points_exterieur
}

function add2Exterieur() {
    points_exterieur += 2
    score_exterieur.innerText = points_exterieur
}

function add3Exterieur() {
    points_exterieur += 3
    score_exterieur.innerText = points_exterieur
}

// Fonction reset
function reset_score() {
    points_domicile = 0
    points_exterieur = 0

    score_domicile.innerText = points_domicile
    score_exterieur.innerText = points_exterieur
}