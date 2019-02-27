/* Need to listen for a key up event 
so that when the key is pressed it 
Will play the sound attached to it.*/

/*the function e will give us the event
 * listen for the key down event(e) that will
 *  give us the function
 */

 /** is there a audio element that has a data 
  * element of 65? this is the purpose of using
  * a query selector
  */

  /**${e.keycode} is a representation of a variable
   * to be extrapolated. The backticks `` allow for 
   * it to be read as a string literal. Backticks
   * can also be read across multiple lines
   */
window.addEventListener('keydown', function(e){
    const audio = document.querySelector(`audio[data-key=${e.keyCode}]`);
    console.log(audio);
});