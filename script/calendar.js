let calendarDate = new Date();
function renderCalendar() {
  const year = calendarDate.getFullYear();
  const month = calendarDate.getMonth();
  const meses = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];
  document.getElementById("calendar-month-year").textContent =
    meses[month] + " " + year;
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const today = new Date();
  const container = document.getElementById("calendar-days");
  container.innerHTML = "";
  for (let i = 0; i < firstDay; i++) {
    container.innerHTML += "<span></span>";
  }
  for (let d = 1; d <= daysInMonth; d++) {
    const isToday =
      d === today.getDate() &&
      month === today.getMonth() &&
      year === today.getFullYear();
    container.innerHTML +=
      '<span class="' + (isToday ? "today" : "") + '">' + d + "</span>";
  }
}
function changeMonth(dir) {
  calendarDate.setMonth(calendarDate.getMonth() + dir);
  renderCalendar();
}
renderCalendar();
