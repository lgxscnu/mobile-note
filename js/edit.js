(function(){
    var list_con = util.$('list_con');
    util.addEvent(list_con,'touchstart',fnDown);
    function fnDown(){
        
        if(list_con.style.overflow=='visible'){
            list_con.style.overflow='hidden';
            list_con.style.left=0;
        }else{
            list_con.style.overflow='visible';
            list_con.style.left='-140px';
        }
    }
    
    
    
})();