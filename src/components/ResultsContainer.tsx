import { PlaceT } from "../types/weather";


interface Props{
    searchResults: PlaceT[];
    handleOnChosen:(place:PlaceT) => void;
}

const ResultsContainer = ({searchResults, handleOnChosen}:Props) => {
  return (
    <div className="search-results">
      <div className="results-container">
        {searchResults.map((place) => (
          <div
            className="result"
            key={place.place_id}
            onClick={() => handleOnChosen(place)}
          >
            {place.name}, {place.adm_area1}, {place.country}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResultsContainer;
