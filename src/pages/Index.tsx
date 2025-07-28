import { ArrowRight, Award, Users, BookOpen, Target, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import schoolHero from "@/assets/school-hero.jpg";
import classroom from "@/assets/classroom.jpg";
import { Link } from "react-router-dom";

const Index = () => {
  const achievements = [
    { icon: Award, number: "98%", label: "Tingkat Kelulusan" },
    { icon: Users, number: "1200+", label: "Alumni Sukses" },
    { icon: BookOpen, number: "50+", label: "Program Unggulan" },
    { icon: Target, number: "25", label: "Tahun Pengalaman" },
  ];

  const programs = [
    {
      title: "Kelas Olimpiade",
      description: "Program khusus untuk siswa berbakat dalam bidang sains dan matematika",
      icon: Award,
    },
    {
      title: "Program Akselerasi",
      description: "Percepatan belajar untuk siswa dengan kemampuan akademik tinggi",
      icon: Target,
    },
    {
      title: "English Immersion",
      description: "Program pendalaman bahasa Inggris dengan native speaker",
      icon: BookOpen,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${schoolHero})` }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Masa Depan Cemerlang
            <span className="block text-school-gold">Dimulai dari Sini</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            SMA Nusantara - Membangun generasi unggul yang berkarakter, 
            berprestasi, dan siap menghadapi tantangan global
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="xl" variant="hero" asChild>
              <Link to="/about">
                Tentang Kami <ArrowRight className="ml-2" />
              </Link>
            </Button>
            <Button size="xl" variant="outline" className="text-white border-white hover:bg-white hover:text-foreground" asChild>
              <Link to="/contact">Hubungi Kami</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Prestasi Kami</h2>
            <p className="text-xl text-muted-foreground">Angka-angka yang membuktikan kualitas pendidikan kami</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <achievement.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <div className="text-3xl font-bold text-primary mb-2">{achievement.number}</div>
                  <div className="text-muted-foreground">{achievement.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={classroom} 
                alt="Modern Classroom" 
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Mengapa Memilih SMA Nusantara?
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Dengan pengalaman lebih dari 25 tahun, kami telah membuktikan komitmen 
                dalam menghasilkan lulusan berkualitas yang siap bersaing di tingkat nasional dan internasional.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  "Fasilitas pembelajaran modern dan lengkap",
                  "Tenaga pengajar profesional dan berpengalaman",
                  "Kurikulum terintegrasi dengan standar internasional",
                  "Program pengembangan karakter dan leadership"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-accent" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
              
              <Button size="lg" variant="accent" asChild>
                <Link to="/about">Pelajari Lebih Lanjut</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Program Unggulan</h2>
            <p className="text-xl text-muted-foreground">Program khusus untuk mengembangkan potensi siswa secara maksimal</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-8">
                  <program.icon className="h-12 w-12 text-primary mb-6" />
                  <h3 className="text-xl font-bold text-foreground mb-4">{program.title}</h3>
                  <p className="text-muted-foreground mb-6">{program.description}</p>
                  <Button variant="outline" size="sm">
                    Selengkapnya
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
