interface MataKuliah {
  kodeMK: string;
  namaMK: string;
  nilaiMK: string;
  sksMK: number;
}

const fromIndeks = (indeks: string) => {
  switch (indeks) {
    case "A":
      return 4.0;
    case "AB":
      return 3.5;
    case "B":
      return 3.0;
    case "BC":
      return 2.5;
    case "C":
      return 2.0;
    case "D":
      return 1.0;
    case "E":
      return 0.0;
    default:
      throw new Error("fromIndeks: Indeks Tidak Ditemukan");
  }
};

export const hitungIPK = (MK: MataKuliah[]) => {
  let nilaiKolektif = 0;
  let totalSKS = 0;
  MK.forEach((matkul) => {
    nilaiKolektif += fromIndeks(matkul.nilaiMK) * matkul.sksMK;
    totalSKS += matkul.sksMK;
  });

  return nilaiKolektif / totalSKS;
};
