export class UserToken {
    
    private _id: string;
    private _iat: string;
    private _exp: string;
  
    constructor(id: string, iat: string, exp: string) {
        this._id = id;
        this._iat = iat;
        this._exp = exp;
    }

    public set id(id: string) {
        this._id = id;
    }
    public get id(): string {
        return this._id;
    }
    public get iat(): string {
        return this._iat;
    } 
    public get exp(): string {
        return this._exp;
    } 
}