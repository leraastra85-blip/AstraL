// fullPage.js
new fullpage('#fullpage', {
    autoScrolling: true,
    navigation: true
});

// Таймер
const weddingDate = new Date("2026-04-25T00:00:00");
const startDate = new Date();
const totalTime = weddingDate - startDate;

function updateTimer() {
    const now = new Date();
    const timeLeft = weddingDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);

    document.getElementById("time-left").textContent =
        `Осталось: ${days} дн, ${hours} ч, ${minutes} мин`;

    const elapsed = totalTime - timeLeft;
    const progressPercent = Math.min((elapsed / totalTime) * 100, 100);
    document.getElementById("progress-bar").style.width = progressPercent + "%";
}

setInterval(updateTimer, 1000);
updateTimer();