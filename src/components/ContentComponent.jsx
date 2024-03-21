import resources from "../assets/ressurser.js";

export default function Content(props) {
  const { currentTab } = props;

  return (
      <div id="resource-container">
        <h2>{currentTab}</h2>
        <ul>
          {resources
            .filter((source) => source.category === currentTab)
            .map((source, index) => (
              <li key={index}>
                <a href={source.url}>{source.title}</a>
              </li>
            ))}
        </ul>
      </div>
  );
}