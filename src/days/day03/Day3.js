import raw from "./day3Input.txt";

const Day3 = () => {
    let inputData = "";

    async function binaryDiagnostic(binaryValues) {
        return "hey";
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

    const message = `null`;
    return message;
}

export default Day3;