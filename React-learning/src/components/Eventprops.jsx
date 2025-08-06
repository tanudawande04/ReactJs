export const Eventprops = () => {
    const HandleWelcomeUser = (user) => {
        console.log(`hii ${user}`);

    }

    const handleHover = () => {
        alert(`hii hovering meeeeee`)
    }

    return (
        <>
            <WelcomeProps
                onClick={() => HandleWelcomeUser('tanu')}
                onMouseEnter={handleHover}
            />
        </>
    )
}

const WelcomeProps = (props) => {

    const { onClick, onMouseEnter } = props;

    const handGreting = () => {
        console.log(`hii user wlcm..`);

        onClick();
    };

    return (
        <>

            <button onClick={onClick}>clicking..</button>

            <button onMouseEnter={onMouseEnter}>hover</button>

            <button onClick={handGreting}>greeting</button>
        </>

    )


}