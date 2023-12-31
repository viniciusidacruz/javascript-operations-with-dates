window.addEventListener("load", (_) => {
  const nowWithoutFormat = new Date();
  const nowWithoutFormatWithParams = new Date("01 01 2024");
  const nowFormatted = new Intl.DateTimeFormat("pt-BR").format(
    nowWithoutFormatWithParams
  );
  const currentDay = nowWithoutFormat.getDate();
  const currentMonth = nowWithoutFormat.getMonth();
  const currentYear = nowWithoutFormat.getFullYear();
  const currentHour = nowWithoutFormat.getHours();
  const currentMinute = nowWithoutFormat.getMinutes();
  const currentSecond = nowWithoutFormat.getSeconds();

  document.getElementById("today").innerText = currentDay;
  document.getElementById("month").innerText = currentMonth + 1;
  document.getElementById("year").innerText = currentYear;
  document.getElementById("hour").innerText = currentHour;
  document.getElementById("minutes").innerText = currentMinute;
  document.getElementById("seconds").innerText = currentSecond;
  document.getElementById("new-date").innerText = nowWithoutFormat;
  document.getElementById("now-formatted").innerText = nowFormatted;
  document.getElementById("new-date-with-param").innerText =
    nowWithoutFormatWithParams;
});
