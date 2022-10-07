const imgs = ["0.jpg", "1.jpg","2.jpg","3.jpg","4.jpg","5.jpg"]

const chosenImg = imgs[Math.floor(Math.random() * imgs.length)]

const imgElement = document.createElement("img")

imgElement.src = `img/${chosenImg}`
imgElement.classList.add("bg-img")
imgElement.style= 'width:1000px;height:1000px;'

// console.log(imgElement)
document.body.appendChild(imgElement)