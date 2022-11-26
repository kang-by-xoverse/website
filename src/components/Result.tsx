import Card from "./Card"
import Data from "./Data"

const Result = () => {
    return (
        <div>
            <Card name="Name" title="Title" phone="01234567" email="test@example.com"/>
            <Data data={data}/>
        </div>
    )
}

export default Result

const data = [
    {
        sender: "0x0000000",
        reciever: "0x0000000"
    },
    {
        sender: "0x0000000",
        reciever: "0x0000000"
    },
    {
        sender: "0x0000000",
        reciever: "0x0000000"
    },
    {
        sender: "0x0000000",
        reciever: "0x0000000"
    },
    {
        sender: "0x0000000",
        action: "Moved to :",
        reciever: "0x0000000"
    },
    {
        sender: "0x0000000",
        reciever: "0x0000000"
    },
]