import CardGroup from "../components/CardGroup";

export default function TeamSection() {
  return (
    <section className="col-12 col-md-3 d-flex">
      <div className="card flex-fill">
        <div className="card-header">
          <h3 className="card-title text-center">The Team</h3>
        </div>
        <div className="card-body pt-5">
          <CardGroup />
        </div>
      </div>
    </section>
  );
}
