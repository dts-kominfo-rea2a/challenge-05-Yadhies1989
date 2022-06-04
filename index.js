const names = ["Halo", "Angel", "Nyoman", "Ketut", "Aisyah"];

// TODO: Fungsi utama
// Menerima 2 parameter: list nama dan callback sort
// Mengembalikan array of string dengan format:
// "1. Nama"
// "2. Nama"
// ...
const sorter = function (param1, param2) {
  let hasil = [];

  for (let counter = 0 ; counter < param1.length; counter++) {
      // hasil.push((counter + 1) + '.' + ' ' + param2(param1[counter]));
      if (param2(param1[counter])){
          hasil.push((counter + 1) + '.' + ' ' + param1[counter]);
      }
  }

  return hasil;
};

// TODO: Fungsi untuk mengurutkan array of string secara ascending
// mengembalikan array yang sudah diurutkan
const sortAscending = function () {
  let hasil = names.sort();
  return hasil ;
};

// TODO: Fungsi untuk mengurutkan array of string secara descending
// mengembalikan array yang sudah diurutkan
const sortDescending =function () {
  let hasil = names.sort().reverse();
  return hasil ;
};

// ! JANGAN DIMODIFIKASI
(function main() {
  console.log(sorter?.(names, sortAscending)?.join("\n"));
  console.log(sorter?.(names, sortDescending)?.join("\n"));
})();

module.exports = {
  sorter,
  sortAscending,
  sortDescending,
  names,
};
