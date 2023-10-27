window.onload = pageLoad;
var Input_regis = [];

function pageLoad() {
	var form = document.getElementById("myForm");
 	form.onsubmit = validateForm;
}

function validateForm() {
    var pass = document.getElementById("password");
    var repass = document.getElementById("retypepassword");
    if (pass.value == repass.value)
    {
        alert("สำเร็จเเล้ว");
    }
    else if (pass.value != repass.value)
    {
        alert("โปรดลองอีกครั้ง");
        return false;
    }
    //ถ้าตรวจสอบแล้วว่ามีการ register ไม่ถูกต้องให้ return false ด้วย
}