import { Activity, BarChart3, ChevronDown, LayoutDashboard, Settings, TerminalSquare } from "lucide-react";
import "../styles/sidebar.css";
const icons = [LayoutDashboard, Activity, BarChart3, TerminalSquare, Settings];

function Sidebar({ open, items }) {
  return <aside className={`sidebar ${open ? "open" : ""}`}>
    <div className="brand"><span className="brand-mark">c</span><span className="brand-name">cacheflow</span></div>
    <nav className="side-nav">
      <p className="nav-label">WORKSPACE</p>
      {items.map((item, index) => {
        const Icon = icons[index];
        return <button className={`nav-item ${index === 0 ? "selected" : ""}`} key={item}><Icon size={18} /><span>{item}</span>{index === 1 && <ChevronDown size={15} className="item-chevron" />}</button>;
      })}
    </nav>
  </aside>;
}
export default Sidebar;
