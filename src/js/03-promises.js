const form = document.querySelector('.form');

form.addEventListener('submit', formSubmit);

function formSubmit(event) {
  event.preventDefault();
  const {
    elements: { delay='', step='', amount='' },
  } = event.currentTarget || {};

  const delayNumber = Number(delay.value);
  const stepNumber = Number(step.value);
  const amountNumber = Number(amount.value);

  for (let i = 0; i <= amountNumber -1; i++) {
    let currentDelay = stepNumber * i + delayNumber;
    createPromise(i, currentDelay)
      .then(({ i, currentDelay }) => {
        console.log(`✅ Fulfilled promise ${i} in ${currentDelay}ms`);
      })
      .catch(({ i, currentDelay }) => {
        console.log(`❌ Rejected promise ${i} in ${currentDelay}ms`);
      });
  }
}

function createPromise(position, delay) {
      const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {
    
    setTimeout(() => {
      if (shouldResolve) {
        resolve(console.log(`✅ Fulfilled promise ${position} in ${delay}ms`));
      } else {
        reject(console.log(`❌ 1111 promise ${position} in ${delay}ms`));
      }
    }, delay);
  });
}
