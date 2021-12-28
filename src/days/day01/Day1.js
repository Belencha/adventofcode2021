import raw from "./day1Input.txt";

const Day1 = () => {
    let inputData = "";

    async function countIncreasedMeasures(currentMeasure, measures, total) {
        if (measures.length === 0) {
            return total;
        }
        if (measures[0] > currentMeasure) {
            total++;
        }
        return await countIncreasedMeasures(measures.shift(), measures, total);
    }

    fetch(raw)
        .then(r => r.text())
        .then(text => {
            inputData = text.split('\n').map(each => {
                const regex = "[^\r]*";
                return parseInt(each.match(regex)[0]);
            });

            countIncreasedMeasures(inputData[0], inputData, 0)
                .then(
                    numberOfIncreases => {
                        console.log(`${numberOfIncreases} are larger than the previous measurement`);
                    }
                );

        });
    const message = `⭐`;
    return message;

}

export default Day1;