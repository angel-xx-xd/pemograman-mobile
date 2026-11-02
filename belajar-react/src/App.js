import KartuMahasiswa from "./components/KartuMahasiswa";

import {useState} from "react";

function App() {
  return (
    <div>
      <KartuMahasiswa
        nim="231002"
        prodi="Informatika"
      />

      <KartuMahasiswa
        nama="Siti Aminah"
        prodi="Sistem Informasi"
      />

      <KartuMahasiswa
        nama="Rina Putri"
        nim="231004"
      />
    </div>
  );
}

export default App;
