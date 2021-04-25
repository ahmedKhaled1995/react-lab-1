import { useContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import PostDetails from "./components/PostDetails";
import CreatePost from "./components/CreatePost";
import Auth from "./components/Auth";
import Guard from "./components/Guard";
import LoginContext from "./LoginContext";

import './App.css';

function App() {

  const [name, setName] = useState(null);
  const auth = useContext(LoginContext);

  const handleLogin = () => {
    setName(auth.userName);
  };

  return (
    <Router>
      <Header title={"Blog Post"} userName={name}></Header>
      <div className="App">
        <Switch>
          <Route path="/login" render={(props) => <Auth handleLogin={handleLogin} {...props} />} />
          <Guard>
            <Route path="/" component={Home} exact />
            <Route path="/create" component={CreatePost} />
            <Route path="/about" component={About} />
            <Route path="/posts/:id" component={PostDetails} />
          </Guard>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
