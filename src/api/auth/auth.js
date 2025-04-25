import * as EmailValidator from 'email-validator';

export class User{
    constructor(uid, name){
        this.uid = uid
        this.name = name
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
            if(jsonData.uid){
                return "User Created"
            }else{
                return "User Not Created"
            }
            
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
            if(jsonData.uid){
                const user = new User(jsonData.uid, jsonData.name)
                this.currentUser(user)
                return user
            }else{
                return "Not Logged In"
            }
            
        }catch(error){
            throw new AuthError("Wrong email or password")
        }
    }

    currentUser(user){
        if(user){
            localStorage.setItem("session", JSON.stringify(user))
            return
        }else{
            const session = localStorage.getItem("session")
            if(!session){
                return null
            }else{
                const userJSON = JSON.parse(session)
                return new User(userJSON.uid, userJSON.name)
            }
        }
    }
}