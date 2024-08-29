// Windows PowerShell
// Copyright (C) Microsoft Corporation. All rights reserved.

// Install the latest PowerShell for new features and improvements! https://aka.ms/PSWindows

// PS C:\Users\LC> mongosh
// Current Mongosh Log ID: 66d0c63aa04893b7162710bb
// Connecting to:          mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.3.0
// Using MongoDB:          7.0.14
// Using Mongosh:          2.3.0

// For mongosh info see: https://www.mongodb.com/docs/mongodb-shell/

// ------
//    The server generated these startup warnings when booting
//    2024-08-29T16:09:58.389+05:30: Access control is not enabled for the database. Read and write access to data and configuration is unrestricted
// ------

// test> use universityDB
// switched to db universityDB
// universityDB> db.students.insertMany({name: "John Doe", rollno: 101, marks: 85},)
// MongoInvalidArgumentError: Argument "docs" must be an array of documents
// universityDB> db.students.insertMany({name: "John Doe", rollno: 101, marks: 85},{})
// MongoInvalidArgumentError: Argument "docs" must be an array of documents
// universityDB> db.students.insertMany({name: "John", rollno: 101, marks: 85},{name: "Jane", rollno: 102, marks: 90},{ name: "Bob", rollno: 103, marks: 78},{ name: "Alice", rollno: 104, marks: 92},{name: "Chaman", rollno: 105, marks: 88})
// MongoInvalidArgumentError: Argument "docs" must be an array of documents
// universityDB> db.students.insertMany([{name: "John", rollno: 101, marks: 85},{name: "Jane", rollno: 102, marks: 90},{ name: "Bob", rollno: 103, marks: 78},{ name: "Alice", rollno: 104, marks: 92},{name: "Chaman", rollno: 105, marks: 88}])
// {
//   acknowledged: true,
//   insertedIds: {
//     '0': ObjectId('66d0c7a6a04893b7162710bc'),
//     '1': ObjectId('66d0c7a6a04893b7162710bd'),
//     '2': ObjectId('66d0c7a6a04893b7162710be'),
//     '3': ObjectId('66d0c7a6a04893b7162710bf'),
//     '4': ObjectId('66d0c7a6a04893b7162710c0')
//   }
// }
// universityDB> db.faculty.insertMany([{ name: "Prof. Abhinav", rollno: 101, rating: 4.5 },{name: "Prof. Neerav", rollno: 102, rating: 4.7},{ name: "Prof. Vaibhav", rollno: 103, rating: 4.3},{name: "Prof. Harshleen", rollno: 104, rating: 4.8},{name: "Prof. Sanvi", rollno: 105, rating: 4.6}])
// {
//   acknowledged: true,
//   insertedIds: {
//     '0': ObjectId('66d0ca60a04893b7162710c1'),
//     '1': ObjectId('66d0ca60a04893b7162710c2'),
//     '2': ObjectId('66d0ca60a04893b7162710c3'),
//     '3': ObjectId('66d0ca60a04893b7162710c4'),
//     '4': ObjectId('66d0ca60a04893b7162710c5')
//   }
// }
// universityDB>