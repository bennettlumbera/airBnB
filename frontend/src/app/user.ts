export class User {
    constructor(
        public firstName: string = '',
        public lastName: string = '',
        public dob: Date = null, 
        public email: string = '',
        public password: string = '',
        public phone: string = '',
        public city: string = '',
        public state: string = '',
        public zip: string = '',
        public country: string = '',
        public _id = null,
    ) {}
}
