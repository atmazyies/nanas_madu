import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiPaperAirplane, HiOutlineLightningBolt } from "react-icons/hi";

// Bot logic and replies configuration
const quickReplies = [
  {
    question: "🍍 Cari Produk Best Seller",
    reply: "Produk best seller kami saat ini adalah **Honea Pineapple Juice Murni (100% tanpa air & gula)** dan **Camilan Selai Nanas Premium**. Anda bisa melihat katalog lengkapnya di halaman [Katalog](/shop) kami ya! Mau langsung dipesankan?"
  },
  {
    question: "🚚 Cek Promo Ongkos Kirim",
    reply: "Khusus untuk pengiriman ke seluruh **Jawa Tengah**, Honea sedang mengadakan promo **Gratis Ongkir 100%**! Untuk pengiriman ke luar Jateng, kami bermitra dengan J&T/SiCepat dengan kisaran ongkir bersubsidi hanya Rp15.000 - Rp25.000 per kg."
  },
  {
    question: "🤝 Peluang Kerjasama / Reseller",
    reply: "Kami membuka peluang lebar untuk kemitraan berupa Agen, Reseller, dan Affiliate! Dapatkan komisi menarik hingga 25% dan dukungan materi promosi gratis. Silakan cek detailnya di halaman [Kerjasama](/kemitraan) atau hubungi tim kami via WA!"
  },
  {
    question: "💳 Cara Pembayaran & Konfirmasi",
    reply: "Honea menerima pembayaran aman via Transfer Bank (BCA, Mandiri, BRI) serta E-Wallet (GoPay, ShopeePay, OVO). Setelah membayar, silakan konfirmasi melalui chat WhatsApp admin atau upload di halaman Dashboard Anda."
  }
];

