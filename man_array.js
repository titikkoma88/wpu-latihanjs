// Manipulasi Array

// 1. Menampbah isi array
//var arr = [];
//arr[0] = "Panji";
//arr[1] = "Ramadhan";
//arr[2] = "Hadjarati";
//arr[5] = "Waqqosh";

//console.log(arr);

// 2. Menghapus isi array
//var arr = ["Panji", "Ramadhan", "Hadjarati"];
//arr[1] = undefined;
//console.log(arr);

// 3. Menampilkan isi array
//var arr = ["Panji", "Ramadhan", "Hadjarati", "Waqqosh"];

//for (var i = 0; i < arr.length; i++) {
//    console.log('Mahasiswa ke-' +
//        (i + 1) + ' : ' +
//        arr[i]);
//}

// Method pada array
//var arr = ['Panji ', 'Ramadhan', 'Hadjarati', 'Waqqosh', 'lelly'];

// 1. Join
//console.log(arr.join(' - '));

// 2. push & pop
//arr.push('Waqqosh');
//arr.pop();
//console.log(arr.join(' - '));

// 3.Unshift & shift
//arr.unshift('Waqqosh');
//arr.shift();
//console.log(arr.join(' - '));

// 4. Splice
// slice(indexAwal, mauDihapusBerapa, elemenBaru1, elementBaru2, ...)

//arr.splice(2, 0, 'Waqqosh', 'Robani');
//arr.splice(1, 2, 'Doddy', 'Fitri');
//console.log(arr.join(' - '));

// 5. Slice

// Slice(awal,akhir);
//var arr2 = arr.slice(3, 4);
//console.log(arr2.join(' - '));

// Method pada array2
//var angka = [1, 2, 3, 4, 5, 6, 7, 8];
//var nama = ['Panji ', 'Ramadhan', 'Hadjarati', 'Waqqosh', 'lelly'];

// 6. forEach
//for (var i = 0; i < angka.length; i++) {
//    console.log(angka[i]);
//}

//angka.forEach(function(e) {
//    console.log(e);
//});


//angka.forEach(function(e) {
//    console.log(e);
//});

//nama.forEach(function(e, i) {
//    console.log('Mahasiswa ke-' + (i + 1) + ' adalah : ' + e);
//})


// 7. map
//var angka = [1, 2, 5, 3, 6, 8, 4];
//var angka2 = angka.map(function(e) {
//    return e * 2;
//});
//console.log(angka2.join(' - '));

// 8. sort
//var angka = [1, 2, 5, 3, 6, 8, 4];
//console.log(angka.join(' - '));
//angka.sort();
//console.log(angka.join(' - '));

//var angka = [1, 2, 10, 5, 20, 3, 6, 8, 4];
//angka.sort(function(a, b) {
//    return a - b;
//});
//console.log(angka.join(' - '));

// 9. filter
//var angka = [1, 2, 10, 5, 20, 3, 6, 8, 4];
//var angka2 = angka.filter(function(x) {
//return x == 5;
//    return x > 5;
//})
//console.log(angka2.join(' - '));

// 10. find
var angka = [1, 2, 10, 5, 20, 3, 6, 8, 4];
var angka2 = angka.find(function(x) {
    return x > 5;
})
console.log(angka2);