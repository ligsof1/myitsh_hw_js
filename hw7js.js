let Calc = function () {
    this.isON = false;

    this.turnOn = function() {
        this.isON = true;
        console.log("Калькулятор включен.");
        this.get();
    };

    this.turnOff = function() {
        this.isON = false;
        console.log("Калькулятор выключен.");
    };

    this.get = function () {
        if (this.isON) {
            this.a = +prompt('Введите число a');
            this.b = +prompt('Введите число б');
            this.oper = prompt('Введите вид операции: + - * /');

            this.operation();
        } else {
            console.log("Калькулятор выключен. Включите его, чтобы выполнить расчет.");
        }
    };

    this.operation = function() {
        switch(this.oper){
            case '+':
                this.result = this.a + this.b;
                break;
            case '-':
                this.result = this.a - this.b;
                break;
            case '*':
                this.result = this.a * this.b;
                break;
            case '/':
                this.result = this.a / this.b;
                break;
            default: 
                this.result = 0;
        }
        
        this.show();
    };

    this.show = function () {
        alert(this.a + ' ' + this.oper + ' ' + this.b + ' = ' + this.result);
    };
};

window.onload = function() {
    let calc = new Calc();
    let isON = confirm('Включить калькулятор?');
    if (isON) {
        calc.turnOn();
    } else {
        alert('Калькулятор выключен');
        calc.turnOff();
    }
};