function NavBarButton({ active, text, onClick }) {

    let classnames = "px-3 py-0.5 max-w-min bg-black text-white border-black border-2 rounded-full hover:text-white hover:border-2 hover:border-white"
    if (active) {
        classnames = "px-3 py-0.5 max-w-min border-2 bg-white text-black rounded-full font-bold"
    }

    return (
        <button type="button" onClick={ () => onClick(text) } className={classnames}>{text}</button>
    );
}

export default NavBarButton;