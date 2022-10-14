const deleteText = document.querySelectorAll(".delete");
const likeText = document.querySelectorAll(".like");

deleteText.forEach((element) => {
  element.addEventListener("click", deleteArtist);
});

async function deleteArtist() {
  const alias = this.parentNode.childNodes[1].innerText;
  const name = this.parentNode.childNodes[3].innerText;
  try {
    const response = await fetch("api/deleteArtist", {
      method: "delete",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        alias: alias,
        name: name,
      }),
    });
    await response.json();
    location.reload();
  } catch (error) {
    console.log(error);
  }
}
