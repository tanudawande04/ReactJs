
import { memo, useRef } from "react";
const Counts = () => {
    const rendered = useRef(0);
    console.log(rendered, "Count Component Rendered");


    return (
        <div>
            <p>nothing changed here but now rendere {rendered.current++} time(s)</p>
        </div>


    )
}
//ab ye dobara render nahi hoga jab app  component re-render hoga ya ReactMemo component re-render hoga ya osme koi state change hoga.

export default memo(Counts) // react.memo is a higher order component jo ki functional component ko wrap karta hai aur usse memoize kar deta hai
// jab tak props change nahi hote tab tak component re-render nahi hota
// react.memo ko hum functional component ke sath use karte hai , 