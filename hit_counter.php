<?php
// hit-counter.php
$file = 'counter.txt';

if (!file_exists($file)) {
    file_put_contents($file, '0');
}

$hits = (int) file_get_contents($file);
$hits++;
file_put_contents($file, (string) $hits);

echo json_encode(['hits' => $hits]);
?>