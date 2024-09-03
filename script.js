function sendMail(){
        let parms={
            name:document.getElementById("name").value,
            email:document.getElementById("email").value,
            subject:document.getElementById("subject").value,
            message:document.getElementById("message").value,
        }
        emailjs.send("service_ppazr3m","template_pxc4cg9",parms).then(alert("Email Sent!!"))

}