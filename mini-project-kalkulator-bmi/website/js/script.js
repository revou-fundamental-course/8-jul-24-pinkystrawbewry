document.getElementById('bmiForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Mengambil nilai dari form
    const gender = document.getElementById('gender').value;
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);

    // Validasi input
    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        alert('Mohon masukkan nilai tinggi dan berat badan yang valid.');
        return;
    }

    // Menghitung BMI
    const bmi = weight / ((height / 100) ** 2);

    // Menentukan kategori BMI
    let category = '';
    if (bmi < 18.5) {
        category = 'Kekurangan berat badan';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = 'Normal (sehat)';
    } else if (bmi >= 25 && bmi < 29.9) {
        category = 'Kelebihan berat badan';
    } else {
        category = 'Obesitas';
    }

    // Menampilkan hasil
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <h2>Hasil BMI</h2>
        <p>Jenis Kelamin: ${gender === 'male' ? 'Laki-Laki' : 'Wanita'}</p>
        <p>Hasil BMI: ${bmi.toFixed(2)}</p>
        <p>Kategori: ${category}</p>
    `;
});