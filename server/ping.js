const { spawn }  = require('child_process');

function ping(host) {
    return new Promise((resolve, reject) => {
        const pingProcess = spawn('ping', ['c', 'q', host]);

        pingProcess.on('error', reject);

        pingProcess.on('exit', (code) => {
            if (code === 0) {
                resolve(true); // o host está respondendo ao ping
            } else {
                resolve(false); // o host não está respodnendo ao ping
            }
        });
    });
}

module.exports = ping;