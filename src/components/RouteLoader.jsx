import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Loader from "./Loader";

export default function RouteLoader({ children }) {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 800); 

    return () => clearTimeout(timer);
  }, [location.pathname]);

  if (loading) {
    return <Loader />;
  }

  return children;
}
