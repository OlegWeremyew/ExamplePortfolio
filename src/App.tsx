import React from 'react';
import './App.css';
import Header from "./Header/Header";
import Main from "./Main/Main";
import Skills from "./Skills/Skills";
import MyProjects from "./My Projects/MyProjects";
import RemoteWork from "./RemoteWork/RemoteWork";
import Contacts from "./Contacts/Contacts";
import Footer from "./Footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <MyProjects/>
            <RemoteWork/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
