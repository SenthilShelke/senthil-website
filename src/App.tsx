import { BrowserRouter, Routes, Route } from "react-router-dom";
import Website from "./Website.tsx";
import DataVisualizationBlog from "./DataVisualizationBlog.tsx"; // Make sure the path matches your new file

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Website />} />
        <Route path="/blog" element={<DataVisualizationBlog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;