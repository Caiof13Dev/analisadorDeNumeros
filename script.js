let numberList = []
let res = window.document.getElementById('res')

function adicionar(){

    let inptNum = window.document.getElementById('inptNum')
    let num = Number(inptNum.value)
    let search = numberList.indexOf(num)
    if(num > 0 && num <= 100 && search == -1){
        numberList.push(num)
        list = window.document.getElementById('list')
        item = window.document.createElement('option')
        item.setAttribute('id', 'num')
        item.text = `O numero ${num} foi adionado`
        list.appendChild(item)
        inptNum.value = ''
        inptNum.focus()
        res.innerHTML = '<p>Após preencher os dados clique no botão Finalizar</p>'
    }else(
        alert('O numero já foi adicionado ou é inválido')
        
    )
    
    
}


let finalize = window.document.getElementById('finalize')

finalize.addEventListener('click', function(){
    
    let higher = numberList[0]
    let less = numberList[0]
    let fullSize = numberList.length
    let sum = 0
    let media = 0

    for(let pos in numberList){
        sum += numberList[pos]
        if (numberList[pos] > higher){
            higher = numberList[pos]
        }if(numberList[pos] < less){
        less = numberList[pos]
        }
        
    }
    media = sum/fullSize
    
    res.innerHTML = `<p> Temos ao todo ${fullSize} numeros cadastrados<p>`
    res.innerHTML += `<p> O Maior Valor é: ${higher} </p>`
    res.innerHTML += `<p> O menor valor informado é ${less} </p>`
    res.innerHTML += ` <p> A Soma dos Valores é: ${sum} </p>`
    res.innerHTML += ` <p> A Média dos Valores é: ${media.toFixed(2)} </p>`

    const btn = window.document.createElement('input')
    btn.setAttribute('type', 'button')
    btn.setAttribute('value', 'Limpar')
    res.appendChild(btn)

    btn.addEventListener('click', function(){
        
        var select = document.getElementById('list');
        var length = select.length;
        for (i = 0; i < length; i++) {
             select.remove(0);
        } 
        numberList.splice(0, numberList.length);
        res.innerHTML = `<p>Após preencher os dados clique no botão Finalizar</p>`
    })

    
})

