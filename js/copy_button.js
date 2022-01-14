function copyTag() {
  var copyText = document.getElementById("copy_discord_tag").innerHTML;
  navigator.clipboard.writeText(copyText);
  
  var tooltip = document.getElementById("copy_notification");
  var counter = document.getElementById("counter_to_copy");
  counter.innerHTML = +counter.innerHTML + 1;
    if(counter.innerHTML == 1) tooltip.innerHTML = "Скопировано!";
    if(counter.innerHTML == 2) tooltip.innerHTML = "Двойное копирование!";
    if(counter.innerHTML == 3) tooltip.innerHTML = "Тройное копирование!";
    if(counter.innerHTML == 4) tooltip.innerHTML = "Безумие!";
    if(counter.innerHTML == 5) tooltip.innerHTML = "Доминирование!";
    if(counter.innerHTML == 6) tooltip.innerHTML = "Мегакопирование!";
    if(counter.innerHTML == 7) tooltip.innerHTML = "Неудержимый!";
    if(counter.innerHTML == 8) tooltip.innerHTML = "Полный улёт!";
    if(counter.innerHTML == 9) tooltip.innerHTML = "Чудовищное копирование!";
    if(counter.innerHTML == 10) tooltip.innerHTML = "БОЖЕСТВЕННО!!";
    if(counter.innerHTML >= 11) tooltip.innerHTML = "БОЛЕЕ ЧЕМ БОЖЕСТВЕННО!!!";

    if(counter.innerHTML >= 10) {
        tooltip.style.backgroundColor = "#ED4245";
        tooltip.style.borderColor = "#ED4245 transparent transparent transparent";
    }
}

function outFunc() {
  var tooltip = document.getElementById("copy_notification");
  tooltip.style.backgroundColor = "#3BA55D";
  tooltip.innerHTML = "Нажмите что-бы скопировать";
  var counter = document.getElementById("counter_to_copy");
  counter.innerHTML = "0";
}