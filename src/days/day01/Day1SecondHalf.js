import raw from "./day1Input.txt";

const Day1SecondHalf = () => {
    let inputData = "";

    async function countThreeWindowIncreasedMeasures(previousMeasure, measures, total) {
        let partialSum = 0;
        let currentNode = 0;

        if (measures.length < 3) {
            return total;
        } else {
            currentNode = measures.shift();
            partialSum = currentNode + measures[0] + measures[1];
            if (partialSum > previousMeasure && previousMeasure !== 0) {
                total++;
            }
            return await countThreeWindowIncreasedMeasures(partialSum, measures, total);
        }
    }

    fetch(raw)
        .then(r => r.text())
        .then(text => {
            inputData = text.split('\n').map(each => {
                const regex = "[^\r]*";
                return parseInt(each.match(regex)[0]);
            });

            countThreeWindowIncreasedMeasures(0, inputData, 0)
                .then(
                    numberOfWindowsIncreases => {
                        console.log(`${numberOfWindowsIncreases} are larger than the previous windows`);
                    });

        });
    const message = `⭐`;
    return message;

}

export default Day1SecondHalf;