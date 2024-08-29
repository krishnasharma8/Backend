Microsoft Windows [Version 10.0.22631.4112]
(c) Microsoft Corporation. All rights reserved.

C:\Users\LC>mongosh
Current Mongosh Log ID: 66d0e3e610045a33c82710bb
Connecting to:          mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.3.0
Using MongoDB:          7.0.14
Using Mongosh:          2.3.0

For mongosh info see: https://www.mongodb.com/docs/mongodb-shell/

------
   The server generated these startup warnings when booting
   2024-08-29T16:09:58.389+05:30: Access control is not enabled for the database. Read and write access to data and configuration is unrestricted
------

test> use universityDB
switched to db universityDB
universityDB> db.students.insert([{"name": "Pratham Grover", "age": 22, "marks": 85},{"name": "Himank Pahuja", "age": 24, "marks": 92},{"name": "Vivek Mahindra", "age": 20, "marks": 78},{"name": "Chaitanya Jolly", "age": 23, "marks": 64},{"name": "Jahanvi", "age": 21, "marks": 88}])
DeprecationWarning: Collection.insert() is deprecated. Use insertOne, insertMany, or bulkWrite.
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('66d0e4b510045a33c82710bc'),
    '1': ObjectId('66d0e4b510045a33c82710bd'),
    '2': ObjectId('66d0e4b510045a33c82710be'),
    '3': ObjectId('66d0e4b510045a33c82710bf'),
    '4': ObjectId('66d0e4b510045a33c82710c0')
  }
}
universityDB> db.faculty.insert([{"name": "Dr.Vaibhav Singla" , "age": 22, "subject": "c++", "rating": 4.5},{"name": "Dr.Abhinav Jain" , "age": 24, "subject": "java", "rating": 4.8},{ "name": "Dr.Neerav Singla" , "age": 20, "subject": "DBMS", "rating": 4.2},{"name": "Dr.Brahmjot Singh" , "age": 23, "subject": "BEE", "rating": 3.9},{ "name": "Dr.Khushi Bhatia", "age": 21, "subject": "Python", "rating": 4.7}])
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('66d0e51e10045a33c82710c1'),
    '1': ObjectId('66d0e51e10045a33c82710c2'),
    '2': ObjectId('66d0e51e10045a33c82710c3'),
    '3': ObjectId('66d0e51e10045a33c82710c4'),
    '4': ObjectId('66d0e51e10045a33c82710c5')
  }
}
universityDB>
