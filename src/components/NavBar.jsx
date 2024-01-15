import NavBarButton from './NavBarButton';

function NavBar({ activeButton, onButtonClick }) {

    const buttonTexts = ['Home', 'Skills', 'Experience', 'Recommendations', 'Awards', 'Education']

    return (
        <div className="h-1/6 flex">
            <nav className="space-x-3 items-center text-lg m-auto px-4">
                {
                    buttonTexts.map((buttonText, i) => <NavBarButton
                            text={buttonText}
                            active={activeButton === buttonText}
                            onClick={(value) => onButtonClick(value)}
                            key={i}
                        />
                    )
                }
            </nav>
        </div>
    );
}

export default NavBar;