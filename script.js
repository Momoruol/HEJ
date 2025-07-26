/* Variaveis */
const alpha = document.querySelector('#alpha');
const urgemed = document.querySelector('#urgemed');
const jmg = document.querySelector('#jmg');

/* event listeners */

alpha.addEventListener('click', redirect_alpha);
urgemed.addEventListener('click', redirect_urge);
jmg.addEventListener('click', redirect_jmg);

/* Funçoes */
function redirect_alpha() {
	window.open('https://www.alphasegurancalv.com/');
}
function redirect_urge() {
	window.open('https://urgemedsaude.com.br/');
}
function redirect_jmg() {
	window.open('https://www.jmgcontabilidadee.com.br/');
}
