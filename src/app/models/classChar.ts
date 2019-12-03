export class ClassChar {
    private _className: string;
    private _description: string;
    private _icon: string;

    constructor(className: string, description: string, icon: string) {
        this._className = className;
        this._description = description;
        this._icon = icon;
    }

    public get className(): string {
        return this._className;
    }

    public get description(): string {
        return this._description;
    }

    public get icon(): string {
        return this._icon;
    }
}