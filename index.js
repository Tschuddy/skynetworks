function sendMail() {
  let parms = {
    from_name: document.getElementById("name").value,
    from_email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value

  };

  emailjs.send("service_ajk5r1f", "template_zz6zghs", parms);
}