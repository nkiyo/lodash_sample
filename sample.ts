const _ = require("lodash");

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

// sortBy
const users: User[] = [
  { user: "fred", age: 48, gender: 1 },
  { user: "barney", age: 36, gender: 2 },
  { user: "fred", age: 40, gender: 3 },
  { user: "barney", age: 34, gender: 2 },
];
const genders: Gender[] = [
  { id: 1, gender: "male" },
  { id: 2, gender: "female" },
];
const sortedUsers: User[] = _.sortBy(users, ["age", "name"]);
console.log(sortedUsers);
//console.log(users) // 順序は変更されていない

// groupBy
// 年代別にグループ分けする
const groupedUsers: User[] = _.groupBy(users, (e: User) =>
  Math.floor(e.age / 10)
);
console.log(groupedUsers);

// difference 差集合
const a1: number[] = [2, 1, 4];
const a2: number[] = [3, 2, 5];
const diffa1a2: number[] = _.difference(a1, a2);
const diffa2a1: number[] = _.difference(a2, a1);
console.log(diffa1a2);
console.log(diffa2a1);

// union 和集合
const unionA1a2: number[] = _.union(a1, a2);
console.log(unionA1a2);

// intersection 積集合
// intersectionWith, intersectionBy もあり。unionも同様
const intersectionA1a2: number[] = _.intersection(a1, a2);
console.log(intersectionA1a2);

// xor
const xorA1a2: number[] = _.xor(a1, a2);
console.log(xorA1a2);

// countBy
// groupByと、ほぼ同じ
const countUsers = _.countBy(users, (e: User) => Math.floor(e.age / 10));
console.log(countUsers);

// SQLのjoinに近いやつ？

// idを詳細情報に変換する
// ?: Optional chaining
// ??: Nullish coalescing operator
// TODO テストコードを書く
export function addGenderDetail(
  users: User[],
  genders: Gender[]
): UserForView[] {
  return users.map((u: User) => {
    const genderStr: string =
      genders.find((g: Gender) => g.id === u.gender)?.gender ?? "-";
    return { ...u, gender: genderStr };
  });
}
const addedUsers = addGenderDetail(users, genders);
console.log(addedUsers);
