function calculate(){
    let start = Number(document.getElementById('start').value)
    let end = Number(document.getElementById('end').value)
    let pace = Number(document.getElementById('pace').value)
    let res = document.getElementById('res')

   res.innerHTML = `Result:`

    if(start <= 100 && end <= 100 && pace <= 100 && (start > end && pace != 0 && (pace <= start || pace <= end))){
        for(let i = start; i >= end; i-=pace){
           res.innerHTML +=  `&#128073; ${i}`
            
        }
    }
    else if(start <= 100 && end <= 100 && pace <= 100 && (start < end && pace != 0 && (pace <= start || pace <= end))){
        for(let i = start; i <= end; i+=pace){
            res.innerHTML +=  `&#128073; ${i}`
            
        }
    } 
    else{
        alert("I need a start point and a correct pace at least! All < 100!")
    }
}



