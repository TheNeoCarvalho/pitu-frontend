import React from 'react';
import { HeaderContainer, Logo} from './styles';
import Icone from '../../assets/icone.png';

function Header({children}){
    return(
        <HeaderContainer>
            <Logo src={Icone} alt=""/>
            <h1>Pitu</h1>
            <p>{children}</p>
        </HeaderContainer>
    )
}

export default Header
