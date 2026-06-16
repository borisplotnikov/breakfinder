import BusinessCard from "../components/BusinessCard";

export default function CardGrid() {
  return (
    <div className="row justify-content-center g-3">
      <BusinessCard
        src="shaun.jpeg"
        name="Shaun Haney"
        contribution="Parser Library"
        stack={["JavaScript", "Node.js"]}
        github="https://github.com/shaunhaney/"
        linkedIn="https://linkedin.com/in/shaunhaney"
      />
      <BusinessCard
        src="anup.jpg"
        name="Anup Manandhar"
        contribution="Schema Interface"
        stack={["JavaScript", "Node.js"]}
        github="https://github.com/anupmanandhar/"
        linkedIn="https://linkedin.com/in/anupmanandhar"
      />
      <BusinessCard
        src="boris.jpg"
        name="Boris Plotnikov"
        contribution="UX/UI"
        stack={["React", "Bootstrap", "JavaScript"]}
        github="https://github.com/borisplotnikov/"
        linkedIn="https://linkedin.com/in/borisplotnikov"
      />
    </div>
  );
}
