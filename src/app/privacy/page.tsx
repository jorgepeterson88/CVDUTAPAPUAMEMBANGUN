'use client'

import { Shield, ArrowLeft, Mail, Phone, MapPin } from 'lucide-react'
import Link from 'next/link'

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-green-700 to-green-900 text-white shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-2 hover:text-green-200 transition-colors">
              <ArrowLeft size={20} />
              <span>Kembali</span>
            </Link>
            <div className="flex items-center space-x-2">
              <img 
                src="/images/logo.png" 
                alt="CV DUTA PAPUA MEMBANGUN Logo" 
                className="w-10 h-10 object-contain"
              />
              <h1 className="text-xl md:text-2xl font-bold">CV DUTA PAPUA MEMBANGUN</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="flex items-center space-x-3 mb-6">
              <Shield className="text-green-700" size={32} />
              <h2 className="text-3xl font-bold text-gray-800">Kebijakan Privasi</h2>
            </div>
            
            <div className="prose max-w-none">
              <p className="text-gray-600 mb-6">
                Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>

              <section className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">1. Pendahuluan</h3>
                <p className="text-gray-600 mb-4">
                  Selamat datang di CV DUTA PAPUA MEMBANGUN. Kami sangat memperhatikan privasi Anda dan berkomitmen untuk melindungi data pribadi yang Anda berikan kepada kami. Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi pribadi Anda.
                </p>
                <p className="text-gray-600">
                  Dengan menggunakan layanan kami, Anda menyetujui praktik yang dijelaskan dalam kebijakan ini.
                </p>
              </section>

              <section className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">2. Informasi yang Kami Kumpulkan</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">2.1 Informasi Pribadi</h4>
                    <p className="text-gray-600">
                      Kami dapat mengumpulkan informasi pribadi berikut:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                      <li>Nama lengkap</li>
                      <li>Alamat email</li>
                      <li>Nomor telepon</li>
                      <li>Alamat perusahaan atau rumah</li>
                      <li>Informasi pembayaran (jika berlaku)</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">2.2 Informasi Non-Pribadi</h4>
                    <p className="text-gray-600">
                      Kami juga dapat mengumpulkan informasi non-pribadi seperti:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                      <li>Alamat IP</li>
                      <li>Jenis browser</li>
                      <li>Informasi perangkat</li>
                      <li>Data penggunaan website</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">3. Penggunaan Informasi</h3>
                <p className="text-gray-600 mb-4">
                  Kami menggunakan informasi yang Anda berikan untuk:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Menyediakan layanan konstruksi dan pembangunan yang Anda minta</li>
                  <li>Mengkomunikasikan informasi proyek dan penawaran</li>
                  <li>Memproses permintaan dan pertanyaan Anda</li>
                  <li>Meningkatkan kualitas layanan kami</li>
                  <li>Mengirimkan informasi penting terkait proyek</li>
                  <li>Mematuhi kewajiban hukum dan peraturan</li>
                </ul>
              </section>

              <section className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">4. Berbagi Informasi</h3>
                <p className="text-gray-600 mb-4">
                  Kami tidak akan menjual, menyewakan, atau membagikan informasi pribadi Anda kepada pihak ketiga tanpa persetujuan Anda, kecuali dalam situasi berikut:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Dengan mitra bisnis tepercaya yang membantu kami menyediakan layanan</li>
                  <li>Untuk memenuhi persyaratan hukum atau perintah pengadilan</li>
                  <li>Untuk melindungi hak, properti, atau keselamatan kami atau pihak lain</li>
                  <li>Dengan afiliasi perusahaan kami untuk tujuan bisnis internal</li>
                </ul>
              </section>

              <section className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">5. Keamanan Data</h3>
                <p className="text-gray-600 mb-4">
                  Kami mengambil langkah-langkah keamanan yang wajar untuk melindungi informasi pribadi Anda dari akses tidak sah, penggunaan, atau perubahan. Langkah-langkah ini meliputi:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Enkripsi data sensitif</li>
                  <li>Akses terbatas ke informasi pribadi</li>
                  <li>Protokol keamanan fisik dan digital</li>
                  <li>Pelatihan rutin staf tentang privasi data</li>
                </ul>
              </section>

              <section className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">6. Hak Anda</h3>
                <p className="text-gray-600 mb-4">
                  Anda memiliki hak untuk:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Mengakses informasi pribadi yang kami simpan tentang Anda</li>
                  <li>Memperbaiki informasi yang tidak akurat</li>
                  <li>Menghapus informasi pribadi Anda (dengan batasan tertentu)</li>
                  <li>Menolak penggunaan informasi untuk tujuan pemasaran</li>
                  <li>Meminta salinan data pribadi Anda</li>
                </ul>
              </section>

              <section className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">7. Cookies</h3>
                <p className="text-gray-600 mb-4">
                  Website kami dapat menggunakan cookies untuk meningkatkan pengalaman pengguna. Cookies adalah file teks kecil yang disimpan di browser Anda. Anda dapat mengatur browser untuk menolak cookies, tetapi ini dapat mempengaruhi fungsionalitas website.
                </p>
              </section>

              <section className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">8. Perubahan Kebijakan</h3>
                <p className="text-gray-600">
                  Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu. Perubahan akan diposting di halaman ini dengan tanggal pembaruan terbaru. Kami mendorong Anda untuk secara berkala meninjau kebijakan ini.
                </p>
              </section>

              <section className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">9. Hubungi Kami</h3>
                <p className="text-gray-600 mb-4">
                  Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini atau ingin menggunakan hak privasi Anda, silakan hubungi kami:
                </p>
                <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                  <div className="flex items-center space-x-2">
                    <span className="font-semibold text-gray-700">Perusahaan:</span>
                    <span className="text-gray-600">CV DUTA PAPUA MEMBANGUN</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="text-green-700" size={16} />
                    <span className="text-gray-600">Jl. Tanjung Ria, Kel. Tanjung Ria, Kec. Jayapura Utara, Kota Jayapura, Prov. Papua 99117</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="text-green-700" size={16} />
                    <span className="text-gray-600">081931987647</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="text-green-700" size={16} />
                    <span className="text-gray-600">info@dutapapuamembangun.co.id</span>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <img 
                src="/images/logo.png" 
                alt="CV DUTA PAPUA MEMBANGUN Logo" 
                className="w-8 h-8 object-contain"
              />
              <h3 className="text-lg font-semibold">CV DUTA PAPUA MEMBANGUN</h3>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Mitra terpercaya untuk semua kebutuhan konstruksi dan pembangunan di Papua.
            </p>
            <div className="text-gray-400 text-sm">
              <p>&copy; 2024 CV DUTA PAPUA MEMBANGUN. Hak Cipta Dilindungi.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}