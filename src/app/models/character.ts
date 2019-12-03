import { Spell } from './spell';
import { ClassChar } from './classChar';

export class Character {
    private _id: string;
    private _spells: Array<Spell>;
    private _nickname: string;
    private _classChar: ClassChar;
    private _background: string;
    private _img: string;
    private _level: number;

    constructor(id: string, spells: Array<Spell>, nickname: string, classChar: ClassChar, 
                background: string, img: string, level: number) {
        this._id = id;
        this._spells = spells;
        this._nickname = nickname;
        this._classChar = classChar;
        this._background = background;
        this._img = img;
        this._level = level;
    }

    public get id(): string {
        return this._id;
    }
    public get spells(): Array<Spell> {
        return this._spells;
    }
    public get nickname(): string {
        return this._nickname;
    }
    public get classChar(): ClassChar {
        return this._classChar;
    }
    public get background(): string {
        return this._background;
    }
    public get img(): string {
        return this._img;
    }
    public get level(): number {
        return this._level;
    }
}