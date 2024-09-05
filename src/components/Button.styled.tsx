import styled, {css} from "styled-components";
import {baseTheme} from "../styles/theme";

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
    width: ${baseTheme.sizes.button.width};
    height: ${baseTheme.sizes.button.height};
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
                    background-color: ${props => props.bgColor || `${baseTheme.colors.buttons.primary}`};
                    color: ${props => props.fontColor || `${baseTheme.colors.background.primary}`};
                `
            case "outlined":
                return css<ButtonPropsType>`
                    border: solid 2px ${props => props.borderColor || `${baseTheme.colors.buttons.primary}`};
                    background-color: ${props => props.bgColor || `${baseTheme.colors.background.primary}`};
                    color: ${props => props.fontColor || `${baseTheme.colors.buttons.primary}`};
                `
        }
    }
    }
`
