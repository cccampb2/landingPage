import "./Tag.css";

function Tag({ ReactIcon, name }) {
  return (
    <div style={{ width: "fit-content" }}>
      <a className="tag" target="_blank">
        {name}
        <ReactIcon />
      </a>
    </div>
  );
}

export default Tag;
