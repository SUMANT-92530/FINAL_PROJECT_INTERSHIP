import CryptoJS from "crypto-js";

export function encrypt(text, password) {
    return CryptoJS.AES.encrypt(text, password).toString();
    }

    export function decrypt(cipherText, password) {
    try {
        const bytes = CryptoJS.AES.decrypt(cipherText, password);
        return bytes.toString(CryptoJS.enc.Utf8);
    } catch (err) {
        return null;
    }
}
