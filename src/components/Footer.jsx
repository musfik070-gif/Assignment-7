function Footer() {
  return (
    <footer className="bg-[#0f2e1c] text-white mt-16">
      <div className="max-w-6xl mx-auto px-6 py-10 text-center">
        <h2 className="text-lg font-semibold mb-2">KeenKeeper</h2>

        <p className="text-sm text-gray-300">
          Keep your meaningful relationships alive and growing.
        </p>

        <p className="text-xs text-gray-400 mt-4">
          © {new Date().getFullYear()} KeenKeeper. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
