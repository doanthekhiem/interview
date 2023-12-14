import Header from "@/components/layout/Header";
import "./../../app/globals.css";

export default function Layout({ children }) {
  return (
    <div className="w-full">
      <Header />
      <div className="bg-main h-screen">{children}</div>
    </div>
  );
}
