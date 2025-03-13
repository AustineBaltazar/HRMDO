import "./App.css";
import HRMDOLayout from "./components/HRMDOLayout";
import { PDFDownloadLink } from "@react-pdf/renderer";

function App() {
  return (
    <div className="App">
      <PDFDownloadLink document={<HRMDOLayout />} fileName="FORM.pdf">
        {({ loading }) =>
          loading ? (
            <button>Loading document...</button>
          ) : (
            <button>Download PDF</button>
          )
        }
      </PDFDownloadLink>
    </div>
  );
}

export default App;
