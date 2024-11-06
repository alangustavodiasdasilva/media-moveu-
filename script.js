function generateData() {
    const numRows = parseInt(document.getElementById("numRows").value);
    const startTime = document.getElementById("startTime").value;

    const tableBody = document.getElementById("resultTable").querySelector("tbody");
    tableBody.innerHTML = ""; // Limpa a tabela antes de gerar novos dados

    let currentTime = parseTime(startTime);

    for (let i = 0; i < numRows; i++) {
        const row = document.createElement("tr");

        // Adiciona o horário formatado para cada linha
        const timeCell = document.createElement("td");
        timeCell.textContent = formatTime(currentTime);
        row.appendChild(timeCell);

        // Gera uma temperatura fixa entre 20 e 22 para esta linha
        const tempFixed = randomInRange(20, 22).toFixed(2);

        // Adiciona valores de temperatura fixa e umidade variável para cada sensor
        for (let j = 1; j <= 12; j++) { // 12 sensores para temperatura e umidade
            const tempCell = document.createElement("td");
            tempCell.textContent = tempFixed;  // Temperatura fixa entre 20 e 22
            row.appendChild(tempCell);

            const umidCell = document.createElement("td");
            umidCell.textContent = randomInRange(63, 67).toFixed(2);  // Umidade variável entre 63 e 67
            row.appendChild(umidCell);
        }

        // Adiciona a linha à tabela
        tableBody.appendChild(row);

        // Incrementa o horário em um minuto
        currentTime.setMinutes(currentTime.getMinutes() + 1);

        // Reseta o horário para 00:01 se ultrapassar 23:59
        if (currentTime.getHours() === 0 && currentTime.getMinutes() === 0) {
            currentTime.setHours(0, 1, 0, 0); // Define para 00:01
        }
    }

    // Exibe o botão de copiar
    document.getElementById("copyButton").style.display = "block";
}

function parseTime(timeString) {
    const [hours, minutes, seconds] = timeString.split(":");
    const [sec, millis] = seconds.split(".");
    return new Date(1970, 0, 1, hours, minutes, sec, millis);
}

function formatTime(date) {
    return date.toTimeString().split(" ")[0] + "." + date.getMilliseconds().toString().padStart(3, "0");
}

function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
}

function copyData() {
    const table = document.getElementById("resultTable");
    let range, selection;

    if (document.createRange && window.getSelection) {
        range = document.createRange();
        selection = window.getSelection();
        selection.removeAllRanges();

        try {
            range.selectNodeContents(table);
            selection.addRange(range);
        } catch (e) {
            range.selectNode(table);
            selection.addRange(range);
        }

        document.execCommand("copy");
        selection.removeAllRanges();
        alert("Dados copiados para a área de transferência!");
    }
}
