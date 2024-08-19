import "./SectionContainer.css";

type Props = {
  id: string;
  children: React.ReactNode | React.ReactNode[];
};

export default function SectionContainer({ children, id }: Props) {
  return (
    <div className="section-container" id={id}>
      {children}
    </div>
  );
}
