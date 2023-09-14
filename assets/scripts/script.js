const dateDisplay = document.getElementById('dateDisplay');
const dayElement = document.getElementById('day');
const monthElement = document.getElementById('month');
const yearElement = document.getElementById('year');
const prevMonthButton = document.getElementById('prevMonth');
const nextMonthButton = document.getElementById('nextMonth');

// Initialize the calendar with the current date
const currentDate = new Date();
let currentYear = currentDate.getFullYear();
let currentMonth = currentDate.getMonth() + 1; // Months are zero-based
let currentDay = currentDate.getDate();

updateDateDisplay();

prevMonthButton.addEventListener('click', () => {
    currentMonth--;
    if (currentMonth < 1) {
        currentMonth = 12;
        currentYear--;
    }
    updateDateDisplay();
});

nextMonthButton.addEventListener('click', () => {
    currentMonth++;
    if (currentMonth > 12) {
        currentMonth = 1;
        currentYear++;
    }
    updateDateDisplay();
});

function updateDateDisplay() {
    dayElement.textContent = currentDay.toString().padStart(2, '0');
    monthElement.textContent = new Date(currentYear, currentMonth - 1, 1).toLocaleString('default', { month: 'long' });
    yearElement.textContent = currentYear;
}