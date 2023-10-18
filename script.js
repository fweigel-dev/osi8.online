document.addEventListener("DOMContentLoaded", function () {
    const chatboxEl = document.getElementById('chatbox');

    document.body.addEventListener('click', function (event) {
        if (event.target.id === 'sendButton') {
            addUserMessage();
        }
    });

    document.body.addEventListener('keydown', function (event) {
        if (event.target.id === 'userInput') {
            checkForEnter(event);
        }
    });

    const initialQuestion = getQuestionFromURL();
    if (initialQuestion) {
        appendMessage('user', initialQuestion);
        appendMessage('support', getSupportReply(initialQuestion));
    }

    function addUserMessage() {
        const userInputEl = document.getElementById('userInput');
        const userInput = userInputEl.value.trim();

        if (!userInput) return;

        appendMessage('user', userInput);
        appendMessage('support', getSupportReply(userInput));

        userInputEl.value = '';
        chatboxEl.scrollTop = chatboxEl.scrollHeight;
    }

    function appendMessage(type, message) {
        const div = document.createElement('div');
        div.className = type;
        div.textContent = message;
        chatboxEl.appendChild(div);
    }

    function checkForEnter(event) {
        if (event.key === "Enter" || event.keyCode === 13) {
            event.preventDefault();
            addUserMessage();
        }
    }
});

function getQuestionFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('question');
}
