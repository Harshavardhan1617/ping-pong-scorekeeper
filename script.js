personOne = 0
personTwo = 0


const form = document.querySelector('#scoreform')
const scoreNum = document.querySelector('#scorenum')
const maxRounds = document.querySelector('#rounds')
const scoreOne = document.querySelector('#persononescore')
const scoreTwo = document.querySelector('#persontwoscore')
const buttons = document.querySelectorAll('button')



form.addEventListener('submit', function(e){
    e.preventDefault()

})


const button1 = document.querySelector('#playerone')
button1.addEventListener('click', function(){
    if (personOne+personTwo < maxRounds.value){
        personOne+=1
        scoreOne.innerText = `${personOne}`
    }
    colorizer()

})

const button2 = document.querySelector('#playertwo')
button2.addEventListener('click', function(){
    if (personOne+personTwo < maxRounds.value){
        personTwo+=1
        scoreTwo.innerText = `${personTwo}`
    }
    colorizer()

})


function colorizer() {
    if ((personOne+personTwo == parseInt(maxRounds.value)) && personOne > personTwo){
        scoreOne.style.color = "green"
        scoreTwo.style.color = "red"
        disableButtons()
    } else if ((personOne+personTwo == parseInt(maxRounds.value)) && personOne < personTwo) {
        scoreOne.style.color = "red"
        scoreTwo.style.color = "green"
        disableButtons()
    }
}

const reset = document.querySelector('#reset')

reset.addEventListener('click', function(){
    personOne = 0
    personTwo = 0
    scoreOne.innerText = `${personOne}`
    scoreTwo.innerText = `${personTwo}`
    scoreOne.style.color = "#4a4a4a"
    scoreTwo.style.color = "#4a4a4a"
    maxRounds.value = ""
    enableButtons()
    
})

const disableButtons = () => {
    buttons[0].disabled = true
    buttons[1].disabled = true
}

const enableButtons = () => {
    buttons[0].disabled = false
    buttons[1].disabled = false
}