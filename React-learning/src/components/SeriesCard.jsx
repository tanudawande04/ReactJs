export const SeriesCards = (props) => {
    const { id, img_url, name, rating, genre, description, cast, watch_url } = props.data;
    return (
        <li className="thapatech-container">
            <div>
                <img src={img_url} width="350px" height="220px" alt="{name}" />
            </div>

            <h1>Name : {name}</h1> {/* values variables */}
            <h3>Rating : {rating}</h3> {/* variable-expression */}
            <p>Genre : {genre}</p> {/* functional call */}
            <p> Summary : {description}</p>
            <p>Cast : {cast}</p>
            <a href={watch_url} target='blank'>
                <button className='btn'>Watch now</button>
            </a>


        </li>

    )



}