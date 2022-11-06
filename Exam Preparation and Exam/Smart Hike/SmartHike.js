class SmartHike {
    constructor(username) {
        this.username = username;
        this.goals = {};
        this.listOfHikes = [];
        this.resources = 100;
    }
    addGoal(peak, altitude) {
        if (!this.goals.hasOwnProperty(peak)) {//!this.goals[peak]
            this.goals[peak] = altitude;
            return `You have successfully added a new goal - ${peak}`;
        }
        return `${peak} has already been added to your goals`;
    };
    hike(peak, time, difficultyLevel) {

        // •	difficultyLevel – "hard" or "easy"
        if (!this.goals.hasOwnProperty(peak)) {//   if (!this.goals[peak]) {
            throw new Error(`${peak} is not in your current goals`);
        }; if (this.goals[peak]) {
            if (this.resources === 0) {
                throw new Error("You don't have enough resources to start the hike");
            }
        };
        let difference = this.resources - 10 * time;
        if (difference < 0) {
            return "You don't have enough resources to complete the hike";
        } else {
            this.resources -= 10 * time;
            this.listOfHikes.push({ peak, time, difficultyLevel });
            return `You hiked ${peak} peak for ${time} hours and you have ${this.resources}% resources left`
        }
    };
    rest(time) {
        this.resources += time * 10;
        if (this.resources >= 100) {
            this.resources = 100;
            return `Your resources are fully recharged. Time for hiking!`;
        }
        return `You have rested for ${time} hours and gained ${time * 10}% resources`
    };
    showRecord(criteria) {
        if (this.listOfHikes.length === 0) {
            return `${this.username} has not done any hiking yet`
        }
        let diff = [];
        let find = this.listOfHikes.find((a => a.difficultyLevel === criteria));
        // this.listOfHikes.sort((a,b)=>a.difficultyLevel-b.difficultyLevel)

        if (criteria === "all") {
            let res = '';
            res += `All hiking records:\n`;
            this.listOfHikes.forEach((el) => {
                res += `${this.username} hiked ${el.peak} for ${el.time} hours\n`;
            });
            return res.trim();
        }
        this.listOfHikes.forEach((x) => {
            if (x.difficultyLevel === criteria) {
                diff.push(x);
            }
        });
        if (!find) {
            return `${this.username} has not done any ${criteria} hiking yet`;
        };
        let sorted = diff.sort((a, b) => {
            return a.time - b.time
        })
        return `${this.username}'s best ${criteria} hike is ${sorted[0].peak} peak, for ${sorted[0].time} hours`
    }
}
const user = new SmartHike('Vili');
user.addGoal('Musala', 2925);
user.hike('Musala', 8, 'hard');
console.log(user.showRecord('easy'));
user.addGoal('Vihren', 2914);
user.hike('Vihren', 4, 'hard');
console.log(user.showRecord('hard'));
user.addGoal('Rui', 1706);
user.hike('Rui', 3, 'easy');
console.log(user.showRecord('all'));
