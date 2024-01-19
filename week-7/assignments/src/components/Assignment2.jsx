import { useMemo, useState } from "react"

export default function Assignment2() {

    const [bgColor, setBgColor] = useState("#ff6347")
    return (
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection:'column'}}>
        <div style={{width:'85%', height:700, backgroundColor: bgColor }}>
        </div>
        <br/>
        <ColorBar setColor={setBgColor}/>
    </div>
    )
}

function ColorBar({setColor}){

    const buttonData = useMemo(()=>[
        {
            color: 'white',
            bgColor : "#ff0000",
            label: 'Red'
        },
        {
            color: 'black',
            bgColor : "#feff05",
            label: 'Yellow'
        },
        {
            color: 'white',
            bgColor : "#000000",
            label: 'Black'
        },
        {
            color: 'white',
            bgColor : "#800180",
            label: 'Purple'
        },
        {
            color: 'black',
            bgColor : "#008001",
            label: 'Green'
        },
        {
            color: 'white',
            bgColor : "#1600ff",
            label: 'Blue'
        },
        {
            color: 'black',
            bgColor : "#ff6347",
            label: 'Default'
        }
    ],[]);
    return (
        <div style={{margin:15, padding:15,boxShadow : '5px 2px 8px 2px', borderRadius:10, width:'70%',display:'flex', justifyContent:'space-evenly'}}>
        {buttonData.map(data=><button style={{padding:10, borderRadius:5 ,color:data.color, backgroundColor:data.bgColor}} onClick={()=>setColor(data.bgColor)}>{data.label}</button>)}
        </div>
    )
}