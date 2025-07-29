import { Calendar, User, Tag, Clock, ArrowLeft, Share2, Heart, MessageCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link, useParams } from "react-router-dom";

const BlogDetail = () => {
  const { id } = useParams();
  
  // Sample blog post data - in real app this would come from API
  const blogPost = {
    id: 1,
    title: "Tips Sukses Menghadapi UTBK 2024: Strategi Jitu Meraih Skor Tinggi",
    author: "Dr. Maya Sari",
    authorRole: "Guru Bimbingan Konseling",
    date: "15 Maret 2024",
    readTime: "5 min",
    category: "Akademik",
    tags: ["UTBK", "Tips Belajar", "PTN", "Strategi"],
    image: "/api/placeholder/800/400",
    content: `
      <p>UTBK (Ujian Tulis Berbasis Komputer) merupakan gerbang utama menuju perguruan tinggi negeri impian. Sebagai guru bimbingan konseling di SMA Nusantara, saya telah membantu ratusan siswa meraih skor tinggi dalam UTBK. Berikut adalah strategi yang telah terbukti efektif.</p>

      <h2>1. Pahami Format dan Materi UTBK</h2>
      <p>UTBK terdiri dari Tes Potensi Skolastik (TPS) dan Tes Kompetensi Akademik (TKA). TPS menguji kemampuan penalaran umum, sedangkan TKA menguji pengetahuan mata pelajaran spesifik. Pastikan Anda memahami bobot dan karakteristik setiap subtes.</p>

      <h2>2. Buat Jadwal Belajar yang Terstruktur</h2>
      <p>Mulai persiapan minimal 6 bulan sebelum UTBK. Alokasikan waktu untuk setiap mata pelajaran secara proporsional. Jangan lupa sisakan waktu untuk latihan soal dan review materi.</p>

      <h2>3. Manfaatkan Try Out dan Latihan Soal</h2>
      <p>Try out adalah simulasi terbaik untuk UTBK. Ikuti try out rutin dan analisis hasil untuk mengetahui kelemahan Anda. SMA Nusantara menyediakan try out berkualitas setiap bulan untuk siswa kelas 12.</p>

      <h2>4. Fokus pada Mata Pelajaran Unggulan</h2>
      <p>Identifikasi mata pelajaran yang menjadi kekuatan Anda dan maksimalkan skor di sana. Namun, jangan abaikan mata pelajaran lain karena setiap poin sangat berharga.</p>

      <h2>5. Jaga Kesehatan Mental dan Fisik</h2>
      <p>Stres berlebihan dapat mengganggu performa. Lakukan aktivitas relaksasi, olahraga ringan, dan pastikan tidur yang cukup. Ingat, kesehatan adalah investasi jangka panjang.</p>

      <h2>6. Strategi Pengerjaan Saat UTBK</h2>
      <p>Pada hari H, mulai dengan soal yang Anda kuasai. Manajemen waktu sangat penting - jangan terpaku pada satu soal terlalu lama. Gunakan teknik eliminasi untuk soal yang sulit.</p>

      <h2>Penutup</h2>
      <p>Ingatlah bahwa UTBK bukanlah satu-satunya jalan menuju kesuksesan. Yang terpenting adalah Anda telah berusaha maksimal. Bagi siswa SMA Nusantara, kami selalu siap mendampingi perjalanan Anda menuju perguruan tinggi impian.</p>

      <p><em>Semoga tips ini bermanfaat! Jangan ragu untuk berkonsultasi dengan guru BK jika ada pertanyaan lebih lanjut.</em></p>
    `,
    likes: 245,
    comments: 18,
    shares: 56
  };

  const relatedPosts = [
    {
      id: 2,
      title: "Pengalaman Alumni: Dari SMA Nusantara ke Harvard",
      category: "Alumni",
      readTime: "8 min"
    },
    {
      id: 3,
      title: "Pentingnya Soft Skills untuk Masa Depan",
      category: "Pengembangan Diri",
      readTime: "6 min"
    },
    {
      id: 4,
      title: "Persiapan Beasiswa Luar Negeri: Panduan Lengkap",
      category: "Beasiswa",
      readTime: "10 min"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Article Header */}
      <article className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <div className="mb-8">
            <Button variant="ghost" asChild>
              <Link to="/blog" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Kembali ke Blog
              </Link>
            </Button>
          </div>

          {/* Article Meta */}
          <div className="mb-8">
            <Badge variant="secondary" className="mb-4">{blogPost.category}</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              {blogPost.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span className="font-medium">{blogPost.author}</span>
                <span className="text-sm">• {blogPost.authorRole}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{blogPost.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{blogPost.readTime} baca</span>
              </div>
            </div>

            {/* Social Actions */}
            <div className="flex items-center gap-4 mb-8">
              <Button variant="outline" size="sm" className="gap-2">
                <Heart className="h-4 w-4" />
                {blogPost.likes}
              </Button>
              <Button variant="outline" size="sm" className="gap-2">
                <MessageCircle className="h-4 w-4" />
                {blogPost.comments}
              </Button>
              <Button variant="outline" size="sm" className="gap-2">
                <Share2 className="h-4 w-4" />
                {blogPost.shares}
              </Button>
            </div>
          </div>

          {/* Featured Image */}
          <div className="mb-8">
            <img 
              src={blogPost.image} 
              alt={blogPost.title}
              className="w-full rounded-lg shadow-lg"
            />
          </div>

          {/* Article Content */}
          <div 
            className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-primary hover:prose-a:text-primary/80"
            dangerouslySetInnerHTML={{ __html: blogPost.content }}
          />

          {/* Tags */}
          <div className="mt-8 pt-8 border-t">
            <div className="flex items-center gap-2 mb-4">
              <Tag className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium text-muted-foreground">Tags:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {blogPost.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Author Bio */}
          <div className="mt-12 p-6 bg-muted/30 rounded-lg">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                {blogPost.author.charAt(0)}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">{blogPost.author}</h3>
                <p className="text-sm text-muted-foreground mb-2">{blogPost.authorRole}</p>
                <p className="text-sm text-muted-foreground">
                  Dr. Maya Sari adalah guru bimbingan konseling berpengalaman di SMA Nusantara 
                  dengan fokus khusus pada persiapan UTBK dan konseling karier. Beliau telah 
                  membantu ratusan siswa meraih perguruan tinggi impian mereka.
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Artikel Terkait</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {relatedPosts.map((post) => (
              <Card key={post.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Badge variant="outline" className="mb-3">{post.category}</Badge>
                  <h3 className="text-lg font-semibold text-foreground mb-2 hover:text-primary">
                    <Link to={`/blog/${post.id}`}>{post.title}</Link>
                  </h3>
                  <p className="text-sm text-muted-foreground">{post.readTime} baca</p>
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

export default BlogDetail;