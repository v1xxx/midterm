function findFirstEvenNumber(a){
	if(a.length==0){
		return null;
	}else{
		for (var i=0;i<a.length;i++){
			if(a[i]%2==0)
				return a[i];
		}
		return null;
	}
}