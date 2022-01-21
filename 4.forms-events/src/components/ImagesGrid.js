import ImageCard from "./ImageCard";
import "./style.css";

const ImagesGrid = (props) => {
  const img_colmn = props.images.map((image) => {
    return <ImageCard key={image.id} image={image} />;
  });

  return (
    <>
      <h3> Found: {props.images.length} results </h3>
      <div className="img-grid">{img_colmn}</div>
    </>
  );
};

export default ImagesGrid;
