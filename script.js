/**
 * CAROUSEL
 * 
 */
//Chemin ou sont les images
const path = "Images/slide/";

//Tableau d' images
const pictures = ["01.jpg", "02.jpg", "03.jpg"];

//Image du slider
const picture = document.querySelector(".slider img");

//Compteur
let counter = 0;

//Ecouteur d'évènement sur la flèche
const arrowRight = document.querySelector(".fleche-droite");
arrowRight.addEventListener("click", () => {

    if (counter === pictures.length - 1) {
        counter = 0;
    }
    else {
        //Sinon on ajoute 1 à notre compteur
        counter++;
    }

    //Modifie l'atribut "src" de l'image en sélectionnant l'élément suivant du tableau
    picture.src = `${path}${pictures[counter]}`;
});

const arrowLeft = document.querySelector(".fleche-gauche");
arrowLeft.addEventListener("click", () => {

        //si le compteur est à zero je suis au début du tableau
    if ( counter === 0) {

        //on met à jour le compteur avec le dernier index du tableau
        counter = pictures.length -1;
    }
    else {
        //Sinon on décremente de 1
        counter -= 1;                                       // "-="" sinifie partire de la fin des images
    }
    //Modifie l'attribut "src" de l'image en sélectionnant l'élément suivant du tableau
    picture.src = `${path}${pictures[counter]}`;
});

//Défillement automatique

 picture = document.querySelector(".slider img") = slide[counter];

setInterval("ChangeSlide(1)", 5000);













