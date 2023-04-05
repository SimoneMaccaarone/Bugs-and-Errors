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