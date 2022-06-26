const os = require('os')

console.log(`The System uptime is ${os.uptime()}`)

const currentOs = {
    name: os.type(),
    release: os.release(),
    memory: os.totalmem(),
    freemem: os.freemem()
}

console.log(currentOs);