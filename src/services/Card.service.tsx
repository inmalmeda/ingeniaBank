import React, { useState } from "react";
import { MyContext } from "../common-components/context-provider/dashboard.context";
import { Card, CardList } from "../models/card/Card.model";

export const GetCardList = () => {
  const { id } = React.useContext(MyContext);
  const [cardList, setCardList] = useState<any>();
  const [responseCardList, setResponseCardList] = useState<any>();

  React.useEffect(() => {
    setCardList(responseCardList.cardList);
  }, [responseCardList]);

  const loadCardList = () => {
    fetch(`https://bethabank.herokuapp.com/api/cards?id=${id}`)
      .then((response) => {
        if (!response.ok) throw Error("Error 404");
        return response;
      })
      .then((json) => {
        setResponseCardList(json);
      })
      .catch((error) => console.error(error));
  };

  return { loadCardList, cardList };
};
