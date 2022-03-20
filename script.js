let sn = Math.floor(Math.random() * 20) + 1;
let check = document.querySelector('.check');
let again = document.querySelector('.again');
let display = document.querySelector('.display');
let secretbox = document.querySelector('.secretbox');
let displayscore = document.querySelector('.displayscore span');
let displayhighscore = document.querySelector('.displayhighscore span');
let highscore = 0;
let score = 20;

console.log(sn);

check.addEventListener('click', function () {
    var val = document.querySelector('.inp').value;
    console.log(val);
    if (val == '')
    {
        display.innerHTML = "guess something......";
    } else {
        let guess = parseInt(val);
        if (score > 0) {
            if (guess === sn) {
                display.innerHTML = "Correct!";
                if (score > highscore) {
                    highscore = score;
                }
                
                secretbox.style.backgroundColor = "green";
                secretbox.style.width = "200px";
                again.style.transform = "scale(2)";
                // again.style.backgroundColor = "green";
                secretbox.innerHTML = sn;
                var crash = new Audio('sounds/crash.mp3');
                crash.play();

            } else if (guess > sn) {
                display.innerHTML = "High";
         

                score--;
            } else {
                display.innerHTML = "low";
                score--;
            }
            
       
            displayscore.innerHTML = score;
            displayhighscore.innerHTML = highscore;
        }
        if (score == 0)
        {
            display.innerHTML = "You Lost";
            again.style.transform = "scale(2)";

            
        }
    }
})

again.addEventListener('click', function () {
    score = 20;
    displayscore.innerHTML = score;
    secretbox.style.backgroundColor = "grey";
    secretbox.style.width = "140px";
    secretbox.innerHTML = "?";
    display.innerHTML = "Start Guessing......";
    document.querySelector('.inp').value = '';
    again.style.transform = "scale(1)";

});