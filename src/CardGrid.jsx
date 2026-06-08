import CardShaun from "./components/CardShaun";
import CardAnup from "./components/CardAnup";
import CardBoris from "./components/CardBoris";

export default function CardGrid() {
  return (
    <div className="row justify-content-center g-3">
      <CardShaun />
      <CardBoris />
      <CardAnup />
    </div>
  );
}
