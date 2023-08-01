const _ = require('lodash')

// sortBy
var users = [
  { 'user': 'fred',   'age': 48 },
  { 'user': 'barney', 'age': 36 },
  { 'user': 'fred',   'age': 40 },
  { 'user': 'barney', 'age': 34 }
];
sortedUsers = _.sortBy(users, ['age', 'name'])
console.log(sortedUsers)
//console.log(users) // 順序は変更されていない

// groupBy
// 年代別にグループ分けする
groupedUsers = _.groupBy(users, e => Math.floor(e.age / 10))
console.log(groupedUsers)

// difference 差集合
a1 = [2, 1, 4]
a2 = [3, 2, 5]
diffa1a2 = _.difference(a1, a2)
diffa2a1 = _.difference(a2, a1)
console.log(diffa1a2)
console.log(diffa2a1)

// union 和集合
unionA1a2 = _.union(a1, a2)
console.log(unionA1a2)

// intersection 積集合
intersectionA1a2 = _.intersection(a1, a2)
console.log(intersectionA1a2)

// intersectionWith, intersectionBy もあり。unionも同様
// xor
// zip
// countBy
// SQLのjoinに近いやつは？
