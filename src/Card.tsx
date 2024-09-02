import styled from "styled-components";
import desert from './images/Rectangle 1.png';

export const Card = () => {
    return (
        <CardWrapper>
            <Image src={desert} alt={'Road in the desert going to the sky.'}/>
            <CardTitle>Headline</CardTitle>
            <CardDescription>
                Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.
            </CardDescription>
            <ButtonsSection>
                <Button>See More</Button>
                <Button>Save</Button>
            </ButtonsSection>
        </CardWrapper>
    )
}

const CardWrapper = styled.article`
    display: flex;
    flex-direction: column;
    background-color: #FFF;
    width: 300px;
    min-height: 350px;
    height: fit-content;
    border-radius: 15px;
    padding: 10px 10px 10px 10px;

`

const CardTitle = styled.header`
    padding: 4px 10px 4px 10px;
`

const CardDescription = styled.p`
    padding: 0 10px 4px 10px;

`

const ButtonsSection = styled.section`
    display: flex;
    padding: 4px 10px 10px 10px;
    gap: 12px

`

const Button = styled.button`
`

const Image = styled.img`

`
