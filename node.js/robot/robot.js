var express=require('express');
var app=express();
var request=require('request');
var cheerio=require('cheerio');
app.get('/',function(req,res){
	request('https://www.baidu.com/',function(error,response,body){
		if(!error&&response.statusCode==200){
			$=cheerio.load(body);//当前$符就是拿到了整个body的前端选择器
			res.json({
				'classnum':$('#u1 a').text()
				
			})
		}
	})
})
app.listen(2000);