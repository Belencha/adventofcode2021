import raw from "./day1Input.txt";

const Day1 = () => {
    let inputData = "";
    let numberOfIncreases = 0;
    let numberOfWindowsIncreases = 0;

    const countIncreasedMeasures = (currentMeasure, measures, total) => {
        if (measures.length === 0) {
            return total;
        }
        if (measures[0] > currentMeasure) {
            total++;
        }
        /*console.log(total);*/
        countIncreasedMeasures(measures.shift(), measures, total);
    }

    function countThreeWindowIncreasedMeasures(previousMeasure, measures, total) {
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
            console.log("Total: " + total);
            return countThreeWindowIncreasedMeasures(partialSum, measures, total);
        }
    }

    fetch(raw)
        .then(r => r.text())
        .then(text => {
            inputData = text.split('\n').map( each => {
                const regex = "[^\r]*";
                return parseInt(each.match(regex)[0]);
            });
            numberOfIncreases = countIncreasedMeasures(inputData[0], inputData, 0);
            numberOfWindowsIncreases = countThreeWindowIncreasedMeasures(0, inputData, 0);

            /* UNDEFINEEEEEED, oh shit, tengo que aprender esto */
            console.log(`${ numberOfIncreases } are larger than the previous measurement`); 

            console.log(`${ numberOfWindowsIncreases } are larger than the previous windows`);

        });
        const message = `Day 1 half done`;
        return message;
    
}

export default Day1;