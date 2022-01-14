function copyUrlGmail() {
    var copyText = document.getElementById("copy_gmail_url").innerHTML;
    navigator.clipboard.writeText(copyText);
    
    var tooltip = document.getElementById("copy_notification_gmail");

 tooltip.innerHTML = "Скопировано!";
      
  }
  
  function outFuncUrl() {
    var tooltip = document.getElementById("copy_notification_gmail");
    tooltip.innerHTML = "Нажмите что-бы скопировать";;
  }