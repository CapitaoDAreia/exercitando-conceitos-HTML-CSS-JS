let A=[]
let number = document.getElementById('number')
let realization = document.getElementById('realization')
let table = document.getElementById('table')
let result = document.getElementById('result')



//FUNCTION THAT ADD THE NUMBERS TO THE ARRAY
function add(){
    if(number.value.length == 0){
        alert('You must give VALID data!') //VALIDATION - IF THE USER GAVES DATA OR NOT
        number.value = "" 
        result.innerHTML = ""
        number.focus()
    }else if (number.value > 0 && number .value<=100){
        if(A.length >= 10){
            alert("You have reached your limit!") //IF THE LENGTH OF THE ARRAY > 100, DO NOT ACCEPT MORE ENTRY
            number.value = ""
        } else{
            A.push(Number(number.value)) //INSERT ELEMENTS IN THE ARRAY AUTOMATICALLY

                //CREATES A OPTION ELEMENT THAT IS A CHILDREN OF TABLE (SELECT IN HTML DOCUMENT)
            let object = document.createElement('option') 
            object.text = `${number.value} added to array.`
            table.appendChild(object)
            
            number.value = ""
            result.innerHTML = ""
            number.focus()
        }
    }else{
        alert('Invalid!')
        number.focus()
    }
    realization.style.height = ""
}




//FUNCTION THAT EXPANDS THE REALIZATION ELEMENT
function expand(){
    let bigger = A[0]
    let minor = A[0]
    let sum = 0
    let average = 0
    if(A.length == '0'){
        alert("Nothing to show!")
        number.focus()
    }else if(result.childNodes.length == 0){ //VEFIRIES IF RESULT IS EMPTY BASED ON CHILD'S
        realization.style.height = '100%'
        realization.style.transition = '2s'
        result.innerHTML += `The array have ${A.length} elements. <br>`
        
        result.innerHTML += `The elements: `
            for(c = 0; c < A.length; c++){
                result.innerHTML += `${A[c]}` 
                //Commas and dots in array elements.
                if(c != A.length - 1){
                result.innerHTML += `, `
                }else{
                    result.innerHTML += `.`
                }
            }
            for(c = 0; c < A.length; c++){
                 //CATCHES THE BIGGEST NUMBER
                 
                 if(bigger < A[c]){
                     bigger = A[c] 
                 }
                 //CATCHES THE MINOR
                 if(minor > A[c]){
                     minor = A[c]
                 }
                 //SUM
                 sum += A[c]
            }
             //AVERAGE
            average = sum/A.length

            result.innerHTML += `<br>The average of all element is ${average.toFixed(2)}.`
            result.innerHTML += `<br>The sum of all element is ${sum}.`
            result.innerHTML += `<br>The biggest element is ${bigger}.`
            result.innerHTML += `<br> The minor element is ${minor}.`

    }else if(result.childNodes.length != 0){
        alert("You already done that!")
        number.focus()
    }
}



