import resources from "../assets/ressurser.js";

export default function Content(props) {
  const { activeTab } = props;

  return (
      <div id="resource-container">
        <h2>{activeTab}</h2>
      </div>
  );
}