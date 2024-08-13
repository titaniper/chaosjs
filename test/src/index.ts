let count = 0;

function request() {
    count++;
    if (count > 70) {
        console.log('Chaos Engine activated! Shutting down the application.');
        process.kill(process.pid, 'SIGINT');
    }
}

export {request}