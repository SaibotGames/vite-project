import { useState } from "react";
import { SettingsContainer } from "./style/Settings.style";
import SettingsMenu from "./SettingsMenu";

interface Props {
  darkMode: boolean;
  toggleTheme: (bool:boolean) => void;
}

const Settings = ({ darkMode, toggleTheme }: Props) => {

  const [settingsOpen, setSettingsOpen] = useState(false);



  return (
    <SettingsContainer>
      <div className={`theme-btn`}onClick={() =>toggleTheme(false)}>
        <i className={`bi bi-sun${darkMode ? "" : "-fill"}`}></i>{" "}
      </div>
      <div className={`theme-btn `} onClick={() =>toggleTheme(true)}>
        <i className={`bi bi-moon${darkMode ? "-fill" : ""}`}></i>
      </div>
      <div
        className="settings-btn"
        onClick={() => setSettingsOpen(!settingsOpen)}
      >
        <i className={`bi bi-gear${settingsOpen ? "-fill" : ""}`}></i>
      </div>
      {settingsOpen && <SettingsMenu setSettingsOpen={setSettingsOpen}/>}
    </SettingsContainer>
  );
};

export default Settings;
