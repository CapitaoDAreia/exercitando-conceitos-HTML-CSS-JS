function calculate(){
    let date = new Date()
    let year = date.getFullYear()

    let dyear = document.getElementById('birth-year')
    let res = document.getElementById('res')
    let img = document.getElementById('photo')

    if(dyear.value.length == 0 || Number(dyear.value) > year ){
        alert("[ERROR] Data must be verified!")
    } else {
        let sex = document.getElementsByName('sexcheck')
        let age = year - Number(dyear.value)
        let sex2 = ''

        if(sex[0].checked){
            sex2 = 'female'
            res.innerHTML = `We detected a ${age}-year-old ${sex2}.`

            if(age > 0 && age <=4){
                img.src = "./ex2-img/bebe-feminino.jpg"
            } else if(age > 4 && age <= 16){
                img.src = "./ex2-img/crianca-feminino.jpg"
            } else if(age > 16 && age <=18){
                img.src = "./ex2-img/jovem-feminino.jpg"
            } else if(age > 18 && age <= 60){
                img.src = "./ex2-img/adulto-feminino.jpg"
            } else if(age > 60){
                img.src = "./ex2-img/idoso-feminino.jpg"
            }


        }else if(sex[1].checked){
            sex2 = 'male'
            res.innerHTML = `We detected a ${age}-year-old ${sex2}.`

            if(age > 0 && age <=4){
                img.src = "./ex2-img/bebe-masculino.jpg"
            } else if(age > 4 && age <= 16){
                img.src = "./ex2-img/crianca-masculino.jpg"
            } else if(age > 16 && age <=18){
                img.src = "./ex2-img/jovem-masculino.jpg"
            } else if(age > 18 && age <= 60){
                img.src = "./ex2-img/adulto-masculino.jpg"
            } else if(age > 60){
                img.src = "./ex2-img/idoso-masculino.jpg"
            }
        }

        

    }
}