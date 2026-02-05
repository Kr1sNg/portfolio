document.getElementById('contactForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const data = {
		name: document.getElementById('name').value,
		email: document.getElementById('email').value,
		phone: document.getElementById('phone').value,
		message: document.getElementById('message').value,
    }

    const res = await fetch('/api/contact', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(data),
    })

    if (res.ok) {
		alert('Message sent successfully!');
		e.target.reset();
    } else {
      	alert('Something went wrong.');
    }
});