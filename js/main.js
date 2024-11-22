var index =-1;
function newuote(){
    var text =['"The best revenge is massive success."','"Resentment is like drinking poison and waiting for your enemies to die."','"You miss 100% of the shots you dont take."','"Do not take life too seriously. You will not get out alive."','"It s not what happens to you, but how you react to it that matters."']
    var name =["--Frank Sinatra","--Nelson Mandela","--Wayne Gretzy","--Elbert Hubbard","--Epictetus"]
    var num 
    do {
        num =Math.floor(Math.random()* text.length)
    } while (num===index);
    index=num;

    document.getElementById("mydata").innerHTML=(text[num]);
    document.getElementById("myname").innerHTML=(name[num]);
} 