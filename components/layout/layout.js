import Header from "@/components/layout/Header";
import "./../../app/globals.css";

export default function Layout({ children }) {
  return (
    <div className="w-full">
      <Header />
      <div className="bg-[#f7f8fa]">
        <div className="m-auto max-w-7xl p-4">{children}</div>
      </div>
    </div>
  );
}
