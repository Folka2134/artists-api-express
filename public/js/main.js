const deleteText = document.querySelectorAll(".delete");
const likeText = document.querySelectorAll(".likes");

deleteText.forEach((element) => {
  element.addEventListener("click", deleteArtist);
});

likeText.forEach((element) => {
  element.addEventListener("click", addLike);
});

async function deleteArtist() {
  const alias = this.parentNode.childNodes[1].innerText;
  const name = this.parentNode.childNodes[3].innerText;
  try {
    await fetch("api/deleteArtist", {
      method: "delete",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        alias: alias,
        name: name,
      }),
    });
    location.reload();
  } catch (error) {
    console.log(error);
  }
}

async function addLike() {
  const alias = this.parentNode.childNodes[1].innerText;
  const name = this.parentNode.childNodes[3].innerText;
  const likes = Number(this.parentNode.childNodes[5].innerText);

  try {
    const reponse = await fetch("api/addLike", {
      method: "put",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        alias: alias,
        name: name,
        likes: likes,
      }),
    });
    const data = await reponse.json();
    console.log(data);
    location.reload();
  } catch (error) {
    console.log(error);
  }
}
