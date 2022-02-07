import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container, Segment } from "semantic-ui-react";
import { Navbar, StreamCreate, StreamDelete, StreamEdit, StreamList, StreamShow } from "./components";

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Container style={{ minHeight: "calc(100vh - 70px)" }}>
          <Segment padded="very">
            <Routes>
              <Route path="/" index element={<StreamList />} />
              <Route path="/stream/new" element={<StreamCreate />} />
              <Route path="/stream/edit/:id" element={<StreamEdit />} />
              <Route path="/stream/delete/:id" element={<StreamDelete />} />
              <Route path="/stream/:id" element={<StreamShow />} />
            </Routes>
          </Segment>
        </Container>
      </Router>
    </div>
  );
};

export default App;
