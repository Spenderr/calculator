function operate(command,first,second)
{
    switch(command)
    {
    case 1 :
        first+=second;
        break;
    case 2 :
        first-=second;
        break;
    case 3 :
        first*=second;
        break;
    case 4 : 
        first/=second;
        break;
    }
}