/*=============== SHOW MENU ===============*/
const showMenu = (toggleId, navId) =>{
   const toggle = document.getElementById(toggleId),
         nav = document.getElementById(navId)

   toggle.addEventListener('click', () =>{
       // Add show-menu class to nav menu
       nav.classList.toggle('show-menu')

       // Add show-icon to show and hide the menu icon
       toggle.classList.toggle('show-icon')
   })
}

showMenu('nav-toggle','nav-menu')




function calculateTotal() {
    // Lấy số lượng từ các ô nhập
    const item1 = parseInt(document.getElementById('item1').value) || 0;
    const item5 = parseInt(document.getElementById('item5').value) || 0;
    const item10 = parseInt(document.getElementById('item10').value) || 0;
    const item15 = parseInt(document.getElementById('item15').value) || 0;
    const item30 = parseInt(document.getElementById('item30').value) || 0;
    const item60 = parseInt(document.getElementById('item60').value) || 0;
    const item180 = parseInt(document.getElementById('item180').value) || 0;
    const item480 = parseInt(document.getElementById('item480').value) || 0;
    const item900 = parseInt(document.getElementById('item900').value) || 0;
    const item1440 = parseInt(document.getElementById('item1440').value) || 0;
    const item4320 = parseInt(document.getElementById('item4320').value) || 0;
    const item10080 = parseInt(document.getElementById('item10080').value) || 0;

    // Giá trị tính theo phút
    const value1 = 1;    // 1 phút
    const value5 = 5;    // 5 phút
    const value10 = 10;  // 10 phút
    const value15 = 15;  // 15 phút
    const value30 = 30;  // 30 phút
    const value60 = 60;  // 60 phút
    const value180 = 180; // 3 giờ = 180 phút
    const value480 = 480; // 8 giờ = 480 phút
    const value900 = 900; // 15 giờ = 900 phút
    const value1440 = 1440; // 24 giờ = 1440 phút
    const value4320 = 4320; // 3 ngày = 4320 phút
    const value10080 = 10080; // 7 ngày = 10080 phút

    // Tính tổng cho từng khoảng thời gian
    const total1 = item1 * value1;
    const total5 = item5 * value5;
    const total10 = item10 * value10;
    const total15 = item15 * value15;
    const total30 = item30 * value30;
    const total60 = item60 * value60;
    const total180 = item180 * value180;
    const total480 = item480 * value480;
    const total900 = item900 * value900;
    const total1440 = item1440 * value1440;
    const total4320 = item4320 * value4320;
    const total10080 = item10080 * value10080;

    // Cập nhật các giá trị tổng trên trang
    document.getElementById('total1').textContent = total1;
    document.getElementById('total5').textContent = total5;
    document.getElementById('total10').textContent = total10;
    document.getElementById('total15').textContent = total15;
    document.getElementById('total30').textContent = total30;
    document.getElementById('total60').textContent = total60;
    document.getElementById('total180').textContent = total180;
    document.getElementById('total480').textContent = total480;
    document.getElementById('total900').textContent = total900;
    document.getElementById('total1440').textContent = total1440;
    document.getElementById('total4320').textContent = total4320;
    document.getElementById('total10080').textContent = total10080;

    // Tính tổng cuối cùng
    const finalTotal = total1 + total5 + total10 + total15 + total30 + total60 + total180 + total480 + total900 + total1440 + total4320 + total10080;
    document.getElementById('finalTotal').textContent = finalTotal;
}

function resetCalculator() {
    const inputs = document.querySelectorAll('input[type="number"]');
    inputs
}

function resetCalculator() {
    document.getElementById('item1').value = 0;
    document.getElementById('item5').value = 0;
    document.getElementById('item10').value = 0;
    document.getElementById('item15').value = 0;

    document.getElementById('total1').textContent = 0;
    document.getElementById('total5').textContent = 0;
    document.getElementById('total10').textContent = 0;
    document.getElementById('total15').textContent = 0;

    document.getElementById('finalTotal').textContent = 0;
}



function resetCalculator() {
    const inputs = document.querySelectorAll('input[type="number"]');
    inputs.forEach(input => input.value = 0);
    
    const totals = document.querySelectorAll('[id^="total"]');
    totals.forEach(total => total.textContent = 0);

    document.getElementById('finalTotal').textContent = 0;
    document.getElementById('totalHours').textContent = 0;
}

function convertToHours() {
    const finalTotal = parseInt(document.getElementById('finalTotal').textContent) || 0;
    const totalHours = (finalTotal / 60).toFixed(2);
    document.getElementById('totalHours').textContent = totalHours + ' giờ';
}
