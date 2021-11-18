function func_calc_A_disp_CountDown(){
    // setting date & time for NEW YEAR EVE
    var new_year_eve_Date= new Date('january 1 2022');
    new_year_eve_Date.setHours(18);
    console.log('new year eve date & time: '+new_year_eve_Date);
 
    // date & time of this day
    var current_Date= new Date();
    console.log("today's date: "+ current_Date);

    // putting countDown to display
    var diffOf_ms= (new_year_eve_Date - current_Date);
    console.log('difference in milliseconds: ' + diffOf_ms);

    var totalSeconds =Math.floor(diffOf_ms/1000);
    console.log('total seconds: '+totalSeconds);

    var minutes = Math.floor(totalSeconds/60) % 60;    // minutes will come out to be less than 60 for sure
    var hours = Math.floor(totalSeconds/3600) % 24;    // hours will be less than 24 sure
    var days = Math.floor(totalSeconds/3600 /24);      // days will be days
    var seconds = Math.floor(totalSeconds % 60);       // seconds will come out to be lesser than a minute or <60
    console.log(days,hours,minutes,seconds);

    document.querySelector('#days_id').textContent= days;
    document.querySelector('#hours_id').textContent= func_01(hours);
    document.querySelector('#minutes_id').textContent= func_01(minutes);
    document.querySelector('#seconds_id').textContent= func_01(seconds);
}
setInterval(func_calc_A_disp_CountDown,1000);
function func_01(time){
    if(time<10){
        return `0${time}`;
    }
    else{
        return time;
    }
}
// proj next:aww mera happy birthday