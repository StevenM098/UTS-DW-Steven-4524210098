document.addEventListener('DOMContentLoaded', () => {
    const inputNama = document.getElementById('input-nama');
    const inputHarga = document.getElementById('input-harga');
    const inputDeskripsi = document.getElementById('input-deskripsi');

    const previewNama = document.getElementById('preview-nama');
    const previewHarga = document.getElementById('preview-harga');
    const previewDeskripsi = document.getElementById('preview-deskripsi');

    function updatePreview() {
        const nama = inputNama.value || "Nama Produk Anda"; 
        const harga = parseFloat(inputHarga.value);
        const deskripsi = inputDeskripsi.value || "Deskripsi ini akan muncul di sini. Isi formulir di panel kontrol untuk melihat perubahan."; // Default jika kosong

        previewNama.textContent = nama;
        if (!isNaN(harga) && harga >= 0) {
            previewHarga.textContent = new Intl.NumberFormat('id-ID', {
                style: 'currency',
                currency: 'IDR',
                minimumFractionDigits: 0 
            }).format(harga);
        } else {
            previewHarga.textContent = "Rp0";
        }
        previewDeskripsi.textContent = deskripsi;
    }
    inputNama.addEventListener('input', updatePreview);
    inputHarga.addEventListener('input', updatePreview);
    inputDeskripsi.addEventListener('input', updatePreview);
    updatePreview(); /*update kartu katalog*/
});