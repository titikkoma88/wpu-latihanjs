// Membuat Object

// cara 1 - function declaration
//function halo() {
//    console.log('halo');
//}
//halo();


// cara 2 object literal
//var obj = {};
//obj.halo = function() {
//    console.log('halo');
//}
//obj.halo();


// cara 3 - constructor
//function Halo() {
//    console.log('halo');
//}
//new Halo();


// Konsep this

//console.log(window == this);

//var a = 10;
//console.log(window.a);


// cara 1 - function declaration
//function halo() {
//    console.log(this);
//    console.log('halo');
//}
//this.halo();
// this mengembalikan object Global


// cara 2 object literal
//var obj = { a: 10, nama: 'Panji' };
//obj.halo = function() {
//    console.log(this);
//    console.log('halo');
//}
//obj.halo();
// this mengembalikan object yang bersangkutan


// cara 3 - constructor
function Halo() {
    console.log(this);
    console.log('halo');
}
var obj1 = new Halo();
var obj2 = new Halo();
// this mnegmbalikan object yang baru dibuat