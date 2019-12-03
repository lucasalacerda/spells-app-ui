import { ClassChar } from './classChar';

export class Spell {
    private _id: string;
    private _title: string;
    private _description: string;
    private _level: number;
    private _classChar: ClassChar;
    private _img: string;

    constructor(id: string, title: string, description: string, level: number, classChar: ClassChar, img: string) {
        this._id = id;
        this._title = title;
        this._description = description;
        this._level = level;
        this._classChar = classChar;
        this._img = img;
    }

    public get id(): string {
        return this._id;
    }

    public get title(): string {
        return this._title;
    }

    public get description(): string {
        return this._description;
    }

    public get level(): number {
        return this._level;
    }

    public get classChar(): ClassChar {
        return this._classChar;
    }

    public get img(): string {
        return this._img;
    }

}