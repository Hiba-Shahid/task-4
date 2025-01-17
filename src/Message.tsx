//PascalCasing
// 
 let count = 0;

const Message = () =>{
    console.log('Message called', count);
    // let count = 0;
    count++;
    return <div>Message {count}</div>
}

export default Message;