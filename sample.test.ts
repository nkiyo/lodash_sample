import { User, Gender, UserForView, addGenderDetail } from "./sample";

test("test", () => {
  const users: User[] = [
    { user: "fred", age: 48, gender: 1 },
    { user: "barney", age: 36, gender: 2 },
    { user: "barney", age: 34, gender: 3 },
  ];
  const genders: Gender[] = [
    { id: 1, gender: "male" },
    { id: 2, gender: "female" },
  ];
  const expected: UserForView[] = [
    { user: "fred", age: 48, gender: "male" },
    { user: "barney", age: 36, gender: "female" },
    { user: "barney", age: 34, gender: "-" },
  ];

  const actual = addGenderDetail(users, genders);

  expect(actual).toStrictEqual(expected);
});
