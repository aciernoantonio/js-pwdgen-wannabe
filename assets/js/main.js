//chiedere nome 
const first_name = prompt("Inserisci il tuo nome")
console.log(first_name);

//chiedere cognome
const last_name = prompt("Inserisci il tuo cognome")
console.log(last_name);

//chiedere colore preferito
const fav_color = prompt("Qual è il tuo colore preferito?")
console.log(fav_color);

//output password
const psswd = (`La tua password è...`+first_name+last_name+fav_color+`22`)
console.log(psswd);

document.getElementById("password").innerHTML = psswd

/* 
si specifica che la funzione di log è stata usata per avere degli output in console
oltre quello in pagina
*/