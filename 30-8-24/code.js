// Microsoft Windows [Version 10.0.22631.4112]
// (c) Microsoft Corporation. All rights reserved.

// C:\Users\LC>mongosh
// Current Mongosh Log ID: 66d1762b04f7c2ea942710bb
// Connecting to:          mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.3.0
// Using MongoDB:          7.0.14
// Using Mongosh:          2.3.0

// For mongosh info see: https://www.mongodb.com/docs/mongodb-shell/

// ------
//    The server generated these startup warnings when booting
//    2024-08-29T16:09:58.389+05:30: Access control is not enabled for the database. Read and write access to data and configuration is unrestricted
// ------

// test> show dbs
// admin          40.00 KiB
// config        108.00 KiB
// krishna        72.00 KiB
// local          72.00 KiB
// school         40.00 KiB
// test           40.00 KiB
// universityDB  144.00 KiB
// test> use universityDB
// switched to db universityDB
// universityDB> show collections
// faculty
// students
// universityDB> db.students.countDocuments()
// 5
// universityDB> db.faculty.estimatedDocumentCount()
// 5
// universityDB> db.students.updateMany({},{$set:{student:"Cloud Computing",address:"Chitkara University,Rajpura"}})
// {
//   acknowledged: true,
//   insertedId: null,
//   matchedCount: 5,
//   modifiedCount: 5,
//   upsertedCount: 0
// }
// universityDB> db.students.find().pretty()
// [
//   {
//     _id: ObjectId('66d0c7a6a04893b7162710bf'),
//     name: 'Alice',
//     rollno: 104,
//     marks: 92,
//     student: 'Cloud Computing',
//     address: 'Chitkara University,Rajpura'
//   },
//   {
//     _id: ObjectId('66d0d3f368c898225a2710bc'),
//     name: 'Pratham Grover',
//     age: 22,
//     marks: 85,
//     student: 'Cloud Computing',
//     address: 'Chitkara University,Rajpura'
//   },
//   {
//     _id: ObjectId('66d0d3f368c898225a2710be'),
//     name: 'Vivek Mahindra',
//     age: 20,
//     marks: 78,
//     student: 'Cloud Computing',
//     address: 'Chitkara University,Rajpura'
//   },
//   {
//     _id: ObjectId('66d0c7a6a04893b7162710c0'),
//     name: 'Chaman',
//     rollno: 105,
//     marks: 88,
//     student: 'Cloud Computing',
//     address: 'Chitkara University,Rajpura'
//   },
//   {
//     _id: ObjectId('66d0c7a6a04893b7162710bd'),
//     name: 'Jane',
//     rollno: 102,
//     marks: 90,
//     student: 'Cloud Computing',
//     address: 'Chitkara University,Rajpura'
//   }
// ]
// universityDB> db.students.updateOne({ _id: ObjectId('66d0c7a6a04893b7162710bf') }, { $set: { grade: "A+" } })
// {
//   acknowledged: true,
//   insertedId: null,
//   matchedCount: 1,
//   modifiedCount: 1,
//   upsertedCount: 0
// }
// universityDB> db.students.updateOne({ _id: ObjectId('66d0d3f368c898225a2710bc') }, { $set: { grade: "A" })
// Uncaught:
// SyntaxError: Unexpected token, expected "," (1:91)

// > 1 | db.students.updateOne({ _id: ObjectId('66d0d3f368c898225a2710bc') }, { $set: { grade: "A" })
//     |
//                                  ^
//   2 |

