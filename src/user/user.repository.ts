import { Injectable } from "@nestjs/common";

@Injectable()
export class UserRepository {
    findAll() {
        return [
            { email : "p7TlI@example.com", password : "1234" },
            { email : "1o0oC@example.com", password : "1234" },
            { email : "Hl6bX@example.com", password : "1234" }
        ]
    }
}