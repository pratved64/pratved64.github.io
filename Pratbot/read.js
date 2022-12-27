var dataStr = `[
    {
        "tag":"greetings",
        "inputs":[
            "hello",
            "hi",
            "howdy",
            "yo"
        ],
        "responses":[
            "Hello!",
            "Hi there!",
            "Hello, how can I help you?",
            "Sup dawg"
        ]
    },

    {
        "tag":"jokes",
        "inputs":"joke",
        "responses":[
            "I never trust stairs...they're always up to something", 
            "What kind of shoes do burglars wear? Sneakers", 
            "How do celebrities stay cool? They have many fans!",
            "What has four wheel and flies? A garbage truck",
            "you. you're the joke.",
            "whats common between twin towers and genders? first there were 2 of them now it is a sensitive topic "
        ]
    }
]`

export const data = JSON.parse(dataStr);

//console.log(data[1].tag);

export function getValue() {
    const msgInput = document.getElementById("user-input");
        
    console.log(msgInput.value);
    
    userMessage = msgInput.value;
    
    createPara(compute(userMessage), "responseBox");
    msgInput.value = "";

}