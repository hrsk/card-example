import styled from "styled-components";
import desert from './images/Rectangle 1.png';
import {StyledButton} from "./components/Button.styled";
import {baseTheme} from "./styles/theme";

export const Card = () => {
    return (
        <CardWrapper>
            <ContentWrapper>
                <img src={desert} alt={'Road in the desert going to the sky.'}/>
                <h1>Headline</h1>
                <p>
                    Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.
                </p>
            </ContentWrapper>
            <ButtonsSection>
                <StyledButton variant={'primary'}
                              onClick={() => {}}
                              title={'See More'}
                />
                <StyledButton variant={'outlined'}
                              onClick={() => {
                              }} title={'Save'}
                />
            </ButtonsSection>
        </CardWrapper>
    )
}

const CardWrapper = styled.article`
    display: flex;
    flex-direction: column;
    background-color: ${baseTheme.colors.background.primary};
    width: ${baseTheme.sizes.container.width};
    min-height: 350px;
    border-radius: 15px;
    padding: 10px 10px 10px 10px;
    box-shadow: 0 4px 20px 5px ${baseTheme.colors.shadows.light};
    font-family: Inter, sans-serif;

`

const ContentWrapper = styled.section`

    h1 {
        padding: 20px 10px 20px 10px;
        font-weight: 700;
        font-size: 18px;
        line-height: 20px;
    }

    p {
        padding: 0 10px 0 10px;
        font-weight: 500;
        font-size: 12px;
        line-height: 20px;
        color: ${baseTheme.colors.text.description};
    }
`

const ButtonsSection = styled.section`
    display: flex;
    padding: 4px 10px 10px 10px;
    gap: 12px;
    flex-wrap: wrap;
`
