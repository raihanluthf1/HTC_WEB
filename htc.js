document.getElementById("form1").addEventListener("submit", function (event) {
  event.preventDefault();
  const nama = document.getElementById("nama").value;
  const email = document.getElementById("email").value;

  const result = document.getElementById("result");
  result.textContent = `Nama: ${nama}, Email: ${email}`;
});
