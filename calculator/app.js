const bodyParser=require('body-parser');
const express=require('express');
const ejs=require('ejs');

let app=express();
let port=process.env.PORT||8000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.set('view engine','ejs');

let result='null';
let num1;
let num2;
let operator;

app.get('/',function(req,res){
	if(result!='null'){
	res.render('index',{x:num1, y:num2, op:operator, result:result})
}
	// res.sendFile(__dirname+'/index.html');
	res.render('index',{x:num1, y:num2, op:operator, result:result})
});

app.post('/',function(req,res){
	 num1=parseInt(req.body.operand1);
	 num2=parseInt(req.body.operand2);
	 operator=req.body.operator;
	switch(operator){
		case "/":
		result=num1/num2;
		break;
		case "+":
		result=num1+num2;
		break;
		case "-":
		result=num1-num2;
		break;
		case "*":
		result=num1*num2;
		break;
		case "%":
		result=num1%num2;
		break;
	}
	res.redirect('/');
});

app.listen(port,function(){
	console.log(`server online at port no. ${port}`);
});
