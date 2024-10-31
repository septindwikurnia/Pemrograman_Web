<?php
function cetakBilangan($n) {
    // Cek apakah dijalankan di web browser atau CLI
    $lineBreak = (php_sapi_name() == "cli") ? PHP_EOL : "<br>";

    for ($i = 1; $i <= $n; $i++) {
        // Percabangan untuk menentukan output sesuai kondisi
        if ($i % 4 == 0 && $i % 6 == 0) { 
            echo "Pemrograman Website 2024" . $lineBreak;
        } elseif ($i % 5 == 0) {
            echo "2024" . $lineBreak;
        } elseif ($i % 4 == 0 && $i % 6 != 0) {
            echo "Pemrograman" . $lineBreak;
        } elseif ($i % 6 == 0 && $i % 4 != 0) {
            echo "Website" . $lineBreak;
        } else {
            echo "$i" . $lineBreak;
        }
    }
}

// Contoh penggunaan fungsi dengan nilai n = 25
cetakBilangan(25);
?>
