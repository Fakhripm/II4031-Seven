import pdfMake from "pdfmake/build/pdfmake";
import { TDocumentDefinitions, Content } from "pdfmake/interfaces";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { Akademik } from "@/app/api/data/mahasiswa/[nim]/route";

pdfMake.vfs = pdfFonts.pdfMake.vfs;

export const downloadPDF = (akademik: Akademik) => {
  function createPDF(akademik: Akademik) {
    const { nama, nim, ipk, ttd: signature } = akademik;

    const courses: {
      kode: string;
      nama: string;
      sks: number;
      nilai: string;
    }[] = [];

    for (let i = 1; i <= 10; i++) {
      const kode = akademik[`kode_mk${i}` as keyof Akademik] as string | null;
      const nama_matkul = akademik[`nama_matkul${i}` as keyof Akademik] as
        | string
        | null;
      const sks = akademik[`sks${i}` as keyof Akademik] as number | null;
      const nilai = akademik[`nilai${i}` as keyof Akademik] as number | null;

      if (kode && nama_matkul && sks && nilai !== null) {
        courses.push({
          kode,
          nama: nama_matkul,
          sks,
          nilai: nilai.toString(),
        });
      }
    }

    const totalSKS = courses.reduce((sum, course) => sum + course.sks, 0);

    const courseRows: Content[][] = courses.map((course, index) => [
      { text: (index + 1).toString(), alignment: "center" },
      course.kode,
      course.nama,
      { text: course.sks.toString(), alignment: "center" },
      { text: course.nilai, alignment: "center" },
    ]);

    const docDefinition: TDocumentDefinitions = {
      content: [
        {
          text: "Program Studi Sistem dan Teknologi Informasi\nSekolah Teknik Elektro dan Informatika\nInstitut Teknologi Bandung",
          style: "header",
          alignment: "center",
        },
        { text: "Transkip Akademik", style: "subheader", alignment: "center" },
        {
          text: `\nNama: ${nama}\nNIM: ${nim}`,
          margin: [0, 20, 0, 20],
        },
        {
          table: {
            headerRows: 1,
            widths: ["auto", "*", "*", "auto", "auto"],
            body: [
              [
                { text: "No", style: "tableHeader", alignment: "center" },
                { text: "Kode mata kuliah", style: "tableHeader" },
                { text: "Nama mata kuliah", style: "tableHeader" },
                { text: "SKS", style: "tableHeader", alignment: "center" },
                { text: "Nilai", style: "tableHeader", alignment: "center" },
              ],
              ...courseRows,
            ],
          },
          layout: "lightHorizontalLines",
        },
        {
          text: `\nTotal Jumlah SKS = ${totalSKS}\nIPK = ${ipk}`,
          margin: [0, 20, 0, 20],
        },
        {
          columns: [
            { width: "*", text: "" },
            {
              width: "auto",
              text: [
                {
                  text: `Ketua Program Studi\n\n--Begin signature--\n${signature}\n--End signature--\n\n`,
                  alignment: "center",
                },
                { text: `(Dr. I Gusti Bagus Baskara)`, alignment: "center" },
              ],
            },
            { width: "*", text: "" },
          ],
        },
      ],
      styles: {
        header: {
          fontSize: 14,
          bold: true,
          margin: [0, 10, 0, 10],
        },
        subheader: {
          fontSize: 12,
          bold: true,
          margin: [0, 10, 0, 10],
        },
        tableHeader: {
          bold: true,
          fontSize: 10,
          color: "black",
        },
      },
      defaultStyle: {
        fontSize: 10,
      },
    };

    pdfMake.createPdf(docDefinition).download("transcript.pdf");
  }

  createPDF(akademik);
};
