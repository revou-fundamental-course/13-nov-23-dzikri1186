var backgroundImageIndex = 1; // Indeks gambar latar belakang saat ini
var bodyElement = document.getElementById("body");

// Fungsi untuk mengganti gambar latar belakang setiap 5 detik
function changeBackground() {
  var backgroundImage = "background" + backgroundImageIndex + ".jpg";
  bodyElement.style.backgroundImage = 'url("' + backgroundImage + '")';

  // Ganti indeks gambar untuk gambar selanjutnya
  backgroundImageIndex = (backgroundImageIndex % 4) + 1; // Ganti 3 dengan jumlah gambar yang Anda miliki
}

// Set interval untuk memanggil fungsi setiap 5 detik
setInterval(changeBackground, 5000);

function isValidEmail(email) {
  // Pemeriksaan sederhana apakah email memiliki format yang benar dan berakhir dengan @gmail.com
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.endsWith("@gmail.com");
}

function submitForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  // Validasi sederhana
  if (name === "" || password === "") {
    document.getElementById("result").innerHTML =
      "Mohon isi semua kolom dengan benar!";
  } else if (!isValidEmail(email)) {
    document.getElementById("result").innerHTML =
      "Mohon masukkan alamat email Gmail yang valid!";
  } else {
    document.getElementById("result").innerHTML = `
        <p>Terima kasih, ${name}!</p>
        <p>Email: ${email}</p>
      `;
  }
}
