let operation = prompt(`Вкажіть математичну дію:
додавання введіть - sum, 
віднімання введіть - diff, 
множення введіть - mult, 
ділення введіть - div,
Косинус числа в радіанах введіть - cos,
Синус числа в радіанах введіть - sin,
Перше число в ступені другого числа введіть - pow`);

if (operation == 'sum' || operation == 'diff' || operation == 'mult' || operation == 'div' || operation == 'pow') {
    let a = +prompt('Введіть перше число');
    let b = +prompt('Введіть друге число');
    if (operation == 'sum') {
        alert(`Сума числа ${a} та числа ${b} = ${a + b}`)
    } else if (operation == 'diff') {
        alert(`Різниця числа ${a} та числа ${b} = ${a - b}`)
    } else if (operation == 'mult') {
        alert(`Множення числа ${a} на число ${b} = ${a * b}`)
    } else if (operation == 'div') {
        alert(`Ділення числа ${a} на число ${b} = ${a / b}`)
    } else if (operation == 'pow') {
        alert(`Число ${a} в ступені числа ${b} = ${Math.pow(a, b)}`)
    }
} else if (operation == 'cos' || operation == 'sin') {
    let c = +prompt('Введіть число в радіанах');
    if (operation == 'cos') {
        alert(`Косинус ${c}рад = ${Math.cos(c)}`)
    } else if (operation == 'sin') {
        alert(`Синус ${c}рад = ${Math.sin(c)}`)
    }
} else {
    alert('Нажаль ви ввели некоректну математичну дію')
}

