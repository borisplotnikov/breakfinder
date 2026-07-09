import BusinessCard from "../components/BusinessCard";

export default function CardGroup() {
  return (
    <div className="row justify-content-center g-3">
      <BusinessCard
        src="shaun.jpeg"
        name="Shaun Haney"
        contribution="App engine"
        stack={["TypeScript", "JavaScript", "Node.js"]}
        github="https://github.com/shaunhaney/"
        linkedIn="https://linkedin.com/in/shaun-haney-6a1163a6"
      />
      <BusinessCard
        src="anup.jpg"
        name="Anup Manandhar"
        contribution="Public interface"
        stack={["TypeScript", "JavaScript", "Node.js"]}
        // github="https://github.com/anupmanandhar/"
        linkedIn="https://linkedin.com/in/anup-manandhar-712292107"
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
