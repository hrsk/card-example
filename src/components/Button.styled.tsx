import styled from "styled-components";

type StyledPropsType = {
    borderColor?: string
    fontColor?: string
    bgColor?: string
}

interface IStyledProps extends StyledPropsType {
    title: string
    onClick?: (value: string) => void
}

export const StyledButton = (props: IStyledProps) => {
    return (
        <Button
            borderColor={props.borderColor}
            fontColor={props.fontColor}
            bgColor={props.bgColor}
            onClick={() => alert(`Button ${props.title} has been clicked!`)}>{props.title}</Button>
    )
}

const Button = styled.button<StyledPropsType>`
    width: 86px;
    height: 30px;
    border-radius: 5px;
    border: ${props => props.borderColor || 'none'};
    color: ${props => props.fontColor || 'FFF'};
    background-color: ${props => props.bgColor || '#4E71FE'};
    font-family: Inter, sans-serif;
    font-weight: 700;
    font-size: 10px;
    line-height: 20px;
    cursor: pointer;
`
