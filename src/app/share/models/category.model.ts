export class Category {
    _id: string;
    name: string;
    note: string;
    constructor(_id: string, name: string, note: string) {
        this._id = _id;
        this.name = name;
        this.note = note;
    }
};
export class ListCategory {
    total: string;
    data: Array<object>;
    constructor
        (
            total: string,
            data: Array<object>
        ) {
        this.total = total;
        this.data = data;
    }
}