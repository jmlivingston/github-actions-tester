const fs = require('fs')
const path = require('path')

const BUILD_DIR = path.join(__dirname, 'build')
if (!fs.existsSync(BUILD_DIR)) {
  fs.mkdirSync(BUILD_DIR)
}

fs.writeFileSync(path.join(BUILD_DIR, 'test.txt'), `${new Date().toISOString()}\r`)
