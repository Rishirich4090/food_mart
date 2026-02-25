import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";
import { MapPin, Plus, Trash2 } from "lucide-react";

export default function Addresses() {
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

  const addresses = [
    {
      id: 1,
      type: "Home",
      address: "123 Main Street, Apartment 4B, New York, NY 10001",
      phone: "9876543210",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-1">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-4xl font-bold text-gray-900">Delivery Addresses</h1>
            <Button className="bg-green-primary hover:bg-green-dark text-white flex items-center gap-2">
              <Plus className="w-5 h-5" />
              Add New Address
            </Button>
          </div>

          <div className="space-y-4">
            {addresses.map((addr) => (
              <div key={addr.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-green-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900">{addr.type}</h3>
                    <p className="text-gray-600 mt-1">{addr.address}</p>
                    <p className="text-sm text-gray-500 mt-2">Phone: {addr.phone}</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Button variant="outline" className="flex-1 border-gray-300">
                    Edit
                  </Button>
                  <button className="p-2 hover:bg-red-50 rounded-lg transition-colors">
                    <Trash2 className="w-5 h-5 text-red-600" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
