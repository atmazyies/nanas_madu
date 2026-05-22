import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { SiTiktok } from "react-icons/si";
import { footerLinks } from "../data/navigation";
import { contact } from "../data/contact";

const socialIcons = [
  { id: "instagram", Icon: FaInstagram },
  { id: "facebook", Icon: FaFacebookF },
  { id: "tiktok", Icon: SiTiktok },
  { id: "youtube", Icon: FaYoutube },
  { id: "whatsapp", Icon: FaWhatsapp },
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white" id="contact">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <a href="#home" className="text-2xl font-bold text-gray-900">
              Econis
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-gray-500">
              Premium organic drinks & healthy products. Fresh from nature,
              delivered with care.
            </p>
            <div className="mt-6 flex gap-3">
              {contact.social.map((social) => {
                const iconEntry = socialIcons.find((s) => s.id === social.id);
                const Icon = iconEntry?.Icon || FaInstagram;
                return (
                  <a
                    key={social.id}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-soft text-brand transition-all duration-300 hover:bg-brand hover:text-white"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-900">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-3">
              {footerLinks.quick.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-500 transition-colors hover:text-brand"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-900">
              Informasi
            </h4>
            <ul className="mt-4 space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-500 transition-colors hover:text-brand"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-900">
              Kontak
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-gray-500">
              <li>{contact.address}</li>
              <li>
                <a href={`mailto:${contact.email}`} className="hover:text-brand">
                  {contact.email}
                </a>
              </li>
              <li>
                <a href={`tel:${contact.phone}`} className="hover:text-brand">
                  {contact.phone}
                </a>
              </li>
              <li className="text-xs text-gray-400">{contact.hours}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-100 pt-8 sm:flex-row">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Econis. All rights reserved.
          </p>
          <p className="text-sm text-gray-400">Made with organic love</p>
        </div>
      </div>
    </footer>
  );
}
