export class Category {
    _id: string;
    name: string;
    note: string;
    constructor(_id: string, name: string, note: string) {
        this._id = _id;
        this.name = name;
        this.note = note;
    }
<<<<<<< Updated upstream
}
=======
};
export class ListCategory {
    total: string;
    data: Array<Category>;
    constructor
        (
            total: string,
            data: Array<Category>
        ) {
        this.total = total;
        this.data = data;
    }
}
>>>>>>> Stashed changes
