import { GraduationCap, Award, Globe, Briefcase } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import studentsSuccess from "@/assets/students-success.jpg";

const Students = () => {
  const successStories = [
    {
      name: "Dr. Sarah Putri",
      year: "Alumni 2018",
      achievement: "Dokter Spesialis Jantung",
      university: "Universitas Indonesia",
      description: "Meraih beasiswa penuh kedokteran dan kini menjadi dokter spesialis termuda di rumah sakit terkemuka.",
      category: "Kedokteran"
    },
    {
      name: "Ahmad Rizki",
      year: "Alumni 2019",
      achievement: "Software Engineer Google",
      university: "Institut Teknologi Bandung",
      description: "Berhasil masuk Google sebagai software engineer setelah lulus dengan IPK sempurna dari ITB.",
      category: "Teknologi"
    },
    {
      name: "Maria Sari",
      year: "Alumni 2017",
      achievement: "CEO Startup Teknologi",
      university: "Universitas Gadjah Mada",
      description: "Mendirikan startup edtech yang kini telah melayani lebih dari 100,000 siswa di Indonesia.",
      category: "Entrepreneur"
    },
    {
      name: "David Santoso",
      year: "Alumni 2020",
      achievement: "Diplomat Muda",
      university: "Harvard University",
      description: "Meraih beasiswa fulbright dan kini bekerja di Kementerian Luar Negeri sebagai diplomat muda.",
      category: "Diplomasi"
    },
    {
      name: "Rina Wulandari",
      year: "Alumni 2016",
      achievement: "Peneliti Internasional",
      university: "MIT",
      description: "Melakukan penelitian di bidang AI dan machine learning di Massachusetts Institute of Technology.",
      category: "Penelitian"
    },
    {
      name: "Kevin Tanaka",
      year: "Alumni 2021",
      achievement: "Olympic Champion",
      university: "Universitas Pelita Harapan",
      description: "Meraih medali emas Olimpiade Matematika Internasional dan melanjutkan ke jurusan matematika.",
      category: "Olahraga"
    }
  ];

  const achievements = [
    {
      icon: GraduationCap,
      title: "98%",
      subtitle: "Tingkat Penerimaan PTN",
      description: "Siswa yang diterima di perguruan tinggi negeri favorit"
    },
    {
      icon: Award,
      title: "150+",
      subtitle: "Prestasi Akademik",
      description: "Penghargaan tingkat nasional dan internasional"
    },
    {
      icon: Globe,
      title: "50+",
      subtitle: "Beasiswa Luar Negeri",
      description: "Alumni yang melanjutkan studi dengan beasiswa internasional"
    },
    {
      icon: Briefcase,
      title: "85%",
      subtitle: "Tingkat Employability",
      description: "Alumni yang langsung bekerja atau melanjutkan studi"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary to-primary-glow text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6">Siswa Sukses Kami</h1>
              <p className="text-xl text-blue-100 mb-8">
                Bangga dengan pencapaian luar biasa alumni-alumni SMA Nusantara 
                yang telah berkontribusi positif di berbagai bidang.
              </p>
            </div>
            <div>
              <img 
                src={studentsSuccess} 
                alt="Successful Students" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Achievement Stats */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Prestasi Alumni</h2>
            <p className="text-xl text-muted-foreground">Angka-angka yang membanggakan dari perjalanan alumni kami</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-8 pb-6">
                  <achievement.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <div className="text-3xl font-bold text-primary mb-2">{achievement.title}</div>
                  <div className="text-lg font-semibold text-foreground mb-2">{achievement.subtitle}</div>
                  <p className="text-sm text-muted-foreground">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Kisah Sukses Alumni</h2>
            <p className="text-xl text-muted-foreground">Inspirasi dari mereka yang telah meraih impian</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <Badge variant="secondary">{story.category}</Badge>
                    <span className="text-sm text-muted-foreground">{story.year}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-2">{story.name}</h3>
                  <div className="text-lg font-semibold text-primary mb-2">{story.achievement}</div>
                  <div className="text-sm text-accent font-medium mb-4">{story.university}</div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{story.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Jadilah Bagian dari Keluarga Besar</h2>
          <p className="text-xl text-blue-100 mb-8">
            Bergabunglah dengan SMA Nusantara dan wujudkan impian masa depan yang cemerlang. 
            Raih prestasi terbaik bersama kami!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Daftar Sekarang
            </a>
            <a 
              href="/about" 
              className="inline-flex items-center justify-center px-8 py-4 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary transition-colors"
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

export default Students;