function randomNumberLetterOrEmoji(array){
    let randomNumberEmoji = Math.floor(Math.random()*array.length)
    
    return array[randomNumberEmoji]
}

window.onload = ()=>{
    
    let arrayOfQuantity = ['A','2','3','4','5','6','7','8','9','J','Q','K']
    let arrayEmoji = ['♦','♥','♠','♣']
    
    let headerCard = document.querySelector('#headerCard')
    let bodyCard = document.querySelector('#bodyCard')
    let footerCard = document.querySelector('#footerCard')
    let newCardButton = document.querySelector('#buttonReset')

    newCardButton.addEventListener('click',function(){
        location.reload()
    })

    let numberLetterResult = randomNumberLetterOrEmoji(arrayOfQuantity)
    let emojiResult = randomNumberLetterOrEmoji(arrayEmoji) 


    if (emojiResult === '♦' || emojiResult === '♥'){
        headerCard.style.color = 'red'
        footerCard.style.color = 'red'
    }

    headerCard.textContent = emojiResult 
    bodyCard.textContent = numberLetterResult
    footerCard.textContent = emojiResult
}