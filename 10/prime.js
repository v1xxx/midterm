function prime(a){
        if(a>1 && a%1==0){
                for (var i = 2; i<a; i++){
                        if (a%i==0) return false;    
                }
                return true;
        }
        return false;
}