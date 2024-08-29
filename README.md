Select the database where you want to insert the data. If the database doesn't exist, MongoDB will create it for you using:-use universityDB 

Now, we can insert data into a collection (e.g., students and faculty). If the collection doesn't exist, MongoDB will create it automatically.

db.students.insertMany
db.faculty.insertMany