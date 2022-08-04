var inputTime = document.querySelector('.input_time');
var sub = document.querySelector('.submit');
var start = document.querySelector('.strt');
var pause = document.querySelector('.pausee');
var reset = document.querySelector('.rst');
var mins = document.querySelector('.mins');
var hours = document.querySelector('.hours');
var seconds = document.querySelector('.seconds');
var timer = false;

var counter = 0 ;
var minutes = 0;
var hrs = inputTime.value / 60;
var minute = Math.floor(hrs);
sub.addEventListener('click', (e) =>{
        var hrs = inputTime.value / 60;
        var hrss = Math.floor(hrs);
        console.log(hrss);
        var minute = inputTime.value % 60;
        var secondss = inputTime.value * 60;
        counter = secondss;
        mins.innerHTML = `${minute}`;
        // hours.innerHTML = `${hrss}`;
        seconds.innerHTML = `${secondss}`;
        console.log(secondss);
        var a = secondss;
        console.log(a);
});
start.addEventListener('click', () =>{
    timer = true;
    stopwatch();
});

pause.addEventListener('click', () =>{
    timer = false;
});

reset.addEventListener('click', () =>{
    timer = false;
    mins.innerHTML = `00 `;
    // hours.innerHTML = `00 Hrs`;
    seconds.innerHTML = `00 `;
});  

stopwatch = () =>{
    secondss = document.querySelector('.input_time').value * 60;
    
    if(timer == true)
    {
            counter -= 1;
            console.log(counter);
                    if(counter == 0)
        {

            timer = false;
        }
        document.querySelector('.seconds').innerHTML = counter;
        setTimeout("stopwatch()", 1000);
    }
    

}