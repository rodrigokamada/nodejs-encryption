const { createCipheriv, createDecipheriv } = require('crypto');

const algorithm = 'aes-256-cbc';
const key = 'REtgV24bDB7xQYoMuypiBASMEaJbc59n';
const iv = '8d2bc3f0f69426fc';

const encrypt = (data) => {
  const cipher = createCipheriv(algorithm, key, iv);
  let crypted = cipher.update(data, 'utf8', 'hex');
  crypted += cipher.final('hex');
  return crypted;
};

const decrypt = (data) => {
  const decipher = createDecipheriv(algorithm, key, iv);
  let decrypted = decipher.update(data, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
};

const data = 'Some data plain';

const dataEncrypt = encrypt(data);
const dataDecrypt = decrypt(dataEncrypt);

console.log(`Data=[${data}]`);
console.log(`Data encrypted=[${dataEncrypt}]`);
console.log(`Data decrypted=[${dataDecrypt}]`);
