import { Spell } from './spell';
import { ClassChar } from './classChar';

export class Character {
        id: string;
        spells: Array<Spell>;
        nickname: string;
        class: ClassChar;
        background: string;
        img: string;
        level: number;
}