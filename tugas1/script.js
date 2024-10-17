let display = document.getElementById("display");

// Fungsi untuk menambahkan angka atau operator ke layar
function appendToDisplay(value) {
  display.value += value;
}

// Fungsi untuk menghitung hasil
function calculate() {
  try {
    let expression = display.value;
    
    // Menangani operasi pangkat
    expression = expression.replace('^', '**');

    // Ganti % dengan operasi yang benar (menggunakan ekspresi reguler)
    expression = expression.replace(/(\d+\.?\d*)\s*%\s*(\d+\.?\d*)/g, (match, num1, num2) => {
      return `(${num1} % ${num2})`;  // Evaluasi operasi modulo dengan benar
    });

    // Menggunakan Function constructor untuk mengevaluasi hasil tanpa menggunakan eval langsung
    let result = Function('return ' + expression)();

    display.value = result;
  } catch (error) {
    display.value = "Error";
  }
}

// Fungsi untuk membersihkan layar
function clearDisplay() {
  display.value = "";
}
