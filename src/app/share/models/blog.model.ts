export class CreateBlogReq {
    title: string;
    note: string;
    constructor(_id: string, name: string, note: string) {
        this._id = _id;
        this.name = name;
        this.note = note;
    }
}