// import ListGroup from "./components/ListGroup";
// import "./App.css"
// // import { BsBagDashFill } from "react-icons/bs";
// import Like from "./components/Like";

// function App() {

//   // let items = [
//   //   "Karachi",
//   //   "Islamabad",
//   //   "Lahore",
//   //   "Rahim Yar Khan",
//   //   "Rawalpindi",
//   // ];
//   // const handleSelectItem = (item: String)=>{
//   //   console.log(item);
//   // }

//   return (
//     <div>
//       <Like onClick={()=> console.log('Clicked')}/>
//     {/* //   <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem} />
//     //   <BsBagDashFill color="red" size='40' /> */}
//    </div>
//   );
// }

// export default App;
//  import { useState } from "react"

// import Alert from "./components/Alert"
// import Button from "./components/button"

// function App () {
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [alertVisible,SetAlertVisibility] = useState(false);
//   return (
//     <div>
//       {alertVisible && <Alert onClose={()=> SetAlertVisibility(false)}>My alert</Alert>}
//         <Button color="primary" onClick={()=> SetAlertVisibility(true)}>My Button</Button>
//     </div>
//   )
// }

// export default App

import { useState } from "react";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
// import produce from "immer";
// import Message from "./Message"

function App() {
  const [cartItems, setCartItems] = useState(['Product1', 'Product2'])
  // const [bugs, setBugs] = useState([
  //   {id: 1, title:'Bug 1', fixed: false},
  //   {id: 2, title:'Bug 2', fixed: false},
  // ]);
  // const [tags,setTags] = useState(['happy', 'cheerful']);
  // const [customer, setCustomer] = useState({
  //   name: "John",
  //   address: {
  //     city: "Rahim Yar Khan",
  //     zipCode: 94111,
  //   },
  // });
  // const [drink, setDrink] = useState({
  //   title: "Americano",
  //   price: 5,
  // });

  // const handleClick = () => {
  //   // 
  //   setBugs(produce(draft =>{
  //     const bug = draft.find(bug => bug.id === 1);
  //     if (bug) bug.fixed = true;
  //   }))
    //to add
    // setTags([...tags, 'exciting']);
    //to remove
    // setTags(tags.filter(tag=> tag !== 'happy'));
    //update
    // setTags(tags.map(tag => tag === 'happy'? 'happiness': tag))
    // setCustomer({
    //   ...customer,
    //   address: { ...customer.address, zipCode: 94112 },
    // });
    // const newDrink = {
    //   ...drink,
    //   title: drink.title,
    //   price: 6
    // }
    // setDrink({...drink,price:6});
  // };
  //   const [lastName, setLastName] = useState('');
  // const [person, setPerson] = useState({
  //   firstName: '',
  //   lastName: '',
  // });
  return (
     <div>
      <Navbar cartItemsCount={cartItems.length}/>
      <Cart cartItems={cartItems} onClear={() => setCartItems([])}/>
       {/* {bugs.map(bug=> <p key={bug.id}>{bug.title}{bug.fixed ?'Fixed': 'New' }</p>)}
       {drink.price}
       <button onClick={handleClick}>Click Me</button> } */}
      {/* <Message/> */}
      {/* <Message/>
      <Message/> */}
     </div>
  );
}

export default App;
