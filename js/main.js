const char = "0123456789~`!@#$%^&*()-_=+{}[]|;:/?.,abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const clipboard = `<a href="#" class="clipboard">
                        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_7_4)">
                            <path d="M17.2083 4.08333H6.125C5.89294 4.08333 5.67038 4.17552 5.50628 4.33962C5.34219 4.50371 5.25 4.72627 5.25 4.95833V18.9583C5.25 19.1904 5.34219 19.413 5.50628 19.5771C5.67038 19.7411 5.89294 19.8333 6.125 19.8333H17.2083C17.4404 19.8333 17.663 19.7411 17.8271 19.5771C17.9911 19.413 18.0833 19.1904 18.0833 18.9583V4.95833C18.0833 4.72627 17.9911 4.50371 17.8271 4.33962C17.663 4.17552 17.4404 4.08333 17.2083 4.08333ZM16.9167 18.6667H6.41667V5.25H16.9167V18.6667Z" fill="white" fill-opacity="0.8"/>
                            <path d="M15.1667 2.04167C15.1667 1.8096 15.0745 1.58704 14.9104 1.42295C14.7463 1.25885 14.5237 1.16667 14.2917 1.16667H3.20833C2.97627 1.16667 2.75371 1.25885 2.58961 1.42295C2.42552 1.58704 2.33333 1.8096 2.33333 2.04167V16.0417C2.33333 16.2737 2.42552 16.4963 2.58961 16.6604C2.75371 16.8245 2.97627 16.9167 3.20833 16.9167H3.5V2.33333H15.1667V2.04167Z" fill="white" fill-opacity="0.8"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_7_4">
                            <rect width="21" height="21" fill="white"/>
                            </clipPath>
                            </defs>
                        </svg>
                    </a>`
const len = char.length;
const generate = document.querySelector(".genbtn");
const copiedMsg = document.querySelector('.copied');


const slider = document.querySelector("#sliderNum");
const counts = document.querySelector("#counts");
let passwordLength = slider.value;

const pass1 = document.querySelector("#passbox1");
const pass2 = document.querySelector("#passbox2");
const pass3 = document.querySelector("#passbox3");
const pass4 = document.querySelector("#passbox4");

slider.addEventListener('input', function() {
    counts.textContent = `${slider.value}`;
    passwordLength= slider.value;
})


function getRandomPass() {
    let password = "";
    for (let i = 0; i < passwordLength; i++) {
        let rand = Math.floor(Math.random() * len);
        password += char[rand];
    }
    return password
}

function getThePass() {
    pass1.innerHTML = `<input type = "text" id = "1" value = "${getRandomPass()}">${clipboard}`;
    pass2.innerHTML = `<input type = "text" id = "2" value = "${getRandomPass()}">${clipboard}`;
    pass3.innerHTML = `<input type = "text" id = "3" value = "${getRandomPass()}">${clipboard}`;
    pass4.innerHTML = `<input type = "text" id = "4" value = "${getRandomPass()}">${clipboard}`;
}

generate.addEventListener('click', getThePass);

function copyToClipboard(index) {
    const copyText = document.getElementById(index).value;
    navigator.clipboard.writeText(copyText).then(() => {
        copiedMsg.style.opacity = 1;
        setTimeout(function() {
            copiedMsg.style.opacity = 0;
        }, 1000)
    });
}

generate.addEventListener('click', function () {
    generate.style.backgroundColor = "#fff";
    generate.style.color = "#10B981";
    setTimeout(function() {
        generate.style.backgroundColor = "#10B981";
        generate.style.color = "#fff";
    }, 200);
})
