
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/Home/HomePage';
import AboutPage from './Pages/About/AboutPage.jsx'
import CoursePage from './Pages/Course/CoursePage.jsx';
import ContactPage from './Pages/Contact/ContactPage.jsx';


function App() {
  return (
    <div className="App">
     <Router>
      <Routes> {/* Replace Switch with Routes */}
        <Route path="/" element={<HomePage />} /> 
        <Route path="/about" element={<AboutPage />} /> 
        <Route path="/courses" element={<CoursePage />} /> 
        <Route path="/contact" element={<ContactPage />} /> 
        {/* <Route path="/iq" element={<IqPage />} />  */}
      </Routes>
    </Router>
    </div>
  );
}

export default App;
