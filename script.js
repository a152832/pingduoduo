var box=document.getElementById("banner"),
	lis=box.getElementsByTagName("li"),
	index=0
	setInterval(function(){
		for (var i=0;i<lis.length;i++) {
			lis[i].style.display="none";
		}
		index++
		if(index>2){
			index=0;
		}
		lis[index].style.display="block";
		console.log(index)
	},2000);
