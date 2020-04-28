import moment from "moment";
import footballIcon from "../assets/images/icons/football.png";
import tennisIcon from "../assets/images/icons/tennis.png";
import basketballIcon from "../assets/images/icons/basketball.png";
import defaulIcon from "../assets/images/icons/default.png";

export const getSportIcon = sport => {
  let image;
  switch (sport) {
    case "FOOTBALL":
      image = footballIcon;
      break;
    case "TENNIS":
      image = tennisIcon;
      break;
    case "BASKETBALL":
      image = basketballIcon;
      break;
    default:
      image = defaulIcon;
      break;
  }

  return image;
};

export const getTimeStamp = timeStamp => {
  const date = moment(timeStamp).format("YYYY-MM-DD");
  const time = moment(timeStamp).format("hh:mm A");
  if (moment(timeStamp).isSame(moment(), "day")) {
    return `Today, ${time}`;
  } else {
    return `${date}, ${time} `;
  }
};
