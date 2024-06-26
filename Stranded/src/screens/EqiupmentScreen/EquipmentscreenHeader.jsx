import materialsData from "../../Data/headerData/materialsData";
import "./EquipmentScreenHeader.css";

export default function EquipmentScreenHeader() {
  return (
    <div>
      <ul className="list">
        {materialsData.map(({ key, name, count }) => {
          return (
            <p className="list-item" key={key}>
              {name}: {count}
            </p>
          );
        })}
      </ul>
    </div>
  );
}
