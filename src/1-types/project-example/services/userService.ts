import { Repository } from "../repositories/repository.js";
import { User, SafeUser } from "../models/user.js";
import { validateUser } from "../validators/userValidator.js";

export class UserService {
    constructor(private userRepository: Repository<User>) { }


    create(user: User): { ok: boolean, user?: SafeUser, errors?: string[] } {
        const { valid, errors } = validateUser(user);
        if (!valid) return { ok: false, errors };

        this.userRepository.add(user);
        const { password, ...safeUser } = user;
        return { ok: true, user: safeUser };
    }

}