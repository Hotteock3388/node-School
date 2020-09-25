function print(name, time, obj) {
    console.log(`${time/1000}초 뒤에 함수 호출`)
    console.log(`hello ${name}`)
    //console.log(`JSON ${obj.name}`)
    console.log('JSON %j', obj)
}
// 1. setTimeout() 함수
// 1-1 delayTime 초 뒤에 함수 호출
var delayTime = 1500
console.log('before')
setTimeout(function(){
    print('Hello World', delayTime, {name: 'hyoseon'})
}, delayTime)
console.log('after')