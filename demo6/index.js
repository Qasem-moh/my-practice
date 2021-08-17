const base64=require('base-64')

const username='qasem'
const password='test@123'
const encoded=base64.encode(`${username}:${password}`)

console.log('encoded',encoded);
const decoded=base64.decode(encoded)
console.log('encoded', decoded)



