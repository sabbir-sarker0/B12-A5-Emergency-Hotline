// heart button function
const heartButtons = document.getElementsByClassName("heart-button");
const availableBalance = document.getElementById("heart-balance")
let countHeart = 0;
for (const heartButton of heartButtons) {
    heartButton.addEventListener("click", function () {
        countHeart++;
        availableBalance.innerText = countHeart;
    })
}
// copy  count button function

const copyButtons = document.getElementsByClassName("copy-btn");
const availableCopyBalance = document.getElementById("copy-balance")
let countCopy = 0;
for (const copyButton of copyButtons) {
    copyButton.addEventListener("click", function () {
        countCopy++;
        availableCopyBalance.innerText = countCopy;

        const cardContainer = copyButton.closest('.card');
        const textToCopy = cardContainer.querySelector('.copy-text').innerText;

        navigator.clipboard.writeText(textToCopy)
            .then(() => {
                alert("কপি হয়েছে: " + textToCopy);
            })
            .catch(err => {
                console.error("কপি করতে ব্যর্থ: ", err);
            });
    })
}


// call function
const coinBalance1 = document.getElementById("coin-balance")
let coinBalance = parseInt(coinBalance1.innerText)
const callBtns = document.getElementsByClassName("call-btn")
const historyContainer = document.getElementById("history-container")
const historyClearBtn = document.getElementById("clear-history-btn")
for (const callBtn of callBtns) {
    callBtn.addEventListener("click", function () {
        if (coinBalance < 20) {
            alert("Insufficient Balance")
            return
        }
        const card = this.closest(".card");
        const text = card.querySelector("p").innerText;
        const texth1 = card.querySelector("h2").innerText;
        const serviceName = card.querySelector("h1").innerText
        alert( text + " Calling..." + texth1)

        const dateTime = new Date().toLocaleTimeString()
        const historyItem = document.createElement("div");
        historyItem.classList.add("history-item", "flex", "justify-between", "bg-[#fafafa]", "m-4", "p-4", "rounded-lg");
        historyItem.innerHTML = `
            <div class="div">
                <h1 class="font-bold">${serviceName}</h1>
                <p class="text-[#5c5c5c]">${texth1}</p>
            </div>
            <p>${dateTime}</p>
        `;
        historyContainer.appendChild(historyItem)

        
        coinBalance = coinBalance - 20;
        coinBalance1.innerText = coinBalance;

       
    })
}
historyClearBtn.addEventListener("click", function() {
    historyContainer.innerHTML = "";
});
