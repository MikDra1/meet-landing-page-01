import styled from "styled-components"

const Flex = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
    max-width: 80%;
    margin-inline: auto;
    margin-top: 4rem;

    @media (max-width: 850px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 1rem;
    }
`

const Image = styled.img`
    border-radius: .5rem;
`

function ImageRow() {
    return (
        <Flex>
            <Image src="./assets/desktop/image-woman-in-videocall.jpg" alt="" />
            <Image src="./assets/desktop/image-women-videochatting.jpg" alt="" />
            <Image src="./assets/desktop/image-men-in-meeting.jpg" alt="" />
            <Image src="./assets/desktop/image-man-texting.jpg" alt="" />
        </Flex>
    )
}

export default ImageRow
