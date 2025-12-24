'use client'

import { FileText, ArrowLeft, Mail, Phone, MapPin } from 'lucide-react'
import Link from 'next/link'

export default function TermsPage() {
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
              <FileText className="text-green-700" size={32} />
              <h2 className="text-3xl font-bold text-gray-800">Syarat & Ketentuan</h2>
            </div>
            
            <div className="prose max-w-none">
              <p className="text-gray-600 mb-6">
                Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>

              <section className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">1. Penerimaan Syarat</h3>
                <p className="text-gray-600 mb-4">
                  Selamat datang di CV DUTA PAPUA MEMBANGUN. Dengan mengakses atau menggunakan website dan layanan kami, Anda menyetujui untuk terikat oleh Syarat & Ketentuan ini. Jika Anda tidak menyetujui syarat ini, jangan gunakan website atau layanan kami.
                </p>
                <p className="text-gray-600">
                  Syarat & Ketentuan ini berlaku untuk semua pengunjung, pengguna, dan pelanggan yang mengakses atau menggunakan layanan kami.
                </p>
              </section>

              <section className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">2. Definisi</h3>
                <div className="space-y-3">
                  <div>
                    <span className="font-semibold text-gray-700">"Perusahaan":</span>
                    <span className="text-gray-600"> CV DUTA PAPUA MEMBANGUN</span>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-700">"Layanan":</span>
                    <span className="text-gray-600"> Layanan konstruksi, pembangunan, dan konsultasi yang disediakan oleh Perusahaan</span>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-700">"Pelanggan":</span>
                    <span className="text-gray-600"> Individu atau perusahaan yang menggunakan layanan Perusahaan</span>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-700">"Website":</span>
                    <span className="text-gray-600"> Situs web resmi CV DUTA PAPUA MEMBANGUN</span>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">3. Layanan yang Disediakan</h3>
                <p className="text-gray-600 mb-4">
                  CV DUTA PAPUA MEMBANGUN menyediakan layanan berikut:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Konstruksi bangunan residensial dan komersial</li>
                  <li>Pembangunan infrastruktur jalan dan jembatan</li>
                  <li>Renovasi dan perawatan bangunan</li>
                  <li>Konsultasi desain dan perencanaan konstruksi</li>
                  <li>Manajemen proyek konstruksi</li>
                  <li>Supplier material bangunan</li>
                </ul>
              </section>

              <section className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">4. Kewajiban Pelanggan</h3>
                <p className="text-gray-600 mb-4">
                  Sebagai Pelanggan, Anda setuju untuk:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Memberikan informasi yang akurat dan lengkap</li>
                  <li>Memenuhi kewajiban pembayaran sesuai kesepakatan</li>
                  <li>Memberikan akses yang wajar ke lokasi proyek</li>
                  <li>Mematuhi peraturan keselamatan kerja</li>
                  <li>Memberikan persetujuan yang diperlukan untuk pelaksanaan proyek</li>
                  <li>Melaporkan masalah atau keluhan secara tertulis</li>
                </ul>
              </section>

              <section className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">5. Kewajiban Perusahaan</h3>
                <p className="text-gray-600 mb-4">
                  CV DUTA PAPUA MEMBANGUN berkomitmen untuk:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Menyediakan layanan dengan standar kualitas tinggi</li>
                  <li>Menyelesaikan proyek sesuai jadwal yang disepakati</li>
                  <li>Mematuhi peraturan keselamatan kerja</li>
                  <li>Memberikan laporan kemajuan proyek secara berkala</li>
                  <li>Menjamin keamanan dan kualitas material yang digunakan</li>
                  <li>Memberikan garansi untuk layanan yang disediakan</li>
                </ul>
              </section>

              <section className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">6. Pembayaran</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">6.1 Syarat Pembayaran</h4>
                    <p className="text-gray-600">
                      Pembayaran harus dilakukan sesuai dengan kesepakatan dalam kontrak. Metode pembayaran yang diterima meliputi transfer bank, tunai, atau metode lain yang disepakati bersama.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">6.2 Jadwal Pembayaran</h4>
                    <p className="text-gray-600">
                      Pembayaran dapat dilakukan secara bertahap sesuai dengan milestone proyek atau sesuai kesepakatan dalam kontrak.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">6.3 Keterlambatan Pembayaran</h4>
                    <p className="text-gray-600">
                      Keterlambatan pembayaran dapat dikenakan denda sesuai dengan peraturan yang berlaku dan kesepakatan kontrak.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">7. Kebijakan Pembatalan</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">7.1 Pembatalan oleh Pelanggan</h4>
                    <p className="text-gray-600">
                      Pelanggan dapat membatalkan proyek dengan pemberitahuan tertulis minimal 14 hari sebelum tanggal mulai proyek. Biaya pembatalan mungkin berlaku tergantung pada tahap persiapan yang telah dilakukan.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">7.2 Pembatalan oleh Perusahaan</h4>
                    <p className="text-gray-600">
                      Perusahaan berhak membatalkan proyek jika terjadi force majeure atau jika Pelanggan melanggar syarat dan ketentuan yang telah disepakati.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">8. Garansi dan Jaminan</h3>
                <p className="text-gray-600 mb-4">
                  CV DUTA PAPUA MEMBANGUN memberikan garansi untuk:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Kualitas pekerjaan sesuai standar industri</li>
                  <li>Material yang digunakan sesuai spesifikasi</li>
                  <li>Struktur bangunan yang aman dan kokoh</li>
                  <li>Perbaikan cacat produksi dalam periode garansi</li>
                </ul>
                <p className="text-gray-600 mt-4">
                  Periode garansi bervariasi tergantung pada jenis layanan dan akan dijelaskan dalam kontrak.
                </p>
              </section>

              <section className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">9. Kekayaan Intelektual</h3>
                <p className="text-gray-600 mb-4">
                  Semua konten, desain, dan materi di website ini dilindungi oleh hak cipta dan merupakan milik CV DUTA PAPUA MEMBANGUN. Anda tidak diperbolehkan:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Menyalin, mendistribusikan, atau mereproduksi konten tanpa izin</li>
                  <li>Menggunakan desain atau rencana konstruksi untuk tujuan komersial</li>
                  <li>Memodifikasi atau mengadaptasi materi yang ada di website</li>
                </ul>
              </section>

              <section className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">10. Pembatasan Tanggung Jawab</h3>
                <p className="text-gray-600">
                  CV DUTA PAPUA MEMBANGUN tidak bertanggung jawab atas kerugian tidak langsung, insidental, atau konsekuensial yang timbul dari penggunaan layanan kami. Tanggung jawab kami dibatasi pada jumlah yang telah dibayar oleh Pelanggan untuk layanan yang bersangkutan.
                </p>
              </section>

              <section className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">11. Force Majeure</h3>
                <p className="text-gray-600">
                  Perusahaan tidak bertanggung jawab atas keterlambatan atau kegagalan dalam melaksanakan kewajiban jika disebabkan oleh kejadian di luar kendali kami, termasuk tetapi tidak terbatas pada bencana alam, perang, kerusuhan, atau peraturan pemerintah.
                </p>
              </section>

              <section className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">12. Penyelesaian Sengketa</h3>
                <p className="text-gray-600 mb-4">
                  Setiap sengketa yang timbul dari atau berhubungan dengan Syarat & Ketentuan ini akan diselesaikan melalui:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Negosiasi damai antara kedua belah pihak</li>
                  <li>Mediasi melalui pihak ketiga yang netral</li>
                  <li>Penyelesaian melalui pengadilan di Jayapura, Papua</li>
                </ul>
              </section>

              <section className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">13. Perubahan Syarat & Ketentuan</h3>
                <p className="text-gray-600">
                  Perusahaan berhak mengubah Syarat & Ketentuan ini kapan saja. Perubahan akan berlaku efektif sejak tanggal dipublikasikan di website. Penggunaan layanan setelah perubahan berarti Anda menyetujui syarat yang telah diperbarui.
                </p>
              </section>

              <section className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">14. Hubungi Kami</h3>
                <p className="text-gray-600 mb-4">
                  Jika Anda memiliki pertanyaan tentang Syarat & Ketentuan ini, silakan hubungi kami:
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