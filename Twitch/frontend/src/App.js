import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container, Segment } from "semantic-ui-react";
import { Navbar, StreamCreate, StreamDelete, StreamEdit, StreamList, StreamShow } from "./components";

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Container>
          <Segment raised>
            <Routes>
              <Route path="/" index element={<StreamList />} />
              <Route path="/stream/new" element={<StreamCreate />} />
              <Route path="/stream/edit" element={<StreamEdit />} />
              <Route path="/stream/delete" element={<StreamDelete />} />
              <Route path="/stream/show" element={<StreamShow />} />
            </Routes>
          </Segment>
        </Container>
      </Router>
    </div>
  );
};

export default App;
