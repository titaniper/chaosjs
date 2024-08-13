let count = 0;

function request(options?: { limit: number }) {
    count++;
    if (count > (options?.limit ?? 70)) {
        console.log('Chaos Engine activated! Shutting down the application.');
        process.kill(process.pid, 'SIGINT');
    }
}

export {request}