import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Alamat",
      content: ["Jl. Pendidikan No. 123", "Jakarta Selatan 12345", "Indonesia"],
      color: "text-red-500"
    },
    {
      icon: Phone,
      title: "Telepon",
      content: ["+62 21 1234 5678", "+62 21 8765 4321 (Fax)"],
      color: "text-green-500"
    },
    {
      icon: Mail,
      title: "Email",
      content: ["info@smanusantara.sch.id", "admisi@smanusantara.sch.id"],
      color: "text-blue-500"
    },
    {
      icon: Clock,
      title: "Jam Operasional",
      content: ["Senin - Jumat: 07:00 - 16:00", "Sabtu: 07:00 - 12:00", "Minggu: Tutup"],
      color: "text-purple-500"
    }
  ];

  const departments = [
    {
      name: "Bagian Akademik",
      phone: "+62 21 1234 5678",
      email: "akademik@smanusantara.sch.id",
      person: "Ibu Dr. Sari Dewi"
    },
    {
      name: "Bagian Kesiswaan",
      phone: "+62 21 1234 5679",
      email: "kesiswaan@smanusantara.sch.id",
      person: "Bapak Drs. Ahmad Wijaya"
    },
    {
      name: "Bagian Administrasi",
      phone: "+62 21 1234 5680",
      email: "admin@smanusantara.sch.id",
      person: "Ibu Ratna Sari, S.E."
    },
    {
      name: "Bagian Penerimaan Siswa Baru",
      phone: "+62 21 1234 5681",
      email: "psb@smanusantara.sch.id",
      person: "Bapak Hendro Susanto, M.Pd."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-glow text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Hubungi Kami</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Ada pertanyaan atau ingin berkonsultasi? Kami siap membantu Anda. 
            Jangan ragu untuk menghubungi kami kapan saja.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-8 pb-6">
                  <info.icon className={`h-12 w-12 mx-auto mb-4 ${info.color}`} />
                  <h3 className="text-lg font-semibold text-foreground mb-3">{info.title}</h3>
                  <div className="space-y-1">
                    {info.content.map((line, lineIndex) => (
                      <p key={lineIndex} className="text-muted-foreground text-sm">
                        {line}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground">Kirim Pesan</CardTitle>
                <p className="text-muted-foreground">
                  Isi formulir di bawah ini dan kami akan merespons dalam 24 jam.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">Nama Depan</Label>
                    <Input id="firstName" placeholder="Masukkan nama depan" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Nama Belakang</Label>
                    <Input id="lastName" placeholder="Masukkan nama belakang" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Masukkan email" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Nomor Telepon</Label>
                  <Input id="phone" placeholder="Masukkan nomor telepon" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Subjek</Label>
                  <Input id="subject" placeholder="Masukkan subjek pesan" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Pesan</Label>
                  <Textarea 
                    id="message" 
                    rows={6}
                    placeholder="Tuliskan pesan Anda di sini..." 
                  />
                </div>
                
                <Button size="lg" className="w-full" variant="hero">
                  <Send className="mr-2 h-4 w-4" />
                  Kirim Pesan
                </Button>
              </CardContent>
            </Card>

            {/* Map & Additional Info */}
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-foreground">Lokasi Kami</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video bg-muted rounded-lg mb-4 flex items-center justify-center">
                    <div className="text-center text-muted-foreground">
                      <MapPin className="h-12 w-12 mx-auto mb-2" />
                      <p>Peta Lokasi SMA Nusantara</p>
                      <p className="text-sm">Jl. Pendidikan No. 123, Jakarta Selatan</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Sekolah kami berlokasi strategis di kawasan pendidikan Jakarta Selatan, 
                    mudah diakses dengan transportasi umum maupun kendaraan pribadi.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-foreground">Kontak Departemen</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {departments.map((dept, index) => (
                      <div key={index} className="border-b last:border-b-0 pb-4 last:pb-0">
                        <h4 className="font-semibold text-foreground mb-1">{dept.name}</h4>
                        <p className="text-sm text-muted-foreground mb-2">{dept.person}</p>
                        <div className="space-y-1">
                          <p className="text-sm text-muted-foreground">
                            <Phone className="inline h-3 w-3 mr-1" />
                            {dept.phone}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            <Mail className="inline h-3 w-3 mr-1" />
                            {dept.email}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Pertanyaan yang Sering Diajukan</h2>
            <p className="text-muted-foreground">Beberapa informasi yang mungkin Anda butuhkan</p>
          </div>
          
          <div className="space-y-6">
            {[
              {
                question: "Kapan periode penerimaan siswa baru?",
                answer: "Periode penerimaan siswa baru dimulai dari bulan Januari hingga Mei setiap tahunnya."
              },
              {
                question: "Apa saja persyaratan untuk mendaftar?",
                answer: "Siswa harus lulus SMP dengan nilai rata-rata minimal 7.5 dan mengikuti tes masuk serta wawancara."
              },
              {
                question: "Apakah tersedia program beasiswa?",
                answer: "Ya, kami menyediakan berbagai program beasiswa untuk siswa berprestasi dan kurang mampu."
              },
              {
                question: "Bagaimana cara mendaftar ekstrakurikuler?",
                answer: "Pendaftaran ekstrakurikuler dilakukan pada awal tahun ajaran melalui bagian kesiswaan."
              }
            ].map((faq, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
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

export default Contact;