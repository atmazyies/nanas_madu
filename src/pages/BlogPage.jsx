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

          <div className="grid gap-10 lg:grid-cols-3 md:grid-cols-2">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="flex flex-col overflow-hidden rounded-3xl bg-white shadow-[var(--shadow-card)] transition-all duration-300 hover:shadow-[var(--shadow-hover)] hover:-translate-y-2 border border-gray-100 group"
              >
                <div className="flex-shrink-0 relative h-56 overflow-hidden">
                  <img
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    src={post.coverImage}
                    alt={post.title}
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-brand shadow-sm">
                    {post.category}
                  </div>
                </div>
                <div className="flex flex-1 flex-col justify-between p-8">
                  <div className="flex-1">
                    <Link to={`/blog/${post.slug}`} className="block mt-2">
                      <h3 className="text-2xl font-bold text-gray-900 leading-tight group-hover:text-brand transition-colors duration-200">
                        {post.title}
                      </h3>
                      <p className="mt-4 text-base text-gray-600 line-clamp-3 leading-relaxed">
                        {post.excerpt}
                      </p>
                    </Link>
                  </div>
                  <div className="mt-8 flex items-center justify-between text-xs text-gray-500 font-medium">
                    <div className="flex items-center gap-2">
                      <FaCalendarAlt className="text-brand-light" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaClock className="text-brand-light" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <Link
                      to={`/blog/${post.slug}`}
                      className="inline-flex items-center text-sm font-bold text-brand hover:text-brand-dark transition-colors"
                    >
                      Baca Artikel Lengkap <span className="ml-2 group-hover:translate-x-1 transition-transform">&rarr;</span>
                    </Link>
                  </div>
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
