const clock = document.getElementById("clock")

function showClock()
{
    const now = new Date()
    clock.innerHTML = now.toTimeString().substring(0,8);
}

setInterval(showClock, 1000)
showClock();