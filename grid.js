const targetDate = new Date("2025-05-05T23:59:59").getTime();

function updateTimer() {
    const now = new Date().getTime();
    const timeLeft = targetDate - now;

    if (timeLeft > 0) {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.querySelector(".days").textContent = days;
        document.querySelector(".hours").textContent = hours;
        document.querySelector(".minutes").textContent = minutes;
        document.querySelector(".seconds").textContent = seconds;
    } else {
        clearInterval(timerInterval);
        document.getElementById("countdown-timer").textContent = "Time's up!";
    }
}

// Update every second
const timerInterval = setInterval(updateTimer, 1000);

// Initial call to display values immediately
updateTimer();


  const minusBtn = document.querySelector('.minus-btn');
  const plusBtn = document.querySelector('.plus-btn');
  const quantityInput = document.querySelector('.quantity-input');

  minusBtn.addEventListener('click', () => {
    const currentValue = parseInt(quantityInput.value, 10);
    if (currentValue > parseInt(quantityInput.min, 10)) {
      quantityInput.value = currentValue - 1;
    }
  });

  plusBtn.addEventListener('click', () => {
    const currentValue = parseInt(quantityInput.value, 10);
    quantityInput.value = currentValue + 1;
  });

  quantityInput.addEventListener('input', () => {
    const value = parseInt(quantityInput.value, 10);
    if (isNaN(value) || value < parseInt(quantityInput.min, 10)) {
      quantityInput.value = quantityInput.min;
    }
  });