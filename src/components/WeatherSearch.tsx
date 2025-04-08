import { useState } from "react";
import ResultsContainer from "./ResultsContainer";
import { PlaceT } from "../types/weather";
import { StyledSearch, StyledSearchForm } from "./style/NavBar.style";
import { Flex } from "./style/layout/Flex.style";
import { fetchPlaces } from "../utils/fetchPlaces";
import { useWeather } from "../context/WeatherContext";

function WeatherSearch() {
  const { place, setPlace } = useWeather();
  const [text, setText] = useState("");
  const [searching, setSearching] = useState(false);
  const [searchResults, setSearchResults] = useState<PlaceT[]>([]);

  async function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setText(value);

    if (value.trim() === "") {
      setSearchResults([]);
      setSearching(false);
      return;
    }

    setSearching(true);
    const data = await fetchPlaces(value);

    setSearchResults(data);
  }
  function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (searchResults.length === 0 || !searchResults[0].name) return;

    handleOnChoice(searchResults[0]);;
  }
  function handleOnChoice(choice: PlaceT) {
    setPlace(choice);
    setSearching(false);
    setText("");
    setSearchResults([]);
  }
  return (
    <StyledSearch>
      <Flex $align="center" $gap="0.5rem">
        <StyledSearchForm onSubmit={handleFormSubmit}>
          <input
            type="text"
            value={text}
            placeholder="Search city.."
            onChange={handleInputChange}
          />
          <button>
            <i className="bi bi-search"></i>
          </button>
        </StyledSearchForm>
      </Flex>

      {searching && (
        <div className="search-results-wrapper">
          <ResultsContainer searchResults={searchResults} handleOnChosen={handleOnChoice} />
        </div>
      )}
    </StyledSearch>
  );
}

export default WeatherSearch;
