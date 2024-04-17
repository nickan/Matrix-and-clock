const hour = document.querySelector('.time__hour');
const minute = document.querySelector('.time__minutes');
const seconds = document.querySelector('.time__seconds'); // Добавлен селектор для секунд
const dateIndex = document.querySelector('.date');
const week = document.querySelector('.week');

function updateTime() {
  const date = new Date();
  const days = [
    'Воскресенье',
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота'
  ];
  const weeks = date.getDay();
  week.innerHTML = days[weeks];

  const year = date.getFullYear();
  const month = date.getMonth() + 1; // Плюс 1, потому что getMonth возвращает месяц от 0 до 11
  const day = date.getDate();
  const hourTime = date.getHours();
  const minuteTime = date.getMinutes();

  // Добавляем ведущий ноль к часам, минутам и секундам, если они меньше 10
  hour.innerHTML = hourTime < 10 ? `0${hourTime}` : hourTime;
  minute.innerHTML = minuteTime < 10 ? `0${minuteTime}` : minuteTime;

  // Исправляем форматирование даты, добавляя ведущие нули
  dateIndex.innerHTML = `${day < 10 ? `0${day}` : day}.${month < 10 ? `0${month}` : month}.${year}`;
}

// Обновляем время сразу же при загрузке страницы
updateTime();

// Затем обновляем время каждую секунду
setInterval(updateTime, 1000); // 1000 миллисекунд = 1 секундаапапапап
