import * as joseJwt from "jose"
import CryptoJS from "crypto-js"


export const verifyJwtToken = async(token) => {
    try {
        const privateKey = process.env.ACCESS_TOKEN_PRIVATE_KEY
        const result = await joseJwt.jwtVerify(token, new TextEncoder().encode(privateKey))
        return {data: result.payload, isError: false, message: "success" }
    } catch (error) {
        return { data: null, isError: true, message:error.message }
    }
}

export const decryptString = (hexString) => {
    const secretKey = CryptoJS.enc.Utf8.parse(process.env.CRYPTO_ENCRYPTION_KEY)
    const iv = CryptoJS.enc.Utf8.parse(process.env.CRYPTO_IV_KEY)
    const ciphertext = CryptoJS.enc.Hex.parse(hexString)
    const decrypted = CryptoJS.AES.decrypt({ciphertext}, secretKey, {iv}).toString(CryptoJS.enc.Utf8)
    console.log("decrypted: ", decrypted)
    return JSON.parse(decrypted)
}
