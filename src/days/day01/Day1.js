import raw from "./day1Input.txt";

const Day1 = () => {
    let inputData = "";
    let numberOfIncreases = 0;

    const countIncreasedMeasures = (currentMeasure, measures, total) => {
        if (measures.length === 0) {
            return total;
        }
        if (measures[0] > currentMeasure) {
            total++;
        }
        console.log(total);
        countIncreasedMeasures(measures.shift(), measures, total);
    }

    fetch(raw)
        .then(r => r.text())
        .then(text => {
            inputData = text.split('\n').map( each => {
                const regex = "[^\r]*";
                return parseInt(each.match(regex)[0]);
            });
            numberOfIncreases = countIncreasedMeasures(inputData[0], inputData, 0);
            console.log(`${ numberOfIncreases } are larger than the previous measurement`); /* UNDEFINEEEEEED, oh shit, tengo que aprender esto */
        });
        const message = `Day 1 done`;
        return message;
    
}

export default Day1;