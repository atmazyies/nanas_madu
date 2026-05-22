import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { blogPosts } from "../data/blog";
import { FaCalendarAlt, FaClock } from "react-icons/fa";

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="bg-surface pt-32 pb-24 min-h-screen">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block rounded-full bg-brand-soft px-4 py-1.5 text-sm font-bold uppercase tracking-widest text-brand border border-brand-light/20 mb-4">
              Pusat Edukasi
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl mb-6">
              Artikel & Jurnal <span className="text-gradient-brand">Kesehatan</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Jelajahi berbagai wawasan ilmiah dan tips gaya hidup sehat yang didukung oleh jurnal kredibel. 
              Pelajari bagaimana alam menyembuhkan tubuh Anda melalui Nanas Madu.
            </p>
          </motion.div>

          <div className="flex flex-col gap-4 max-w-4xl mx-auto">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.3) }}
                className="flex flex-col sm:flex-row overflow-hidden rounded-2xl bg-white shadow-sm transition-all hover:shadow-md hover:border-brand-light/50 border border-gray-100 group relative"
              >
                <div className="flex-shrink-0 relative sm:w-48 sm:h-auto h-48 overflow-hidden">
                  <img
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    src={post.coverImage}
                    alt={post.title}
                  />
                </div>
                <div className="flex flex-1 flex-col justify-center p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[10px] font-bold text-brand bg-brand-soft px-2.5 py-1 rounded-full uppercase tracking-wider">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-1.5 text-xs text-gray-400 font-medium">
                      <FaCalendarAlt /> {post.date}
                    </div>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 leading-snug group-hover:text-brand transition-colors pr-4">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500 line-clamp-2 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <Link to={`/blog/${post.slug}`} className="absolute inset-0 z-10" aria-label={`Baca ${post.title}`} />
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
