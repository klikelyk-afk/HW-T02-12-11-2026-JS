//TASK 1:

function guessMyNumber() {
    let min = 0;
    let max = 100;
    let attempts = 0;
    
    alert("Загадайте число від 0 до 100 у голові, а моя програма спробує його вгадати. Відповідайте лише >, < або ==.");

    let guessed = false;

    while (!guessed) {
        let n = Math.floor((min + max) / 2);
        attempts++;

        let answer = prompt(`Ваше число > ${n}, < ${n} або == ${n}?\nВведіть >, < або ==`);

        if (answer === ">") {
            min = n + 1;
        } else if (answer === "<") {
            max = n - 1;
        } else if (answer === "==") {
            guessed = true;
            document.getElementById("result").innerHTML = `
                <h3>Гра «Вгадай число»:</h3>
                Ваше число <strong>${n}</strong> вгадано за <strong>${attempts}</strong> спроб!
            `;
            console.log("Кількість спроб у консолі: " + attempts);
        } else {
            alert("Будь ласка, введіть коректно: >, < або ==");
            attempts--;
        }
    }
}

//TASK 2:

function getFibonacci() {
    let n = Number(prompt("Введіть порядковий номер числа Фібоначчі:"));
    
    if (n <= 0) {
        document.getElementById("result").innerHTML = "Введіть число більше за 0!";
        return;
    }

    let a = 1;
    let b = 1;
    let fib = 1;

    for (let i = 3; i <= n; i++) {
        fib = a + b;
        a = b;
        b = fib;
    }

    if (n === 1 || n === 2) {
        fib = 1;
    }

    document.getElementById("result").innerHTML = `
        <h3>Число Фібоначчі:</h3>
        Для порядкового номера <strong>${n}</strong> число дорівнює: <strong>${fib}</strong>
    `;
}