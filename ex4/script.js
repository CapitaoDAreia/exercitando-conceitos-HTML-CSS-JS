function calculate(){
    let number = Number(document.getElementById('number').value)
    let table = document.getElementById('table')

    table.innerHTML = ` `

    for(let i = 0; i <=10; i++){
        let object = document.createElement('option')
        object.text = `${number} X ${i} = ${number*i}`
        table.appendChild(object)
    }
}
function reset(){
    let table = document.getElementById('table')
    table.innerHTML = ` `
}



