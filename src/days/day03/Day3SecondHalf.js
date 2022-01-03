import raw from "./day3Input.txt";

const Day3SecondHalf = () => {
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
        console.clear();
        console.log(`GammaRate: ${gammaRate.join('')}, EpsilonRate: ${epsilonRate.join('')}`);

        let oxygenGeneratorRating = binaryValues.filter((binaryValue) => {
            const regex = /^010001110/; // -4
            return binaryValue.match(regex);
        });
        oxygenGeneratorRating = parseInt(oxygenGeneratorRating[0], 2);
        console.log(`Oxygen Generator Rating: ${oxygenGeneratorRating}`);

        let CO2ScrubberRating = binaryValues.filter((binaryValue) => {
            const regex = /^101110001/; // -3
            return binaryValue.match(regex);
        });
        CO2ScrubberRating = parseInt(CO2ScrubberRating[0], 2);
        console.log(`CO2 Scrubber Rating: ${CO2ScrubberRating}`);

        const lifeSupportRating = oxygenGeneratorRating * CO2ScrubberRating;
        console.log(`Life Support Rating: ${lifeSupportRating}`);
        return lifeSupportRating;
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
                    console.log(`Day3 second half: ${power}`);
                });

        });

    const message = `⭐`;
    return message;
}

export default Day3SecondHalf;