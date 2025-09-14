<<<<<<< HEAD
// const msgsucess =document.querySelector(".post-success-msg");
=======
const msgsucess =document.querySelector(".post-success-msg");
>>>>>>> 45fec1094dee394a48c2aad5ec228152f8bfc46e
// gsap.fromTo(msgsucess, 
//     // 起點狀態
//     {
//         opacity: 1,
//         x: 0,
//         // backgroundColor: "pink"
//     }, 
//     // 終點狀態
//     {
//         opacity: 0,
//         // x: 500,
//         delay: 1, 
//         duration: 1,
//         // backgroundColor: "yellow"
//     }
// );
<<<<<<< HEAD
// let tl = gsap.timeline({delay:1});
//   tl.to(msgsucess, {  opacity: 1, duration: 1})   // 透明 → 實心
//     .to(msgsucess, { opacity: 0, duration: 1 });  // 實心 → 透明


// 第六頁


document.addEventListener("DOMContentLoaded", () => {
  const toastEl = document.getElementById('postSuccessMsg')
  if (toastEl) {
    const toast = new bootstrap.Toast(toastEl)
    toast.show()
  }
})

var toastTrigger = document.getElementById('liveToastBtn')
var toastLiveExample = document.getElementById('liveToast')
if (toastTrigger) {
  toastTrigger.addEventListener('click', function () {
    var toast = new bootstrap.Toast(toastLiveExample)

    toast.show()
  })
}
=======
let tl = gsap.timeline({delay:1});
  tl.to(msgsucess, {  opacity: 1, duration: 1})   // 透明 → 實心
    .to(msgsucess, { opacity: 0, duration: 1 });  // 實心 → 透明
>>>>>>> 45fec1094dee394a48c2aad5ec228152f8bfc46e
