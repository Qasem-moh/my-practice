const base64 = require('base-64')
const bcrypt = require('bcrypt')
const username = 'qasem'
const password = 'test@123'
const encoded = base64.encode(`${username}:${password}`)

console.log('encoded', encoded);
const decoded = base64.decode(encoded)
console.log('encoded', decoded)


let pass = 'test@12345'
encrypt(pass)
async function encrypt(text) {
    let hashed = await bcrypt.hash(text, 5)
    console.log('hash', hashed);
    const p1 = '$2b$05$lkJWWUcT/XaN5hq3XcOVP.VEi1hJ/BxfJ44KXpsM39GpBxQtpX6g2'
    let valid=await bcrypt.compare(text,p1)
    console.log(valid);
}




