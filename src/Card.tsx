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
                <SaveButton>Save</SaveButton>
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
    box-shadow: 0 4px 20px 5px #0000001A;

`


const CardTitle = styled.header`
    padding: 4px 10px 4px 10px;
    font-family: Inter, sans-serif;
    font-weight: 700;
    font-size: 18px;
    line-height: 20px;
`

const CardDescription = styled.p`
    padding: 0 10px 4px 10px;
    font-family: Inter, sans-serif;
    font-weight: 500;
    font-size: 12px;
    line-height: 20px;
    color: #ABB3BA;
`

const ButtonsSection = styled.section`
    display: flex;
    padding: 4px 10px 10px 10px;
    gap: 12px

`

const Button = styled.button`
    width: 86px;
    height: 30px;
    border-radius: 5px;
    border: none;
    color: #FFF;
    background-color: #4E71FE;
    font-family: Inter, sans-serif;
    font-weight: 700;
    font-size: 10px;
    line-height: 20px;
`
const SaveButton = styled(Button)`
    border: solid 2px #4E71FE;
    color: #4E71FE;
    background-color: #fff;
    
`

const Image = styled.img`

`
