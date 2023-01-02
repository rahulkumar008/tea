function sendEmail(){
    Email.send({
Host : "smtp.gmail.com",
Username : "rahulkumar35ab@gamil.com",
Password : "rahul0000",
To : 'krajesh16810@gmail.com',
From : document.getElementById("email").value,
Subject : "New Contect Form Enquary",
Body : "And this is the body"
}).then(
message => alert(message)
);
}