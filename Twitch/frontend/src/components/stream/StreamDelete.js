import React, { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button } from "semantic-ui-react";
import { connect, useSelector } from "react-redux";
import { deleteStream, fetchStream } from "../../actions";
import Model from "../Model";

const StreamDelete = ({ deleteStream, fetchStream }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const stream = useSelector((state) => state.streams[id]);

  useEffect(() => {
    fetchStream(id);
  }, []);

  const clickDeleteStream = () => {
    deleteStream(id).then(navigate("/"));
  };

  const actions = (
    <>
      <Button as={Link} to="/">
        Cancel
      </Button>
      <Button negative onClick={clickDeleteStream}>
        Delete
      </Button>
    </>
  );

  return (
    <>
      <Model
        title="Delete Stream"
        content={stream ? `Are you sure you want to delete the stream with title: ${stream.title}` : "loading..."}
        actions={actions}
        onDismiss={() => navigate("/")}
      />
    </>
  );
};

export default connect(null, { deleteStream, fetchStream })(StreamDelete);
