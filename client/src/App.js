import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import CreateScreen from "./Screens/CreateScreen";
import HomeScreen from "./Screens/HomeScreen";
import UpdateScreen from "./Screens/UpdateScreen";

import { Container } from "react-bootstrap";

const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Route path="/" exact component={HomeScreen} />
          <Route path="/create" component={CreateScreen} />
          <Route path="/update/:id" component={UpdateScreen} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
