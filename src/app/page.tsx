'use client'

import { useState } from 'react'
import { Menu, X, Phone, Mail, MapPin, ChevronRight, Shield, Users, Hammer, Wrench, Home, Building, CheckCircle } from 'lucide-react'

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-green-700 to-green-900 text-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <img 
                src="/images/logo.png" 
                alt="CV DUTA PAPUA MEMBANGUN Logo" 
                className="w-10 h-10 object-contain"
              />
              <h1 className="text-xl md:text-2xl font-bold">CV DUTA PAPUA MEMBANGUN</h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#beranda" className="hover:text-green-200 transition-colors">Beranda</a>
              <a href="#tentang" className="hover:text-green-200 transition-colors">Tentang Kami</a>
              <a href="#layanan" className="hover:text-green-200 transition-colors">Layanan</a>
              <a href="#proyek" className="hover:text-green-200 transition-colors">Proyek</a>
              <a href="#kontak" className="hover:text-green-200 transition-colors">Kontak</a>
            </nav>
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          
          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4">
              <nav className="flex flex-col space-y-3">
                <a href="#beranda" className="hover:text-green-200 transition-colors">Beranda</a>
                <a href="#tentang" className="hover:text-green-200 transition-colors">Tentang Kami</a>
                <a href="#layanan" className="hover:text-green-200 transition-colors">Layanan</a>
                <a href="#proyek" className="hover:text-green-200 transition-colors">Proyek</a>
                <a href="#kontak" className="hover:text-green-200 transition-colors">Kontak</a>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="beranda" className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <img 
            src="/images/hero.jpg" 
            alt="Construction Site" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 to-green-700/90"></div>
        </div>
        <div className="relative container mx-auto px-4 z-10">
          <div className="max-w-3xl text-center">
            <div className="mb-6">
              <img 
                src="/images/logo.png" 
                alt="CV DUTA PAPUA MEMBANGUN Logo" 
                className="w-24 h-24 mx-auto rounded-full shadow-lg"
              />
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-4 text-white">CV DUTA PAPUA MEMBANGUN</h2>
            <p className="text-xl md:text-2xl mb-4 text-green-100">Membangun Papua dengan Kualitas Terbaik</p>
            <p className="text-lg mb-8 text-green-50">Solusi terpercaya untuk semua kebutuhan konstruksi dan pembangunan di Papua</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#kontak" className="bg-white text-green-800 px-8 py-4 rounded-md font-semibold hover:bg-green-50 transition-colors inline-flex items-center justify-center text-lg">
                Hubungi Kami
              </a>
              <a href="#layanan" className="border-2 border-white text-white px-8 py-4 rounded-md font-semibold hover:bg-white hover:text-green-800 transition-colors inline-flex items-center justify-center text-lg">
                Lihat Layanan
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="tentang" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Tentang <span className="text-green-700">CV DUTA PAPUA MEMBANGUN</span></h2>
              <p className="text-gray-600 mb-4">
                CV DUTA PAPUA MEMBANGUN adalah perusahaan konstruksi terkemuka yang berbasis di Jayapura, Papua. Dengan pengalaman bertahun-tahun dalam industri pembangunan, kami telah membantu mewujudkan berbagai proyek infrastruktur dan bangunan di seluruh Papua.
              </p>
              <p className="text-gray-600 mb-6">
                Kami berkomitmen untuk memberikan layanan konstruksi berkualitas tinggi dengan memperhatikan detail, keamanan, dan keberlanjutan. Tim kami terdiri dari para profesional berpengalaman yang memahami tantangan unik pembangunan di wilayah Papua.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-green-700" size={24} />
                  <span className="text-gray-700">Berpengalaman</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-green-700" size={24} />
                  <span className="text-gray-700">Profesional</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-green-700" size={24} />
                  <span className="text-gray-700">Berkualitas</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-green-700" size={24} />
                  <span className="text-gray-700">Tepat Waktu</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-200 rounded-lg h-64 md:h-96 flex items-center justify-center">
              <img 
                src="/images/logo.png" 
                alt="CV DUTA PAPUA MEMBANGUN Logo" 
                className="w-48 h-48 object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="layanan" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Layanan Kami</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Kami menyediakan berbagai layanan konstruksi untuk memenuhi kebutuhan pembangunan di Papua
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 overflow-hidden">
                <img 
                  src="/images/residential.jpg" 
                  alt="Konstruksi Bangunan" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Home className="text-green-700" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Konstruksi Bangunan</h3>
                <p className="text-gray-600">
                  Pembangunan rumah, gedung perkantoran, dan bangunan komersial dengan desain yang fungsional dan estetis.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 overflow-hidden">
                <img 
                  src="/images/infrastructure.jpg" 
                  alt="Infrastruktur" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Hammer className="text-green-700" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Infrastruktur</h3>
                <p className="text-gray-600">
                  Pembangunan jalan, jembatan, dan infrastruktur publik lainnya untuk mendukung pembangunan di Papua.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 overflow-hidden">
                <img 
                  src="/images/renovation.jpg" 
                  alt="Renovasi & Maintenance" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Wrench className="text-green-700" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Renovasi & Maintenance</h3>
                <p className="text-gray-600">
                  Layanan renovasi bangunan dan perawatan berkala untuk menjaga kualitas dan umur bangunan Anda.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="proyek" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Proyek Kami</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Kami bangga telah menjadi bagian dari berbagai proyek pembangunan yang berkontribusi pada kemajuan Papua
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative group cursor-pointer">
              <div className="h-64 overflow-hidden rounded-lg">
                <img 
                  src="/images/residential.jpg" 
                  alt="Proyek Perumahan" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-xl font-semibold mb-2">Proyek Perumahan</h3>
                    <p className="text-sm">Pembangunan kompleks perumahan modern di Jayapura</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative group cursor-pointer">
              <div className="h-64 overflow-hidden rounded-lg">
                <img 
                  src="/images/infrastructure.jpg" 
                  alt="Proyek Infrastruktur" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-xl font-semibold mb-2">Jembatan Papua</h3>
                    <p className="text-sm">Pembangunan jembatan penghubung antar distrik</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative group cursor-pointer">
              <div className="h-64 overflow-hidden rounded-lg">
                <img 
                  src="/images/renovation.jpg" 
                  alt="Proyek Renovasi" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-xl font-semibold mb-2">Renovasi Gedung</h3>
                    <p className="text-sm">Renovasi total kantor pemerintah di Jayapura</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontak" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Hubungi Kami</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Siap untuk memulai proyek pembangunan Anda? Hubungi kami hari ini untuk konsultasi gratis
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-6">Informasi Kontak</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <img 
                      src="/images/logo.png" 
                      alt="CV DUTA PAPUA MEMBANGUN Logo" 
                      className="w-8 h-8 object-contain"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">CV DUTA PAPUA MEMBANGUN</h4>
                    <p className="text-gray-600">Jl. Tanjung Ria, Kel. Tanjung Ria, Kec. Jayapura Utara, Kota Jayapura, Prov. Papua</p>
                    <p className="text-gray-600">Kode Pos: 99117</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="text-green-700" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Telepon</h4>
                    <p className="text-gray-600">081931987647</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="text-green-700" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Email</h4>
                    <p className="text-gray-600">info@dutapapuamembangun.co.id</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">Kirim Pesan</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Nama</label>
                  <input type="text" id="name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                  <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subjek</label>
                  <input type="text" id="subject" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Pesan</label>
                  <textarea id="message" rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"></textarea>
                </div>
                <button type="submit" className="bg-green-700 text-white px-6 py-3 rounded-md font-semibold hover:bg-green-800 transition-colors">
                  Kirim Pesan
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img 
                  src="/images/logo.png" 
                  alt="CV DUTA PAPUA MEMBANGUN Logo" 
                  className="w-10 h-10 object-contain"
                />
                <h3 className="text-lg font-semibold">CV DUTA PAPUA MEMBANGUN</h3>
              </div>
              <p className="text-gray-400 text-sm">
                Mitra terpercaya untuk semua kebutuhan konstruksi dan pembangunan di Papua.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Layanan</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Konstruksi Bangunan</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Infrastruktur</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Renovasi & Maintenance</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Perusahaan</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#tentang" className="hover:text-white transition-colors">Tentang Kami</a></li>
                <li><a href="#proyek" className="hover:text-white transition-colors">Proyek</a></li>
                <li><a href="/privacy" className="hover:text-white transition-colors">Kebijakan Privasi</a></li>
                <li><a href="/terms" className="hover:text-white transition-colors">Syarat & Ketentuan</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Kontak</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Jl. Tanjung Ria, Jayapura Utara</li>
                <li>Kota Jayapura, Prov. Papua</li>
                <li>081931987647</li>
                <li>info@dutapapuamembangun.co.id</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2024 CV DUTA PAPUA MEMBANGUN. Hak Cipta Dilindungi.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}