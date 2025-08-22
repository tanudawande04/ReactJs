export const ParentComponent = () => {
    return (
        <div>
            <h1>hii i an parent component</h1>
            <ChildComponent data="reactJs" />
        </div>
    )
};

const ChildComponent = (props) => {
    return (
        <div>
            <h1>hii i am child component</h1>
            <GrandChildComponent data={props.data} />
        </div>
    )
}

const GrandChildComponent = (props) => {
    return (
        <div>
            <h1>hii i am grand child component</h1>
            <GreatGrandChildComponent data={props.data} />

        </div>
    )
}

const GreatGrandChildComponent = (props) => {
    return (
        <div>
            <h1>hii i am great grand child component and i love {props.data}</h1>
        </div>
    )
}