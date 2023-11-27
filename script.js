personOne = 0
personTwo = 0


const form = document.querySelector('#scoreform')
const scoreNum = document.querySelector('#scorenum')
const maxRounds = document.querySelector('#rounds')
const scoreOne = document.querySelector('#persononescore')
const scoreTwo = document.querySelector('#persontwoscore')



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
    } else if ((personOne+personTwo == parseInt(maxRounds.value)) && personOne < personTwo) {
        scoreOne.style.color = "red"
        scoreTwo.style.color = "green"
    }
}

const reset = document.querySelector('#reset')

reset.addEventListener('click', function(){
    personOne = 0
    personTwo = 0
    scoreOne.innerText = `${personOne}`
    scoreTwo.innerText = `${personTwo}`
    scoreOne.style.color = "rgb(0 0 0)"
    scoreTwo.style.color = "rgb(0 0 0)"
    maxRounds.value = ""
    
})
