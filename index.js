let newCount = document.getElementById("new-count");
let previousEntries = document.getElementById("previous-entries");

let departingCount = document.getElementById("departing-count");
let previousExits = document.getElementById("previous-exits");

let total = document.getElementById("total-passengers");

let count1 = 0;
let count2 = 0;
let totalCount = 0;

function incrementNew() {
    count1 += 1;
    newCount.textContent = count1;
};

function decrementNew() {
    count1 -= count1 > 0 ? 1 : 0;
    newCount.textContent = count1;
};

function saveNew() {
    let entrie = count1 + " - ";
    previousEntries.textContent += entrie;
    totalCount += count1;
    total.textContent = totalCount;
    count1 = 0;
    newCount.textContent = count1;
};

function incrementDeparting() {
    count2 += 1;
    departingCount.textContent = count2;
};

function decrementDeparting() {
    count2 -= count2 > 0 ? 1 : 0;
    departingCount.textContent = count2;
};

function saveDeparting() {
    let exit = count2 + " - ";
    previousExits.textContent += exit;
    totalCount -= (totalCount -= count2) >= 0 ? count2: 0;
    total.textContent = totalCount;
    count2 = 0;
    departingCount.textContent = count2;
};