let cardsEl = document.querySelector('#cards_el')
let sumEl = document.querySelector('#sum_el')
let messageEl = document.querySelector('#message_el')

let sum = 0
let isAlive = false
let hasBlackJack = false
let cards = []


function getRandomCard(){
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber > 10){
        return 10
    } else if(randomNumber === 1){
        return 11
    }else{
        return randomNumber
    }
}

function startGame(){
   sumEl.textContent = "Sum: " 
   isAlive = true
   let firstCard = getRandomCard()
   let secondCard = getRandomCard()
   cards = [firstCard, secondCard]
    sum  = firstCard + secondCard
    renderCard()
}

function renderCard(){
    cardsEl.textContent = "Cards : "
    for (let i = 0; i < cards.length; i+=1){
        cardsEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum: " + sum + " "
    if(sum < 21){
        messageEl.textContent = "Do you want to pick a new card!"
    }else if (sum === 21){
        messageEl.textContent = "Bingo! You got a blackjack!"
        hasBlackJack=true
    }else{
        messageEl.textContent = "You are out of the game!"
        isAlive = false

    }

}


function newCard(){
    if(isAlive === true && hasBlackJack===false){
        let card = getRandomCard()
        sum+=card
        cards.push(card)
        renderCard()
    }
    
}