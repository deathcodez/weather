const typingtext = document.querySelector(".typing-text p")
const input = document.querySelector(".wrapper .inputfield")
const time = document.querySelector(".time p span b")
const mistakes = document.querySelector(".mistakes span b")
const wpm = document.querySelector(".wpm p span")
const cpm = document.querySelector(".cpm p span")
const btn = document.querySelector("button")

// ye variables ish function k baad kaam aaega 
let timer;
let maxtime = 60;
let mistake = 0;
let lefttime = maxtime;
let charindex = 0;
let istyping = false;

function loadparagraph() {
    const paragaraph = [" Avoid daydreaming about the years to come.", "You are the most important person in your whole life.", "Always be true to who you are, and ignore what other people have to say about you.", "Always be true to who you are, and ignore what other people have to say about you.", "Only demonstrate your strength when it’s really required.", "Subscribe to Drop X Out"
    ]
    const randomindex = Math.floor(Math.random() * paragaraph.length)
    typingtext.innerHTML = "";
    for (const char of paragaraph[randomindex]) {
        console.log(char)
        typingtext.innerHTML += `<span>${char}</span>`
    }
    typingtext.querySelectorAll('span')[0].classList.add('active')
    document.addEventListener("click", () =>
        input.focus()
    )
}

// yaha k baad upar kuch variables define karna hai for typing

/// handle user input

/*niche event listener se pata chalega typing kar raha hai ya nahi*/
function inittyping() {
    const char = typingtext.querySelectorAll("span")
    const typedchar = input.value.charAt(charindex);
    if (charindex < char.length && lefttime > 0) {

        if (!istyping) {
            timer = setInterval(inittime, 1000);
            istyping = true;

        }



        if (char[charindex].innerText === typedchar) {
            char[charindex].classList.add("correct")
            console.log("correct")

        }
        else {
            mistake++;
            char[charindex].classList.
            add("incorrect")
            console.log("incorrect")

        }
        charindex++;
        char[charindex].classList.add("active")
        mistakes.innerHTML = mistake;
        cpm.innerText = charindex - mistake;

    }
    else {

        clearInterval(timer);


    }

}

function inittime() {
    if (lefttime > 0) {
        lefttime = lefttime - 1;
        time.innerText = lefttime;
        let wpmval = Math.round(((charindex - mistake) / 5) / (maxtime - lefttime) * 60);
        wpm.innerHTML = wpmval;
    }
    else {
        clearInterval(timer)
    }
}
input.addEventListener("input", inittyping)
btn.addEventListener("click", reset)
function reset() {
    clearInterval(timer);
    timer = null;

    lefttime = maxtime;
    time.innerText = lefttime;

    charindex = 0;
    mistake = 0;
    mistakes.innerText = mistake;

    wpm.innerText = 0;
    cpm.innerText = 0;

    input.value = "";
    loadparagraph();
    istyping = false;

}
loadparagraph();
