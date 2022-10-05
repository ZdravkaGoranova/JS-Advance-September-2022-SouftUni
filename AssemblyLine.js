function createAssemblyLine() {
    return {
        hasClima(car) {
            //  hasClima: (car) => {
            car.temp = 21,
                car.tempSettings = 21,
                car.adjustTemp = () => {
                    if (car.temp < car.tempSettings) {
                        car.temp += 1;//car.temp ++
                    } else if (car.temp > car.tempSettings) {
                        car.temp -= 1;
                    }
                }
        },
        hasAudio(car) {
            //hasAudio: (car) => {
            car.currentTrack = { 'name': '', 'artist': '' };
            car.nowPlaying = function () {
                //car.nowPlaying = () => {
                if (currentTrack !== null && currentTrack !== undefined) {
                    console.log(`Now playing '${currentTrack.name}' by ${currentTrack.artist}`);
                }
            }
        },
        hasParktronic(car) {
            // hasParktronic: (car) => {
            car.checkDistance = (distance) => {
                if (distance < 0.1) {
                    console.log(`Beep! Beep! Beep!`);
                }
                else if (distance < 0.25 && distance >= 0.1) {
                    console.log(`Beep! Beep!`);
                } else if (distance < 0.5 && distance >= 0.25) {
                    console.log(`Beep!`);
                } else {
                    console.log("");
                }
            }
        }

    };
}

//return myObj;

const assemblyLine = createAssemblyLine();

const myCar = {
    make: 'Toyota',
    model: 'Avensis'
};

assemblyLine.hasClima(myCar);
console.log(myCar.temp);
myCar.tempSettings = 18;
myCar.adjustTemp();
console.log(myCar.temp);
assemblyLine.hasAudio(myCar);
myCar.currentTrack = {
    name: 'Never Gonna Give You Up',
    artist: 'Rick Astley'
};
myCar.nowPlaying();
assemblyLine.hasParktronic(myCar);
myCar.checkDistance(0.4);
myCar.checkDistance(0.2);
console.log(myCar);


