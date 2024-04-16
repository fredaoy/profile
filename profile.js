function clickNo() {
  let click = document.getElementById("btn-no").value;
  let containers = document.getElementsByClassName("container");
  let container2 = document.getElementsByClassName("container2");
  if (click == "No") {
    for (let i = 0; i < containers.length; i++) {
      containers[i].style.display = "none";
      for (let i = 0; i < container2.length; i++) {
        container2[i].style.display = "block";
      }
    }
  }
}

// const yesBtn = document.getElementById("yes-btn");
// // ตรวจสอบว่า yesBtn ไม่ใช่ null ก่อนที่จะเรียกใช้งาน addEventListener()
// if (yesBtn !== null) {
//   yesBtn.addEventListener("touchstart", function () {
//     const yesBtnRect = yesBtn.getBoundingClientRect();

//     // หาขอบเขตสูงสุดของการสุ่มตำแหน่งใหม่
//     const maxX = window.innerWidth - yesBtnRect.width;
//     const maxY = window.innerHeight - yesBtnRect.height;

//     // สุ่มตำแหน่งใหม่สำหรับปุ่ม "Yes" ในขอบเขตของหน้าต่างเบราว์เซอร์
//     const randomX = Math.floor(Math.random() * maxX);
//     const randomY = Math.floor(Math.random() * maxY);

//     // กำหนดตำแหน่งใหม่ของปุ่ม "Yes"
//     yesBtn.style.left = randomX + "px";
//     yesBtn.style.top = randomY + "px";
//   });
// }
