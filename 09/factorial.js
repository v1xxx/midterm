function factorial(a){
        if (a>0){
                if(a%1!=0) a = Math.floor(a);
                var b = 1;
                for (var i = 1; i<=a; i++){     
                        b *= i;
                }
                return b;
        } else {
                return null;
        }
}