export default function SellerChatBot({ highlight }) {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "bot",
      text: "Halo! Selamat datang di Toko Resmi Honea. 🍍\n\nSaya **Honi**, asisten virtual Anda. Ada yang bisa saya bantu hari ini? Silakan ketik pertanyaan Anda atau klik menu pintas di bawah!",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const simulateBotReply = (userQuestion, botAnswer) => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now(),
          sender: "bot",
          text: botAnswer,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    }, 1500);
  };

  const handleSend = (textToSend) => {
    if (!textToSend.trim()) return;

    const newMsg = {
      id: Date.now(),
      sender: "user",
      text: textToSend,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, newMsg]);
    setInputText("");

    // Check matches for quick replies
    const matchedQuick = quickReplies.find(qr => qr.question.includes(textToSend) || textToSend.toLowerCase().includes(qr.question.toLowerCase().replace(/[^\w\s]/g, '').trim()));
    
    let answer = "Pertanyaan Anda sangat berharga! Saya asisten pintar Honea. Agar CS kami di Pemalang bisa membantu Anda lebih personal, silakan hubungi kami via WhatsApp di `0812-3456-7890` atau silakan pilih salah satu pertanyaan populer di bawah ini!";
    
    if (matchedQuick) {
      answer = matchedQuick.reply;
    } else {
      const lower = textToSend.toLowerCase();
      if (lower.includes("nanas") || lower.includes("produk") || lower.includes("jus") || lower.includes("beli") || lower.includes("harga")) {
        answer = "Produk olahan Nanas Madu khas Pemalang dari Honea diproses higienis 100% alami tanpa pemanis buatan. Produk unggulan kami adalah Jus Nanas Murni dan Selai Premium. Selengkapnya ada di halaman [Katalog](/shop) kami ya!";
      } else if (lower.includes("kontak") || lower.includes("alamat") || lower.includes("lokasi") || lower.includes("cs") || lower.includes("admin") || lower.includes("wa")) {
        answer = "Tentu! Kantor utama Honea berada di Pemalang dan Semarang. Anda dapat menghubungi tim kami langsung via WhatsApp di `0812-3456-7890` atau kunjungi menu [Hubungi Kami](/kontak).";
      } else if (lower.includes("promo") || lower.includes("diskon") || lower.includes("gratis")) {
        answer = "Kami sedang ada diskon khusus pengguna baru sebesar 20%, dan promo **Gratis Ongkir se-Jateng**! Untuk kemitraan jumlah besar, kami juga menyediakan harga grosir khusus. Menarik kan?";
      }
    }

    simulateBotReply(textToSend, answer);
  };

  return (
    <div
      id="chat-seller"
      className={`flex flex-col h-[600px] w-full rounded-3xl bg-white border border-gray-100 shadow-[var(--shadow-card)] overflow-hidden transition-all duration-500 ${
        highlight ? "ring-4 ring-brand/50 shadow-2xl scale-[1.01]" : ""
      }`}
    >
      {/* Header */}
      <div className="gradient-brand p-5 text-white flex items-center justify-between shrink-0 shadow-md">
        <div className="flex items-center gap-3.5">
          <div className="relative">
            <div className="h-11 w-11 rounded-full bg-white/15 border border-white/20 flex items-center justify-center text-xl font-bold">
              🍍
            </div>
            <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full bg-emerald-400 ring-2 ring-brand-dark animate-pulse" />
          </div>
          <div>
            <h4 className="font-extrabold text-base tracking-tight leading-tight">Asisten AI Honea</h4>
            <span className="text-xs text-brand-pale font-medium flex items-center gap-1 mt-0.5 opacity-90">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400"></span> Online • Membalas Instan
            </span>
          </div>
        </div>
        <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white/10 rounded-full border border-white/10 backdrop-blur-md">
          <HiOutlineLightningBolt className="h-4 w-4 text-golden-light animate-bounce" />
          <span className="text-[10px] font-bold uppercase tracking-wider text-brand-pale">AI Bot</span>
        </div>
      </div>

      {/* Messages List */}
      <div className="flex-1 p-5 overflow-y-auto bg-gradient-to-b from-gray-50/50 to-white space-y-4 scrollbar-hide">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"} items-end gap-2`}
          >
            {msg.sender === "bot" && (
              <div className="h-8 w-8 shrink-0 rounded-full bg-brand-soft border border-brand/10 flex items-center justify-center text-sm shadow-sm select-none">
                🤖
              </div>
            )}
            <div
              className={`max-w-[75%] rounded-2xl px-4 py-3 shadow-sm ${
                msg.sender === "user"
                  ? "bg-brand text-white rounded-br-none"
                  : "bg-white border border-gray-100 text-gray-800 rounded-bl-none"
              }`}
            >
              <p className="text-sm whitespace-pre-line leading-relaxed break-words font-medium">
                {msg.text.split(/(\[.*?\]\(.*?\))/g).map((part, index) => {
                  const match = part.match(/\[(.*?)\]\((.*?)\)/);
                  if (match) {
                    return (
                      <a
                        key={index}
                        href={match[2]}
                        className={`underline font-bold transition-all duration-300 ${
                          msg.sender === "user"
                            ? "text-golden-pale hover:text-white"
                            : "text-brand hover:text-brand-dark"
                        }`}
                      >
                        {match[1]}
                      </a>
                    );
                  }
                  return part;
                })}
              </p>
              <span
                className={`block text-[9px] mt-1.5 text-right font-semibold select-none ${
                  msg.sender === "user" ? "text-brand-pale/75" : "text-gray-400"
                }`}
              >
                {msg.time}
              </span>
            </div>
          </div>
        ))}

        {/* Typing indicator */}
        <AnimatePresence>
          {isTyping && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="flex justify-start items-end gap-2"
            >
              <div className="h-8 w-8 shrink-0 rounded-full bg-brand-soft border border-brand/10 flex items-center justify-center text-sm shadow-sm">
                🤖
              </div>
              <div className="bg-white border border-gray-100 rounded-2xl rounded-bl-none px-5 py-3.5 shadow-sm flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-brand animate-bounce" style={{ animationDelay: "0ms" }} />
                <span className="w-2 h-2 rounded-full bg-brand animate-bounce" style={{ animationDelay: "150ms" }} />
                <span className="w-2 h-2 rounded-full bg-brand animate-bounce" style={{ animationDelay: "300ms" }} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <div ref={chatEndRef} />
      </div>

      {/* Quick Replies Chips */}
      <div className="px-4 py-3 bg-gray-50 border-t border-gray-100 flex flex-wrap gap-2 shrink-0 max-h-[120px] overflow-y-auto scrollbar-hide">
        {quickReplies.map((qr, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => handleSend(qr.question)}
            className="text-xs font-bold text-gray-700 bg-white border border-gray-200/80 px-3.5 py-2 rounded-full shadow-sm hover:border-brand hover:text-brand hover:bg-brand-soft/20 transition-all duration-300 active:scale-95 cursor-pointer whitespace-nowrap"
          >
            {qr.question}
          </button>
        ))}
      </div>

      {/* Message Inputs */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSend(inputText);
        }}
        className="p-4 bg-white border-t border-gray-100 flex items-center gap-3 shrink-0"
      >
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Ketik pertanyaan untuk penjual..."
          className="flex-1 bg-gray-50 border border-gray-200 hover:border-gray-300 focus:border-brand focus:bg-white text-sm px-4 py-3.5 rounded-2xl outline-none transition-all duration-300 font-medium text-gray-800"
        />
        <button
          type="submit"
          disabled={!inputText.trim()}
          className="h-12 w-12 rounded-2xl bg-brand text-white flex items-center justify-center transition-all duration-300 hover:bg-brand-dark active:scale-95 disabled:opacity-40 disabled:scale-100 disabled:pointer-events-none shadow-md cursor-pointer"
        >
          <HiPaperAirplane className="h-5 w-5 rotate-90" />
        </button>
      </form>
    </div>
  );
}
