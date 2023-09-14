const a1 = '안녕'
const a2 = 'hello'
// module.exports =(a1, a2)

/* exports.a1 = a1  == module.exports.a1=a1
 exports.a2 = a2  == module.exports.a2=a2 */

// exports = { a1, a2 } -> 안나옴
module.exports = { a1, a2 }
