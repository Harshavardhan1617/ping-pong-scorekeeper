personOne = 0
personTwo = 0


const form = document.querySelector('#scoreform')
const scoreNum = document.querySelector('#scorenum')
const maxRounds = document.querySelector('#rounds')

form.addEventListener('submit', function(e){
    e.preventDefault()

})


const button1 = document.querySelector('#playerone')
button1.addEventListener('click', function(){
    if (personOne+personTwo < maxRounds.value){
        personOne+=1
        scoreNum.innerText = `${personOne} to ${personTwo}`
    }
})

const button2 = document.querySelector('#playertwo')
button2.addEventListener('click', function(){
    if (personOne+personTwo < maxRounds.value){
        personTwo+=1
        scoreNum.innerText = `${personOne} to ${personTwo}`
    }

})

