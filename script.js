let _name = prompt('Введите имя'),
    age,
    flag = true;

while (flag) {
    age = parseInt(prompt('Введите ваш возраст'));

    if (isNaN(age) || age <= 0) {
        alert('Введите корректный возраст');
    } else {
        alert('Привет, ' + _name + ' , тебе уже ' + age + ' лет!');
        flag = false;
    }
}