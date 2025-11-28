import styled from "styled-components";

export const container = styled.div`
    display: flex;
    height: 100%;
    align-items: center;
    flex-direction: column;
    overflow-y: auto;
    p{
        margin: 0;
        font-family: Pretendard;
    }
    div{
        box-sizing: border-box;
    }
`

export const newBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 345px;
    margin-top: 30px;
    padding: 16px;
    gap: 30px;
    border-radius: 16px;
    background: #FFF;
    box-shadow: 0 1px 6px 0 rgba(128, 128, 128, 0.20);
`

export const newTitle = styled.p`
    color: #000;
    font-size: 20px;
    font-weight: 700;
    line-height: 26px;
    letter-spacing: 1.2px;
`

export const newContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`

export const newLast = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const inputBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`

export const inputTitle = styled.p`
    color:#999;
    font-size: 14px;
    font-weight: 500;
`

export const input = styled.input`
    padding: 12px 16px;
    align-items: center;
    width: 313px;
    border-radius: 10px;
    border: 1px solid #EEE;
    background: #FFF;
    box-sizing: border-box;

    color: #21272A;
    font-family: 'Pretendard';
    font-size: 16px;
    font-weight: 500;

    &:focus{
        outline: 0;
        border: 1px solid #EEE;
    }
`
export const colorPalette = styled.div`
    display: flex;
    padding: 14px 16px;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
    border-radius: 10px;
    border: 1px solid #EEE;
    background: #F9F9F9;
    box-sizing: border-box;
    flex-wrap: wrap;
    gap: 18px;
`

export const colorCircle = styled.div<{ color: string; $isSelected: boolean }>`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: ${(props) => props.color};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &::after {
        content: "${(props) => (props.$isSelected ? "✔" : "")}";
        color: white;
        font-size: 18px;
        font-weight: bold;
    }
`

export const RainbowPicker = styled.div<{ selectedColor?: string; $isSelected?: boolean }>`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: conic-gradient(
    red,
    orange,
    yellow,
    green,
    cyan,
    blue,
    violet,
    red
    );
    padding: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    position: relative;


    &::before {
        content: "";
        width: 24px;
        height: 24px;
        border-radius: 50%;
        background: white;
        position: absolute;
    }


    &::after {
        content: "${(props) => (props.$isSelected ? "✔" : "")}";
        width: 18px;
        height: 18px;
        border-radius: 50%;
        background: ${(props) => props.selectedColor ?? "#ffffff"};
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        font-size: 16px;
        font-weight: bold;
        position: absolute;
    }
`;

export const cancel = styled.p`
    color: #55718A;
    font-size: 16px;
    font-weight: 700;
    line-height: 26px;
    letter-spacing: 0.96px;
`

export const make = styled.div`
    display: flex;
    padding: 8px 12px;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    background: #4DAFFE;
    color: #FFF;
    font-size: 16px;
    font-weight: 700;
    line-height: 26px;
    letter-spacing: 0.96px;
`