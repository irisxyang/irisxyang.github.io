import "./Frame.css";

type Props = {
  img: string;
  title: string;
  width: string;
  height: string;
  children: React.ReactNode | React.ReactNode[];
};

function Frame({ img, title, width, height, children }: Props) {
  return (
    <div className="frame-container">
      <div
        className="image-container"
        style={{ backgroundImage: img, width: width, height: height }}
      ></div>
      <div className="image-name">{title}</div>
      <div className="frame-caption">{children}</div>
    </div>
  );
}

export default Frame;
