function getClockTime(type = 24) {
    const currentDate = new Date();

    var hour = currentDate.getHours();
    var minutes = currentDate.getMinutes();
    var seconds = currentDate.getSeconds();
    
    if(type === 12){
      let suffix =(hour %12 > 0)?'PM':'AM';
      hour%=12;
      return `${(hour)>=10?hour:'0'+hour}:${(minutes)>=10?minutes:'0'+minutes}::${(seconds)>=10?seconds:'0'+seconds} ${suffix}`;
    }
    else{
      return `${(hour)>=10?hour:'0'+hour}:${(minutes)>=10?minutes:'0'+minutes}::${(seconds)>=10?seconds:'0'+seconds}`;
    }
    
  }



  clockElement24Hour = document.getElementById("clock24");
  setInterval(function () {
    clockElement24Hour.innerHTML = getClockTime(24);
  }, 1000);

  clockElement12Hour = document.getElementById("clock12");
  setInterval(function () {
    clockElement12Hour.innerHTML = getClockTime(12);
  }, 1000);