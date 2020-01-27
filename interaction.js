class Item {
    constructor(name) {
        this.name = name;
    }

}

class Room {
    constructor(name, description, exits, items, event) {
        this.name = name;
        this._description = description;
        this._exits = exits;
        this._items = items;
        this._event = event;
    }

    // necessary setters and getters
    get description() {
        return this._description;
    }
    set description(newDescrip) {
        this._description = newDescrip;
    }

    get exits() {
        return this._exits;
    }
    set exits(newExits) {
        this._exits = newExits;
    }

    get item() {
        return this._item;
    }

    get event() {
        return this._event;
    }

    removeItem() {
        this._item = '';
    }

}