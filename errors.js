class ElementNotFoundError extends Error{

    constructor(message){
        super(message);
    }
}
class EmptyArrayError extends Error{
 
    constructor(message){
        super(message);
    }
}

class MultiplicatorUnitFailed extends Error{

    constructor(){
        super('clank');
    }
}

class Box {

    constructor() {
        this.locked = true;
        this._content = [];
    }

    get content() {
        if (this.locked === true) {
            throw new Error('Suca, the bos is locked')
        } else {
            return this._content
        }
    }

    unlock(){
        this.locked = false;
    }

    lock(){
        this.locked = true;
    }
}