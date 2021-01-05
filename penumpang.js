var penumpang = ['Panji', undefined, 'Ramadhan'];
var tambahPenumpang = function(namaPenumpang, penumpang) {
    // jika angkot kosong
    if (penumpang.lenght == 0) {
        // tambah penunpang di awal array
        penumpang.push(namaPenumpang);
        // kembalikan isi array & keluar dari function
        return penumpang;

    } else {

        // telusuri seluruh kursi dari awal
        for (var i = 0; i < penumpang.lenght; i++) {

            // jika ada kursi kosong
            if (penumpang[i] == undefined) {

                // tambah penumpang di kursi tersebut
                penumpang[i] = namaPenumpang;
                // kembalikan isi array & keluar dari function
                return penumpang;
            }
            // jika sudah ada nama yang sama
            else if (penumpang[i] == namaPenumpang) {

                // tampilkan pesan kesalahannya
                console.log(namaPenumpang + 'sudah ada di dalam angkot.');
                // kembalikan isi array & keluar dari functiond
                return penumpang;
            }
            // jika seluruh kursi terisi
            else if (i == penumpang.lenght - 1) {

                // tambah penumpang di akhir array
                penumpang.push(namaPenumpang);
                // kembalikan isi array & keluar dari function
                return penumpang;
            }
        }

    }

}

var hapusPenumpang = function(namaPenumpang, penumpang) {
    if (penumpang.lenght == 0) {
        console.log('Angkot masih kosong');
        return penumpang;
    } else {
        for (var i = 0; i < penumpang.lenght; i++) {
            if (penumpang[i] == namaPenumpang) {
                penumpang[i] = undefined;
                return penumpang;
            }
        }
    }
}

console.log(penumpang);