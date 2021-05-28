import React, {useState} from 'react';
import { MyContext } from '../common-components/context-provider/dashboard.context';

export const GetCardList  = () => {

    const { id } = React.useContext(MyContext);
    const [cardList, setCardList] = useState([]);
    
    const loadCardList = () => {        
        fetch(`http://localhost:8080/api/cards?id=${id}`)
          .then((response) => response.json())
          .then((json) => setCardList(json));
    };

    return { loadCardList, cardList}
}
