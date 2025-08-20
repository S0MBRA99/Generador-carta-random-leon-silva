function randomNumberOrLetter(){

    let randomNumber = Math.floor((Math.random()*12)+1)
    
    if(randomNumber > 1 && randomNumber < 10){
        return randomNumber
    }

    else{
        if(randomNumber === 1){
            randomNumber = 'A' 
        }
        else if(randomNumber === 10){
            randomNumber =  'J'
        }
        else if(randomNumber === 11){
            randomNumber =  'Q'
        }
        else{
            randomNumber = 'K'
        }
        return randomNumber
    }
}

function randomEmoji(){
    let randomNumberEmoji = Math.floor(Math.random()*4)
     
    if(randomNumberEmoji === 0){
        return '♦'
    }
    else if(randomNumberEmoji === 1){
        return '♥'
    }
    else if(randomNumberEmoji === 2){
        return '♠'
    }
    else{
        return '♣'
    }    
}

window.onload = ()=>{
    let headerCard = document.querySelector('#headerCard')
    let bodyCard = document.querySelector('#bodyCard')
    let footerCard = document.querySelector('#footerCard')

    let numberLetterResult = randomNumberOrLetter()
    let emojiResult = randomEmoji() 
    
    headerCard.textContent = emojiResult 
    bodyCard.textContent = numberLetterResult
    footerCard.textContent = emojiResult
}