function fact(x) {
    a = 1
    for (i = 1; i <=x; i++) {
        console.log(a);
        a = (a * (i + 1));  
    }
}

fact(5);
