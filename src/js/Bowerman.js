'use strict';
import Character from '../js/Character';

export default class Bowerman extends Character {
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