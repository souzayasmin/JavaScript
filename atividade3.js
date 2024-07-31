var nota = 8
if(nota >=4 && nota < 6){
    console.log(Você está de recuperação)
}else if (nota >= 0 && nota < 4){
    console.log(Você está reprovado)
}else if (nota >= 6 && nota <= 10){
    console.log(Você está aprovado)
}else {
    console.log("Digite a nota entre 0-10 para o aluno")
}