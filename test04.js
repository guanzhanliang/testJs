//定义动物类
function Animal(type) {
    this._type = type;
    Object.defineProperty(this, 'type', {
        get: function () {
            return this._type;
        },
        set: function (v) {
            this._type = v;
        }
    })
}

Animal.prototype.getType = function () {
    return this.type;
};

//定义狗类，并且继承动物类

function Dog(name) {
    Animal.call(this, 'dongwu');
    this.name = name;
}

Dog.prototype = new Animal();

Dog.prototype.getName = function () {
    return this.name;
};

//测试
var animal = new Animal('guizu');
var dog = new Dog('xiaohuang');

console.log(dog);
console.log(dog.getType());
console.log(dog.getName());
