//************************
// Проверка типов

function isNan (value) {
    return typeof value === "number" && isNaN(value);
}

function isNum (value) {
    return typeof value === "number" && !isNaN(value);
}

function isString (value) {
    return typeof value === "string"
}

function isObject (value) {
    return typeof value === "object" || typeof value === "function"
}

function isBoolean (value) {
    return typeof value === "boolean"
}

function isNull (value) {
    return value === null;
}

function isUndefined (value) {
    return typeof value === "undefined";
}


//************************
// Конвертация типов

function toNum(val) {
    return Number(val)
}

function toStr(val){
    return val.toString()
}

function toBool(val) {
    return Boolean(val)
}

function strToArr(str){
    return str.split('')
}

function numToArr(num){
    return num.toString.split('').map(val => Number(val))
}

function strToObject(str) {
    try{
        return JSON.parse(str)
    } catch (e) {
        console.log("Невозможно преобразовать данную строку в объект")
    }
}
