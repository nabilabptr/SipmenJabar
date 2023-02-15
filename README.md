# Sipmen Jawa Barat

**Pastikan sudah install [Node JS](https://nodejs.org/en/download/) di Laptop anda**

1. Klik Download ZIP
<img src="downloadZIP_Screenshot.png" alt="Alt text" title="">
2. Edit file `.env`.
  - SIPMEN_USERNAME = <<isikan email>>
  - SIPMEN_PASSWORD = <<isikan password>>
3. Edit csv yang ada di folder [data](https://github.com/nabilabptr/SipmenJabar/tree/main/data), tinggal isi tanpa ubah nama kolom. Format tanggal harus `dd/mm/yyyy`. Pastikan nama petugas entri sesuai dengan database sipmen, kalo engga ya error.
4. jalankan scriptnya
```
npm install
```
   1. `node index.js distribusi` untuk menginput data distribusi ke koseka
   2. `node index.js penerimaan` untuk menginput data penerimaan dari koseka per SLS, dari daftar yang ada di [penerimaan.csv](./data/penerimaan.csv)
   3. `node index.js penerimaan-desa` untuk menginput data penerimaan dari koseka per Desa, dibagi menjadi 20 SLS per file, dari daftar yang ada di [penerimaan.csv](./data/penerimaan.csv)
