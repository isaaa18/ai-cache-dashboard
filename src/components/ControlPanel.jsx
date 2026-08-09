import { Play, RotateCcw, Square } from "lucide-react";
import "../styles/control-panel.css";
function ControlPanel({ running, workload, cacheSize, onWorkloadChange, onCacheSizeChange, onStart, onStop, onReset }) {
  return <section className="control-panel">
    <div className="control-intro"><span className="panel-kicker">SIMULATION CONTROLS</span><span className="algorithm">Adaptive LRU <em>· learning</em></span></div>
    <label>Workload<select value={workload} onChange={(e) => onWorkloadChange(e.target.value)}><option>Product catalogue</option><option>News feed</option><option>Session store</option><option>Read-heavy API</option></select></label>
    <label>Cache capacity<div className="input-suffix"><input type="number" min="64" max="4096" step="64" value={cacheSize} onChange={(e) => onCacheSizeChange(e.target.value)} /><span>MB</span></div></label>
    <div className="control-buttons">
      {running ? <button className="button button-stop" onClick={onStop}><Square size={14} fill="currentColor" /> Stop</button> : <button className="button button-primary" onClick={onStart}><Play size={14} fill="currentColor" /> Start run</button>}
      <button className="button button-quiet" onClick={onReset}><RotateCcw size={15} /> Reset</button>
    </div>
  </section>;
}
export default ControlPanel;
