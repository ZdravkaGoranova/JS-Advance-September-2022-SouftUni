function carFactory(objDescribing) {
    let car = {}
    car.model = objDescribing.model;

    let engineEnum = {
        "Small engine": { power: 90, volume: 1800 },
        "Normal engine": { power: 120, volume: 2400 },
        "Monster engine": { power: 200, volume: 3500 }
    }

    if (objDescribing.power <= 90) {
        car.engine = engineEnum["Small engine"];
    } else if (objDescribing.power <= 120) {
        car.engine = engineEnum["Normal engine"];
    } else if (objDescribing.power >= 200) {
        car.engine = engineEnum["Monster engine"];
    }
    
    if (objDescribing.carriage === 'hatchback') {
        car.carriage = {
            type: 'hatchback',
            color: objDescribing.color
        };
    } else if (objDescribing.carriage === 'coupe') {
        car.carriage = {
            type: 'coupe',
            color: objDescribing.color
        };
    }

    let size = objDescribing.wheelsize % 2 == 0 ? objDescribing.wheelsize - 1 : objDescribing.wheelsize;
    car.wheels = new Array(4).fill(size);

    //второ предложение на objDescribing.wheelsize
    // if (objDescribing.wheelsize % 2 == 0) {
    //   let size = objDescribing.wheelsize - 1;
    //   car.wheels = [size, size, size, size]
    //  } else {
    //     size = objDescribing.wheelsize;
    //     car.wheels = [size, size, size, size]
    // }

    console.log(car);
    return car;
}
carFactory({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
}
);