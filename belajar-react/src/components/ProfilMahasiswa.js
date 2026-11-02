function KartuMahasiswa(props) {
  return (
    <div>
      <h2>{props.nama}</h2>
      <p>NIM: {props.nim}</p>
      <p>Program Studi: {props.program_studi}</p>
      <hr />
    </div>
  );
}

function App() {
  return (
    <div>
      <KartuMahasiswa
        nama="Budi Santoso"
        nim="231002"
        program_studi="Informatika"
      />

      <KartuMahasiswa
        nama="Siti Aminah"
        nim="231003"
        program_studi="Sistem Informasi"
      />

      <KartuMahasiswa
        nama="Rina Putri"
        nim="231004"
        program_studi="Informatika"
      />
    </div>
  );
}

export default App;