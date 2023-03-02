const fs = require('fs');
const crypto = require('crypto');

// хешування паролю та збереження
function hashAndSave(password) {
  const hash = crypto.createHash('sha256').update(password).digest('hex');
  fs.writeFile('password.txt', hash, (err) => {
    if (err) throw err;
    console.log('Password saved successfully!');
  });
}

//порівняння рядка паролю зі значенням, збереженим у файлі
function comparePassword(password) {
  fs.readFile('password.txt', (err, data) => {
    if (err) throw err;
    const hash = crypto.createHash('sha256').update(password).digest('hex');
    if (hash === data.toString()) {
      console.log('Password matched successfully!');
    } else {
      console.log('Incorrect password!');
    }
  });
}

const [, , action, password] = process.argv;

if (action === 'hash') {
  hashAndSave(password);
} else if (action === 'compare') {
  comparePassword(password);
} else {
  console.log('Invalid action!');
}
hashAndSave('throneofglass');
comparePassword('throneofglass');