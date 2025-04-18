

  const endDate = new Date("2027-08-20T12:00:00");

  const updateTimer = () => {
    const now = new Date();
    const diff = endDate - now;

    if (diff <= 0) {

      document.querySelectorAll('.deal-container-timer-time').forEach(el => el.textContent = "00");
      clearInterval(timerInterval);
      return;
    }

    const totalSeconds = Math.floor(diff / 1000);
    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;


    const times = document.querySelectorAll('.deal-container-timer-time');
    times[0].textContent = String(days).padStart(2, '0');
    times[1].textContent = String(hours).padStart(2, '0');
    times[2].textContent = String(minutes).padStart(2, '0');
    times[3].textContent = String(seconds).padStart(2, '0');
  };


  updateTimer();

  
  const timerInterval = setInterval(updateTimer, 1000);

