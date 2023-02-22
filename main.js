const fs = require ('fs')
const arr = []


//1 ЗАпис даних
// pushInArr(arr,'iphone','12pro','red',2021,)
// pushInArr(arr,'samsung','a51','black',2019)
// pushInArr(arr,'xiaomi','redmi7','green',2015)
// pushInArr(arr,'xiaomi','redmi9','blue',2020)

 // 2 Отримати дані по айді
  //verify(0)
  //verify(1)
  //verify(2)
 
 //3 видалення по айд
 //dell(2)
 
 //4 зміна по айді
 //change(3, 'hhh', 202, 'iop', 2000)



 //запис
function write(arr){
    fs.writeFileSync('./menu.csv', JSON.stringify(arr), 'utf-8');
}

//Запис даних
function pushInArr (arr, name1, model1, color1, year1){
    arr.push({id: arr.length, Name : name1 , Model : model1 , Color : color1, Year : year1 })
    return arr && write(arr)
}

//Отримати дані по айді
function verify(id1){
    fs.readFile('./menu.csv', 'utf-8', (err,data)=>{
        const a = JSON.parse(data)
    for(let i = 0; i<a.length; i++){
let temp = a[i].id
let temp1 = a[id1]
        if(temp === id1){
        console.log(temp1)
        }
    }
})
}

//Видалення по айді
function dell(id){
    fs.readFile('./menu.csv', 'utf-8', (err,data)=>{
        const a = JSON.parse(data)
        delete a[id]
        fs.writeFileSync('./menu.csv', JSON.stringify(a), 'utf-8');

})
}

//Перезиписування по айді
function change(id, name1, model1, color1, year1){
    fs.readFile('./menu.csv', 'utf-8', (err,data)=>{
        const a = JSON.parse(data)
a[id].Name = name1
a[id].Model = model1
a[id].Color = color1
a[id].Year = year1
    fs.writeFileSync('./menu.csv', JSON.stringify(a), 'utf-8');  
})
}