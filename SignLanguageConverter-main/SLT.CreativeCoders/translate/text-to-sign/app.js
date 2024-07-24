const signText = document.querySelector('.player-view')
const normText = document.querySelector('#player-text')

const textArea = document.querySelector('#text-area')

const msgInput = document.querySelector('.message-input')
const sendBtn = document.querySelector('#send-btn')


let newText = "";
sendBtn.addEventListener('click', function() {
    textArea.innerHTML = ''
    let text = msgInput.value;
    msgInput.value = ''


    for (let i = 0; i < text.length; i++) {
        setTimeout(function() {
            signText.innerHTML = text[i]
            normText.innerHTML = text[i]


            const letter = text.charAt(i);
            const isLastLetter = (i === text.length - 1);

            if (isLastLetter) {
        
                newText += letter


            } else {
                newText += letter;
            }

            textArea.innerHTML = newText;
            
            console.log(i)
        }, i * 1000)
        
    }
    let fullText = textArea.value
    textArea.innerHTML=fullText+"\n";
})