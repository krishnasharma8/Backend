1)db.students.countDocuments():Returns the total number of documents in the students collection.
2)db.faculty.estimatedDocumentCount():Returns an estimated count of documents in the faculty collection.
3)db.students.updateMany({}, {$set: {student: "Cloud Computing", address: "Chitkara University,Rajpura"}}):
Updates all documents in the students collection, setting the student field to "Cloud Computing" and the address field to "Chitkara University, Rajpura".
4)db.students.find().pretty():
Retrieves and displays all documents in the students collection in a formatted (pretty) manner.
5)db.students.updateOne({ _id: ObjectId('66d0c7a6a04893b7162710bf') }, { $set: { grade: "A+" }}):
Updates the document with the specified _id, setting the grade field to "A+".
<!-- Logical  Operators-->
6)db.students.find({ $and: [{age: 22}, {marks: 90}] }):Finds documents in the students collection where age is 22 and marks are 90.
7)db.students.find({ grade: "A+" }):Finds documents in the students collection where the grade is "A+".
8)db.students.find({ $or: [{age: {$gt: 22}}, {marks: {$gt: 95}}] }):Finds documents in the students collection where age is greater than 22 or marks are greater than 95.
9)db.students.find({ $nor: [{age: {$gt: 20}}, {marks: {$gt: 95}}] }):Finds documents in the students collection where age is not greater than 20 and marks are not greater than 95.
10)db.students.find({ age: { $not: { $gt: 18 }}}):Finds documents in the students collection where age is not greater than 18.
<!-- Elements in MongoDB Or Query Operators -->
11)db.students.find({ age: { $exists: true }}):Finds documents in the students collection where the age field exists.
12)db.students.find({ age: { $type: "number" }}):Finds documents in the students collection where the age field is of type number.
