import Character from '../js/Character';

export default class Undead extends Character {
    constructor(attack,defence){
        super(attack);
        super(defence);
    }
    get attack(){
        return 25;
    }
    get defence(){
        return 25;
    }
}