// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener('DOMContentLoaded', ()=>{
  hidden = document.querySelector('div.hidden')
  hidden.preventDefault()
  like = document.querySelector('ul.like').addEventListener('click',(e) =>{
    mimicServerCall()
    .then(response => {
      like.innerHTML = FULL_HEART;
      return response
    });
    .catch(error => {
      alert(hidden.innerHTML = EMPTY_HEART)
      return error.message
    });
  
  
  });
});
FULL_HEART.addEventListener('click',(e)=> {
 e.removeHeart();
})
function removeHeart(){
  like = EMPTY_HEART,
};

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
