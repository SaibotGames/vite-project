interface Props {
  iconNumber: number;
  summary: string;
}
const WeatherIcon = ({ iconNumber, summary }: Props) => {
  return (
    <img
      src={`/weather_icons/set04/big/${iconNumber}.png`}
      alt={summary}
      draggable={false}
    />
  );
};

export default WeatherIcon;
