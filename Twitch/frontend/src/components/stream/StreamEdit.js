import React, { useEffect } from "react";
import { connect, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { editStream, fetchStream } from "../../actions";
import { Header, Loader } from "semantic-ui-react";
import StreamForm from "../form/StreamForm";
import { pick } from "lodash";

const StreamEdit = ({ editStream, fetchStream }) => {
  const { id } = useParams();
  const stream = useSelector((state) => state.streams[id]);

  useEffect(() => {
    fetchStream(id);
  }, []);

  if (!stream) {
    return <Loader size="huge">Loading</Loader>;
  }

  return (
    <>
      <Header as="h2">Edit Stream</Header>
      <StreamForm initialValues={pick(stream, "title", "description")} onSubmit={(data) => editStream(id, data)} />
    </>
  );
};

export default connect(null, { editStream, fetchStream })(StreamEdit);
