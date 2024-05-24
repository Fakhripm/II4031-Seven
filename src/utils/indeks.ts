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
      console.log(indeks);
      throw new Error("fromIndeks: Indeks Tidak Ditemukan");
  }
};

export const hitungIPK = (
  nilaiMK: FormDataEntryValue[],
  sksMK: FormDataEntryValue[],
) => {
  let nilaiKolektif = 0;
  let totalSKS = 0;
  for (let i = 0; i < 10; i++) {
    nilaiKolektif += fromIndeks(nilaiMK[i] as string) * Number(sksMK[i]);
    totalSKS += Number(sksMK[i]);
  }

  return nilaiKolektif / totalSKS;
};
