var express=require('express');
var app=express();
//提供接口，有请求时候返回
var que=[
		{
		id:1,
		title:'t1',
		asker:'you',
		counrse:'node.js',
		'last-reply':Date.now(),
		reply:1,
		state:'unresoloved'
		},
		{
		id:2,
		title:'t2',
		asker:'your',
		counrse:'node.js',
		'last-reply':Date.now(),
		reply:1,
		state:'resoloved'
		}
	];
app.get('/jikexueyuan',function(req,res){
	res.status(200);
	res.json(que);
});
app.get('/ji',function(req,res){
	res.status(200);
	res.send(que);
});
app.get('/jikexueyuan/all',function(req,res){
	res.status(200);
	res.json(que);
});
app.get('/jikexueyuan/res',function(req,res){
	res.status(200);
	res.json(que.filter(function(q){
		return q&&q.state==='resoloved';
	}));
});//利用filter来过滤
app.get('/jikexueyuan/unres',function(req,res){
	res.status(200);
	res.json(que.filter(function(q){
		return q&&q.state==='unresoloved';
	}));
});//利用filter来过滤
app.get('/jike',function(req,res){
	res.status(200);
	res.json({
		python:20,
		nodejs:1,
		others:10
	});
});
app.listen(3000);


//expressjs
//request={
//	method:'POST',
//	path:'jikexueyuan',
//	headers:{
//		'Content-Type':'application/json',
//		...
//	}
//	body:{}//body-parser来解析，可以解析json
//}
//request.body=JSON.parse(rawBody);
//bodypaese.encodeURI();


//response
//status 状态
//var response{};
//response.status=function(){};
//response.status(200);
//response.set('Content-Type':'application/json');
//response.send();//可以穿字符串和buffer
//response.JSON();//他会自动设置content-type为json这个是和send去区别
//app.set('view engine','ejs')//模板引擎
//res.render('home.ejs',{title:'ejs.template'})//使用模板
