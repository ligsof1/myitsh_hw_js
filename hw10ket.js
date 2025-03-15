function Kettle(power, volume) {
    let _power = power;
    let _volume = volume;
    let _waterAmount = 0;
    let _isOn = false;

    this.setWaterAmount = function(amount) {
        if (amount < 0 || amount > _volume) {
            console.log(`Ошибка: количество воды должно быть от 0 до ${_volume} литров.`);
        } else {
            _waterAmount = amount;
            console.log(`Количество воды установлено: ${_waterAmount} литров.`);
        }
    };

    this.turnOn = function() {
        if (_waterAmount === 0) {
            console.log("Ошибка: нельзя включить устройство без воды.");
        } else {
            _isOn = true;
            console.log("Устройство включено.");
        }
    };

    this.turnOff = function() {
        _isOn = false;
        console.log("Устройство выключено.");
    };

    this.getPower = function() {
        return _power;
    };

    this.getVolume = function() {
        return _volume;
    };

    this.getWaterAmount = function() {
        return _waterAmount;
    };

    this.isOn = function() {
        return _isOn;
    };
}

Kettle.prototype.calculateBoilingTime = function(tDifference) {
    if (!this.isOn()) {
        console.log("Ошибка: устройство выключено.");
        return;
    }

    if (this.getWaterAmount() === 0) {
        console.log("Ошибка: в устройстве нет воды.");
        return;
    }

    const powerKW = this.getPower() / 1000; 
    const timeInHours = (this.getWaterAmount() * 0.00117 * tDifference) / powerKW;
    const timeInMinutes = timeInHours * 60;

    console.log(`Время закипания воды: ${timeInMinutes.toFixed(2)} минут.`);
    return timeInMinutes.toFixed(2);
};

// CoffeeMaker
function CoffeeMaker(power, volume, coffeeAmount = 0) {
    Kettle.call(this, power, volume);

    this._coffeeAmount = coffeeAmount;

    this.calculateBoilingTime = function() {
        const tDifference = 90; 
        const boilingTime = Kettle.prototype.calculateBoilingTime.call(this, tDifference);

        if (boilingTime) {
            console.log(`Время приготовления кофе: ${boilingTime} минут.`);
        }
    };

    this.setCoffeeAmount = function(amount) {
        if (amount < 0) {
            console.log("Ошибка: количество кофе не может быть отрицательным.");
        } else {
            this._coffeeAmount = amount;
            console.log(`Количество кофе установлено: ${this._coffeeAmount} грамм.`);
        }
    };

    this.makeCoffee = function() {
        if (!this.isOn()) {
            console.log("Ошибка: кофеварка выключена.");
            return;
        }

        if (this.getWaterAmount() === 0) {
            console.log("Ошибка: в кофеварке нет воды.");
            return;
        }

        if (this._coffeeAmount === 0) {
            console.log("Ошибка: в кофеварке нет кофе.");
            return;
        }

        console.log("Приготовление кофе...");
        this.calculateBoilingTime();
        console.log("Кофе готов!");
    };
}

const Kettle1 = new Kettle(2000, 3);

Kettle1.setWaterAmount(1.5);
Kettle1.turnOn();
Kettle1.calculateBoilingTime(100); 
Kettle1.turnOff();


CoffeeMaker.prototype = Object.create(Kettle.prototype);
CoffeeMaker.prototype.constructor = CoffeeMaker;


const myCoffeeMaker = new CoffeeMaker(1000, 1); 

myCoffeeMaker.setWaterAmount(1.0); 
myCoffeeMaker.setCoffeeAmount(15); 
myCoffeeMaker.turnOn(); 
myCoffeeMaker.makeCoffee(); 
myCoffeeMaker.turnOff();