// universityDB> db.students.updateOne({ _id: ObjectId('66d0d3f368c898225a2710bc') }, { $set: { grade: "A" }})
// {
//   acknowledged: true,
//   insertedId: null,
//   matchedCount: 1,
//   modifiedCount: 1,
//   upsertedCount: 0
// }
// universityDB> db.students.updateOne({ _id: ObjectId('66d0d3f368c898225a2710be') }, { $set: { grade: "B+" }})
// {
//   acknowledged: true,
//   insertedId: null,
//   matchedCount: 1,
//   modifiedCount: 1,
//   upsertedCount: 0
// }
// universityDB> db.students.updateOne({ _id: ObjectId('66d0c7a6a04893b7162710c0') }, { $set: { grade: "B" }})
// {
//   acknowledged: true,
//   insertedId: null,
//   matchedCount: 1,
//   modifiedCount: 1,
//   upsertedCount: 0
// }
// universityDB> db.students.updateOne({ _id: ObjectId('66d0c7a6a04893b7162710bd') }, { $set: { grade: "B" }})
// {
//   acknowledged: true,
//   insertedId: null,
//   matchedCount: 1,
//   modifiedCount: 1,
//   upsertedCount: 0
// }
// universityDB> db.students.find({$and: [{age:22},{marks:90}]})

// universityDB> db.students.find({$and: [{age:22},{marks:85}]})
// [
//   {
//     _id: ObjectId('66d0d3f368c898225a2710bc'),
//     name: 'Pratham Grover',
//     age: 22,
//     marks: 85,
//     student: 'Cloud Computing',
//     address: 'Chitkara University,Rajpura',
//     grade: 'A'
//   }
// ]
// universityDB> db.students.find({age:{$gt:18},marks:{$gt:80}})
// [
//   {
//     _id: ObjectId('66d0d3f368c898225a2710bc'),
//     name: 'Pratham Grover',
//     age: 22,
//     marks: 85,
//     student: 'Cloud Computing',
//     address: 'Chitkara University,Rajpura',
//     grade: 'A'
//   }
// ]
// universityDB> db.students.find({grade:"A+"})
// [
//   {
//     _id: ObjectId('66d0c7a6a04893b7162710bf'),
//     name: 'Alice',
//     rollno: 104,
//     marks: 92,
//     student: 'Cloud Computing',
//     address: 'Chitkara University,Rajpura',
//     grade: 'A+'
//   }
// ]
// universityDB> db.students.find($or:[{age:{$gt:22}},{marks:{$gt:95}}])
// Uncaught:
// SyntaxError: Unexpected token, expected "," (1:20)

// > 1 | db.students.find($or:[{age:{$gt:22}},{marks:{$gt:95}}])
//     |                     ^
//   2 |

// universityDB> db.students.find($or:[{age:{$gt:22}},{marks:{$gt:95}}]})
// Uncaught:
// SyntaxError: Unexpected token, expected "," (1:20)

// > 1 | db.students.find($or:[{age:{$gt:22}},{marks:{$gt:95}}]})
//     |                     ^
//   2 |

// universityDB> db.students.find({$or:[{age:{$gt:22}},{marks:{$gt:95}}]})

