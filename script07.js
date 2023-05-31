function conversor(){
    let Cel = Number(window.prompt("Digite uma temperatura em °C (Celsius)"))

    let Kel = Number(Cel + 273.15).toFixed(2)
    let fah = Number(9 * Cel + 160)/5

    let temp = window.document.getElementById("temp")
    temp.innerHTML = `<h1>A temperatura de ${Cel}°C, corresponde a:</h1>`
    
    let res = window.document.getElementById("res")
    res.innerHTML = `<p>${Kel}°K (Kelvin)</p>
    <p>${fah}°F (Fahrenheit)</p>`

}