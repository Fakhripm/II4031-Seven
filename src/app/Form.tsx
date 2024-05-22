export default function InputData() {
  const InputMataKuliah = ({ index }: { index: string }) => (
    <div className="flex w-full gap-4">
      <text className="min-w-32 font-semibold">Mata Kuliah {index}</text>
      <input
        name="kode"
        minLength={6}
        maxLength={6}
        placeholder="Kode Mata Kuliah"
        required
      />
      <input name="nama" placeholder="Nama Mata Kuliah" required />
      <input
        name="nilai"
        placeholder="Nilai Mata Kuliah"
        required
        pattern="[Aa][Bb]?|[Bb][Cc]?|[Cc]|[Dd]|[Ee]"
      />
      <input
        name="sks"
        type="number"
        max={9}
        placeholder="SKS Mata Kuliah"
        required
      />
    </div>
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const nim = formData.get("nim-input");
    const nama = formData.get("nama-input");
    const kodeMK = formData.getAll("kode");
    const namaMK = formData.getAll("nama");
    const nilaiMK = formData.getAll("nilai");
    const sksMK = formData.getAll("sks");

    if (kodeMK.length !== 10) {
      alert("Please fill the empty fields for 'Kode Mata Kuliah'!");
    } else if (namaMK.length !== 10) {
      alert("Please fill the empty fields for 'Nama Mata Kuliah'!");
    } else if (nilaiMK.length !== 10) {
      alert("Please fill the empty fields for 'Nilai Mata Kuliah'!");
    } else if (sksMK.length !== 10) {
      alert("Please fill the empty fields for 'SKS Mata Kuliah'!");
    } else {
      // sendInputValueToApi(inputValue).then(() => /* Do something */)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <section className="flex w-full pb-2">
        <aside className="flex w-1/5 flex-col py-4 pr-4">
          <h2 className="font-semibold italic">Input Data Diri</h2>
          <label htmlFor="nim-input" className="block pb-1 pt-2 font-medium">
            NIM
          </label>
          <input id="nim-input" name="nim-input" placeholder="Masukkan NIM" />
          <label htmlFor="nama-input" className="block pb-1 pt-2 font-medium">
            Nama Mahasiswa
          </label>
          <input
            id="nama-input"
            name="nama-input"
            placeholder="Masukkan Nama Mahasiswa"
          />
        </aside>
        <section className="flex w-4/5 flex-col gap-2 overflow-x-auto py-4 pl-4">
          <h2 className="pb-1 font-semibold italic">Input Mata Kuliah</h2>
          <InputMataKuliah index="01" />
          <InputMataKuliah index="02" />
          <InputMataKuliah index="03" />
          <InputMataKuliah index="04" />
          <InputMataKuliah index="05" />
          <InputMataKuliah index="06" />
          <InputMataKuliah index="07" />
          <InputMataKuliah index="08" />
          <InputMataKuliah index="09" />
          <InputMataKuliah index="10" />
        </section>
      </section>

      <input
        type="submit"
        className="w-full rounded-md bg-gray-800 py-1 font-medium italic text-white hover:cursor-pointer hover:bg-black"
      />
    </form>
  );
}
