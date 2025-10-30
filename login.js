document.querySelector("#register").addEventListener("click", function () {
  const newName = document.querySelector("#registerName").value;
  const newEmail = document.querySelector("#registerEmail").value;
  const mdp = document.querySelector("#registerPassword").value;
  const newUser = {
    name: newName,
    email: newEmail,
    password: mdp,
  };
  fetch('http://localhost:3000/users/signup', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(newUser),
	}).then(response => response.json())
		.then(data => {
      console.log(data, newUser);
      if (data.result) {
        window.location.assign("index.html");
      }
    });
});

document.querySelector("#connection").addEventListener("click", function () {
  const email = document.querySelector("#connectionEmail").value;
  const mdp = document.querySelector("#connectionPassword").value;
  const user = {
    email: email,
    password: mdp,
  };
  fetch("http://localhost:3000/users/signin", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  })
    .then((resoponse) => resoponse.json())
    .then((data) => {
      console.log(user);
      if (data.result) {
        window.location.assign("index.html");
      }
    });
});
