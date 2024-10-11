import React from "react";
import Navbar from "./components/navbar";
import Image from "next/image";
import Link from "next/link";
import Footer from "./components/footer";

const Page = () => {
  return (
    <div>
      <Navbar />
      {/* Hero Section */}
      <div className="w-full h-screen bg-bgLanding bg-cover bg-center bg-no-repeat flex flex-col gap-6 justify-center items-center">
        <h1 className="text-5xl font-bold">Selamat Datang di Kopilicious!</h1>
        <p className="text-2xl">Nikmati secangkir kebahagiaan setiap hari.</p>
        <button className="btn btn-success text-white">Get in Touch</button>
      </div>

      {/* Tentang Kami */}
      <div className="flex justify-center items-center py-10 px-24">
        <div className="flex justify-center items-center w-1/2">
          <Image
            src="/assets/images/barista.png"
            alt="barista"
            width={500}
            height={500}
          />
        </div>
        <div className="w-2/3 p-8">
          <h2 className="text-4xl font-bold mb-4">Tentang Kami</h2>
          <p className="text-lg">
            <strong>Visi:</strong> Menjadi kedai kopi terdepan yang mengutamakan
            kualitas, kenyamanan, dan memberikan pengalaman yang tak terlupakan
            bagi setiap pelanggan, di mana secangkir kopi menjadi bagian dari
            kebahagiaan sehari-hari.
          </p>
          <h3 className="text-lg mt-4 font-semibold">Misi:</h3>
          <ul className="list-disc ml-5 mt-2">
            <li>
              Menyajikan kopi berkualitas tinggi dengan biji kopi pilihan yang
              diolah secara profesional.
            </li>
            <li>
              Memberikan pengalaman yang hangat dan ramah dengan layanan cepat
              dan suasana nyaman.
            </li>
            <li>
              Mengutamakan bahan baku alami dan segar untuk kopi yang sehat dan
              lezat.
            </li>
            <li>
              Mendukung komunitas lokal dengan menggunakan produk dari sumber
              berkelanjutan.
            </li>
            <li>
              Berinovasi dalam menu dan konsep agar selalu menarik dan
              menyenangkan.
            </li>
          </ul>
        </div>
      </div>

      {/* Menu Unggulan */}
      <section className="py-16 px-24" id="menu-kami">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-10">Menu Kami</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Menu 1: Espresso */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg flex flex-col items-center">
              <Image
                src="/assets/images/barista.png" // Ganti dengan path gambar yang sesuai
                alt="Espresso"
                width={300}
                height={200}
                className="mb-4 rounded-md"
              />
              <h3 className="text-2xl font-semibold mb-2">Espresso</h3>
              <p className="text-gray-700">Kopi murni dengan rasa yang kuat.</p>
            </div>

            {/* Menu 2: Cappuccino */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg flex flex-col items-center">
              <Image
                src="/assets/images/barista.png" // Ganti dengan path gambar yang sesuai
                alt="Cappuccino"
                width={300}
                height={200}
                className="mb-4 rounded-md"
              />
              <h3 className="text-2xl font-semibold mb-2">Cappuccino</h3>
              <p className="text-gray-700">
                Kombinasi sempurna antara espresso dan susu.
              </p>
            </div>

            {/* Menu 3: Kopi Spesial */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg flex flex-col items-center">
              <Image
                src="/assets/images/barista.png" // Ganti dengan path gambar yang sesuai
                alt="Kopi Spesial"
                width={300}
                height={200}
                className="mb-4 rounded-md"
              />
              <h3 className="text-2xl font-semibold mb-2">Kopi Spesial</h3>
              <p className="text-gray-700">Resep rahasia Kopilicious.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Fitur Khusus */}
      <section className="py-16 px-24" id="kenapa-memilih">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-10">
            Kenapa Memilih Kopilicious?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Fitur 1: Biji kopi premium */}
            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
              <Image
                src="/assets/images/kopi-premium.png" // Ganti dengan path gambar yang sesuai
                alt="Biji Kopi Premium"
                width={100}
                height={100}
                className="mb-4"
              />
              <h3 className="text-2xl font-semibold mb-2">Biji Kopi Premium</h3>
              <p className="text-gray-700">
                Kami hanya menggunakan biji kopi terbaik untuk rasa yang tak
                tertandingi.
              </p>
            </div>

            {/* Fitur 2: Suasana nyaman */}
            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
              <Image
                src="/assets/images/vibe.png" // Ganti dengan path gambar yang sesuai
                alt="Suasana Nyaman"
                width={100}
                height={100}
                className="mb-4"
              />
              <h3 className="text-2xl font-semibold mb-2">Suasana Nyaman</h3>
              <p className="text-gray-700">
                Nikmati secangkir kopi dalam suasana yang nyaman dan bersahabat.
              </p>
            </div>

            {/* Fitur 3: Pelayanan ramah */}
            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
              <Image
                src="/assets/images/barista.png" // Ganti dengan path gambar yang sesuai
                alt="Pelayanan Ramah"
                width={100}
                height={100}
                className="mb-4"
              />
              <h3 className="text-2xl font-semibold mb-2">Pelayanan Ramah</h3>
              <p className="text-gray-700">
                Tim kami siap memberikan pelayanan terbaik untuk Anda.
              </p>
            </div>

            {/* Fitur 4: Pesanan cepat */}
            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
              <Image
                src="/assets/images/pesanan-cepat.png" // Ganti dengan path gambar yang sesuai
                alt="Pesanan Cepat"
                width={100}
                height={100}
                className="mb-4"
              />
              <h3 className="text-2xl font-semibold mb-2">Pesanan Cepat</h3>
              <p className="text-gray-700">
                Nikmati pesanan yang cepat dan mudah setiap kali Anda datang.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimoni Pelanggan */}
      <section className="py-16 px-24" id="testimoni">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-10">Apa Kata Pelanggan?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Testimoni 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <Image
                  src="/assets/images/avatar.png" // Ganti dengan path gambar yang sesuai
                  alt="Pelanggan 1"
                  width={50}
                  height={50}
                  className="rounded-full mr-4"
                />
                <h3 className="font-semibold">Sarah Johnson</h3>
              </div>
              <p className="text-gray-700 italic">
                Kopilicious adalah tempat favorit saya! Rasanya luar biasa dan
                suasananya sangat nyaman.
              </p>
            </div>

            {/* Testimoni 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <Image
                  src="/assets/images/avatar.png" // Ganti dengan path gambar yang sesuai
                  alt="Pelanggan 2"
                  width={50}
                  height={50}
                  className="rounded-full mr-4"
                />
                <h3 className="font-semibold">Michael Brown</h3>
              </div>
              <p className="text-gray-700 italic">
                Pelayanan yang ramah dan pesanan selalu cepat. Saya sangat
                merekomendasikan Kopilicious!
              </p>
            </div>

            {/* Testimoni 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <Image
                  src="/assets/images/avatar.png" // Ganti dengan path gambar yang sesuai
                  alt="Pelanggan 3"
                  width={50}
                  height={50}
                  className="rounded-full mr-4"
                />
                <h3 className="font-semibold">Emily Clark</h3>
              </div>
              <p className="text-gray-700 italic">
                Kopi yang luar biasa dan atmosfer yang menyenangkan. Tempat
                yang sempurna untuk bersantai.
              </p>
            </div>

            {/* Testimoni 4 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <Image
                  src="/assets/images/avatar.png" // Ganti dengan path gambar yang sesuai
                  alt="Pelanggan 4"
                  width={50}
                  height={50}
                  className="rounded-full mr-4"
                />
                <h3 className="font-semibold">David Smith</h3>
              </div>
              <p className="text-gray-700 italic">
                Menu kopi yang sangat bervariasi! Saya tidak pernah kecewa
                dengan pilihan saya.
              </p>
            </div>

            {/* Testimoni 5 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <Image
                  src="/assets/images/avatar.png" // Ganti dengan path gambar yang sesuai
                  alt="Pelanggan 5"
                  width={50}
                  height={50}
                  className="rounded-full mr-4"
                />
                <h3 className="font-semibold">Jessica Taylor</h3>
              </div>
              <p className="text-gray-700 italic">
                Kopi yang luar biasa dan atmosfer yang menyenangkan. Tempat
                yang sempurna untuk bersantai.
              </p>
            </div>

            {/* Testimoni 6 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <Image
                  src="/assets/images/avatar.png" // Ganti dengan path gambar yang sesuai
                  alt="Pelanggan 6"
                  width={50}
                  height={50}
                  className="rounded-full mr-4"
                />
                <h3 className="font-semibold">Olivia Davis</h3>
              </div>
              <p className="text-gray-700 italic">
                Kopi yang luar biasa dan atmosfer yang menyenangkan. Tempat
                yang sempurna untuk bersantai.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-green-500 text-white text-center">
        <h2 className="text-4xl font-bold mb-4">Siap Menggugah Selera Anda?</h2>
        <p className="text-lg mb-6">
          Pesan kopi favorit Anda dan rasakan kebahagiaannya!
        </p>
        <Link href="/pemesanan" className="btn btn-success text-white text-md rounded-full">
          Pesan Sekarang
        </Link>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Page;
