import operate from './Operate.js';
import isNumber from './isNumber.js';

export default function calculate(obj,data) {

	//Handle numbers
	if(isNumber(data))
	{
		console.log("B obj.nextValue:"+obj.nextValue)
		if(!obj.nextValue)
		obj.nextValue=data;
		else
		obj.nextValue=obj.nextValue+data;
		console.log("A obj.nextValue:"+obj.nextValue)

		//Handle non numbers
	}
	else if (data==="."){
		if(!obj.nextValue){
			obj.nextValue='0'+data;
		}
		else {
		obj.nextValue=obj.nextValue+data;
	}
	}
	else if (data ==="+/-"){
		if (obj.nextValue) {
			obj.nextValue=(-1 * parseFloat(obj.nextValue)).toString();
		}
		if (obj.runningTotal) {
			obj.runningTotal=(-1 * parseFloat(obj.runningTotal)).toString();
		}

	}
	else if (data ==="%"){
		if(!obj.runningTotal){
			obj.nextValue=(parseFloat(obj.nextValue)/100).toString();
		}
		else {
			obj.nextValue=(parseFloat(obj.runningTotal)*parseFloat(obj.nextValue)/100).toString();
		}
	}
	else
	{

		if (!obj.runningTotal)
		{
			obj.runningTotal=obj.nextValue;
		}
		else
		{
			if(obj.operator)
			obj.runningTotal=operate(obj.runningTotal,obj.nextValue,obj.operator);
		}
		obj.operator=data;
		obj.nextValue=obj.null;
	}
	//console.log("T:"+obj.total+" N: "+obj.next+" Op: "+obj.operator);
	console.log(obj.nextValue ||obj.runningTotal||0);
	return obj;
}
