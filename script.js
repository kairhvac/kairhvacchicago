document.getElementById('serviceForm').addEventListener('submit', function(e){
e.preventDefault();

const name = document.getElementById('name').value;
const email = document.getElementById('email').value;
const phone = document.getElementById('phone').value;
const message = document.getElementById('message').value;

const mailto = `mailto:admin@kairhvacchicago.com?subject=HVAC Request from ${name}&body=
Name: ${name}%0D%0A
Email: ${email}%0D%0A
Phone: ${phone}%0D%0A
Message: ${message}`;

window.location.href = mailto;
});
