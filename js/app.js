/**
 * fonction d'initialisation
 */

function init() {
    var jsl = document.getElementById('jsLoaded');
    jsl.style.backgroundColor = "black"
    jsl.innerHTML = 'JS OK';
}

init();

var note0 = document.querySelector('#note-0');
var note1 = document.querySelector('#note-1');

/**
 * ajout des evenement d'une note
 * @param {*} note 
 *
 */
function addNoteEvent(note) {
    var closebutton = note.querySelector('.note-close');
    closebutton = addEventListener('click', function (evt) {
        note.remove();
    })

}
addNoteEvent(note0);



