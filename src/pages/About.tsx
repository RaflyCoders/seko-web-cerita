import { Users, Award, BookOpen, Heart, Target, Lightbulb } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import classroom from "@/assets/classroom.jpg";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Integritas",
      description: "Menjunjung tinggi kejujuran dan nilai-nilai moral dalam setiap aspek pendidikan"
    },
    {
      icon: Target,
      title: "Excellence",
      description: "Berkomitmen untuk selalu memberikan yang terbaik dalam proses pembelajaran"
    },
    {
      icon: Users,
      title: "Kolaborasi",
      description: "Membangun kerjasama yang harmonis antara siswa, guru, dan orang tua"
    },
    {
      icon: Lightbulb,
      title: "Inovasi",
      description: "Mengembangkan metode pembelajaran yang kreatif dan adaptif"
    }
  ];

  const timeline = [
    { year: "1999", event: "Pendirian SMA Nusantara dengan 120 siswa pertama" },
    { year: "2005", event: "Meraih akreditasi A dan menjadi sekolah rujukan" },
    { year: "2010", event: "Pembangunan laboratorium sains dan teknologi modern" },
    { year: "2015", event: "Implementasi kurikulum internasional Cambridge" },
    { year: "2020", event: "Meluncurkan platform pembelajaran digital hybrid" },
    { year: "2024", event: "Meraih penghargaan sekolah terbaik tingkat nasional" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-glow text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Tentang SMA Nusantara</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Lebih dari 25 tahun mengabdi dalam dunia pendidikan, membentuk generasi unggul 
            yang berkarakter, berprestasi, dan siap menghadapi tantangan global.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="p-8">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-primary mb-4">Visi</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Menjadi lembaga pendidikan menengah atas terdepan yang menghasilkan 
                  lulusan berkarakter mulia, berprestasi akademik tinggi, dan memiliki 
                  daya saing global untuk berkontribusi positif bagi bangsa dan dunia.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-primary mb-4">Misi</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                    <span>Menyelenggarakan pendidikan berkualitas dengan kurikulum yang adaptif</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                    <span>Mengembangkan karakter siswa berdasarkan nilai-nilai luhur bangsa</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                    <span>Memfasilitasi pengembangan bakat dan minat siswa secara optimal</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                    <span>Membangun kemitraan strategis dengan berbagai pihak</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Nilai-Nilai Kami</h2>
            <p className="text-xl text-muted-foreground">Prinsip yang menjadi landasan dalam setiap langkah pendidikan</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-8 pb-6">
                  <value.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Perjalanan Kami</h2>
            <p className="text-xl text-muted-foreground">Tonggak penting dalam sejarah SMA Nusantara</p>
          </div>
          
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary transform md:-translate-x-px"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className="flex-1 md:w-1/2">
                    <div className={`p-6 bg-card rounded-lg shadow-sm border ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'} ml-12 md:ml-0`}>
                      <div className="text-2xl font-bold text-primary mb-2">{item.year}</div>
                      <p className="text-muted-foreground">{item.event}</p>
                    </div>
                  </div>
                  
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full transform md:-translate-x-2 border-4 border-white shadow-md"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">Fasilitas Modern</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Dilengkapi dengan fasilitas pembelajaran terdepan untuk mendukung 
                proses belajar mengajar yang efektif dan menyenangkan.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Laboratorium Sains",
                  "Lab Komputer",
                  "Perpustakaan Digital",
                  "Aula Serbaguna",
                  "Lapangan Olahraga",
                  "Studio Musik",
                  "Lab Bahasa",
                  "Kantin Sehat"
                ].map((facility, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <BookOpen className="h-5 w-5 text-accent" />
                    <span className="text-foreground">{facility}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <img 
                src={classroom} 
                alt="Modern Facilities" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;