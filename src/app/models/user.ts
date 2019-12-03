import { Character } from './character';

export class User {
    
    private _id: string;
    private _name: string;
    private _document: string;
    private _age: number;
    private _email: string;
    private _password: string;
    private _characters: Array<Character>;
    private _img: string;

    constructor(id: string, name: string, document: string, age: number, email: string,
                password: string, characters: Array<Character>, img: string) {
        this._id = id;
        this._name = name;
        this._document = document;
        this._age = age;
        this._email = email;
        this._password = password;
        this._characters = characters;
        this._img = img;
    }

    public get id(): string {
        return this._id;
    }
    public get name(): string {
        return this._name;
    } 
    public get document(): string {
        return this._document;
    } 
    public get age(): number {
        return this._age;
    } 
    public get email(): string {
        return this._email;
    } 
    public get password(): string {
        return this._password;
    } 
    public get characters(): Array<Character> {
        return this._characters;
    } 
    public get img(): string {
        return this._img;
    }
}