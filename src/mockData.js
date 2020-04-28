import { v4 as uuidv4 } from "uuid";

const getGames = (sport, name, timestamp, homeScore, awayScore) => {
  return {
    event: {
      id: uuidv4(),
      sport,
      name,
      start: timestamp
    },
    liveData: {
      score: {
        home: homeScore,
        away: awayScore
      }
    }
  };
};

export const gamesArray = [
  getGames(
    "FOOTBALL",
    "Tsykhotskiy, Andrey - Kuharchuk, Aleksandr",
    "2020-03-24T11:20Z",
    "11",
    "6"
  ),
  getGames(
    "TENNIS",
    "Petukhov, Valery - Kizian, Volodymyr",
    "2020-03-24T10:42Z",
    "23",
    "10"
  )
];
