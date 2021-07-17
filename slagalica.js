//while da li moze da se stavi vise uslova pr: while(i > 0 && i < 10){...}
//brojac kad se pritisne DONE ne ide na 0 nego na 1 pa 0 (ne smem da stavim direktno 0 zato sto ide -1, -2...) 

var stop = 0;
var numb = 0;
var variable = 1;
var heaviness;
var heavinessConv;

/* while(heavinessConv > 10)
{
	heaviness = prompt("Choose heaviness (between 1 - 9 or leave empty if you want random)");
	console.log(typeof(heaviness));
	heavinessConv = Number(heaviness);
	console.log(typeof(heavinessConv));
}  */

$("#numbResult").val("");

for(var j = 0; j < 10000000000; j++)
{
	heaviness = prompt("Choose heaviness (between 1 - 9 or leave empty if you want random)");
	//color
	if(heaviness == "color")
	{
		var backgroundColor = prompt("Type background color: ");
		if(backgroundColor != "")
		{
			$("#main").css(
			{
				"background-color":backgroundColor
			});
		}
		
		var textColor = prompt("Type text color: ");
		if(textColor != "")
		{
			$("#main, #numbResult").css(
			{
				"color":textColor
			});
		}
		var boxColor = prompt("Type box color: ");
		if(boxColor != "")
		{
			$(".numbSearch, .numbUse, .numbUse2, .numbUse3, .sign, #numbResult, #stop, #counter").css(
			{
				"background-color":boxColor
			});
		}
	}
	//end color
	heavinessConv = Number(heaviness);
	if((heavinessConv > 0 && heavinessConv < 10) || heaviness == "" || heaviness == null) 
	{
		break;
	}
}
//prvi broj (tezina ili heaviness)
var counter = setInterval(function()
{
	if(heavinessConv > 0 && heavinessConv < 10)
	{
		if(numb == heavinessConv) numb = -1;
		numb+=1;
		document.querySelector("#numb1").innerHTML = numb;
	}
	if(heaviness == "" || heaviness == null)
	{
		if(numb == 9) numb = -1;
		numb+=1;
		document.querySelector("#numb1").innerHTML = numb;
	}
} ,100);

$("#stop").click(myNumber);

function myNumber(){
	document.querySelector("#numbResult").disabled = false;
	clearInterval(counter);
	variable+= 1;
	if(variable < 8) counting();
	if(variable == 8) counting2();
	if(variable == 9) counting3();
	function counting()
	{
		counter = setInterval(function()
		{
			if(variable < 3)
			{
				if(numb == 9) numb = -1;
				numb+=1;
				document.querySelector("#numb"+variable).innerHTML = numb;
			}
			if(variable == 3)
			{
				if(document.querySelector("#numb1").innerHTML == 0 && document.querySelector("#numb2").innerHTML == 0)
				{
					if(numb == 9) numb = 0;
					numb+=1;
					document.querySelector("#numb3").innerHTML = numb;
				}
				else {
					if(numb == 9) numb = -1;
					numb+=1;
					document.querySelector("#numb3").innerHTML = numb;
				}
			}
			if(variable > 3 && variable < 8)
			{
				if(numb == 9) numb = 0;
				numb+=1;
				document.querySelector("#numb"+variable).innerHTML = numb;
			}
		} ,100);
	}
	function counting2()
	{
		numb = 10;
		counter = setInterval(function()
		{
			if(numb == 20) numb = 5;
			numb+=5;
			document.querySelector("#numb8").innerHTML = numb;
		} ,100);
	}
	function counting3()
	{
		numb = 25;
		counter = setInterval(function()
		{
			if(numb == 100) numb = 12.5;
			numb*=2;
			document.querySelector("#numb9").innerHTML = numb;
		} ,100);
	}
	
	//counter
	if(variable == 10)
	{
		setTimeout(function()
		{
			$("#stop").html("DONE");
		}, 3000);
		document.querySelector("#counter").innerHTML = 100;
		var count = setInterval(function()
		{
			document.querySelector("#counter").innerHTML -= 1;
			if(document.querySelector("#counter").innerHTML == 0) 
			{	
				document.querySelector("#numbResult").disabled = true;
				clearInterval(count);
			}
		}, 1000)
	}
};
//do ovde sve radi

//stoping counter (getting result) 
var stopResult = 0;
$("#stop").click(function()
{
	if(document.querySelector("#stop").innerHTML == "DONE" && stopResult == 0) 
	{
		document.querySelector("#numbResult").disabled = true;
		//problem sa 0 linija koda ispod
		document.querySelector("#counter").innerHTML = 1;
		
		//getting refresh button
		setTimeout(function()
		{
			document.querySelector("#stop").innerHTML = "REFRESH";
		}, 3000);
		
		
		
		//document.querySelector("#numbResult").value += " = "+ document.querySelector("#numbResult").value;
		
		//dobiti rezultat (nije podeseno moze se izbrisati bez posledica)
		var a = document.querySelector("#numbResult").value;
		var x = a.split("");
		var result;
		var n;
		for(var i = 0; i < x.length; i++)
		{
			n = Number(x[i]);
			if(!isNaN(n) && i == 0)
			{
				console.log(typeof(n));
				result=n;
			}
			if(!isNaN(n) && i < 1)
			{
				if(x[i-1] == "+") result+=n;
				if(x[i-1] == "-") result-=n;
				if(x[i-1] == "*") result*=n;
				if(x[i-1] == "/") result/=n;
			}
		}
		console.log(result);
		console.log(typeof(result));
		console.log(x.length);
		
		stopResult = 1;
	}
});

/* $("#stop").click(myNumber);

function myNumber()
{
	if(document.querySelector("#stop").innerHTML == "REFRESH") alert("radi!");
};
 */

