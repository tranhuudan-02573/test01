//1. event listener
// 2. JSON
// 3.Fetch
// 4.DOM Location
// 5, Local storage
// 6.session storage
// 7.coding convention
// 8 best practice
// 9 mistakes
// 10 performance

// 1 xử lí quá nhiều việc khi event xảy ra
// 2 lắng nghe / hủy bỏ lắng nghe

var btn = document.getElementById("btn");
function viec1() {
  console.log("viec 1 ");
}
function viec2() {
  console.log("viec2 ");
}
btn.addEventListener("click", viec1);
btn.addEventListener("click", viec2);
setTimeout(function () {
  btn.removeEventListener("click", viec1);
}, 3000);

// JSON
// 1 là 1 kiểu định dạng dữ liệu( chuỗi)
//2 javascript objects notations
//3JSON: number, string, boolean, objects, arrays

// mã hóa / giãi mã
// encode / decode
// stringify:  từ javascript type sang JSON/ parse: từ JSON sang javascript type

//  var json = '["javascript","PHP","java"]'
// var json = '{"name":"huu dan","age":"18"}';
var a = '"abc"';
console.log(JSON.parse(a));

console.log(JSON.stringify({ name: "huu dan", age: "18" }));
