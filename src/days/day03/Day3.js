import raw from "./day3Input.txt";

const Day3 = () => {
    let inputData = "";

    async function binaryDiagnostic(binaryValues) {
        const numberOfSamples = binaryValues.length;
        const numberOfBits = binaryValues[0].length;
        let gammaRate = [];
        let epsilonRate = [];
        let powerConsumption = 0;

        for (let i = 0; i < numberOfBits; i++) {

            let numberOf1s = 0;
            for (let j = 0; j < numberOfSamples; j++) {
                if (binaryValues[j][i] === "1") {
                    numberOf1s += 1;
                }
            }
            const numberOf0s = numberOfSamples - numberOf1s;
            if (numberOf1s > numberOf0s) {
                gammaRate[i] = "1";
                epsilonRate[i] = "0";
            } else {
                gammaRate[i] = "0";
                epsilonRate[i] = "1";
            }
        }

        powerConsumption = parseInt(gammaRate.join(''), 2) * parseInt(epsilonRate.join(''), 2);

        return powerConsumption;
    }

    fetch(raw)
        .then(r => r.text())
        .then(text => {
            inputData = text.split('\n').map(each => {
                const regex = "[^\r]*";
                return each.match(regex)[0];
            });

            binaryDiagnostic(inputData)
                .then(power => {
                    console.log(`The power consumption of the submarine is ${power}`);
                });

        });

    const message = `⭐`;
    return message;
}

export default Day3;