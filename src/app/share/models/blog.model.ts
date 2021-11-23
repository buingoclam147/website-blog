export class CreateBlogReq {
    categoryId: string;
    customerId: string;
    censorId: string;
    title: string;
    nikname: string;
    createAt: string;
    status: string;
    constructor(
        categoryId: string,
        customerId: string,
        censorId: string,
        title: string,
        nikname: string,
        createAt: string,
        status: string
        ) 
        {
        this.categoryId = categoryId;
        this.customerId = customerId;
        this.censorId = censorId;
        this.title = title;
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