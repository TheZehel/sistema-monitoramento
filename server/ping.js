const { spawn }  = require('child_process');
const logs = require('./logs');

function ping(host) {
    return new Promise((resolve, reject) => {
        const pingProcess = spawn('ping', ['c', 'q', host]);

        pingProcess.on('error', reject);

        pingProcess.on('exit', (code) => {
            if (code === 0) {
                logs.log(`${host} está vivo.`);
                resolve(true); // o host está respondendo ao ping
            } else {
                logs.log(`${host} não está respondendo ao ping.`);
                resolve(false); // o host não está respondendo ao ping
            }
        });
    });
}

module.exports = ping;