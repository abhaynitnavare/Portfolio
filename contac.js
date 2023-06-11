function nameFun() {
    let NAme = document.getElementById('inp1').value
    let NameValidation = document.getElementById('nameval')

    if (NAme == '') {
        NameValidation.innerText = 'This Feild is Requird'
        return 0
    }
    else {
        NameValidation.innerText = ""
        return 1

    }
}
function EmialFunc() {

    let Email = document.getElementById('inp3').value
    let EmailValidation = document.getElementById('Emailval')

    if (Email == '') {
        EmailValidation.innerText = 'This Feild is Requird'
        return 0


    }
    else if (Email.includes('@')) {
        EmailValidation.innerHTML = '';
        return 1;


    }
    else {
        alert('invalid email')
    }


}
function msgFun() {
    let msg = document.getElementById('inp5').value
    let SubjetValidation = document.getElementById('Subval')

    if (msg == '') {
        SubjetValidation.innerHTML = 'This Feild is Requird'
        return 0
    }
    else {

        SubjetValidation.innerHTML = ''
        return 1

    }
}



function Sumbmitfun() {

    // let subbtnclass = document.getElementsById('butoon-lastl')

    if (nameFun(), EmialFunc(), msgFun()) {
        alert('form submitted')
    }
    else {
        event.preventDefault()
        // subbtnclass.setAttribute('disabled','true')
    }

}

let radio1 = $('.my-service1')
let radio2 = $('.my-service2')
let radio3 = $('.my-service3')
let slides = $('#slides')
function buttonthird() {

    if (radio3) {
        radio2.css('margin-left', '10px')
        radio2.css('width', '350px')

        radio1.css('margin-left', '-410px')
        radio3.css('margin-left', '10px')
        // radio3.css('justify-content', 'space-around')
        radio3.css('width', '350px')

    }

}
function buttonfirst() {
    // radio1.css('margin-left','0px')

    if (radio1 == 'margin-left', '20px') {
        radio1.css('margin-left', '40px')
        radio2.css('margin-left', '20px')
        radio3.css('margin-left', '40px')

        // radio2.css('margin-left', '40px')
        // radio1.preventDefault

        // slides .css('width','85%') 
    }




}
// function buttonsecon(){
//     if(radio2){
//         radio2.css('margin-left','80px')
//         radio1.css('margin-left', '-470px')



        
//     }
//     else{
//         radio1.css()
//     }
// }

