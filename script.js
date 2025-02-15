var array = ["Laiba","Jalwa","Saadna","jalwa","Ayesha"];
for(var i=0;i<array.length;i++){
    if(array[i][0] == 'J' || array[i][0] == 'j'){
        console.log("Goodbye" + " " + array[i])
    }else{
        console.log("Hello"+ " " + array[i])
    }
}