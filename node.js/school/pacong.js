var http=require('http');
var cheerio=require('cheerio')//把npm加的cheerio库引入进来
var url='http://www.imooc.com/learn/348';
http.get(url,function(res){
	var html='';
	function filterChapter(html){
		var $ =cheerio.load(html);
		var chapters=$('.chapter' );
		var counrseData[];
		chapters.each(function(item){
			var chapter =$(this);
			var chaperTitle=chapter.find('strong').text();
			var chaperData{
				chaperTitle:chaperTitle
			}
			counrseData.push(chaperData);
		})
		return counrseData;
	}
	function printInfo(valueT){
		valueT.forEach(function(item){
			var Title=item.chaperTitle;
			console.log(Title+'\n');
		})
	}
	res.on('data',function(data){html+=data});//给传人的参数加一个获取事件
	res.on('end',function(){    //结束的时候的一个响应事件
//		console.log(html);//打印出来
	var valueT=filterChapter(html);
	printInfo(valueT);
	})
}).on('error',function(){
	console.log('error')
})
