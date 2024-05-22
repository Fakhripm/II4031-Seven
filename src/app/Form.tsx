import { useRouter } from "next/navigation";
import { hitungIPK } from "@/utils/indeks";

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

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const nim = formData.get("nim-input");
    const nama = formData.get("nama-input");
    const kodeMK = formData.getAll("kode");
    const namaMK = formData.getAll("nama");
    const nilaiMK = formData.getAll("nilai");
    const sksMK = formData.getAll("sks");

    if (nim === null) {
      alert("Please fill the empty 'NIM' field");
    } else if (nama === null) {
      alert("Please fill the empty 'Nama' field");
    } else if (kodeMK.length !== 10) {
      alert("Please fill the empty fields for 'Kode Mata Kuliah'!");
    } else if (namaMK.length !== 10) {
      alert("Please fill the empty fields for 'Nama Mata Kuliah'!");
    } else if (nilaiMK.length !== 10) {
      alert("Please fill the empty fields for 'Nilai Mata Kuliah'!");
    } else if (sksMK.length !== 10) {
      alert("Please fill the empty fields for 'SKS Mata Kuliah'!");
    } else {
      const mahasiswa = JSON.stringify({
        nim: nim,
        nama: nama,
        kode_mk1: kodeMK[0],
        kode_mk2: kodeMK[1],
        kode_mk3: kodeMK[2],
        kode_mk4: kodeMK[3],
        kode_mk5: kodeMK[4],
        kode_mk6: kodeMK[5],
        kode_mk7: kodeMK[6],
        kode_mk8: kodeMK[7],
        kode_mk9: kodeMK[8],
        kode_mk10: kodeMK[9],
        nama_matkul1: namaMK[0],
        nama_matkul2: namaMK[1],
        nama_matkul3: namaMK[2],
        nama_matkul4: namaMK[3],
        nama_matkul5: namaMK[4],
        nama_matkul6: namaMK[5],
        nama_matkul7: namaMK[6],
        nama_matkul8: namaMK[7],
        nama_matkul9: namaMK[8],
        nama_matkul10: namaMK[9],
        nilai1: nilaiMK[0],
        nilai2: nilaiMK[1],
        nilai3: nilaiMK[2],
        nilai4: nilaiMK[3],
        nilai5: nilaiMK[4],
        nilai6: nilaiMK[5],
        nilai7: nilaiMK[6],
        nilai8: nilaiMK[7],
        nilai9: nilaiMK[8],
        nilai10: nilaiMK[9],
        sks1: Number(sksMK[0]),
        sks2: Number(sksMK[1]),
        sks3: Number(sksMK[2]),
        sks4: Number(sksMK[3]),
        sks5: Number(sksMK[4]),
        sks6: Number(sksMK[5]),
        sks7: Number(sksMK[6]),
        sks8: Number(sksMK[7]),
        sks9: Number(sksMK[8]),
        sks10: Number(sksMK[9]),
        ipk: hitungIPK(nilaiMK, sksMK),
        ttd: "ARLECCHINO",
      });

      console.log(mahasiswa);

      const result = await fetch("api/data/mahasiswa/" + nim, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: mahasiswa,
      });
    }
    router.refresh();
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
