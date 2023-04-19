
async function handleSubmit(event) {
  event.preventDefault();

  const data = new FormData(event.target);

  const username = data.get("username");
  const password = data.get("password");
  const specPhrase = data.get("phrase");

  console.log(username, password, specPhrase);

  //if (!username ||!password) {
  //  return (null);
  //}

  const result = await fetch("/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
      specPhrase,
    }),
  }).then((res) => res.json())
  console.log(result)
};

const form = document.querySelector("form");

form?.addEventListener("submit", handleSubmit);
//^this error does not mean anthing:
//it thinks that "form" may be null, but its clearly not.