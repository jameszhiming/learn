var express =require('express');

var app=express();
app.set('view engine','ejs');
app.set('views',__dirname+'/views');
app.get('/',function(req,res){
	res.render('home.ejs',{name:'haha'});
});
app.get('/req/:a',function(req,res){
	var locals={name:'yorkie','a':req.params['a']}
	res.render('home.ejs',locals);
});
app.listen(3000);
//用ejs的第一次小实验