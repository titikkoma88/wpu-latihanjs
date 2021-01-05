var tanya = true;
while (tanya) {
    //Menangkap pilihan player
    var p = prompt('pilih : gajah, semut, orang');

    //Menangkap pilihan Computer
    //Membangkitkan bilangan random


    var hasil = '';
    // menentukan rules
    if (p == comp) {
        hasil = 'Seri!';
    } else if (p == 'gajah') {
        // if (comp == 'orang') {
        //    hasil = 'MENANG!';
        // } else {
        //    hasil = 'KALAH!';
        // }
        hasil = (comp == 'orang') ? 'MENANG!' : 'KALAH!';
    } else if (p == 'orang') {
        hasil = (comp == 'gajah') ? 'KALAH!' : 'MENANG!';
    } else if (p == 'semut') {
        hasil = (comp == 'orang') ? 'KALAH!' : 'MENANG!';
    } else {
        hasil = 'Memasukkan pilihan yang salah!!';
    }



    //Tampilkan hasilnya
    alert('Kamu memilih : ' + p + ' dan Komputer memilih : ' + comp + '\nMaka hasilnya : Kamu ' + hasil)

    tanya = confirm('lagi?');
}
alert('terima kasih sudah bermain');