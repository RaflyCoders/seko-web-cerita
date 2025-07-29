import { GraduationCap, Award, Globe, Briefcase } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import studentsSuccess from "@/assets/students-success.jpg";

const Students = () => {
  const successStories = [
    {
      id: 1,
      name: "Dr. Sarah Putri",
      year: "Alumni 2018",
      achievement: "Dokter Spesialis Jantung",
      university: "Universitas Indonesia",
      description: "Meraih beasiswa penuh kedokteran dan kini menjadi dokter spesialis termuda di rumah sakit terkemuka.",
      fullStory: "Sarah adalah siswa teladan yang selalu meraih ranking 1 di kelasnya. Dengan dedikasi luar biasa, ia berhasil meraih UTBK dengan skor 700+ dan diterima di Fakultas Kedokteran UI dengan beasiswa penuh. Kini, di usia 28 tahun, Sarah telah menjadi dokter spesialis jantung termuda di RS Harapan Kita dan aktif dalam penelitian medis internasional.",
      achievements: [
        "UTBK Skor 720 (Top 0.1% nasional)",
        "Beasiswa Penuh Kedokteran UI",
        "Summa Cum Laude IPK 3.98",
        "Best Graduate Award FK UI 2024",
        "Published 15 research papers",
        "Youngest Cardiologist at Harapan Kita Hospital"
      ],
      currentRole: "Dokter Spesialis Jantung Senior",
      company: "RS Harapan Kita & Jakarta Heart Center",
      category: "Kedokteran",
      photo: "/api/placeholder/300/300"
    },
    {
      id: 2,
      name: "Ahmad Rizki",
      year: "Alumni 2019",
      achievement: "Software Engineer Google",
      university: "Institut Teknologi Bandung",
      description: "Berhasil masuk Google sebagai software engineer setelah lulus dengan IPK sempurna dari ITB.",
      fullStory: "Rizki menunjukkan bakat coding sejak kelas 10. Aktif dalam olimpiade programming dan meraih medali emas OSN Informatika tingkat nasional. Setelah lulus dari ITB dengan IPK 4.0, ia langsung diterima di Google Singapore sebagai Software Engineer. Kini memimpin tim pengembangan Google Assistant untuk pasar Asia Tenggara.",
      achievements: [
        "Medali Emas OSN Informatika 2018",
        "International Collegiate Programming Contest (ICPC) World Finalist",
        "IPK 4.0 Teknik Informatika ITB",
        "Google Code Jam Global Finalist",
        "Led 3 major product launches at Google",
        "Promoted to Senior SWE in 2 years"
      ],
      currentRole: "Senior Software Engineer",
      company: "Google Singapore",
      category: "Teknologi",
      photo: "/api/placeholder/300/300"
    },
    {
      id: 3,
      name: "Maria Sari",
      year: "Alumni 2017",
      achievement: "CEO Startup Teknologi",
      university: "Universitas Gadjah Mada",
      description: "Mendirikan startup edtech yang kini telah melayani lebih dari 100,000 siswa di Indonesia.",
      fullStory: "Maria selalu tertarik dengan teknologi pendidikan. Saat kuliah di UGM jurusan Teknik Industri, ia mengembangkan platform e-learning sederhana. Setelah lulus, ia mendirikan EduTech Indonesia yang kini menjadi salah satu platform pembelajaran online terbesar di Indonesia dengan valuasi $50 juta dan telah membantu lebih dari 500,000 siswa.",
      achievements: [
        "Valedictorian Teknik Industri UGM",
        "Forbes 30 Under 30 Asia 2023",
        "Startup of the Year Award 2022",
        "Series B Funding $15M raised",
        "500,000+ students impacted",
        "30+ corporate partnerships"
      ],
      currentRole: "Founder & CEO",
      company: "EduTech Indonesia",
      category: "Entrepreneur",
      photo: "/api/placeholder/300/300"
    },
    {
      id: 4,
      name: "David Santoso",
      year: "Alumni 2020",
      achievement: "Diplomat Muda",
      university: "Harvard University",
      description: "Meraih beasiswa fulbright dan kini bekerja di Kementerian Luar Negeri sebagai diplomat muda.",
      fullStory: "David adalah siswa yang sangat aktif dalam organisasi dan kegiatan internasional. Menjadi ketua OSIS dan mewakili Indonesia dalam berbagai forum pemuda internasional. Beasiswa Fulbright membawanya ke Harvard untuk studi International Relations. Kini menjadi diplomat termuda di Kemlu dan bertugas di Konsulat Indonesia di New York.",
      achievements: [
        "Beasiswa Fulbright 2020",
        "Harvard Kennedy School Graduate",
        "UN Youth Ambassador Indonesia",
        "ASEAN Youth Leader 2021",
        "Youngest Indonesian Diplomat in NYC",
        "Fluent in 5 languages"
      ],
      currentRole: "Diplomat & Foreign Affairs Officer",
      company: "Kementerian Luar Negeri RI",
      category: "Diplomasi",
      photo: "/api/placeholder/300/300"
    },
    {
      id: 5,
      name: "Rina Wulandari",
      year: "Alumni 2016",
      achievement: "Peneliti Internasional",
      university: "MIT",
      description: "Melakukan penelitian di bidang AI dan machine learning di Massachusetts Institute of Technology.",
      fullStory: "Rina menunjukkan keunggulan di bidang matematika dan sains sejak kecil. Meraih berbagai olimpiade sains dan mendapat beasiswa penuh untuk kuliah di MIT. Fokus penelitiannya pada AI for Healthcare dan telah menghasilkan 25+ publikasi internasional. Kini menjadi Assistant Professor di MIT dan konsultan untuk WHO dalam pengembangan AI medis.",
      achievements: [
        "Perfect Score Olimpiade Sains Nasional",
        "MIT Full Scholarship",
        "PhD MIT Computer Science (Summa Cum Laude)",
        "25+ International Publications",
        "MIT TR35 Innovator Award",
        "WHO AI Healthcare Consultant"
      ],
      currentRole: "Assistant Professor & Researcher",
      company: "MIT Computer Science",
      category: "Penelitian",
      photo: "/api/placeholder/300/300"
    },
    {
      id: 6,
      name: "Kevin Tanaka",
      year: "Alumni 2021",
      achievement: "Olympic Champion",
      university: "Universitas Pelita Harapan",
      description: "Meraih medali emas Olimpiade Matematika Internasional dan melanjutkan ke jurusan matematika.",
      fullStory: "Kevin adalah jenius matematika yang meraih prestasi gemilang di berbagai kompetisi internasional. Selain aktif dalam olimpiade matematika, ia juga mengembangkan algoritma untuk trading cryptocurrency. Kini sambil menyelesaikan studi S1 Matematika, ia juga menjalankan hedge fund crypto yang dikelolanya dan telah menghasilkan return 300% dalam 2 tahun.",
      achievements: [
        "IMO Gold Medal 2021",
        "AIMO Gold Medal 2020",
        "Perfect Score UTBK Matematika",
        "Youngest Crypto Fund Manager in Indonesia",
        "300% ROI Crypto Portfolio",
        "Mathematics Olympiad Coach"
      ],
      currentRole: "Student & Crypto Fund Manager",
      company: "Universitas Pelita Harapan & Own Hedge Fund",
      category: "Olahraga",
      photo: "/api/placeholder/300/300"
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
                  
                  {/* Photo */}
                  <div className="w-20 h-20 mx-auto mb-4">
                    <img 
                      src={story.photo} 
                      alt={story.name}
                      className="w-full h-full rounded-full object-cover border-2 border-primary/20"
                    />
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-2 text-center">{story.name}</h3>
                  <div className="text-lg font-semibold text-primary mb-2 text-center">{story.achievement}</div>
                  <div className="text-sm text-accent font-medium mb-3 text-center">{story.university}</div>
                  <div className="text-xs text-muted-foreground mb-4 text-center">
                    <strong>{story.currentRole}</strong><br />
                    {story.company}
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{story.description}</p>
                  
                  {/* Key Achievements */}
                  <div className="space-y-1">
                    <h4 className="text-sm font-semibold text-foreground">Prestasi Utama:</h4>
                    {story.achievements.slice(0, 3).map((achievement, idx) => (
                      <div key={idx} className="text-xs text-muted-foreground flex items-center gap-1">
                        <span className="w-1 h-1 bg-primary rounded-full"></span>
                        {achievement}
                      </div>
                    ))}
                    {story.achievements.length > 3 && (
                      <div className="text-xs text-primary font-medium">
                        +{story.achievements.length - 3} prestasi lainnya
                      </div>
                    )}
                  </div>
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