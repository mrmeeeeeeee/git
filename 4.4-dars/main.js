// let haftaKun = prompt(
//   "Hafta kunlarini sonlarda kiriting  \n 1) Dushanba \n 2) Seshanba \n 3) Chorshanba \n 4) Payshanba \n 5) Juma \n 6) Shanba \n 7) Yakshanba"
// );

// console.log(haftaKun);

// if (haftaKun === "1") {
//   alert("Dushanba");
// } else if (haftaKun === "2") {
//   alert("Seshanba");
// } else if (haftaKun === "3") {
//   alert("Chorshanba");
// } else if (haftaKun === "4") {
//   alert("Payshanba");
// } else if (haftaKun === "5") {
//   alert("Juma");
// } else if (haftaKun === "6") {
//   alert("Shanba");
// } else if (haftaKun === "7") {
//   alert("Yakshanba");
// } else {
//   alert("Bunday hafta kuni yoq");
// }

let obHavo = prompt(
  "Bugungi ob-havo qanday? \n variantlar: \n a) issiq \n b) sovuq \n c) yomgir"
);

if (obHavo === "issiq") {
  alert("Bugun futbolka-shortikda chiqsangiz boladi");
} else if (obHavo === "sovuq") {
  alert("Bugun qalin kiyimda chiqing!");
} else if (obHavo === "yomgir") {
  alert("Bugun zontik bilan chiqing!");
} else {
  alert("Bu malumotingiz notogri");
}
