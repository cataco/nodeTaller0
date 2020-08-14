'use strict';
module.exports = function(app) {
  var studentList = require('../controllers/studentListController');

  // todoList Routes
  app.route('/students')
    .get(studentList.list_all_students)
    .post(studentList.create_a_student);


  app.route('/students/:studentId')
    .get(studentList.read_a_student)
};