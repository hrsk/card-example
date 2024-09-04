import styled, {css} from "styled-components";

type ButtonVariant = 'primary' | 'outlined'

type ButtonPropsType = {
    borderColor?: string
    fontColor?: string
    bgColor?: string
    variant: ButtonVariant
}

interface IStyledProps extends ButtonPropsType {
    title: string
    onClick?: (value: string) => void
}

export const StyledButton = (props: IStyledProps) => {
    return (
        <Button variant={props.variant}
                borderColor={props.borderColor}
                fontColor={props.fontColor}
                bgColor={props.bgColor}
                onClick={() => alert(`Button ${props.title} has been clicked!`)}>{props.title}</Button>
    )
}

const Button = styled.button<ButtonPropsType>`
    width: 86px;
    height: 30px;
    border-radius: 5px;
    border: none;
    font-weight: 700;
    font-size: 10px;
    line-height: 20px;
    cursor: pointer;

    ${(props: ButtonPropsType) => {
        switch (props.variant) {
            case "primary":
                return css<ButtonPropsType>`
                    background-color: ${props => props.bgColor || '#4E71FE'};
                    color: ${props => props.fontColor || '#FFF'};
                `
            case "outlined":
                return css<ButtonPropsType>`
                    border: solid 2px ${props => props.borderColor || '#4E71FE'};
                    background-color: ${props => props.bgColor || '#FFF'};
                    color: ${props => props.fontColor || '#4E71FE'};
                `
        }
    }
    }
`
