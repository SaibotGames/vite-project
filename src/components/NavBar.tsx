
import CurrentLocation from "./CurrentLocation";
import Settings from "./Settings";
import { NavContainer } from "./style/NavBar.style";
import WeatherSearch from "./WeatherSearch";

interface Props {
  darkMode: boolean;
  toggleTheme: (bool:boolean) => void;
}
export default function NavBar({ darkMode, toggleTheme }: Props) {
 
  return (
    <NavContainer>
      <CurrentLocation />
      <WeatherSearch

      />
      <Settings darkMode={darkMode} toggleTheme={toggleTheme}/>
    </NavContainer>
  );
}
