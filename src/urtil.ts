export function uploadFile(file: File) {
  const fd = new FormData();
  fd.append("image", file);

  // send `POST` request
  return fetch("http://localhost:3030/upload", {
    method: "POST",
    body: fd,
  })
    .then((res) => res.json())
    .then((json) => json.url as string)
    .catch((err) => console.error(err));
}
