import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from './components/Header/Header';
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects"
import Contact from "./components/Contact/Contact"
import Login from "./components/Login/Login"
import { useEffect, React } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser, loadUser } from './actions/user';
// import { isAuthenticated } from './../../backend/middlewares/auth';
import AdminPanel from './components/Admin/AdminPanel';
// import Chatbot from "react-simple-chatbot";
// // import {Segment} from 'semantic-ui-react'
// import { Segment } from 'semantic-ui-react';
import Timeline from "./components/Admin/Timeline";
import Youtube from "./components/Admin/Youtube";
import Project from './components/Admin/Project';


function App() {

  const dispatch = useDispatch();

  const { isAuthenticated } = useSelector((state) => state.login);
  const { loading, user } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getUser());
    dispatch(loadUser());


  }, [dispatch])

  // const steps = [
  //   { id: '1', message: 'Welcome to the chatbot! How can I help you?', trigger: '2' },
  //   { id: '2', message: 'Feel free to ask any questions.', trigger: 'end' },
  // ];
  return (
    <Router>
      {loading ? <div>Loading</div> : (
        <>
          <Header />
          <Routes>
            <Route path="/" element={<Home youtubes={user.youtube} timelines={user.timeline} skills={user.skills} />} />
            <Route path="/about" element={<About about={user.about} />} />
            <Route path="/project" element={<Projects projects={user.projects} />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/account" element={isAuthenticated ? <AdminPanel /> : <Login />} />
            <Route path="/admin/timeline" element={isAuthenticated ? <Timeline /> : <Login />} />
            <Route
              path="/admin/youtube"
              element={isAuthenticated ? <Youtube /> : <Login />}
            />
            <Route
              path="/admin/project"
              element={isAuthenticated ? <Project /> : <Login />}
            />


          </Routes>
          {/* <Segment style={{ position: 'fixed', bottom: 20, right: 20, zIndex: 1000 }}>

            <Chatbot
              steps={steps}
              floating
              opened={false} // Set to true if you want the chatbot to be open by default
            />
          </Segment> */}

          <Footer />

        </>
      )}

    </Router>
  );
}

export default App;
