function writeCards(names, event) {
    const messages = [];
    for (let i = 0; i < names.length; i++) {
      const message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
      messages.push(message);
      console.log(message);
    }
    return messages;
  }
  
  function countDown(number) {
    let i = number;
    while (i >= 0) {
      console.log(i);
      i--;
    }
  }
  
