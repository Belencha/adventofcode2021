import raw from "./day2Input.txt";

const Day2SecondHalf = () => {
    let inputData = "";

    async function dive(instructions) {

        let horizontal = 0;
        let depth = 0;
        let aim = 0;

        instructions.forEach(function (instruction, i) {
            if (instruction[0] === "forward") {
                depth += aim * parseInt(instruction[1]);
                horizontal += parseInt(instruction[1]);
            }
            if (instruction[0] === "up") {
                aim -= parseInt(instruction[1]);
            }
            if (instruction[0] === "down") {
                aim += parseInt(instruction[1]);
            }
        });

        return await (horizontal * depth);
    }

    fetch(raw)
        .then(r => r.text())
        .then(text => {
            inputData = text.split('\n').map(each => {
                const regex = "[^\r]*";
                const [instruction, number] = each.match(regex)[0].split(' ');
                return [instruction, number];
            });

            dive(inputData)
                .then(factor => {
                    console.log(`Using this new interpretation of the commands, multiplying my final horizontal position by my final depth, I get ${factor}`);
                });

        });

    const message = `⭐`;
    return message;

}

export default Day2SecondHalf;