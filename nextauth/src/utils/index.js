import * as joseJwt from "jose"
import { nanoid } from "nanoid"
import CryptoJS from "crypto-js"

export const signJwtToken = async(payload) => {
    const privateKey = process.env.ACCESS_TOKEN_PRIVATE_KEY
    const expiresIn = "5m"
    const token = await new joseJwt.SignJWT(payload)
    .setProtectedHeader({alg: "HS256"})
    .setJti(nanoid())
    .setIssuedAt()
    .setExpirationTime(expiresIn)
    .sign(new TextEncoder().encode(privateKey))
    return token
}

export const verifyJwtToken = async(token) => {
    try {
        const privateKey = process.env.ACCESS_TOKEN_PRIVATE_KEY
        const result = await joseJwt.jwtVerify(token, new TextEncoder().encode(privateKey))
        return {data: result.payload, isError: false, message: "success" }
    } catch (error) {
        return { data: null, isError: true, message:error.message }
    }
}

export const decodeJwtToken = (token) => {
    try {
        const payload = joseJwt.decodeJwt(token)
        return {data: payload, isError: false, message: "success" }
    } catch (error) {
        return { data: null, isError: true, message:error.message }
    }
}

export const encryptString = (str) => {
    const secretKey = CryptoJS.enc.Utf8.parse(process.env.CRYPTO_ENCRYPTION_KEY)
    const iv = CryptoJS.enc.Utf8.parse(process.env.CRYPTO_IV_KEY)
    const encrypted = CryptoJS.AES.encrypt(str, secretKey, {iv})
    const hexString = CryptoJS.enc.Hex.stringify(encrypted.ciphertext)
    return hexString
}

export const decryptString = (hexString) => {
    const secretKey = CryptoJS.enc.Utf8.parse(process.env.CRYPTO_ENCRYPTION_KEY)
    const iv = CryptoJS.enc.Utf8.parse(process.env.CRYPTO_IV_KEY)
    const ciphertext = CryptoJS.enc.Hex.parse(hexString)
    const decrypted = CryptoJS.AES.decrypt({ciphertext}, secretKey, {iv}).toString(CryptoJS.enc.Utf8)
    console.log("decrypted: ", decrypted)
    return JSON.parse(decrypted)
}

export const checkUserRole =(role) => {
    return {
        isAdminRole: role === 'admin',
        isUserRole: role === 'user',
    }
}

export const formatDate = (date) => {
    return new Intl.DateTimeFormat(undefined, { dateStyle: "short", timeStyle: "short", }).format(new Date(date))
}

export const getErrorMessage = (error) => {
    let message = error.message
    if(error?.response?.data){
        message = error.response.data
    }
        return message
}