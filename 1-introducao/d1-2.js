const nome = "Silvana";
const sexo = "F";
const idade = 48;
const contribuicao = 40;

/* Obs.: Esse cálculo é fictício, dentro da aposentadoria existem muitos outros fatores para serem levados em conta */

if (sexo === "M"){
    if (contribuicao >= 35 && contribuicao+idade >= 95){
        console.log(`${nome}, você pode se aposentar`)
    } else {
        console.log(`${nome}, você ainda nao pode se aposentar`)
    }
} else {
    if (contribuicao >= 30 && contribuicao+idade >= 85){
        console.log(`${nome}, você pode se aposentar`)
    } else {
        console.log(`${nome}, você ainda nao pode se aposentar`)
    }
}