import "./App.css";
import HRMDOLayout from "./components/HRMDOLayout";
import HRMDOLeaveLayout from "./components/HRMDOLeaveLayout";
import HRMDOCompensation from "./components/HRMDOCompensation";
import { pdf } from "@react-pdf/renderer";

function App() {
  const openPDFInNewTab = async (Component) => {
    const blob = await pdf(<Component />).toBlob();
    const url = URL.createObjectURL(blob);
    window.open(url, "_blank");
  };

  return (
    <div className="App">
      <button onClick={() => openPDFInNewTab(HRMDOLayout)}>
        View HRMDO Layout
      </button>

      <button onClick={() => openPDFInNewTab(HRMDOLeaveLayout)}>
        View HRMDO Leave Layout
      </button>

      <button onClick={() => openPDFInNewTab(HRMDOCompensation)}>
        View HRMDO Compensation
      </button>
    </div>
  );
}

export default App;
