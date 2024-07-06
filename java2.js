       // Arreglo de frutas inicial
       var fruits = ['Manzana', 'Banana', 'Cereza', 'Durazno', 'Mango'];

       // Función para mostrar el arreglo de frutas
       function viewFruits() {
           var resultDiv = document.getElementById('result');
           resultDiv.innerHTML = ''; // Limpiar resultados anteriores

           fruits.forEach(function(fruit, index) {
               var itemDiv = document.createElement('div');
               itemDiv.className = 'item';
               itemDiv.textContent = (index + 1) + '. ' + fruit;
               resultDiv.appendChild(itemDiv);
           });
       }

       // Función para ordenar el arreglo de frutas
       function sortFruits() {
           fruits.sort();
           viewFruits();
       }

       // Función para invertir el arreglo de frutas
       function invertFruits() {
           fruits.reverse();
           viewFruits();
       }

       // Función para mostrar la longitud del arreglo de frutas
       function showLength() {
           var resultDiv = document.getElementById('result');
           resultDiv.innerHTML = 'La longitud del arreglo es: ' + fruits.length;
       }

       // Función para insertar una nueva fruta en el arreglo
       function insertFruit() {
           var newFruit = prompt('Ingrese el nombre de la fruta:');
           if (newFruit) {
               fruits.push(newFruit);
               viewFruits();
           }
       }

       // Función para eliminar una fruta del arreglo
       function removeFruit() {
           var fruitToRemove = prompt('Ingrese el nombre de la fruta a eliminar:');
           var index = fruits.indexOf(fruitToRemove);
           if (index !== -1) {
               fruits.splice(index, 1);
               viewFruits();
           } else {
               alert('La fruta no se encuentra en el arreglo.');
           }
       }