let count = 0;

function increaseCount() {
    count++;
    displayCount();
    checkCountValue();
}

function displayCount() {
    document.getElementById('countDisplay').innerHTML=count;
}

function checkCountValue() {
    if(count === 10) {
        alert("Your Instagram post gained 10 followers! Congratulations!");
    } else if (count === 20) {
        alert ("Your Instagram post gained 20 followers! Keep it up!");
    }
}

function decreaseCount() {
    if(count > 0) {
        count--;
    } else {
        alert("You cannot unfollow")
    }
    displayCount();
}

function reset() {
    if(count != 0){
        count = 0;
     displayCount();
    alert("The followers count has been reset")
    }
}