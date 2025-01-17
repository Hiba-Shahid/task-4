// import { MouseEvent } from "react";

import { useState } from "react";
import styled from "styled-components";

const List = styled.ul`
  list-style: none;
  padding: 0;
`;
interface ListItemProps{
  active: boolean;
}

const ListItem = styled.li<ListItemProps>`
padding: 5px 0 ;
background: ${(props)=> (props.active? 'blue': 'none')};
`;

//{ items:[], heading: string }
interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
  // (item: string) => void
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  //   let items = ["Karachi", "Islamabad", "Lahore", "Rahim Yar Khan", "Rawalpindi"];
  //   let SelectedIndex = 0;
  //hook
  const [selectedIndex, setSelectedIndex] = useState(-1);
  //   arr [0] //variable (SelectedIndex)
  //   arr [1] //updater function
  //Event Handler
  //   const handleClick = (event: MouseEvent) => console.log(event);
  //   items = [];
  //   const message = items.length === 0? <p>No Items Found</p> : null;
  // const getMessage = () =>{
  //     return items.length === 0? <p>No Items Found</p> : null;
  // }
  return (
    <>
      <h1>{heading}</h1>
      {/* {items.length === 0? <p>No Items Found</p> : null} */}
      {items.length === 0 && <p>No Items Found</p>}
      {/* <ul className={[styles.listGroup, styles.container].join('')}> */}
      {/* <ul className="list-group" style={{backgroundColor:'yellow'}}> */}
      <List>
        {items.map((item, index) => (
          <ListItem
            // className={
            //   selectedIndex === index
            //     ? "list-group-item active"
            //     : "list-group-item"
            // }
            active={index === selectedIndex}
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </ListItem>
        ))}
      </List>
      {/* </ul> */}
    </>
  );
}

export default ListGroup;
