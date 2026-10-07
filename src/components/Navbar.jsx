import { Bell, Search } from "lucide-react";
import smritiLogo from "../assets/smriti-logo.png";
import "../styles/navbar.css";

function Navbar({ running }) {
  return <header className="navbar">
    <div className="smriti-brand">
      <img src={smritiLogo} alt="SMRITI" />
      <div><strong>SMRITI</strong><span>Smart Memory Replacement</span></div>
    </div>
    <div className="nav-actions">
      <button className="icon-button search-button" aria-label="Search"><Search size={19} /></button>
      <button className="icon-button notification-button" aria-label="Notifications"><Bell size={19} /><span /></button>
      <div className="run-status"><i className={running ? "active" : ""} />{running ? "Simulation running" : "Simulation paused"}</div>
    </div>
  </header>;
}
export default Navbar;
