let valor = 0;

function recebeNumero(a)

{
    let b = Math.round(a)

    for(let i = b - 1 ; i > 0; i -- )
    {
        if(i % 3 == 0 || i % 5 == 0)
        {
            valor += i
        }
    }

    console.log(valor);
    return valor;
}

recebeNumero(11)