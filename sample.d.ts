export type User = {
    user: string;
    age: number;
    gender: number;
};
export type UserForView = {
    user: string;
    age: number;
    gender: string;
};
export type Gender = {
    id: number;
    gender: string;
};
export declare function addGenderDetail(users: User[], genders: Gender[]): UserForView[];
