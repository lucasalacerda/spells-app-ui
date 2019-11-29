export class User {
    
    name: string;
    document: string;
    age: number;
    email: string;
    password: string;
    img: string;

    constructor(name, document, age, email, password, img) {
        this.name = name;
        this.document = document;
        this.age = age;
        this.email = email;
        this.password = password;
        this.img = img;
    }
}