function calcularPerda () {
    const salarioMensal = parseFloat(document.getElementById('salario').value);
    const horasSono = parseFloat(document.getElementById('sono').value);
    const horasTrabalho = parseFloat(document.getElementById('trabalho').value);


    const horasTrabalhadasMes = horasTrabalho * 22
    const ganhoPorDia = salarioMensal / 30
    const ganhoPorHora12 = ganhoPorDia / horasTrabalho
    
    const ganhoPorHora = salarioMensal / horasTrabalhadasMes;

    const perdaPorSono = ganhoPorHora * horasSono

    document.getElementById('total').innerHTML = `
        <strong>Alguns resultados:</strong> <br> <br>
        - Você ganha: R$ ${ganhoPorDia.toFixed(2)} por dia. <br> <br>
        - Você ganha: R$ ${ganhoPorHora12.toFixed(2)} por hora. <br> <br>
        - Você perde: R$ ${perdaPorSono.toFixed(2)} enquanto dorme. <br> <br>
        <span class="aviso">Lembrando que esses resultados são aproximados, pois consideramos 22 dias de trabalho por mês como base para os cálculos.</span>
        

    `;

}


/* 
salarioMensal é a variavel q guarda o valor que o usuario colocar no inpt de salario

horasSono é a variavel q guarda o valor que o usuario colocar no inpt de sono

a gente atribui o valor de 173,2 horas a variavel horasTrabalhadasMes
que são as horas trabalhadas pelo clt no mês considerando que ele trabalhe 8 horas por dia
posso deixar isso mais complexo depois adicionando um input  de carga horaria tambem

criamos a variavel ganhoPorHora que é basicamente  o valor do salario do usuario dividido
pelas horas trabalhadas do mes que por padrão são 173,2 horas

e por final criamos a variavel final que é a perda por sono que é o valor da variavel
ganhoPorHora vezes o valor das horas de sono dando o resultado final!



*/
