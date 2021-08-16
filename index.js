function countDown() {
    for (let countDown = 10; countDown > -1; countDown--) {
        console.log(countDown);
    }
}
countDown(10);

const newArr = []
function writeCards(names, event) {
    for(let i = 0; i < names.length; i++) {
      newArr.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return newArr;
}
writeCards;


 