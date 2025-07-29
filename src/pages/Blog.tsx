import { Calendar, User, Tag, Search } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Tips Sukses Menghadapi UTBK 2024",
      excerpt: "Strategi jitu untuk meraih skor tinggi dalam UTBK dan masuk PTN impian Anda.",
      author: "Dr. Maya Sari",
      date: "15 Maret 2024",
      category: "Akademik",
      image: "/api/placeholder/400/250",
      readTime: "5 min",
      featured: true
    },
    {
      id: 2,
      title: "Pengalaman Alumni: Dari SMA Nusantara ke Harvard",
      excerpt: "Kisah inspiratif David Santoso yang berhasil meraih beasiswa penuh di Harvard University.",
      author: "David Santoso",
      date: "12 Maret 2024",
      category: "Alumni",
      image: "/api/placeholder/400/250",
      readTime: "8 min",
      featured: true
    },
    {
      id: 3,
      title: "Pentingnya Soft Skills untuk Masa Depan",
      excerpt: "Mengapa kemampuan komunikasi dan leadership sama pentingnya dengan nilai akademik.",
      author: "Prof. Ahmad Rahman",
      date: "10 Maret 2024",
      category: "Pengembangan Diri",
      image: "/api/placeholder/400/250",
      readTime: "6 min",
      featured: false
    },
    {
      id: 4,
      title: "Inovasi Pembelajaran Digital di Era Modern",
      excerpt: "Bagaimana SMA Nusantara mengintegrasikan teknologi dalam proses pembelajaran.",
      author: "Maria Teknologi",
      date: "8 Maret 2024",
      category: "Teknologi",
      image: "/api/placeholder/400/250",
      readTime: "7 min",
      featured: false
    },
    {
      id: 5,
      title: "Membangun Karakter Siswa Melalui Ekstrakurikuler",
      excerpt: "Peran penting kegiatan di luar kelas dalam membentuk kepribadian dan leadership siswa.",
      author: "Pak Budi Santoso",
      date: "5 Maret 2024",
      category: "Karakter",
      image: "/api/placeholder/400/250",
      readTime: "4 min",
      featured: false
    },
    {
      id: 6,
      title: "Persiapan Beasiswa Luar Negeri: Panduan Lengkap",
      excerpt: "Langkah-langkah strategis untuk mendapatkan beasiswa studi di universitas terbaik dunia.",
      author: "Rina Wulandari",
      date: "3 Maret 2024",
      category: "Beasiswa",
      image: "/api/placeholder/400/250",
      readTime: "10 min",
      featured: false
    }
  ];

  const categories = ["Semua", "Akademik", "Alumni", "Pengembangan Diri", "Teknologi", "Karakter", "Beasiswa"];
  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-glow text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Blog SMA Nusantara</h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Temukan wawasan terbaru tentang pendidikan, tips sukses belajar, 
              dan inspirasi dari para alumni yang telah meraih prestasi luar biasa.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input 
                type="text" 
                placeholder="Cari artikel..." 
                className="pl-10 bg-white text-gray-900"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "Semua" ? "default" : "outline"}
                size="sm"
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Artikel Pilihan</h2>
            <p className="text-muted-foreground">Artikel terpopuler dan terbaru untuk Anda</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {featuredPosts.map((post) => (
              <Card key={post.id} className="hover:shadow-xl transition-shadow overflow-hidden">
                <div className="aspect-video bg-muted">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="secondary">{post.category}</Badge>
                    <span className="text-sm text-muted-foreground">• {post.readTime} baca</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground hover:text-primary">
                    <Link to={`/blog/${post.id}`}>{post.title}</Link>
                  </h3>
                  <p className="text-muted-foreground">{post.excerpt}</p>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Regular Posts */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Artikel Terbaru</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <Card key={post.id} className="hover:shadow-lg transition-shadow overflow-hidden">
                <div className="aspect-video bg-muted">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="outline">{post.category}</Badge>
                    <span className="text-xs text-muted-foreground">• {post.readTime}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 hover:text-primary">
                    <Link to={`/blog/${post.id}`}>{post.title}</Link>
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>{post.author}</span>
                    <span>{post.date}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Load More Button */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Muat Lebih Banyak
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;