
import { useEffect, useState } from "react";
import { MessageCircle, X } from "lucide-react";

export default function WhatsAppPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  // Replace with the real WhatsApp number, including country code.
  const phoneNumber = "+919796559374";

  const message =
    "Hello Sara Aijaz! I would like to know more about your training programs.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 p-4">
      <div className="relative w-full max-w-sm rounded-2xl bg-white p-6 text-center shadow-2xl">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute right-3 top-3 rounded-full p-2 text-gray-500 hover:bg-gray-100"
          aria-label="Close popup"
        >
          <X size={20} />
        </button>

        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
          <MessageCircle size={34} className="text-green-600" />
        </div>

        <h2 className="mb-2 text-2xl font-bold text-gray-900">
          Need Help?
        </h2>

        <p className="mb-6 text-sm leading-6 text-gray-600">
          Have questions about Sara Aijaz's communication and
          soft skills training? Chat with us on WhatsApp.
        </p>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-green-600 px-5 py-3 font-semibold text-white transition hover:bg-green-700"
        >
          <MessageCircle size={20} />
          Chat on WhatsApp
        </a>

        <button
          onClick={() => setIsOpen(false)}
          className="mt-4 text-sm text-gray-500 hover:text-gray-800"
        >
          Maybe later
        </button>
      </div>
    </div>
  );
}
