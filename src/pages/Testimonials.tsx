import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Dr. Sari Indrawati",
      role: "Orang Tua Siswa",
      content: "SMA Nusantara benar-benar mengubah hidup anak saya. Dari yang pemalu menjadi percaya diri dan berprestasi. Guru-gurunya sangat peduli dan metode pembelajarannya sangat efektif. Terima kasih SMA Nusantara!",
      rating: 5,
      year: "2024"
    },
    {
      name: "Ahmad Faizal",
      role: "Alumni 2020",
      content: "Tiga tahun di SMA Nusantara adalah periode terbaik dalam hidup saya. Tidak hanya akademik yang berkembang, tapi juga karakter dan kepemimpinan. Sekarang saya kuliah di ITB berkat bimbingan guru-guru hebat di sini.",
      rating: 5,
      year: "2023"
    },
    {
      name: "Ibu Ratna Dewi",
      role: "Orang Tua Alumni",
      content: "Anak saya lulus 2 tahun lalu dan sekarang berkuliah di luar negeri dengan beasiswa penuh. Ini semua berkat pendidikan karakter dan akademik yang solid dari SMA Nusantara. Highly recommended!",
      rating: 5,
      year: "2024"
    },
    {
      name: "Maria Christina",
      role: "Siswa Kelas 12",
      content: "Saya sangat bersyukur bisa sekolah di SMA Nusantara. Fasilitasnya lengkap, gurunya ramah dan kompeten, plus teman-temannya juga mendukung. Saya yakin akan siap menghadapi tantangan masa depan.",
      rating: 5,
      year: "2024"
    },
    {
      name: "Bapak Hendro Susanto",
      role: "Orang Tua Siswa",
      content: "Awalnya ragu memilih sekolah swasta, tapi setelah 2 tahun anak saya di SMA Nusantara, saya sangat puas. Perkembangan akademik dan sosialnya sangat terlihat. Worth every penny!",
      rating: 5,
      year: "2024"
    },
    {
      name: "Rizka Putri",
      role: "Alumni 2019",
      content: "SMA Nusantara memberikan foundation yang kuat untuk karir saya. Program olimpiade sains membantu saya meraih medali emas, dan sekarang saya bekerja sebagai researcher di LIPI. Terima kasih guru-guru inspiratif!",
      rating: 5,
      year: "2023"
    },
    {
      name: "Bapak Dr. Wijaya",
      role: "Praktisi Pendidikan",
      content: "Sebagai akademisi, saya kagum dengan sistem pendidikan di SMA Nusantara. Kurikulumnya well-designed, balance antara akademik dan pengembangan karakter. Pantas menjadi sekolah rujukan.",
      rating: 5,
      year: "2024"
    },
    {
      name: "Kevin Pratama",
      role: "Siswa Kelas 11",
      content: "Pindah dari sekolah lain ke SMA Nusantara adalah keputusan terbaik. Suasana belajarnya kondusif, guru-gurunya sabar mengajar, dan banyak kegiatan menarik yang mengembangkan bakat.",
      rating: 5,
      year: "2024"
    },
    {
      name: "Ibu Lestari Wulan",
      role: "Orang Tua Alumni",
      content: "Dua anak saya alumni SMA Nusantara dan keduanya sukses di bidangnya masing-masing. Satu jadi dokter, satu lagi entrepreneur. Pendidikan di SMA Nusantara memang membentuk mental juara!",
      rating: 5,
      year: "2023"
    }
  ];

  const stats = [
    { number: "4.9/5", label: "Rating Kepuasan" },
    { number: "96%", label: "Rekomendasi Orang Tua" },
    { number: "500+", label: "Testimoni Positif" },
    { number: "98%", label: "Alumni Puas" }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={16}
        className={`${
          index < rating ? "text-yellow-400 fill-current" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-glow text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Testimoni</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Dengarkan langsung dari para siswa, alumni, dan orang tua tentang 
            pengalaman mereka bersama SMA Nusantara.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Apa Kata Mereka</h2>
            <p className="text-xl text-muted-foreground">Testimoni nyata dari keluarga besar SMA Nusantara</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative">
                <CardContent className="p-6">
                  <Quote className="absolute top-4 right-4 h-8 w-8 text-primary/20" />
                  
                  <div className="flex items-center space-x-4 mb-4">
                    <Avatar>
                      <AvatarFallback className="bg-primary text-white">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-1 mb-4">
                    {renderStars(testimonial.rating)}
                    <span className="text-sm text-muted-foreground ml-2">({testimonial.year})</span>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    "{testimonial.content}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Bergabunglah dengan Keluarga Besar Kami
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Rasakan sendiri pengalaman pendidikan berkualitas di SMA Nusantara. 
            Jadilah bagian dari komunitas yang akan membentuk masa depan cemerlang Anda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl"
            >
              Daftar Sekarang
            </a>
            <a 
              href="/about" 
              className="inline-flex items-center justify-center px-8 py-4 border border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-colors"
            >
              Pelajari Lebih Lanjut
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Testimonials;