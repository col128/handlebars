/**
 * Created by TRwin7SP1 on 2016/2/6.
 */
$(function () {
  var source= $("#student_item_template").html();
  var template= Handlebars.compile(source);
  var result = template(data);
  $("#student-table-body").html(result);
})
