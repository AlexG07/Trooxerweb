import {
  RiFacebookFill,
  RiTwitterFill,
  RiInstagramLine,
} from "@remixicon/react";

const Footer = () => {
  return (
    <footer className="max-w-7xl mx-auto mr-5 ml-5">
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
        </div>
        <a href="/company" class="footer">^</a>
        <p className="text-sm">&copy; 2024 Trooxer. </p>
      </div>
    </footer>
  );
};

export default Footer;
