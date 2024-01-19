// =====================================================================================================
// // DOM SELECTION
// // getElementById()
// // Mengembalikan Element
// const judul = document.getElementById("judul");
// judul.style.color = "red";
// judul.style.backgroundColor = "lightgray";
// judul.innerHTML = "Dhea Ramdani";

// // getElementsByTagName()
// // Mengembalikan HTMLColection
// const p = document.getElementsByTagName("p");
// for (let i = 0; i < p.length; i++) {
//   p[i].style.backgroundColor = "lightblue";
// }

// const h1 = document.getElementsByTagName("h1")[0];
// h1.style.fontSize = "50px";

// // getElementsByClassName()
// // Mengembalikan HTMLColection
// const p1 = document.getElementsByClassName("p1")[0];
// p1.innerHTML = "ini di ubah dari javascript!";

// // querySelector()
// // Mengembalikan Element
const li2 = document.querySelector("section#b ul li:nth-child(2)");
li2.style.backgroundColor = "orange";

const p4 = document.querySelector("#b p");
p4.style.color = "green";
p4.style.fontSize = "30px";

// // querySelectorAll()
// // Mengembalikan NodeList
const p = document.querySelectorAll("p");
for (let i = 0; i < p.length; i++) {
  p[i].style.backgroundColor = "lightblue";
}
// =====================================================================================================
