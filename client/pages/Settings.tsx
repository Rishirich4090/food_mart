import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Bell, Lock, Globe } from "lucide-react";

export default function Settings() {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Settings</h1>

          <div className="space-y-6">
            {/* Notifications */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                  <Bell className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 text-lg mb-2">Notifications</h3>
                  <p className="text-gray-600 mb-4">Manage your email and push notifications</p>
                  <button className="text-green-primary hover:text-green-dark font-semibold">
                    Manage Notifications →
                  </button>
                </div>
              </div>
            </div>

            {/* Privacy & Security */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-red-100 flex items-center justify-center">
                  <Lock className="w-6 h-6 text-red-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 text-lg mb-2">Privacy & Security</h3>
                  <p className="text-gray-600 mb-4">Manage your account security and privacy settings</p>
                  <button className="text-green-primary hover:text-green-dark font-semibold">
                    Manage Security →
                  </button>
                </div>
              </div>
            </div>

            {/* Language & Preferences */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center">
                  <Globe className="w-6 h-6 text-green-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 text-lg mb-2">Language & Preferences</h3>
                  <p className="text-gray-600 mb-4">Choose your preferred language and regional settings</p>
                  <button className="text-green-primary hover:text-green-dark font-semibold">
                    Manage Preferences →
                  </button>
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
