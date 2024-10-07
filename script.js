function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

delay(2000).then(() => console.log("Пройшло 2 секунди"));

// Але так можна коротше записати
const delayArrow = ms => new Promise(resolve => setTimeout(resolve, ms));

delayArrow(4000).then(() => console.log("Пройшло 4 секунди"));
delayArrow(3000).then(() => console.log("Пройшло 3 секунди"));