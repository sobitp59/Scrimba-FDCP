let homePlayerScore = document.querySelector('.home_score')
let guestPlayerScore = document.querySelector('.guest_score')
let leadPlayer = document.querySelector('.leadPlayer')


// - - - Functions to calculate guest player scores start - - - // 
let guest_score = Number(guestPlayerScore.innerText)

function btn21(){
    guest_score+=1
    guestPlayerScore.textContent = guest_score
    leadPlayerCheck(home_score,guest_score)

}

function btn22(){
    guest_score+=2
    guestPlayerScore.textContent = guest_score
    leadPlayerCheck(home_score,guest_score)

}

function btn23(){
    guest_score+=3
    guestPlayerScore.textContent = guest_score
    leadPlayerCheck(home_score,guest_score)

}
// - - - Functions to calculate guest player scores end - - - // 


// - - -  Functions to calculate home player scores start - - - // 
let home_score = Number(homePlayerScore.innerText)

function btn11(){
    home_score+=1
    homePlayerScore.textContent = home_score
    leadPlayerCheck(home_score,guest_score)
}

function btn12(){
    home_score+=2
    homePlayerScore.textContent = home_score
    leadPlayerCheck(home_score,guest_score)

}

function btn13(){
    home_score+=3
    homePlayerScore.textContent = home_score
    leadPlayerCheck(home_score,guest_score)

}
// - - - Functions to calculate home player scores end - - - //


function leadPlayerCheck(homeScore, guestScore){
    if(homeScore > guestScore) leadPlayer.innerText =`Lead : HOME`
    else if(homeScore === guestScore) leadPlayer.innerText =`Lead : EQUAL`
    else leadPlayer.innerText =`Lead : GUEST`
    // if(homeScore > guestScore){
    //     leadPlayer.innerText =`Lead : HOME`
    // }else if(homeScore === guestScore){
    //     leadPlayer.innerText =`Lead : EQUAL`
    // }else{
    //     leadPlayer.innerText =`Lead : GUEST`
    // }
}

// - - - Function to reset to it in a new game start - - - //
function newBtn(){
    home_score = 0
    guest_score = 0
    homePlayerScore.textContent = home_score
    guestPlayerScore.textContent = guest_score
    leadPlayer.innerText =`Lead : -----`
}
// - - - Function to reset to it in a new game end - - - //