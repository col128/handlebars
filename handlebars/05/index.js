/**
 * Created by TRwin7SP1 on 2016/2/6.
 */
$(function () {
  var source= $("#student_item_template").html();




  Handlebars.registerHelper("compare", function (v1,v2,options) {
    if (v1 > v2)
    {
          return options.fn(this);
    }
    else
    {
      return options.inverse(this);
    }
  })

  Handlebars.registerHelper("isMan", function (v1,options) {
    if (v1==1)
    {
      return options.fn(this);
    }
    else
    {
      return options.inverse(this);
    }
  })

  var template= Handlebars.compile(source);
  var result = template(data);
  $("#student-table-body").html(result);
})
