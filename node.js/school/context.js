//var pet={
//	words:'....',
//	speack:function(){
//		console.log(this.words)
//	}
//}
//pet.speack();
//function pet(words){
//	this.words=words;
//	this.speak=function(){
//		console.log(this.words)
//	}
//}
//var cat=new pet('miao');
//cat.speak(); 作用域问题





//var pet={
//	words:'....',
//	speak:function(say){
//		console.log(say +' '+ this.words)
//	}
//}
//pet.speak();
//var dog={
//	words:'wang'
//}
//
//pet.speak.call(dog,'speak');//改变pet指针的一个指向




function pet(words)={
	this.words=words;
	this.speak=function(){
	}
}
function Dog(words){
	pet.call(this,words)
	//pet.apply(this,argument)
}

var dog=new Dog('wang')
