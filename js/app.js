(function() {
//Select the input element
const form = document.querySelector('#message-form')
//Set up Submit Button
form.addEventListener('submit', function(p){
    // prevent the form's default submission action
    p.preventDefault()
    //Get user's input from from
    const message = document.querySelector('#message')
    const feedback = document.querySelector('.feedback')
    const messageContent = document.querySelector('.message-content')

    if (message.value === ""){
        feedback.classList.add('show')
        setTimeout(function(){
        feedback.classList.remove('show')
        }, 5000)
    } else {
        //Change message content and clear the message input
        messageContent.textContent = message.value
        message.value = ''
    }
})
})()



