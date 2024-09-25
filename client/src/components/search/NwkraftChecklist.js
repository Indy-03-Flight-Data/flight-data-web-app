import "./NwkraftChecklist.css";
import { Accordion } from "../index";

function NwkraftChecklist({ showOptions }) {
  const nwkraft = [
    {
      id: 1,
      acronym: "NOTAMs",
      description:
        "Notices to Air Missions: Important notifications issued to pilots about changes in conditions, such as runway closures or airspace restrictions.",
    },
    {
      id: 2,
      acronym: "Weather",
      description:
        "Includes current and forecasted weather information crucial for safe flight planning, such as wind, visibility, and storms.",
    },
    {
      id: 3,
      acronym: "Known ATC Delays",
      description:
        "Known Air Traffic Control Delays: Information about current and expected delays caused by air traffic control, often due to congestion or weather.",
    },
    {
      id: 4,
      acronym: "Runway Lengths",
      description:
        "Data on the lengths of available runways at the destination and alternate airports to ensure aircraft can safely take off and land.",
    },
    {
      id: 5,
      acronym: "Alternate Routes",
      description:
        "Pre-planned routes that pilots can use if the primary route becomes unavailable, ensuring flexibility and safety during the flight.",
    },
    {
      id: 6,
      acronym: "Fuel",
      description:
        "Information on fuel requirements, including how much fuel is needed for the flight and where refueling options are available if necessary.",
    },
    {
      id: 7,
      acronym: "Takeoff and landing distances",
      description:
        "Measurements required for an aircraft to safely take off and land under current conditions, including weight and weather factors.",
    },
  ];

  return (
    <>
      <div>
        <ul className="checklist">
          {nwkraft.map((item) => (
            <li className="item" key={item.id}>
              <Accordion
                title={item.acronym}
                content={item.description}
                showOptions={showOptions}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default NwkraftChecklist;
