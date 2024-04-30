const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let taille_T = slides.length,
	img_banniere = document.querySelector(".banner-img"),
	div_parent = document.querySelector(".dots"),
	ecouteur_fleche_droite = document.querySelector(".arrow_right"),
	div_banner = document.querySelector("#banner p");


for (let i = 0; i < slides.length; i++) {
	let nouvelle_balise = document.createElement("div");
		nouvelle_balise.classList.add("dot")
		nouvelle_balise.classList.add(i)
		div_parent.appendChild(nouvelle_balise)
			if(i === 0) {
				nouvelle_balise.classList.add("dot_selected")
			} 
}

let i = 0
let i_dot = 0

function increment () {
	i_dot++;
	i++;
		if (i === taille_T) {
			i = 0;
			div_dot[taille_T-1].classList.remove("dot_selected")
			div_dot[0].classList.add("dot_selected")
		}
}

let div_dot = document.querySelectorAll(".dot");

ecouteur_fleche_droite.addEventListener("click", function(event) {
	if(event.button === 0) {
			increment();
			img_banniere.setAttribute("src", "./assets/images/slideshow/" + slides[i]["image"] )
			let contenu = slides[i]["tagLine"];
			let p = `
				<P>${contenu}</p>
			`;
			div_banner.innerHTML = p;
			div_dot[i-1].classList.remove("dot_selected")
			div_dot[i].classList.add("dot_selected")
			}
});

function decrement () {
	i--;
	i_dot--;
		if (i === -1) {
			i = taille_T-1;
			div_dot[taille_T-1].classList.remove("dot_selected")
			div_dot[0].classList.remove("dot_selected")
		}
}



let ecouteur_fleche_gauche = document.querySelector(".arrow_left");


ecouteur_fleche_gauche.addEventListener("click", function(event) {
	if(event.button === 0) {
		decrement();
		img_banniere.setAttribute("src", "./assets/images/slideshow/" + slides[i]["image"] )
		let contenu = slides[i]["tagLine"];
		let p = `
			<P>${contenu}</p>
		`;
		div_banner.innerHTML = p;
		div_dot[i].classList.add("dot_selected")
		div_dot[i +1].classList.remove("dot_selected")
	}
});




