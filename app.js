const getColor = ()=>{
    const randomNumber = Math.floor(Math.random()*1677218)
    const randomCode = "#" + randomNumber.toString(18)
    document.body.style.backgroundColor=randomCode
    document.getElementById("color-code").innerText = randomCode
}

document.getElementById("btn").addEventListener(
    "click",
    getColor
)

getColor()