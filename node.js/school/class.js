var student=require('./student');
var teacher =require('./teacher');
function add(tea,stu){
	teacher.add(tea);
	stu.forEach(function(item, index){
		student.add(item);
	})
	
}
exports.add=add;

