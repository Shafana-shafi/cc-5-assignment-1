/**
 * Removes the 'playing' class from the target element if the transitioned property is 'transform'.
 *
 * @param {TransitionEvent} e - The transition event object.
 */
function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
}

/**
 * Plays the corresponding sound and adds the 'playing' class to the key when a specific key is pressed.
 *
 * @param {KeyboardEvent} e - The keyboard event object.
 */
function playSound(e) {
    var audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    var key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return;
    key?.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
}

// Get all elements with the class 'key' and convert the NodeList to an array
var keys = Array.from(document.querySelectorAll('.key'));

// Add an event listener to each key to remove the transition effect
keys.forEach(function (key) { 
    key.addEventListener('transitionend', removeTransition); 
});

// Add an event listener to the window object to play the sound when a key is pressed
window.addEventListener('keydown', playSound);
