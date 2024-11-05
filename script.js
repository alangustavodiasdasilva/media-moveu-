document.getElementById("inputForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Define os valores fixos de temperatura e umidade
    const minTemp = 20.0;
    const maxTemp = 22.0;
    const minHumidity = 63.0;
    const maxHumidity = 67.0;
    const numRows = parseInt(document.getElementById("numRows").value);

    // Gera dados aleatórios com os valores fixos
    const data = generateRandomData(minTemp, maxTemp, minHumidity, maxHumidity, numRows);

    // Exibe os dados na tabela
    const resultTable = document.getElementById("resultTable").getElementsByTagName("tbody")[0];
    resultTable.innerHTML = ""; // Limpa a tabela

    data.forEach(row => {
        const newRow = resultTable.insertRow();
        Object.values(row).forEach(value => {
            const cell = newRow.insertCell();
            cell.textContent = value.toFixed(2);
        });
    });

    // Exibe o botão de copiar
    document.getElementById("copyButton").style.display = "inline";
});

document.getElementById("copyButton").addEventListener("click", function() {
    const table = document.getElementById("resultTable");
    const rows = Array.from(table.rows);
    const text = rows.map(row => Array.from(row.cells).map(cell => cell.textContent).join("\t")).join("\n");

    // Copia o texto para a área de transferência
    navigator.clipboard.writeText(text).then(() => {
        alert("Dados copiados para a área de transferência!");
    }).catch(err => {
        console.error("Erro ao copiar para a área de transferência: ", err);
    });
});

// Função para gerar os dados aleatórios
function generateRandomData(minTemp, maxTemp, minHumidity, maxHumidity, numRows) {
    const data = [];
    for (let i = 0; i < numRows; i++) {
        data.push({
            "Temp 1": Math.random() * (maxTemp - minTemp) + minTemp,
            "Umid 1": Math.random() * (maxHumidity - minHumidity) + minHumidity,
            "Temp 2": Math.random() * (maxTemp - minTemp) + minTemp,
            "Umid 2": Math.random() * (maxHumidity - minHumidity) + minHumidity,
            "Temp 3": Math.random() * (maxTemp - minTemp) + minTemp,
            "Umid 3": Math.random() * (maxHumidity - minHumidity) + minHumidity,
            "Temp 4": Math.random() * (maxTemp - minTemp) + minTemp,
            "Umid 4": Math.random() * (maxHumidity - minHumidity) + minHumidity,
            "Temp 5": Math.random() * (maxTemp - minTemp) + minTemp,
            "Umid 5": Math.random() * (maxHumidity - minHumidity) + minHumidity,
            "Temp 6": Math.random() * (maxTemp - minTemp) + minTemp,
            "Umid 6": Math.random() * (maxHumidity - minHumidity) + minHumidity,
            "Temp 7": Math.random() * (maxTemp - minTemp) + minTemp,
            "Umid 7": Math.random() * (maxHumidity - minHumidity) + minHumidity,
            "Temp 8": Math.random() * (maxTemp - minTemp) + minTemp,
            "Umid 8": Math.random() * (maxHumidity - minHumidity) + minHumidity,
            "Umid 9": Math.random() * (maxHumidity - minHumidity) + minHumidity,
            "Temp 9": Math.random() * (maxTemp - minTemp) + minTemp,
            "Umid 10": Math.random() * (maxHumidity - minHumidity) + minHumidity,
            "Temp 10": Math.random() * (maxTemp - minTemp) + minTemp,
            "Umid 11": Math.random() * (maxHumidity - minHumidity) + minHumidity,
            "Temp 11": Math.random() * (maxTemp - minTemp) + minTemp,
            "Umid 12": Math.random() * (maxHumidity - minHumidity) + minHumidity,
            "Temp 12": Math.random() * (maxTemp - minTemp) + minTemp,
        });
    }
    return data;
}
