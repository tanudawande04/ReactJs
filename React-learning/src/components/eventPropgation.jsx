export const EventPropgation = () => {
    const handleGrandParent = () => {
        console.log(`grandparent clicked`);


    }

    const handleParent = () => {

        console.log(`parent clicked`);

    }

    const handleChildParent = (event) => {

        //event.stopPropagation();
        console.log(`child parent clicked`);

    }

    return (
        <>
            <div onClickCapture={handleGrandParent}>
                <div onClickCapture={handleParent}>
                    <button onClickCapture={handleChildParent}>Child</button>
                </div>
            </div>

        </>


    );
};


// jis particular jagah pe event pass kroge call krne par  vhi se oper chlega bubbling me  oske down wale ko consider nahi krega..totaly os true dom tree me top to down or down to top chlega like event bubbling and event capturing and target phase so ,

// if ager aap particular div ke ander call kr rhe ho to hii propagation hoga varna nahi hoga...


// stopPropgation = sirf event Bubbling me kaam krta hai (or bubbling me onclick use hota hai...)
// event bubbling =  event bubbling bydefault hota hai ye down to top chlta hai dom tree me child to parent

// event capturing  = event capturing ko ham onClickCapture method ka use krke banate hai isme top to down bn jata hai if hm child pe click krr hre hai tohh pHle parent hii milega then child milga 

// jis elemnt me ham event pass karte hai osiii elemnt se event-propgation shuru hota hai.... bubbling me  , but capturing me totaly capture karta hai top to down hiii.