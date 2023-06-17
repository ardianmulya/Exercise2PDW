function submitForm() {
  var name = document.getElementById('name').value;
  var birthDate = document.getElementById('birth-date').value;
  var angkatan = document.getElementById('angkatan').value;
  var peminatan = document.querySelector('input[name="peminatan"]:checked').value;
  var address = document.getElementById('address').value;
  var opinion = document.getElementById('opinion').value;
  
  var results = document.getElementById('results');
  results.innerHTML = `
    Hasil Survey:
    Nama: ${name}
    Tanggal Lahir: ${birthDate}
    Angkatan: ${angkatan}
    Peminatan: ${peminatan}
    Alamat: ${address}
    Pendapat: ${opinion}
  `;
}
