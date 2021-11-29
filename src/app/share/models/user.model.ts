export class User {
    _id: string;
    fullName: string;
    userName: string;
    address: string;
    phoneNumber: number;
    dateOfBirth: number;
    avatar: string;
    role: string;
    sex: boolean;
    constructor(
        _id: string,
        fullName: string,
        userName: string,
        address: string,
        phoneNumber: number,
        dateOfBirth: number,
        avatar: string,
        role: string,
        sex: boolean,
    ) {
        this._id = _id;
        this.fullName = fullName;
        this.userName = userName;
        this.address = address;
        this.phoneNumber = phoneNumber;
        this.dateOfBirth = dateOfBirth;
        this.avatar = avatar;
        this.role = role;
        this.sex = sex;
    }
}