function ranNum(num) {
    return Math.floor(Math.random()*num)
};

let names = ['Joe','Bob','John','Steve'];
let feelings = ['happy','sad','proud','disappointed'];
let events = ['studies','sleeps','eats','relaxes'];

const person = names[ranNum(4)];
const emotion = feelings[ranNum(4)];
const action = events[ranNum(4)];

console.log(`${person} feels ${emotion} when he ${action}`);
