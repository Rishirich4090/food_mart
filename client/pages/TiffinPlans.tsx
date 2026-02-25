import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function TiffinPlans() {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to the new unified products page
    navigate("/products");
  }, [navigate]);

  return null;
}
