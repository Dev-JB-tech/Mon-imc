// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');


const submitUser = document.querySelector('.submit');
const inputUser = document.querySelector(".taille");
const poidsUser = document.querySelector(".pound");
const envoyerUser = document.querySelector(".envoyer");
const titreImc = document.querySelector('.title');


submitUser.addEventListener("click", function(){

  let newValue = inputUser.value;
  let charac = newValue[0];

  
  if (newValue.length > 3 && newValue.length < 2){
    console.log("Entré une taille correct")
  }else if (newValue.length === 3 && charac === "1" || charac === "2") {
    const numb = parseInt(newValue);
    console.log(numb);

    function imc(){
      const valeurTaille = (numb * numb)/10000;
      return valeurTaille;

    }const multipleT = imc();
    console.log(multipleT);
  

envoyerUser.addEventListener("click", function(){

  let newValue2 = poidsUser.value;

  if (newValue2.length > 3 && newValue2.length < 2 || newValue2.length === 0){
    console.log("entré une valeur correcte");
  }else {
    let poids2 = parseInt(newValue2);
    console.log(poids2)
  

function totale(){
  titreImc.innerHTML = "";
  let totaux = poids2 / multipleT;
  const arrondi = totaux.toFixed(1);
  
  let totauxFinale = 
  titreImc.innerHTML += "Ton imc est de : "+ arrondi;
  
  

} const f = totale();
console.log(f);

}

})
  }
})