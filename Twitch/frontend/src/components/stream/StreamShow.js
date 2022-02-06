import React, { useEffect } from "react";
import { connect, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Embed, Header, Loader, Segment } from "semantic-ui-react";
import { fetchStream } from "../../actions";

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
      <Embed
        autoplay
        iframe={{
          allowFullScreen: true,
        }}
        aspectRatio="16:9"
        placeholder="https://react.semantic-ui.com/images/image-16by9.png"
        id="5qap5aO4i9A"
        source="youtube"
      />

      <Segment attached="bottom">
        <Header as="h2" content={stream.title} />
        <Header as="p" size="small" content={stream.description} />
      </Segment>
    </>
  );
};

export default connect(null, { fetchStream })(StreamShow);
