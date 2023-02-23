function processFrom(){
    document.getElementById("userInfo").style.display = "";
    document.getElementById("firstName").innerText = document.getElementById("fname").value;
    document.getElementById("lastName").innerText = document.getElementById("lname").value;
    document.getElementById("theAge").innerText = document.getElementById("age").value;
    document.getElementById("theEmail").innerText = document.getElementById("email").value;

}