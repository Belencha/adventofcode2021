import raw from "./day2Input.txt";

const Day2 = () => {
    let inputData = "";

    async function dive(instructions) {

        let horizontal = 0;
        let depth = 0;

        instructions.forEach(function (instruction, i) {
            if (instruction[0] === "forward") {
                horizontal += parseInt(instruction[1]);
            }
            if (instruction[0] === "up") {
                depth -= parseInt(instruction[1]);
            }
            if (instruction[0] === "down") {
                depth += parseInt(instruction[1]);
            }
        });

        return await (horizontal * depth);
    }

    fetch(raw)
        .then(r => r.text())
        .then(text => {
            inputData = text.split('\n').map( each => {
                const regex = "[^\r]*";
                const [instruction, number] = each.match(regex)[0].split(' ');
                return [instruction, number];
            });

            dive(inputData)
                .then( factor => {
                    console.log(`I would have ${ factor } after following the planned course`);
                });

        });

        const message = `Day 2 first half done (⭐)`;
        return message;
    
}

export default Day2;