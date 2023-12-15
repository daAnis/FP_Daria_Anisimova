let input = document.querySelector(".input");


const sum = (x, y) => x + y;
const sub = (x, y) => x - y;
const mult = (x, y) => x * y;
const div = (x, y) => {
    if (y !== 0) {
        return x / y;
    } else {
        prompt('Деление на ноль!');
        return NaN;
    }
}
const pow = (x, y) => Math.pow(x, y);
const sqrt = (x, y) => {
    if (x < 0) {
        prompt('Квадратный корень из отрицательного числа!');
        return NaN;
    } else {
        return Math.sqrt(x);
    }
}

function equation () {
    let x = null;
    let y = '';
    let operator = null;
    
    function insertKey(key) {
        function performOperation() {
            if ((x === null) && (y !== '')) {
                x = y;
            } else if (operator !== null) {
                x = operator(parseFloat(x), parseFloat(y));
            }
            y = x;
            input.textContent = x;
        }
        switch (key) {
            case '+':
                performOperation();
                operator = sum;
                break;
            case '-':
                performOperation();
                operator = sub;
                break;
            case '*':
                performOperation();
                operator = mult;
                break;
            case '/':
                performOperation();
                operator = div;
                break;
            case '^':
                performOperation();
                operator = pow;
                break;
            case '#':
                performOperation();
                operator = sqrt;
                break;
            case '=':
                performOperation();
                y = '';
                operator = null;
                break;
            case 'AC':
                x = null;
                y = '';
                operator = null;
                input.textContent = y;
                break;
            case 'C':
                if (operator !== null) {
                    operator = null;
                } else {
                    x = null;
                    y = '';
                    operator = null;
                }
                input.textContent = y;
                break;
            default:
                if (operator !== null) {
                    x = y;
                    y = '';
                }
                y += key;
                input.textContent = y;
                break;
        }
        console.log(x);
    }
    return insertKey;
}

const getResult = equation();
