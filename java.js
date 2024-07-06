        // Función para generar un número entero aleatorio entre min y max
        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        // Función para generar un arreglo de 20 números enteros aleatorios
        function generateRandomNumbers(min, max) {
            var randomNumbers = [];
            var count = 0;
            do {
                randomNumbers[count] = getRandomInt(min, max);
                count++;
            } while (count < 20);
            return randomNumbers;
        }

        // Función para mostrar los números en pantalla
        function showRandomNumbers(numbers) {
            var resultDiv = document.getElementById('result');
            resultDiv.innerHTML = ''; // Limpiar resultados anteriores

            for (var i = 0; i < numbers.length; i++) {
                var numberDiv = document.createElement('div');
                numberDiv.className = 'number';
                numberDiv.textContent = (i + 1) + '. ' + numbers[i];
                resultDiv.appendChild(numberDiv);
            }
        }

        // Función principal para generar y mostrar los números aleatorios
        function generateAndShowRandomNumbers() {
            var min = parseInt(prompt("Ingrese el número mínimo:"));
            var max = parseInt(prompt("Ingrese el número máximo:"));

            // Validar que min es menor que max
            if (min > max) {
                alert("El número mínimo debe ser menor o igual al número máximo.");
                return;
            }

            var randomNumbers = generateRandomNumbers(min, max);
            showRandomNumbers(randomNumbers);
        }