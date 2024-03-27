//  let fullName = 'Ilqar Səmədov Oktay'

// 1) Ad soyad ata adinizi butov sheklde goturun ve array sheklinde herflerine ayirin(split)
// let fullName = 'Ilqar Səmədov Oktay';
// let X = fullName.split('');

// console.log(X);
// 2) FullName'də soyadinizi adinizin onune keciren alqoritm yazin
// let X = fullName.split(' ');
// let lastName = X.pop();
// X.unshift(lastName);
// let A = X.join(' ');

// console.log(A);
// 3) Alinan yeni arrayi stringe cevirin(join)
// let string  = (fullName);
// let stringName = string.split(' ').join(' ');

// console.log(stringName);

//  let arr = [4, 5, 2, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2, 5, 6, 3, 7, 3, 7]

// QEYD - Bu tasklarda "arr" arrayindan istifade edilecekdir.....

//4) Yuxaridaki arrayda 5 reqeminin nece defe tekrarlandigini tapin

//5) Yuxaridaki arraydaki butun reqemlerin cemini tapin
// let sum=0
// arr.map(item => sum += item)
// console.log(sum)

//6) arrayda tekrar olunan reqemleri artan sira ile duzun
// let X = [...new Set(arr)].sort((a, b) => a - b);
// console.log(X);
//7) arraydaki en boyuk reqemi tapin ve nece defe tekrarlandigini gosterin(Math.max)
// let maxNumber = Math.max(...arr);
// let countMax = arr.filter(item => item === maxNumber).length;
// console.log("Max", maxNumber);
// console.log("Repeat", countMax);
//8) Adinizdaki herflerin sayini tapin ve hemin sayin arrayda olub olmamasini yoxlayin Meselen Ulfat adinda 5 herf var ve 5 arrayda var(includes)
//9) arraydaki ilk 3 e bolunende qaliqda 2 alinan reqemi ve hemin reqemin arraydaki indexini tapin
// let index = arr.findIndex(item => item % 3 === 2 && item !== 0);
// let number = arr[index];
// console.log("Num:", number);
// console.log("Index:", index);
//10) arraydaki en boyuk reqemin ilk indexini tapin
// let FirstIndex = arr.indexOf(Math.max(...arr));

// console.log("Ilk index:", FirstIndex);
//11) 4 reqeminin arrayin hansi indexlerinde oldugunu gosterin
//12) 5 reqeminin arraydaki en boyuk ve en kicik indexlerini tapin
// let min = arr.indexOf(5);
// let max = arr.lastIndexOf(5);
// console.log("Ən kiçik index", min);
// console.log("Ən böyük index", max);
//13) "arr" - arrayindan reqemleri 2 den boyuk olan yeni array yaradin ve alinmish arrayla "arr" arrayinin uzunluqlari ferqini hesablayin
// let arr2 = arr.filter(item => item > 2);
// let difference = arr.length - arr2.length;
// console.log("Result:", difference);
//14) 7 reqeminin indexleri cemini tapin.


// let arr2 = [
//     {
//         name: 'test',
//         key: 1
//     },
//     {
//         name: 'task',
//         key: 2
//     },
//     {
//         name: 'tanqo',
//         key: 3
//     },
//     {
//         name: 'like',
//         key: 4
//     },
//     {
//         name: 'task',
//         key: 5
//     },
//     {
//         name: 'trust',
//         key: 6
//     },
//     {
//         name: 'test',
//         key: 7
//     },
//     {
//         name: 'last',
//         key: 8
//     },
//     {
//         name: 'tanqo',
//         key: 9
//     },
//     {
//         name: 'elephant',
//         key: 10
//     },
//     {
//         name: 'love',
//         key: 11
//     },
//     {
//         name: 'small',
//         key: 12
//     },
//     {
//         name: 'little',
//         key: 13
//     },
// ]
//QEYD Bu tasklarda arr2 istifade edilecekdir
// 16 arr2 de "name"-i "t" herfi ile bashlayan obyektleri yeni arraya yigin
// let names = arr2.filter(item => item.name.startsWith('t'));
// console.log(names);
// 17 arr2 de "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin sayini tapin
// let A = arr2.filter(item => item.name.startsWith('t') && item.name.endsWith('t')).length;
// console.log(A);
// 18 arr2 de "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin "key"- lerinin cemini tapin
// 19 arr2 de "name"-i "e" herfi ile biten obyeklerdeki name-in deyerini "SuperDev" sozu ile evezleyin.
// 20 arr2 de "name"-i en uzun olan obyektin key-i ni tapin
// 21 arr2 de "name"-i en uzun olan obyektin indexin kvadratini hesablayin
// let Maxlength = arr2.findIndex(obj => obj.name.length === Math.max(...arr2.map(obj => obj.name.length))) ** 2;
// console.log(Maxlength);
// 22 arr2 de "name"-inin uzunlugu 4 olan obyektlerden ibaret yeni array yaradin.
// let Length4 = arr2.filter(obj => obj.name.length === 4);
// console.log(Length4);
// 23 arr2 de en boyuk "key" - i olan obyektin "name"-i ni tapin
// 24 arr2 de terkibinde 2 'L' herfi olan obyekt(ler)in index(ler)ini tapin.
// 25 arr2 de terkibinde 2 't' herfi olan obyekt(ler)in key(ler)ini tapin.
