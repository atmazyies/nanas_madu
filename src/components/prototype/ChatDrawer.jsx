import { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HiX, HiOutlineChatAlt2, HiPaperAirplane } from "react-icons/hi";
import { usePrototype } from "../../context/PrototypeContext";
import Overlay from "./Overlay";

export default function ChatDrawer() {
  const {
    activePanel,
    closePanel,
    chatMessages,
    sendChatMessage,
    isTyping
  } = usePrototype();

  const [inputVal, setInputVal] = useState("");
  const messagesEndRef = useRef(null);

  const isOpen = activePanel === "chat";

  // Auto-scroll to the bottom when new message arrives or isTyping changes
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 80);
    }
  }, [chatMessages, isTyping, isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputVal.trim()) return;
    sendChatMessage(inputVal, true);
    setInputVal("");
  };

  const handleQuickReply = (text) => {
    sendChatMessage(text, true);
  };

  const quickReplies = [
    "Apakah produknya manis? 🍍",
    "Bisa kirim hari ini ke Semarang? 🚚",
    "Ada promo/diskon pengguna baru? 🎟️",
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <Overlay onClose={closePanel} />
          <motion.aside
            role="dialog"
            aria-modal="true"
            aria-label="Chat Penjual"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 300 }}
            className="fixed top-0 right-0 z-[70] flex h-full w-full max-w-md flex-col bg-slate-50 shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between bg-gradient-to-r from-brand-dark to-brand px-6 py-5 text-white shadow-sm">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 font-bold text-white shadow-inner">
                    HP
                  </div>
                  <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-emerald-400 border-2 border-brand-dark animate-pulse" />
                </div>
                <div>
                  <h2 className="text-sm font-bold leading-tight">Honea Seller (Official)</h2>
                  <p className="text-[10px] text-emerald-100 font-medium">Online • Petani & Olahan Nanas Madu</p>
                </div>
              </div>
              <button
                type="button"
                onClick={closePanel}
                className="rounded-full p-2 text-white/80 hover:bg-white/10 hover:text-white"
                aria-label="Tutup chat"
              >
                <HiX className="h-5 w-5" />
              </button>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto px-5 py-6 space-y-4">
              {chatMessages.map((msg) => {
                const isUser = msg.sender === "user";
                return (
                  <div
                    key={msg.id}
                    className={`flex flex-col ${isUser ? "items-end" : "items-start"}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm shadow-sm transition-all duration-300 ${
                        isUser
                          ? "bg-brand text-white rounded-tr-none"
                          : "bg-white text-gray-800 rounded-tl-none border border-gray-100"
                      }`}
                    >
                      <p className="leading-relaxed whitespace-pre-wrap">{msg.text}</p>
                    </div>
                    <span className="mt-1 text-[10px] font-medium text-gray-400 px-1">
                      {msg.time}
                    </span>
                  </div>
                );
              })}

              {/* Typing indicator */}
              {isTyping && (
                <div className="flex flex-col items-start animate-pulse">
                  <div className="flex items-center gap-1.5 rounded-2xl bg-white border border-gray-100 px-4 py-3 shadow-sm rounded-tl-none">
                    <span className="h-2 w-2 rounded-full bg-brand-light animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="h-2 w-2 rounded-full bg-brand-light animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="h-2 w-2 rounded-full bg-brand-light animate-bounce" style={{ animationDelay: "300ms" }} />
                    <span className="text-xs text-gray-400 ml-1 font-medium">Honea sedang mengetik...</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick replies & Input footer */}
            <div className="bg-white border-t border-gray-100 px-4 py-4 space-y-3">
              {/* Quick Suggestion Chips */}
              <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide -mx-2 px-2">
                {quickReplies.map((reply, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleQuickReply(reply)}
                    className="shrink-0 rounded-full border border-brand/20 bg-brand-soft px-3 py-1.5 text-xs font-semibold text-brand transition-colors hover:bg-brand hover:text-white"
                  >
                    {reply}
                  </button>
                ))}
              </div>

              {/* Input Form */}
              <form onSubmit={handleSubmit} className="flex gap-2 items-center">
                <input
                  type="text"
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  placeholder="Ketik pesan Anda..."
                  className="flex-1 rounded-full bg-gray-50 border border-gray-200 px-4 py-2.5 text-sm font-medium text-gray-800 placeholder-gray-400 focus:bg-white focus:border-brand focus:outline-none transition-all"
                />
                <button
                  type="submit"
                  disabled={!inputVal.trim()}
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand text-white shadow-md transition-all hover:bg-brand-dark disabled:opacity-40 disabled:hover:bg-brand"
                  aria-label="Kirim"
                >
                  <HiPaperAirplane className="h-5 w-5 rotate-90" />
                </button>
              </form>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
