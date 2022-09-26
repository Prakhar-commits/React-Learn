import React, { useEffect } from "react";
import { connect, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Header, Loader, Segment } from "semantic-ui-react";
import { fetchStream } from "../../actions";
import { ReactFlvPlayer } from "react-flv-player";

const StreamShow = ({ fetchStream }) => {
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
      <Segment attached="bottom">
        <ReactFlvPlayer
          url={`http://localhost:8000/live/${id}.flv`}
          isMuted
          handleError={(err) => {
            switch (err) {
              case "NetworkError":
                console.log("network error");
                break;
              case "MediaError":
                console.log("network error");
                break;
              default:
                console.log("other error");
            }
          }}
        />
        <Header as="h2" content={stream.title} />
        <Header as="p" size="small" content={stream.description} />
      </Segment>
    </>
  );
};

export default connect(null, { fetchStream })(StreamShow);
