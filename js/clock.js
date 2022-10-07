const clock = document.getElementById("clock")
const colors = ['white','whitesmoke','aliceblue','antiquewhite', 'floralwhite', 'papayawhip']
function showClock()
{
    const now = new Date()
    clock.innerHTML = now.toTimeString().substring(0,8);
    const color = colors[Math.floor(Math.random() * colors.length)]
    clock.style.color = color;
    //console.log(color)
}

setInterval(showClock, 1000)
showClock();