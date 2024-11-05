document.getElementById("inputForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Valores médios para temperatura e umidade
    const avgTemp = 21.0; // média de temperatura
    const avgHumidity = 65.0; // média de umidade
    const numRows = parseInt(document.getElementById("numRows").value);

    // Obtém os desvios (variação) da entrada do usuário
    const tempVariation = parseFloat(document.getElementById("tempVariation").value);
    const humidityVariation = parseFloat(document.getElementById("humidityVariation").value);

    // Gera dados aleatórios com média e variação definidas pelo usuário
    const data = generateRandomData(avgTemp, tempVariation, avgHumidity, humidityVariation, numRows);

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
    const copyButton = document.getElementById("copyButton");
    copyButton.style.display = "block";
});

document.getElementById("copyButton").addEventListener("click", function() {
    const table = document.getElementById("resultTable");
    const rows = Array.from(table.rows);
    const text = rows.map(row => Array.from(row.cells).map(cell => cell.textContent).join(",")).join("\n");

    // Copia o texto para a área de transferência
    navigator.clipboard.writeText(text).then(() => {
        alert("Dados copiados para a área de transferência!");
    }).catch(err => {
        console.error("Erro ao copiar para a área de transferência: ", err);
    });
});

// Função para gerar os dados aleatórios
function generateRandomData(avgTemp, tempVariation, avgHumidity, humidityVariation, numRows) {
    const data = [];
    for (let i = 0; i < numRows; i++) {
        data.push({
            "Temp 1": avgTemp + (Math.random() * 2 - 1) * tempVariation,
            "Umid 1": avgHumidity + (Math.random() * 2 - 1) * humidityVariation,
            "Temp 2": avgTemp + (Math.random() * 2 - 1) * tempVariation,
            "Umid 2": avgHumidity + (Math.random() * 2 - 1) * humidityVariation,
            "Temp 3": avgTemp + (Math.random() * 2 - 1) * tempVariation,
            "Umid 3": avgHumidity + (Math.random() * 2 - 1) * humidityVariation,
            "Temp 4": avgTemp + (Math.random() * 2 - 1) * tempVariation,
            "Umid 4": avgHumidity + (Math.random() * 2 - 1) * humidityVariation,
            "Temp 5": avgTemp + (Math.random() * 2 - 1) * tempVariation,
            "Umid 5": avgHumidity + (Math.random() * 2 - 1) * humidityVariation,
            "Temp 6": avgTemp + (Math.random() * 2 - 1) * tempVariation,
            "Umid 6": avgHumidity + (Math.random() * 2 - 1) * humidityVariation,
            "Temp 7": avgTemp + (Math.random() * 2 - 1) * tempVariation,
            "Umid 7": avgHumidity + (Math.random() * 2 - 1) * humidityVariation,
            "Temp 8": avgTemp + (Math.random() * 2 - 1) * tempVariation,
            "Umid 8": avgHumidity + (Math.random() * 2 - 1) * humidityVariation,
            "Temp 9": avgTemp + (Math.random() * 2 - 1) * tempVariation,
            "Umid 9": avgHumidity + (Math.random() * 2 - 1) * humidityVariation,
            "Temp 10": avgTemp + (Math.random() * 2 - 1) * tempVariation,
            "Umid 10": avgHumidity + (Math.random() * 2 - 1) * humidityVariation,
            "Temp 11": avgTemp + (Math.random() * 2 - 1) * tempVariation,
            "Umid 11": avgHumidity + (Math.random() * 2 - 1) * humidityVariation,
            "Temp 12": avgTemp + (Math.random() * 2 - 1) * tempVariation,
            "Umid 12": avgHumidity + (Math.random() * 2 - 1) * humidityVariation,
        });
    }
    return data;
}
