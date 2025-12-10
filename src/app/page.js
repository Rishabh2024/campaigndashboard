import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";

export default function Dashboard() {
  return (
    <div className="flex bg-[#eef5ff] position-relative">
      <Sidebar />
      <MainContent />
    </div>
  );
}
