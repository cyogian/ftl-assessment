import React from "react"
import 'semantic-ui-css/semantic.min.css'
import './App.css'
import Header from "./components/header"
import Footer from "./components/footer"
import Main from "./containers/main"

const App = () => (
  <div className="App">
    <Header />
    <Main />
    <Footer />
  </div>
)

export default App;
