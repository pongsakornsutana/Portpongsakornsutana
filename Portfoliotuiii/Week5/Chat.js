var comment = 0

alert("มาเม้นกันเร็วๆ");
function postFunction() { 
    comment++;
    var Text1 = document.getElementById("Text1").value;
        if(comment==1){
           
        document.getElementById("Topic1").innerText = Text1;
        alert("เม้นเเรกเลยน้าาา");
        }else if(comment==2 ){
            
            document.getElementById("Comment1").innerText = Text1;
            alert("ขออีกคนๆ");
        }
        else if(comment==3){
        document.getElementById("Comment2").innerText = Text1;
        alert("เม้นเต็มต้อง Clear ก่อนนะ");
    }
}
function clearFunction() {  
    alert("Clear!!!");
    comment = 0
    document.getElementById("Topic1").innerText = "";
    document.getElementById("Comment1").innerText = "";
    document.getElementById("Comment2").innerText = "";
    document.getElementById("Text1").value = "";
}