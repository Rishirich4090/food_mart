import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Heart } from "lucide-react";

export default function Favorites() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState<any>(null);

  useEffect(() => {
    const user = localStorage.getItem("currentUser");
    if (!user) {
      navigate("/login");
      return;
    }
    setCurrentUser(JSON.parse(user));
  }, [navigate]);

  if (!currentUser) return null;

  const favorites: any[] = [];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-1">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">My Favorites</h1>

          {favorites.length === 0 ? (
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-16 text-center">
              <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-2">No favorites yet</h2>
              <p className="text-gray-600 mb-8">
                Add products to your favorites and they will appear here
              </p>
              <button className="px-6 py-3 bg-green-primary hover:bg-green-dark text-white rounded-lg font-semibold transition-colors">
                Browse Products
              </button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-6">
              {favorites.map((item) => (
                <div key={item.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
                  {/* Favorites will be displayed here */}
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
