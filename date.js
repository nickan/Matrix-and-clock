const hours = document.querySelectorAll(".time__hour");
const minutes = document.querySelectorAll(".time__minutes");
const seconds = document.querySelectorAll(".time__seconds"); // Селекторы для секунд
const dateIndexes = document.querySelectorAll(".date");
const weeks = document.querySelectorAll(".week");
const scale = document.querySelectorAll(".scale");

function updateTime() {
  const date = new Date();
  const days = [
    "Воскресенье",
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
  ];
  const weekDay = date.getDay();

  // Установка дня недели
  weeks.forEach(week => {
    week.textContent = days[weekDay];
  });

  const year = date.getFullYear();
  const month = date.getMonth() + 1; // Плюс 1, потому что getMonth возвращает месяц от 0 до 11
  const day = date.getDate();
  const hourTime = date.getHours();
  const minuteTime = date.getMinutes();
  const secondTime = date.getSeconds();

  // Установка часов, минут и секунд с ведущими нулями
  hours.forEach(hour => {
    hour.textContent = hourTime < 10 ? `0${hourTime}` : hourTime;
  });
  minutes.forEach(minute => {
    minute.textContent = minuteTime < 10 ? `0${minuteTime}` : minuteTime;
  });
  seconds.forEach(second => {
    second.textContent = secondTime < 10 ? `0${secondTime}` : secondTime;
  });

  // Установка даты
  dateIndexes.forEach(dateIndex => {
    dateIndex.textContent = `${day < 10 ? `0${day}` : day}.${month < 10 ? `0${month}` : month}.${year}`;
  });
}

// Обновляем время сразу же при загрузке страницы
updateTime();

// Затем обновляем время каждую секунду
setInterval(updateTime, 1000); // 1000 миллисекунд = 1 секунда




