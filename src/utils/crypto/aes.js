const path = require('path');
const CryptoJS = require('crypto-js');

export function encryptFile(file, password) {
  try {
    const encrypted = CryptoJS.AES.encrypt(file.toString(), password).toString();
    // console.log('File encrypted successfully');
  } catch (error) {
    console.error('Error encrypting file:', error);
  }

  return encrypted;
}

export function decryptFile(filePath, password, outputFilePath) {
  try {
    const encryptedContent = fs.readFileSync(filePath, 'utf8');
    const decrypted = CryptoJS.AES.decrypt(encryptedContent, password);
    const decryptedBuffer = Buffer.from(decrypted.toString(CryptoJS.enc.Utf8));
    fs.writeFileSync(outputFilePath, decryptedBuffer);
    console.log('File decrypted successfully');
  } catch (error) {
    console.error('Error decrypting file:', error);
  }
}

module.exports = { encryptFile, decryptFile };


// Define file paths
const fileName = "transcript_12921054"
const inputFilePath = path.join(__dirname, (fileName+".pdf"));
const encryptedFilePath = path.join(__dirname, `${fileName}_encrypted.pdf`);
const decryptedFilePath = path.join(__dirname, `${fileName}_decrypted.pdf`);

// Define password
const password = 'AAAABBBBCCCCDDDD';

// Encrypt the file
encryptFile(inputFilePath, password, encryptedFilePath);

// Decrypt the file
decryptFile(encryptedFilePath, password, decryptedFilePath);
