"use client";
import { base64StringToBlob } from "blob-util";
import { useState, ChangeEvent, MouseEvent } from "react";
import CryptoJS from "crypto-js";

export default function Page() {
  const [file, setFile] = useState<File | null>();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    } else {
      setFile(null);
    }
  };

  const handleDecrypt = async (encryptedFile: File, password: string) => {
    try {
      // Read the file as a Base64 string
      const reader = new FileReader();
      reader.readAsDataURL(encryptedFile);
      reader.onload = () => {
        const encryptedBase64 = reader.result as string;
        const encrypted = encryptedBase64.split(",")[1]; // Remove the data URL prefix

        // Decrypt the Base64 string
        const decrypted = CryptoJS.AES.decrypt(encrypted, password).toString(
          CryptoJS.enc.Utf8,
        );

        // Create a Blob from the decrypted Base64 string
        const decryptedBlob = base64StringToBlob(decrypted, "application/pdf");

        // Create a link to download the decrypted Blob
        const linkDecrypted = document.createElement("a");
        linkDecrypted.href = URL.createObjectURL(decryptedBlob);
        linkDecrypted.download = "decrypted_transcript.pdf";
        document.body.appendChild(linkDecrypted);
        linkDecrypted.click();
        document.body.removeChild(linkDecrypted);

        console.log("Decrypted file created and downloaded successfully");
      };
    } catch (error) {
      console.error("Error during decryption:", error);
    }
  };

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (file) {
      handleDecrypt(file, "II4031KSTIPmClHs");
    }
  };

  return (
    <div className="flex flex-col px-20 py-8">
      <button className="max-w-48 rounded-md border bg-white p-1 font-medium text-black hover:bg-gray-100">
        <a href="/">Back</a>
      </button>
      <div className="flex flex-col items-center space-y-6 py-10">
        {/* Decrypt  */}
        <h1 className="font-bold">Decrypt Student Transcript</h1>
        <input
          type="file"
          className="w-full cursor-pointer rounded bg-gray-100 text-sm font-medium text-gray-500 file:mr-4 file:cursor-pointer file:border-0 file:bg-gray-800 file:px-4 file:py-2 file:text-white file:hover:bg-gray-700"
          onChange={handleInputChange}
        />
        <button
          className="w-full rounded-md bg-blue-500 px-4 py-2 font-medium text-white hover:bg-blue-600"
          onClick={handleClick}
        >
          Decrypt
        </button>
      </div>
    </div>
  );
}
