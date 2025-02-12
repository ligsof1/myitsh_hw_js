
class Lamp {
    constructor() {
        this.isOn = false;
        this.power = 0; 
        this.costPerKWh = 0; 
        this.burningTimeSec = 0; 

        this.inputInfo();
    }

    inputInfo() {
        this.power = parseFloat(prompt('Введите мощность лампочки (Вт):', 10000));
        this.costPerKWh = parseFloat(prompt('Введите стоимость электроэнергии (руб./кВт·ч):'));
        console.log(`Информация о лампочке введена. Мощность: ${this.power} Вт, Стоимость электроэнергии: ${this.costPerKWh} руб./кВт·ч`);
    }

    turnOn() {
        if (!this.isOn) {
            this.isOn = true;
            this.startTime = Date.now(); 
            console.log("Лампочка включена.");
        }
    }

    turnOff() {
        if (this.isOn) {
            this.isOn = false;
            const endTime = Date.now(); 
            const burningDurationSec = (endTime - this.startTime) / 1000; 
            this.burningTimeSec += burningDurationSec;
            const burningDurationHours = this.burningTimeSec / 3600; 
            console.log(`Лампочка выключена. Время горения: ${burningDurationSec.toFixed(2)} секунд. Общее время горения: ${burningDurationHours.toFixed(5)} часов.`);
        }
    }

    getExpense() {
        
        let burningTimeInHours = this.burningTimeSec / 3600;
        let expense = (this.power * burningTimeInHours / 1000) * this.costPerKWh;
        console.log(`Расход за горение лампочки: ${expense.toFixed(2)} руб.`);
        return expense;
    }
}


let lamp = new Lamp();
let isON = confirm('Включить лампочку?');
if (isON) {
    lamp.turnOn();
} else {
    alert('Лампочка выключена');
}


setTimeout(() => {
    lamp.turnOff();
    lamp.getExpense();
}, 5 * 1000); // 5 секунд

