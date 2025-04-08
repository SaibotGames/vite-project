import React from 'react'
import { MEASUREMENT_SYSTEMS } from '../types/weather'
import { Flex } from './style/layout/Flex.style'
import { useWeather } from '../context/WeatherContext'

interface Props{
  setSettingsOpen:(bool:boolean)=> void;
}
const SettingsMenu = ({setSettingsOpen}:Props) => {

    const{measurementSystem, setMeasurementSystem} = useWeather();

    const switchMeasurements =(system:string) =>{
        setMeasurementSystem(system)
        setSettingsOpen(false);
      }
  return (
    <Flex className="measurement-systems" $dir='column' $justify='center'>
          <h4>Measurement systems:</h4>
          <Flex className="systems" $dir='column'>
            {Object.values(MEASUREMENT_SYSTEMS).map((system) => (
              <div
                className={`system ${
                  system === measurementSystem ? "active" : ""
                }`}
                key={system}
                onClick={() => switchMeasurements(system)}
              >
                {system}
              </div>
            ))}
          </Flex>
        </Flex>
  )
}

export default SettingsMenu