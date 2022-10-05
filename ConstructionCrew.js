function constructionCrew(workerObj) {
    let water = 0.1;
    if (workerObj.dizziness === true) {
        let result = (workerObj.weight * water) * workerObj.experience;
        workerObj.levelOfHydrated += result;
        workerObj.dizziness = false;
    }
    console.log(workerObj);
    return workerObj;
}
constructionCrew({
    weight: 95,
    experience: 3,
    levelOfHydrated: 0,
    dizziness: false
}


);