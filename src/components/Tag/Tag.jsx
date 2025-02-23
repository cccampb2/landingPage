import "./Tag.css";

function Tag({ background, ReactIcon, name, href }) {
  return (
    <div>
      <a
        href={href}
        className="tag"
        target="_blank"
        onMouseEnter={(e) =>
          (e.currentTarget.style.backgroundColor = background)
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.backgroundColor = "var(--background-tertiary)")
        }
      >
        {name}
        <ReactIcon />
      </a>
    </div>
  );
}

export default Tag;
