import Item from "./Item"

function List(){
    return(
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca="Ferrari" ano={1983}/>
                <Item marca="Bugatti" ano={1975}/>
                <Item/>
            </ul>
        </>
    )

}

export default List