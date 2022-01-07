import raw from "./day3Input.txt";

const Day3SecondHalf = () => {
    let inputData = "";
    let oxygenGeneratorRating = 0;
    let CO2ScrubberRating = 0;

    async function generateOxygenGeneratorRating(samples, index) {
        const numberOfSamples = samples.length;
        const numberOfBits = samples[0].length;

        if (numberOfSamples === 1) {
            return samples[0];
        }
        if (index > numberOfBits) {
            return null;
        }

        let numberOf1s = 0;
        for (let j = 0; j < numberOfSamples; j++) {
            if (samples[j][index] === "1") {
                numberOf1s += 1;
            }
        }
        const numberOf0s = numberOfSamples - numberOf1s;
        let bitMostPopular = "";
        if (numberOf1s >= numberOf0s) {
            bitMostPopular = "1";
        } else {
            bitMostPopular = "0";
        }
        
        return await generateOxygenGeneratorRating(samples.filter(sample => sample[index] === bitMostPopular), ++index);
    }

    async function generateCO2ScrubberRating(samples, index) {
        const numberOfSamples = samples.length;
        const numberOfBits = samples[0].length;

        if (numberOfSamples === 1) {
            return samples[0];
        }
        if (index > numberOfBits) {
            return null;
        }

        let numberOf1s = 0;
        for (let j = 0; j < numberOfSamples; j++) {
            if (samples[j][index] === "1") {
                numberOf1s += 1;
            }
        }
        const numberOf0s = numberOfSamples - numberOf1s;
        let bitLeastPopular = "";
        if (numberOf1s >= numberOf0s) {
            bitLeastPopular = "0";
        } else {
            bitLeastPopular = "1";
        }
        
        return await generateCO2ScrubberRating(samples.filter(sample => sample[index] === bitLeastPopular), ++index);
    }
    

    fetch(raw)
        .then(r => r.text())
        .then(text => {
            inputData = text.split('\n').map(each => {
                const regex = "[^\r]*";
                return each.match(regex)[0];
            });

            generateOxygenGeneratorRating(inputData, 0)
                .then(ogr => {
                    oxygenGeneratorRating = parseInt(ogr, 2);
                    console.log(`Oxygen Generator Rating: ${oxygenGeneratorRating}`);
                });

            generateCO2ScrubberRating(inputData, 0)
                .then(co2sr => {
                    CO2ScrubberRating = parseInt(co2sr, 2);
                    console.log(`CO2 Scrubber Rating: ${CO2ScrubberRating}`);
                });

        });

    const message = `⭐`;
    return message;
}

export default Day3SecondHalf;