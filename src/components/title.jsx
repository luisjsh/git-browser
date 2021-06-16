import styled from 'styled-components'

const Text = styled.h2`
    font-weight: bold;
    text-align: ${props => props.textAlign ? props.textAlign : ''}
`

const A = styled.a`
    font-weight: bold;
    text-align: ${props => props.textAlign ? props.textAlign : ''}
    font-size: 30px;
`

const NavbarText = styled.div`
    font-weight: bold;
    padding: 1em;
    cursor: pointer;
    font-size: 1em;
    transition: .3s;
    border-radius: 4px;

    &::after{

        content: 'GitUserSearcher';
    }


    &:hover{
        background-color: grey;
        font-size: 1.5em;

        &::after{
            content: ' go home';
            color: orange;
        }
    }
`

const Title = ({navbar, handleClick, redirect, children, textAlign})=>{
    if(navbar) return(
        <NavbarText onClick={handleClick}>
            {children}
        </NavbarText>
    )
    
    if(redirect) return(
        <A textAlign={textAlign} href={redirect}>
            {children}
        </A>
    ) 
    
    return (
    <Text onClick={handleClick} textAlign={textAlign}>
        {children && children}
    </Text>
    )
}

export default Title