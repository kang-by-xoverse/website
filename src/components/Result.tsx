import Card from "./Card"
import Data from "./Data"

const Result = () => {
    return (
        <div>
            <Card kind="Asset" title="red-cube" meta="metademo-2" owner="niemand"/>
            <Data data={data}/>
        </div>
    )
}

export default Result

const data = [
    {
        sender: "0xC1AfE0D67664570B08B6CBb10233CCD939Bb2De4 (metademo-1)",
        action: "Transferred to :",
        reciever: "0x5B38Da6a701c568545dCfcB03FcB875f56beddC4 (metademo-2)"
    },
    {
        sender: "",
        action: "Created.",
        reciever: "0xC1AfE0D67664570B08B6CBb10233CCD939Bb2De4 (metademo-1)"
    }
]