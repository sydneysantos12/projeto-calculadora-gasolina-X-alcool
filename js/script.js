function calcular(){
    let valorGasolina = Number(document.getElementById("valorGasolina").value)
    let valorAlcool = Number(document.getElementById("valorAlcool").value)

    let resultado = ((valorAlcool * 70)/100)

        if (resultado < valorGasolina){
            document.getElementById("resultado").innerHTML = "compensa usar alcoollllllllllll"            
        }
        else if (resultado > valorGasolina){
            document.getElementById("resultado").innerHTML = "compensa usar Gasolina"                                 
        }
        else if(resultado == valorGasolina){
            document.getElementById("resultado").innerHTML = "erro"
        }
     
}