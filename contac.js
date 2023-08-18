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
       
    }

}



// Slide btn method

let radio1 = $('.my-service1')
let radio2 = $('.my-service2')
let radio3 = $('.my-service3')
let slides = $('#slides')



window.addEventListener('resize', () => {
    // console.log("resize screen")
    let width = screen.availWidth
    radio1.css('transform', ' translateX(0px)')
    radio2.css('transform', ' translateX(0px)')
    radio3.css('transform', ' translateX(0px)')
})


function buttonthird() {
    let width = screen.availWidth
    console.log(width)
    if (width >= 800) {
        radio1.css('transform', ' translateX(-400px)')
        radio2.css('transform', ' translateX(-400px)')
        radio3.css('transform', ' translateX(-450px)')
        // console.log('fodrst')
    }
    else if (width < 500 && width > 400) {
        radio1.css('transform', ' translateX(-700px)')
        radio2.css('transform', ' translateX(-750px)')
        radio3.css('transform', ' translateX(-740px)')
        // console.log('jjj')

    }
    else if (width < 400) {
        radio1.css('transform', ' translateX(-420px)')
        radio2.css('transform', ' translateX(-700px)')
        radio3.css('transform', ' translateX(-745px)')
        // console.log('width less then 4000')

    }
    


    else if (width < 800) {
        radio1.css('transform', ' translateX(-600px)')
        radio2.css('transform', ' translateX(-950px)')
        radio3.css('transform', ' translateX(-965px)')

    }

}
function buttonfirst() {
    if (radio1.css('transform', ' translateX(400px)')) {
        radio1.css('transform', ' translateX(0px)')
        radio2.css('transform', ' translateX(0px)')
        radio3.css('transform', ' translateX(0px)')
        console.log('hiii')
    }

    else {
        radio1.css('transform', ' translateX(400)')
        // console.log('else')
    }

}
function buttonsecon() {
    let width = screen.availWidth   
    radio1.css('transform', ' translateX(-500px)')
    radio2.css('transform', ' translateX(-465px)')
    radio3.css('transform', ' translateX(0px)')
    if (width < 500) {
        radio2.css('transform', ' translateX(-369px)')
        if(width < 400){
            radio2.css('transform', ' translateX(-368px)')
        }
    }

}







function myFunction() {
    let hammenu = document.querySelector('.container')
    

    if(!hammenu.className.includes('change')){
        hammenu.classList.add('change')
        document.getElementById('hamancor_id').classList.add('slide-Menu')
        document.getElementById('HAMBURGERHTML').classList.add('mainSlide')
        // console.log('bo')
    }
    else{
        hammenu.classList.remove('change')
        document.getElementById('hamancor_id').classList.remove('slide-Menu')
        document.getElementById('HAMBURGERHTML').classList.remove('mainSlide')
        // console.log('booto')
    }
}
function closehamslider(){
    let hammenu = document.querySelector('.container')
    hammenu.classList.remove('change')
    
    document.getElementById('hamancor_id').classList.remove('slide-Menu')
    document.getElementById('HAMBURGERHTML').classList.remove('mainSlide')
}





