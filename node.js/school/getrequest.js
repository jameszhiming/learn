//http.request(options[,callback])
//Accept:application/json, text/javascript, */*; q=0.01
//Accept-Encoding:gzip, deflate
//Accept-Language:zh-CN,zh;q=0.8
//Connection:keep-alive
//Content-Length:79
//Content-Type:application/x-www-form-urlencoded; charset=UTF-8
//Cookie:imooc_uuid=70b688d3-12ab-4d6b-b4a7-8911af038547; lzstat_uv=3302960444682038825|3600220; loginstate=1; apsid=EyMzJkYzM4ZDMyMGUxYTAwNWYwMTBiMjVkMGU1ZDEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADMwNzQzMDU3MzgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMTA5NjI1MgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABqaWFuZ3llNjEyQHZpcC5xcS5jb20AAAAAAAAAAAAAAGJkODA5MjIxMDFlM2VkNmJlYjJmMjE0OWI5NDg4YWEyixaJVGPKGFY%3DZD; imooc_isnew_ct=1447991467; PHPSESSID=kct7n06brr6s26lkphhhk40m64; imooc_isnew=2; cvde=565d394f4ab90-21; Hm_lvt_f0cfcccd7b1393990c78efdeebff3968=1447991723,1448014157,1448848231,1448950357; Hm_lpvt_f0cfcccd7b1393990c78efdeebff3968=1448954307
//Host:www.imooc.com
//Origin:http://www.imooc.com
//Referer:http://www.imooc.com/course/comment/id/348?page=7
//User-Agent:Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.80 Safari/537.36
//X-Requested-With:XMLHttpRequest

var http =require('http');
var querystring=querystring.stringify({
	'content':'ahahahhahah',
	'cid':348
})
var options={
	hostname:'www.immooc.com',
	port:80,
	path:'/course/docomment',
	method:'POST',
	header:{
		//上面注释的内容
	}
}
var req=http.request(options,function(res){
	console.log(res.statusCode);
	res.on('data',function(chunk){
		console.log(buffer.isBuffer(chunk))
		console.log(typeof chunk)
	})
	res.on('end',function(){
		console.log('评论完毕')
	})
	res.write(postdate)
})
