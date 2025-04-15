
import { useEffect, useState } from "react";
import './index.css';

export default function Website() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/data/pricing.json")
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .catch((err) => console.error("Fehler beim Laden der Preise:", err));
  }, []);

  return (
    <div className="bg-white text-black min-h-screen">
      <header className="bg-gray-100 py-6 shadow-md">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <img src="/favicon.png" alt="Kirchbühl Logo" className="h-10" />
          <h1 className="text-2xl font-bold">Kirchbühl Group</h1>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold mb-6">Unsere iPad-Angebote</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div key={index} className="border border-black p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">{product.model}</h3>
              <p className="text-lg">Preis: <strong>{product.price}</strong></p>
              <p className="text-sm text-gray-600 mt-1">Lieferzeit: 5–14 Werktage</p>
            </div>
          ))}
        </div>
      </main>

      <footer className="bg-gray-100 py-4 mt-12 border-t border-black">
        <div className="container mx-auto px-6 text-center text-sm">
          &copy; {new Date().getFullYear()} Kirchbühl Group – Alle Rechte vorbehalten
        </div>
      </footer>
    </div>
  );
}
