let { assert } = require("chai");
let { companyAdministration } = require("./companyAdministration");

describe("Tests Company Administration", function () {
    describe("Test hiringEmployee(name, position, yearsExperience) ", function () {
        it("position is different from Programmer", function () {
            assert.throw(() => { companyAdministration.hiringEmployee("Niki", "HR", 2) }, `We are not looking for workers for this position.`);
        });
        it("To be hired, the employee ", function () {
            assert.equal(companyAdministration.hiringEmployee("Niki", "Programmer", 3), `Niki was successfully hired for the position Programmer.`);
            assert.equal(companyAdministration.hiringEmployee("Niki", "Programmer", 4), `Niki was successfully hired for the position Programmer.`);
        });
        it("the above conditions are not met", function () {
            assert.equal(companyAdministration.hiringEmployee("Niki", "Programmer", 1), `Niki is not approved for this position.`);
        })
    });
    describe("Test calculateSalary(hours) ", function () {
        it("validate the input, if the hours are not a number, or are a negative number", function () {
            assert.throw(() => { companyAdministration.calculateSalary("2") }, "Invalid hours");
            assert.throw(() => { companyAdministration.calculateSalary(-2) }, "Invalid hours");
        });
        it("Less than 160 hours", function () {
            assert.equal(companyAdministration.calculateSalary(159), 2385);
            assert.equal(companyAdministration.calculateSalary(160), 2400);
        });
        it("More than 160 hours", function () {
            assert.equal(companyAdministration.calculateSalary(161), 3415);
            assert.equal(companyAdministration.calculateSalary(200), 4000);
        });
    });
    describe("Test firedEmployee(employees, index) ", function () {
        it("for validation for the input, an array and index may not always be valid", function () {
            assert.throw(() => { companyAdministration.firedEmployee(["Petar", "Ivan"], "2") }, "Invalid input");
            assert.throw(() => { companyAdministration.firedEmployee(["Petar", "Ivan"], 2) }, "Invalid input");
            assert.throw(() => { companyAdministration.firedEmployee(["Petar", "Ivan"], -2) }, "Invalid input");

            assert.throw(() => { companyAdministration.firedEmployee(2, 2) }, "Invalid input");
            assert.throw(() => { companyAdministration.firedEmployee("Ivan", 2) }, "Invalid input");
        });
        it("Finally, return the changed array of employees as a string, joined by a comma and a space", function () {
            assert.equal(companyAdministration.firedEmployee((["Petar", "Ivan", "George"],2), Petar, Ivan));
        });
    });
});