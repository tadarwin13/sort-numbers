var x= Number (prompt("Please eneter a number"));
var y= Number (prompt("I know you just gave me a number, but give me another one"));
var z= Number (prompt("One more number, Im greedy"));
if (x>y && x>z)
{
    if (y>z)
    {
        window.alert(x+","+ y +","+z);
    }
    else
    {
        window.alert(x+","+ z +","+y)
    }
    
}
else if (y>x && y>z)
{
    if (x>z)
    {
        window.alert(y+","+ x +","+z);
    }
    else
    {
        window.alert(y+","+ z +","+x)
    }
    
}
else if (z>x && z>y)
{
    if(x>y)
    {
        window.alert(z+","+ x + ","+y);
    }
    else
    {
        window.alert(z+","+ y +","+x)
    }
    
}

