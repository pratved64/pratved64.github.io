// Static variables

var userMessage = "";
var isOdd = true;
var n1, n2;
var listening = false;
var link = "https://weather.com/en-IN/weather/today/l/b4a4461bf7dda2caba2c626bd09b3771a3bdfe8366f2c0cf5fe1bdd08bfbe8b7";
var MTag;

// Maps
const ioMap = {
    "hello" : "greeting",
    "hi" : "greeting",
    "how are you" : "greeting",
    "joke" : "joke",
    "make me laugh" : "joke",
    "+" : "add",
    "-" : "sub",
    "*" : "mul",
    "/" : "div",
    "weather" : "weather",
    "temperature" : "weather",
    "help" : "help",
    "tanisha":"tan"
};

const responses = {
    "joke" : ["I never trust stairs...they're always up to something", 
              "What kind of shoes do burglars wear? Sneakers", 
              "How do celebrities stay cool? They have many fans!",
              "What has four wheel and flies? A garbage truck",
              "you. you're the joke."],
    "greeting" : ["Hello there!", "Hello!", "Hi!", "Hello, how can I help you?"],
    "weather" : ["The weather today in your area can be found ", "Find out about the weather "],
    "add" : ["Result: ", "Sum: "],
    "sub" : ["Result: ", "Difference: "],
    "mul" : ["Result: ", "Product: "],
    "div" : ["Result: ", "Quotient: "],
    "tan" : ["Hello there Tanisha, I've been given special instructions to tell you that you're a clown.",
             "Ah yes, we've been expecting you."],
    "help" : ["I can perform an array of functions, from performing arithmetic operations, to telling you jokes. Please check the about page for complete information."]
};

//functions

function getValue() {
    const msgInput = document.getElementById("user-input");
        
    console.log(msgInput.value);
    
    userMessage = msgInput.value;
    
    createPara(compute(userMessage), "responseBox");
    msgInput.value = "";

    document.getElementById("responseBox").scrollTop = 500;
}

function compute(message) {
    MTag = analyse(message);

    if (MTag in responses) {
        arr = responses[MTag];
        index = parseInt(Math.floor(Math.random() * arr.length));
        result = arr[index];
    }
    else {
        result = "Sorry I don't understand";
    }
    
    if (MTag === "add") 
        result += (n1 + n2);
    else if (MTag === "sub")
        result += n1 - n2;
    else if (MTag === "mul")
        result += n1 * n2;
    else if (MTag === "div")
        result += n1 / n2;


    console.log(result);
    return result;
}

function createPara(text, divID) {
    const para = document.createElement("p");
    const node = document.createTextNode(text);
    const redir = document.createElement("a");
    const WNode = document.createTextNode("here.");

    if (isOdd) {
        para.setAttribute("id", "r1");
        isOdd = false;
    }
    else {
        para.setAttribute("id", "r2");
        isOdd = true;
    }

    para.appendChild(node);

    if (MTag === "weather") {
        redir.setAttribute("href", link);
        redir.setAttribute("target", "blank");
        redir.appendChild(WNode);
        para.append(redir);
    }
    
    const element = document.getElementById(divID);
    element.appendChild(para);
}

function analyse(message) {
    var msgTag;
    message = message.toLowerCase();
    for (const [keyword, tag] of Object.entries(ioMap)) {
        if (message.includes(keyword)) {
            msgTag = tag;
            break;
        }
        else {
            continue;
        }
    }

    if (msgTag === "add" || msgTag === "sub" || msgTag === "mul" || msgTag === "div" ) {
        parts = message.split("");
        console.log(parts);
        n1 = parseInt(parts[0]);
        n2 = parseInt(parts[parts.length - 1]);
    }
    else if (msgTag === "listen")
        listening = true;

    return msgTag;
}
