import * as EmailValidator from 'email-validator';

export class User{
    constructor(uid, name, email){
        this.uid = uid
        this.name = name
        this.email = email

    }
}

export class AuthError extends Error{
    constructor(message){
        super(message);
        this.name = "AuthError";
    }
}

export class Auth{
    async createUser(name, email, password){
        if(!name || !email || !password) 
            throw new AuthError("Empty fields")
        const emailValid = EmailValidator.validate(email)
        if(!emailValid)
            throw new AuthError("Email not valid")
        try{
            const response = await fetch("/api/register", {
                method: "POST",
                body: JSON.stringify({name, email, password})
            })
            const jsonData = await response.json()
            //return new User(jsonData.uid, name, email)
        }catch(e){
            throw new AuthError("Email already in use")
        }
    }

    async loginUser(email, password){
        if(!email || !password) 
            throw new AuthError("Empty fields")
        const emailValid = EmailValidator.validate(email)
        if(!emailValid)
            throw new AuthError("Email not valid")
        try{
            const response = await fetch("/api/login", {
                method: "POST",
                body: JSON.stringify({email, password})
            })
            const jsonData = await response.json()
        }catch(error){
            throw new AuthError("Wrong email or password")
        }
    }
}