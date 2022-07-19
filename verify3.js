//var palabra = "palabra";
//var letra = "a";

function findletter(p,l){
    //console.log(p);// escribe la palabra
    
    var comoquiera=false;

    for(i=0 ;i<=p.length-1 ;i++){
         //console.log(p[i]);
       if(p[i]==l){
            console.log("La letra está inlcuida en la palabra");
            i=p.length
            comoquiera=true
        }
      /*else if (i=p.length-1){
        console.log("La letra NO está incluida en la palabra");
       }*/

    }  
    if(!comoquiera){
      console.log("letra no encontrada");
    }

}
findletter("azucar","s");



