import styled from 'styled-components'

const Input = styled.input`
    padding: 1em;
    border-radius: 1em;
    font-weight: bold;
    text-align: center;
`

const CustomInput = ({handleChange})=>{
    return(
        <Input onChange={handleChange}/>
    )
}

export default CustomInput