import {
  RiFacebookFill,
  RiTwitterFill,
  RiInstagramLine,
  RiWhatsappFill,
  RiWhatsappLine,
} from "@remixicon/react";

const Footer = () => {
  return (
    <footer className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center border-t-2 py-4">
        <div className="flex space-x-6 mb-2">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit our Facebook page"
          >
            <RiFacebookFill />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit our Twitter profile"
          >
            <RiTwitterFill />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit our Instagram profile"
          >
            <RiInstagramLine />
          </a>
          <a
            href="https://www.Whatsapp.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Write to us on WhatsApp"
          >
            <RiWhatsappLine />
          </a>
        </div>
        <p className="text-sm">&copy; 2024 Trooxer. </p>
      </div>
    </footer>
  );
};

export default Footer;
