function updateUTCTime() {
  const utcTimeElement = document.getElementById("utc-time");

  function setTime() {
    utcTimeElement.textContent = "UTC Time: " + new Date().toISOString();
  }

  setTime();
  setInterval(setTime, 1000);
}

updateUTCTime();
