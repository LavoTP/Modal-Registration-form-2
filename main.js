/*var modal = document.getElementById('simpleModal');
var modalBtn = document.getElementById('modalBtn');
var closeBtn = document.getElementsByClassName('closeBtn')[0];

modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', clickOutside);

function openModal(){
   modal.style.display = 'block';
}

function closeModal(){
    modal.style.display = 'none';
 }
*/
var modal = document.getElementById('register-modal');
window.addEventListener('click', clickOutside);

function clickOutside(Event) {
    if (Event.target == modal) {
        modal.style.display = 'none';
    }
}
