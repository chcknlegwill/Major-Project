
async function handleSubmit(event) {
  event.preventDefault();

  const data = new FormData(event.target);

  const username = data.get("username");
  const password = data.get("password");

  console.log(username, password);

  //if (!username ||!password) {
  //  return (null);
  //}

  const result = await fetch("/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password
    }),
  }).then((res) => res.json())
  console.log(result)
};


const form = document.querySelector("form");

form?.addEventListener("submit", handleSubmit);

//^this error does not mean anthing:
//it thinks that "form" may be null, but its clearly not.











/*

const form = document.getElementById("login-form");

form?.addEventListener("submit", loginUser);


async function loginUser(event) {
  
}

event.preventDefault();
  const username = document.getElementById("username");
  const password = document.getElementById("password");

  const result = await fetch("/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password
    }),
  }).then((res) => res.json())
  
  console.log(result)
*/