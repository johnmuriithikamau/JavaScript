function calculater (num1, num2, oparater) {
    let result;

    switch(oparater){
        case '+':
            result = num1 + num2;
            break;

            case '-':
            result = num1 - num2;
            break;

            case '/':
            result = num1 / num2;
            break;

            case '*':
            result = num1 * num2;
            break;
            default:
                result = 'Invalied oparater';
    }
    console.log(result);
    return result;
}
calculater(5, 2, '/');