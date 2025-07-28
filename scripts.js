
const alphabet = "abcdefghijklmnopqrstuvwxyz";

/**
 * Encrypts a message using Caesar Cipher with random letter insertion every 2 characters
 * @param {string} message - The plaintext message
 * @param {number} shiftValue - The shift amount
 * @returns {string} Encrypted message
 */
function encrypt(message, shiftValue) {
  const lowerMsg = message.toLowerCase();
  let encrypted = '';
  let letterCount = 0;

  for (let i = 0; i < lowerMsg.length; i++) {
    const char = lowerMsg[i];
    if (alphabet.includes(char)) {
      const oldIndex = alphabet.indexOf(char);
      const newIndex = (oldIndex + shiftValue) % 26;
      encrypted += alphabet[newIndex];
      letterCount++;

      // Insert a random letter every 2 actual letters
      if (letterCount % 2 === 0) {
        const rand = alphabet[Math.floor(Math.random() * 26)];
        encrypted += rand;
      }
    } else {
      encrypted += char; // keep punctuation, spaces, symbols unchanged
    }
  }
  return encrypted;
}

/**
 * Decrypts a Caesar Cipher encrypted message with random letters every 2 characters
 * @param {string} encryptedMessage - The encrypted message
 * @param {number} shiftValue - The shift amount used during encryption
 * @returns {string} Decrypted message
 */
function decrypt(encryptedMessage, shiftValue) {
  let decrypted = '';
  let letterCount = 0;

  for (let i = 0; i < encryptedMessage.length; i++) {
    const char = encryptedMessage[i];
    if (alphabet.includes(char)) {
      letterCount++;
      // Only decrypt actual characters, skip randoms
      if (letterCount % 3 !== 0) {
        const index = alphabet.indexOf(char);
        const newIndex = (index - shiftValue + 26) % 26;
        decrypted += alphabet[newIndex];
      }
      // else skip the random letter
    } else {
      decrypted += char;
    }
  }
  return decrypted;
}

// Example usage:
const encrypted = encrypt("Hello Brutus, meet me at the high gardens.", 42);
console.log("Encrypted:", encrypted);

const decrypted = decrypt(encrypted, 42);
console.log("Decrypted:", decrypted);

// ----------------------
// 🕵️ Secret Message Decryption
// ----------------------
const secretMessage = `Iueuan jrxuq cjythdykwxaj mixkqtaeml ebv wHenckvbkei rqdmt fHukckvi.r Jbxuihus, tmxayiwfuxh sjxau amenhtv 'zQkhhuubyjkit' yjew jhxux mxydatij. zJxmu hvymhihj ajel kldlsuyjb dyju yid uekdh qIbkqsxa xsxqqdvduzb wuqzhdoi qjxwu waueo xjem jfxuy dpuntj dgkvuiwj.`;

// Normalize case for consistent decryption
const normalizedSecret = secretMessage.toLowerCase();

const decryptedSecret = decrypt(normalizedSecret, 42);
console.log("\n🗝️ Decrypted Secret Message:\n", decryptedSecret);
