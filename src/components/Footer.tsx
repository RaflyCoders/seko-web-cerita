import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-school-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* School Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">SMA Nusantara</h3>
            <p className="text-blue-200">
              Sekolah unggulan yang berkomitmen menghasilkan generasi cerdas, 
              berkarakter, dan siap menghadapi tantangan masa depan.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <Facebook size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <Instagram size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <Twitter size={20} />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Menu Cepat</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-blue-200 hover:text-white transition-colors">Beranda</a></li>
              <li><a href="/about" className="text-blue-200 hover:text-white transition-colors">Tentang Kami</a></li>
              <li><a href="/students" className="text-blue-200 hover:text-white transition-colors">Siswa Sukses</a></li>
              <li><a href="/testimonials" className="text-blue-200 hover:text-white transition-colors">Testimoni</a></li>
            </ul>
          </div>

          {/* Programs */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Program Unggulan</h4>
            <ul className="space-y-2">
              <li className="text-blue-200">Kelas Olimpiade</li>
              <li className="text-blue-200">Program Akselerasi</li>
              <li className="text-blue-200">English Club</li>
              <li className="text-blue-200">Robotics Club</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Kontak</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={20} className="text-blue-200 mt-1" />
                <p className="text-blue-200">
                  Jl. Pendidikan No. 123<br />
                  Jakarta Selatan 12345
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={20} className="text-blue-200" />
                <p className="text-blue-200">+62 21 1234 5678</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={20} className="text-blue-200" />
                <p className="text-blue-200">info@smanusantara.sch.id</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-700 mt-8 pt-8 text-center">
          <p className="text-blue-200">
            © 2024 SMA Nusantara. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;