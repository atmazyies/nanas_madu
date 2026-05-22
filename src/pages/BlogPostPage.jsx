import { useEffect, useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { blogPosts } from "../data/blog";
import { FaCalendarAlt, FaClock, FaUserEdit, FaBookMedical, FaArrowLeft } from "react-icons/fa";
import DOMPurify from 'dompurify';
import { marked } from 'marked';

export default function BlogPostPage() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Scroll to top when loading new post
    window.scrollTo(0, 0);
    const foundPost = blogPosts.find((p) => p.slug === slug);
    setPost(foundPost);
    setLoading(false);
  }, [slug]);

  if (loading) return null;
  if (!post) return <Navigate to="/blog" replace />;

  // Parse markdown safely
  const createMarkup = (markdownText) => {
    const html = marked.parse(markdownText);
    return { __html: DOMPurify.sanitize(html) };
  };

  return (
    <>
      <Navbar />
      <main className="bg-surface pt-24 pb-20">
        <article className="mx-auto max-w-4xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Link 
              to="/blog" 
              className="inline-flex items-center text-sm font-bold text-gray-500 hover:text-brand transition-colors mb-8"
            >
              <FaArrowLeft className="mr-2" /> Kembali ke Artikel
            </Link>
            
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="rounded-full bg-brand-pale text-brand-dark px-3 py-1 text-xs font-bold uppercase tracking-wider">
                {post.category}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-[1.2] mb-6">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 font-medium pb-8 border-b border-gray-200">
              <div className="flex items-center gap-2">
                <FaUserEdit className="text-brand" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCalendarAlt className="text-brand" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaClock className="text-brand" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12 rounded-3xl overflow-hidden shadow-xl"
          >
            <img 
              src={post.coverImage} 
              alt={post.title} 
              className="w-full h-auto max-h-[500px] object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="prose prose-lg prose-brand max-w-none text-gray-700
              prose-h3:text-2xl prose-h3:font-bold prose-h3:text-gray-900 prose-h3:mt-10 prose-h3:mb-4
              prose-p:leading-relaxed prose-p:mb-6
              prose-strong:text-gray-900 prose-strong:font-bold
              prose-ul:list-disc prose-ul:pl-5 prose-ul:mb-6 prose-li:mb-2
            "
            dangerouslySetInnerHTML={createMarkup(post.content)}
          />

          {post.scientificSource && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-16 p-6 sm:p-8 bg-slate-50 border border-slate-200 rounded-2xl relative"
            >
              <div className="absolute -top-4 left-8 bg-slate-800 text-white px-4 py-1 rounded-full text-xs font-bold flex items-center gap-2">
                <FaBookMedical /> Referensi Jurnal Ilmiah
              </div>
              <p className="text-sm text-slate-600 mt-2 font-medium">
                Artikel ini disusun berdasarkan literatur ilmiah terverifikasi:
              </p>
              <blockquote className="mt-3 pl-4 border-l-4 border-slate-300 text-slate-800 italic font-serif">
                "{post.scientificSource.title}" — <strong>{post.scientificSource.authors}</strong> ({post.scientificSource.year}), dipublikasikan dalam <em>{post.scientificSource.journal}</em>.
              </blockquote>
            </motion.div>
          )}

          <div className="mt-16 py-10 border-t border-gray-200 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Rasakan Sendiri Khasiatnya</h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Tingkatkan kualitas kesehatan Anda dengan kesegaran alami Nanas Madu premium asli Pemalang. Pesan sekarang dan nikmati pengiriman langsung ke depan pintu Anda.
            </p>
            <Link
              to="/shop"
              className="inline-flex items-center justify-center rounded-full bg-brand px-10 py-4 text-base font-bold text-white shadow-lg transition-all hover:bg-brand-dark hover:shadow-xl hover:-translate-y-1"
            >
              Lihat Katalog Produk &rarr;
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
