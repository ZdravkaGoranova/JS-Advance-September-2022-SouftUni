class footballTeam {
    constructor(clubName, country) {
        this.clubName = clubName;
        this.country = country;
        this.invitedPlayers = [];
    }
    newAdditions(footballPlayers) {
        let arrayName = [];

        for (let el of footballPlayers) {
            let [name, age, playerValue] = el.split("/")
            age = Number(age);
            playerValue = Number(playerValue);

            let currentPlayers = this.invitedPlayers.find(player => player.name === name);
            if (!currentPlayers) {
                this.invitedPlayers.push({ name, age, playerValue })
                arrayName.push(name)
            } else {
                if (currentPlayers.playerValue < playerValue) {
                    currentPlayers.playerValue = playerValue;
                }
            }
        }
        let res = "";
        res += `You successfully invite `;
        arrayName.forEach((el) => res += `${el}, `);
        return res.substring(0, res.length - 2) + ".";

    };
    signContract(selectedPlayer) {
        let [name, playerOffer] = selectedPlayer.split("/")
        playerOffer = Number(playerOffer);
        let currentPlayers = this.invitedPlayers.find(player => player.name === name);
        if (!currentPlayers) {
            throw new Error(`${name} is not invited to the selection list!`);
        }
        else if (playerOffer < currentPlayers.playerValue) {
            throw new Error(`The manager's offer is not enough to sign a contract with ${name}, ${currentPlayers.playerValue - playerOffer} million more are needed to sign the contract!`);
        } else {
            currentPlayers.playerValue = "Bought";
        }
        return `Congratulations! You sign a contract with ${name} for ${playerOffer} million dollars.`
    };
    ageLimit(name, age) {
       
        let currentPlayers = this.invitedPlayers.find(player => player.name === name);
        if (!currentPlayers) {
            throw new Error(`${name} is not invited to the selection list!`);
        }
        if (age >= currentPlayers.age) {
            let difference = age - currentPlayers.age;
            if (difference <= 5) {
                return `${name} will sign a contract for ${difference} years with ${this.clubName} in ${this.country}!`;
            }
            if (difference > 5) {
                return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`;
            }
        } else if (currentPlayers.age >= age) {
            return `${name} is above age limit!`
        }
    };
    transferWindowResult() {
        let res = `Players list:\n`
        this.invitedPlayers

        let sort = this.invitedPlayers.sort((a, b) => a.name.localeCompare(b.name))
        sort.forEach((el) => res += `Player ${el.name}-${el.playerValue}\n`)

        return res.trim();
    }
}
let fTeam = new footballTeam("Barcelona", "Spain");
console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
console.log(fTeam.signContract("Kylian Mbappé/240"));
console.log(fTeam.ageLimit("Kylian Mbappé", 30));
console.log(fTeam.transferWindowResult());
