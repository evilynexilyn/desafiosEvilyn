function desconto(){

    var produto;
     produto=prompt("Qual o produto que você está comprando?")

    var preco;
     preco=prompt("Qual o preço do " + produto + "?")

    var calculo;
    calculo=  preco*10/100

    let val= preco-calculo

    resultado= document.getElementById("resultado")

    resultado.innerHTML= `<h3>Calculando o desconto de 10% para ${produto}</h3>`
    resultado.innerHTML+= `<p>Calculando o desconto de 10% para ${preco}</p>`
    resultado.innerHTML+= `<p>Você ganhou R$ ${calculo} de desconto (-10%).`
    resultado.innerHTML+= `<p>E vai pagar ${val}</p>`


}