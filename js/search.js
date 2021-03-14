var a;
function show_hide(){
    if(a==1){
        document.getElementById('Search').style.display="none";
        return a=0;
    }else{
        document.getElementById('Search').style.display="inline";
        return a=1;
    }
}