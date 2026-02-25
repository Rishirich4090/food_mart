import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";
import { User, Mail, Phone } from "lucide-react";

export default function Profile() {
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

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-1">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">My Profile</h1>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
            <div className="flex items-start gap-6 mb-8">
              <div className="w-20 h-20 rounded-full bg-green-primary text-white flex items-center justify-center text-3xl font-bold">
                {currentUser.name.charAt(0).toUpperCase()}
              </div>

              <div className="flex-1">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{currentUser.name}</h2>
                
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-gray-500" />
                    <span>{currentUser.email}</span>
                  </div>
                </div>

                <Button className="mt-6 bg-green-primary hover:bg-green-dark text-white">
                  Edit Profile
                </Button>
              </div>
            </div>

            <div className="border-t pt-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Account Information</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600 mb-1">Member Since</p>
                  <p className="font-semibold text-gray-900">
                    {new Date().toLocaleDateString()}
                  </p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600 mb-1">Account Status</p>
                  <p className="font-semibold text-green-600">Active</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
