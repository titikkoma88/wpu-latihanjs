// Membuat Object

// Object Literal
var mhs1 = {
    nama: "Panji Ramadhan",
    nim: "531306134",
    umur: 31,
    ips: [3.00, 2.50, 3.20],
    alamat: {
        jalan: "Jl Panjaitan No 259",
        kota: "Gorontalo",
        provinsi: "Gorontalo"
    }
}
var mhs2 = {
    nama: "Waqqosh",
    nim: "531306135",
    umur: 9,
    ips: [3.00, 2.50, 3.20],
    alamat: {
        jalan: "Jl Panjaitan No 259",
        kota: "Gorontalo",
        provinsi: "Gorontalo"
    }
}

// FUnction Declaration
function buatObjectMahasiswa(nama, nik, email, jurusan) {
    var mhs = {};
    mhs.nama = nama;
    mhs.nik = nik;
    mhs.email = email;
    mhs.jurusan = jurusan

    return mhs;
}

var mhs3 = buatObjectMahasiswa('Hadjarati', '531306136', 'mail@panjihadjarati.com', 'Sistem Informasi');

// Constractor
function Mahasiswa(nama, nik, email, jurusan) {
    this.nama = nama;
    this.nik = nik;
    this.email = email;
    this.jurusan = jurusan;

}
var mhs4 = Mahasiswa('Lelly', '531306137', 'mail@lellyhaul.com', 'Manajemen');