// universityDB> db.students.find({$or:[{age:{$gt:20}},{marks:{$gt:95}}]})
// [
//   {
//     _id: ObjectId('66d0d3f368c898225a2710bc'),
//     name: 'Pratham Grover',
//     age: 22,
//     marks: 85,
//     student: 'Cloud Computing',
//     address: 'Chitkara University,Rajpura',
//     grade: 'A'
//   }
// ]
// universityDB> db.students.find({$nor:[{age:{$gt:20}},{marks:{$gt:95}}]})
// [
//   {
//     _id: ObjectId('66d0c7a6a04893b7162710bf'),
//     name: 'Alice',
//     rollno: 104,
//     marks: 92,
//     student: 'Cloud Computing',
//     address: 'Chitkara University,Rajpura',
//     grade: 'A+'
//   },
//   {
//     _id: ObjectId('66d0d3f368c898225a2710be'),
//     name: 'Vivek Mahindra',
//     age: 20,
//     marks: 78,
//     student: 'Cloud Computing',
//     address: 'Chitkara University,Rajpura',
//     grade: 'B+'
//   },
//   {
//     _id: ObjectId('66d0c7a6a04893b7162710c0'),
//     name: 'Chaman',
//     rollno: 105,
//     marks: 88,
//     student: 'Cloud Computing',
//     address: 'Chitkara University,Rajpura',
//     grade: 'B'
//   },
//   {
//     _id: ObjectId('66d0c7a6a04893b7162710bd'),
//     name: 'Jane',
//     rollno: 102,
//     marks: 90,
//     student: 'Cloud Computing',
//     address: 'Chitkara University,Rajpura',
//     grade: 'B'
//   }
// ]
// universityDB> db.students.find({age:{$not:{$gt:18}}} )
// [
//   {
//     _id: ObjectId('66d0c7a6a04893b7162710bf'),
//     name: 'Alice',
//     rollno: 104,
//     marks: 92,
//     student: 'Cloud Computing',
//     address: 'Chitkara University,Rajpura',
//     grade: 'A+'
//   },
//   {
//     _id: ObjectId('66d0c7a6a04893b7162710c0'),
//     name: 'Chaman',
//     rollno: 105,
//     marks: 88,
//     student: 'Cloud Computing',
//     address: 'Chitkara University,Rajpura',
//     grade: 'B'
//   },
//   {
//     _id: ObjectId('66d0c7a6a04893b7162710bd'),
//     name: 'Jane',
//     rollno: 102,
//     marks: 90,
//     student: 'Cloud Computing',
//     address: 'Chitkara University,Rajpura',
//     grade: 'B'
//   }
// ]
// universityDB> db.students.find({age:{$exists:true}})
// [
//   {
//     _id: ObjectId('66d0d3f368c898225a2710bc'),
//     name: 'Pratham Grover',
//     age: 22,
//     marks: 85,
//     student: 'Cloud Computing',
//     address: 'Chitkara University,Rajpura',
//     grade: 'A'
//   },
//   {
//     _id: ObjectId('66d0d3f368c898225a2710be'),
//     name: 'Vivek Mahindra',
//     age: 20,
//     marks: 78,
//     student: 'Cloud Computing',
//     address: 'Chitkara University,Rajpura',
//     grade: 'B+'
//   }
// ]
// universityDB> db.students.find({age:{$exists:false}})
// [
//   {
//     _id: ObjectId('66d0c7a6a04893b7162710bf'),
//     name: 'Alice',
//     rollno: 104,
//     marks: 92,
//     student: 'Cloud Computing',
//     address: 'Chitkara University,Rajpura',
//     grade: 'A+'
//   },
//   {
//     _id: ObjectId('66d0c7a6a04893b7162710c0'),
//     name: 'Chaman',
//     rollno: 105,
//     marks: 88,
//     student: 'Cloud Computing',
//     address: 'Chitkara University,Rajpura',
//     grade: 'B'
//   },
//   {
//     _id: ObjectId('66d0c7a6a04893b7162710bd'),
//     name: 'Jane',
//     rollno: 102,
//     marks: 90,
//     student: 'Cloud Computing',
//     address: 'Chitkara University,Rajpura',
//     grade: 'B'
//   }
// ]
// universityDB> db.students.find({age:{$type:"number"}})
// [
//   {
//     _id: ObjectId('66d0d3f368c898225a2710bc'),
//     name: 'Pratham Grover',
//     age: 22,
//     marks: 85,
//     student: 'Cloud Computing',
//     address: 'Chitkara University,Rajpura',
//     grade: 'A'
//   },
//   {
//     _id: ObjectId('66d0d3f368c898225a2710be'),
//     name: 'Vivek Mahindra',
//     age: 20,
//     marks: 78,
//     student: 'Cloud Computing',
//     address: 'Chitkara University,Rajpura',
//     grade: 'B+'
//   }
// ]
// universityDB> db.students.find({age:{$type:"string"}})

// universityDB>