document.addEventListener("DOMContentLoaded", function () {
    const chatboxEl = document.getElementById('chatbox');
    let answerFromURL = null;

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

    const queryParams = getParamsFromURL();

    if (queryParams.question) {
        appendMessage('user', queryParams.question);

        // If only 'question' is present, get a support reply
        // If both 'question' and 'answer' are present, use the provided answer
        const reply = queryParams.answer ? queryParams.answer : getSupportReply(queryParams.question);
        appendMessage('support', reply);
    } else if (queryParams.answer) {
        // If only 'answer' is present, store it to be used after user input
        answerFromURL = queryParams.answer;
    }

    function addUserMessage() {
        const userInputEl = document.getElementById('userInput');
        const userInput = userInputEl.value.trim();

        if (!userInput) return;

        appendMessage('user', userInput);

        const reply = answerFromURL ? answerFromURL : getSupportReply(userInput);
        appendMessage('support', reply);

        answerFromURL = null;

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

function getParamsFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return {
        question: urlParams.get('question'),
        answer: urlParams.get('answer')
    };
}
