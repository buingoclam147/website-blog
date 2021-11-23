export class CreateBlogReq {
    _id: string;
    categoryId: string;
    userId: string;
    content: string;
    title: string;
    like: number;
    nikname: string;
    createAt: string;
    status: string;
    constructor(
        _id: string,
        categoryId: string,
        userId: string,
        content: string,
        title: string,
        like: number,
        nikname: string,
        createAt: string,
        status: string
    ) {
        this._id = _id;
        this.content = content;
        this.categoryId = categoryId;
        this.userId = userId;
        this.title = title;
        this.like = like;
        this.nikname = nikname;
        this.createAt = createAt;
        this.status = status;
    }
}
export class ListBlog {
    total: string;
    data: Array<CreateBlogReq>;
    constructor
        (
            total: string,
            data: Array<CreateBlogReq>
        ) {
        this.total = total;
        this.data = data;
    }
}