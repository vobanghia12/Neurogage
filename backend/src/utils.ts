import bcrypt from "bcrypt";

export function random(min: number, max: number) {
    return Math.random() * (max - min + 1) + min;
}

export async function hash(plaintext: string, salt: string) {
    return await bcrypt.hash(plaintext, salt);
}