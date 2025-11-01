import { User } from "../models/user.js";

export function validateUser(u: Partial<User>): { valid: boolean, errors: string[] } {
    const errors: string[] = [];

    if (!u.name || u.name.length < 3) {
        errors.push("Name must be at least 3 characters long.");
    }
    if (!u.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(u.email)) {
        errors.push("Invalid email format.");
    }
    if (u.password && u.password.length < 6) {
        errors.push("Password must be at least 6 characters long.");
    }
    return { valid: errors.length === 0, errors };
}