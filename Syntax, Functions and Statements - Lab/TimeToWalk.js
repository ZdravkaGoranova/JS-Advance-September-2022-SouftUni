function timeToWalk(steps, foodprint, speed) {

    let distanceMeters = steps * foodprint;
    let speedMetersInSec = speed / 3.6;
    // 60*60=3600секунди /1000метри към киломентри = 3.6
    
    let addBreakMinutes = Math.floor(distanceMeters / 500);
    let time = distanceMeters / speedMetersInSec;

    let timeInMin = Math.floor(time / 60);
    let timeInSec = Number(((time - (timeInMin * 60)).toFixed(0)));
    let timeInH = Math.floor(time / 3600);

    timeInMin += addBreakMinutes;
    timeInH += Math.floor(timeInMin / 60);
    timeInMin = timeInMin % 60;

    let formattedH = timeInH < 10 ? `0${timeInH}` : `${timeInH}`;
    let formattedM = timeInMin < 10 ? `0${timeInMin}` : `${timeInMin}`;
    let formattedSec = timeInSec < 10 ? `0${timeInSec}` : `${timeInSec}`;

    console.log(`${formattedH}:${formattedM}:${formattedSec}`);
}
timeToWalk(4000, 0.60, 5);
timeToWalk(2564, 0.70, 5.5);


//ВТОРО РЕШЕНИЕ 

function timeToWalk(numOfSteps, footprint, velosity){
  
    function setFormat(num){
      return num < 10 ? '0' + num : num;
    }
    
    let distance = numOfSteps * footprint;
    velosity /= 3.6;
    let allSeconds = (distance / velosity) + (Math.floor(distance / 500) * 60);
    allSeconds = Math.round(allSeconds, 0);
    
    let time = new Date(0, 0, 0, 0, 0, allSeconds);
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    
    console.log(`${setFormat(hours)}:${setFormat(minutes)}:${setFormat(seconds)}`);
  }
