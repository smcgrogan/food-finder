import { React } from "react";
import ListItem from "./ListItem.jsx";

export default function RestaurantList(props) {
  const { title } = props;
  return (
    <div>
      <h1>This is {title} Restaurant List!</h1>
      <ListItem />
    </div>
  );
}
