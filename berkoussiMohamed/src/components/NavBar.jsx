function NavBar(props) {
    return (
    <button onClick={props.toPokemon}>{props.name}</button>
    );
};

export default NavBar;