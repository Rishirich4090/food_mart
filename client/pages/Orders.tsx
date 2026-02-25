import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Clock, CheckCircle, Package } from "lucide-react";

export default function Orders() {
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

  const orders = [
    {
      id: "KM1704067200000",
      date: "Dec 01, 2024",
      total: "₹1,450",
      status: "delivered",
      items: 3,
    },
    {
      id: "KM1704067100000",
      date: "Nov 28, 2024",
      total: "₹890",
      status: "pending",
      items: 2,
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "delivered":
        return <CheckCircle className="w-5 h-5 text-green-600" />;
      case "pending":
        return <Clock className="w-5 h-5 text-orange-600" />;
      default:
        return <Package className="w-5 h-5 text-gray-600" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "delivered":
        return "bg-green-50 text-green-700";
      case "pending":
        return "bg-orange-50 text-orange-700";
      default:
        return "bg-gray-50 text-gray-700";
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-1">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Order History</h1>

          <div className="space-y-4">
            {orders.map((order) => (
              <div key={order.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">{order.id}</h3>
                    <p className="text-sm text-gray-600 mt-1">{order.date}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    {getStatusIcon(order.status)}
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold capitalize ${getStatusColor(order.status)}`}>
                      {order.status}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t">
                  <div>
                    <p className="text-sm text-gray-600">{order.items} items</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <p className="text-lg font-bold text-gray-900">{order.total}</p>
                    <button className="px-4 py-2 bg-green-primary hover:bg-green-dark text-white rounded-lg text-sm font-medium transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {orders.length === 0 && (
            <div className="text-center py-12">
              <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-600 text-lg">No orders yet</p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
