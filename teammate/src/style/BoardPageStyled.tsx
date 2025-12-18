import styled from "styled-components";

export const container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    /* overflow-y: auto; */
    width:100%;
    height: auto;
    p{
        margin: 0;
        font-family: Pretendard;
    }
`;

// list 부분 스타일

export const deathDayBox = styled.div`
    width: 345px;
    height: 60px;
    padding: 20px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 16px;
    background: #FFF;
    box-shadow: 0 1px 6px 0 rgba(128, 128, 128, 0.20);
`

export const deathTitle = styled.p`
    color: #000;
    font-size: 16px;
    font-weight: 700;
    line-height: 20px;
`

export const deathDayLeft = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`

export const dDay = styled.p`
    color: #000;
    font-size: 16px;
    font-weight: 700;
    line-height: 20px;
`

export const menuImg = styled.img`

`

export const WriteBtn = styled.button`
    display: flex;
    align-items: center;
    gap: 6px;
    width: 99px;
    height: 41px;
    padding: 14px 12px;
    box-sizing: border-box;
    border-radius: 30px;
    border: 1px solid #F4F4F5;
    background: #F8F8F8;
    box-shadow: 
        9px 14px 5px 0 rgba(168, 168, 168, 0.00), 
        6px 9px 4px 0 rgba(168, 168, 168, 0.01), 
        3px 5px 3px 0 rgba(168, 168, 168, 0.05), 
        1px 2px 3px 0 rgba(168, 168, 168, 0.09), 
        0 1px 1px 0 rgba(168, 168, 168, 0.10);
    border: none;
    cursor: pointer;
    position: fixed;
    left: 50%;
    bottom: 5%;
    transform: translateX(-50%);
`

export const WriteIcon = styled.img`

`

export const Write = styled.p`
    color:#21272A;
    font-size: 14px;
    font-weight: 600;
`

export const ContentBox = styled.div`
    width: 345px;
    height: auto;
    display: flex;
    flex-direction:column;
    align-items: center;
    gap: 20px;
`
export const NoneContent = styled.p`
    color: #B1B1B1;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 0.16px;
    height: 200px;
    display: flex;
    flex-direction: column-reverse;
`

export const Content = styled.div`
    width: 345px;
    height: auto;
    display: flex;
    padding: 20px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 16px;
    box-sizing: border-box;
    border-radius: 16px;
    background: #FFF;
    box-shadow: 0 1px 6px 0 rgba(128, 128, 128, 0.20);
`

export const ContentTop = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`

export const ContentMiddle = styled.div`
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 16;
    align-self: stretch;
    overflow: hidden;
    color: #000;
    text-overflow: ellipsis;
    font-size: 12px;
    font-family: Pretendard;
    font-weight: 500;
    line-height: 14px; 
`

export const ContentBottom = styled.div`
    border-top: 1.5px solid #f0f0f0;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding-top: 16px;
`

export const ContentTitleBox = styled.div`
    display: flex;
    align-items: center;
    gap: 6px;
`

export const PinIcon = styled.img`

`

export const ContentTitle = styled.p`
    color: #000;
    font-size: 16px;
    font-weight: 700;
    line-height: 20px;
`

export const ColorCircle = styled.div<{ color: string; }>`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color:${(props) => props.color};
`

export const ContentCommentBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

export const ContentCommentTop = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;
`

export const ContentCommentMiddle = styled.div`
    display: flex;
    padding: 5px 0 0 20px;
    box-sizing: border-box;
    font-size: 12px;
    font-weight: 500;
`

export const ContentCommentBottom = styled.div`
    display: flex;
    padding: 4px 0 0 20px;
    box-sizing: border-box;
    color:#999;
    font-size: 10px;
    font-weight: 500;
`

export const CommentColorCircle = styled.div<{ color: string; }>`
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: ${(props) => props.color};
`

export const CommentName = styled.p`
    font-size: 12px;
    font-weight: 600;
`

export const ContentImgBox = styled.div`
    height: 104px;
    width: 100%;
    display: flex;
    gap: 11px;
    padding: 16px 0 0 3px;
`

export const ContentImg = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 10px;
    box-shadow: 0 1px 4px 0 rgba(144, 144, 144, 0.25);
    object-fit: cover;
`

export const MarginArea = styled.div`
    width: 100%;
    height: 30px;
`

// detail 부분 스타일

export const DetailGroup = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap:12px;
`

export const DetailTop = styled.div`
    width: 345px;
    display: flex;
    padding-left: 7.5px;
`

export const leftIcon = styled.img`
    
`
    

export const DetailContentBox = styled.div`
    width: 345px;
    min-height: calc(100vh - 192px);
    box-sizing: border-box;
    border-radius: 16px 16px 0 0;
    background: #FFF;
    box-shadow: 0 1px 6px 0 rgba(128, 128, 128, 0.20);
    padding: 24px;
    box-sizing: border-box;
`

export const DetailContentTop = styled.div`
    width: 297px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
`

export const DetailTopLeft = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`

export const DetailColorCircle = styled.div<{ color: string; }>`
    background-color: ${(props) => props.color};
    width: 32px;
    height: 32px;
    border-radius: 50%;
`

export const DetailTopBox = styled.div`
    display: flex;
    flex-direction: column;
`

export const DetailName = styled.div`
    color:#21272A;
    font-size: 14px;
    font-weight: 600;
`

export const DetailDate = styled.div`
    color:#999;
    font-size: 10px;
    font-weight: 500;
`

export const Dropdown = styled.div`
    width: 100px;
    padding: 2px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 8px;
    box-shadow: 0 30px 84px 0 rgba(19, 10, 46, 0.08), 
                0 8px 32px 0 rgba(19, 10, 46, 0.07), 
                0 3px 14px 0 rgba(19, 10, 46, 0.03), 
                0 1px 3px 0 rgba(19, 10, 46, 0.13);
    position: absolute;
    right: 0;
    top:100%;
    background-color: #fff;
`

export const DropdownItem = styled.div`
    width: 100%;
    padding: 8px 16px;
    box-sizing: border-box;
    display: flex;
    gap: 6px;

    &.line{
        border-top: 1px solid #EEE;
    }
`

export const DropdownIcon = styled.img`

`

export const DropdownContent = styled.p`
    color:#21272A;
    font-size: 14px;
    font-weight: 400;
    white-space: nowrap;
`

export const DetailContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    padding-top: 24px;
    box-sizing: border-box;
`

export const DetailContentMiddle = styled.div`
    display: -webkit-box;
    -webkit-box-orient: vertical;
    align-self: stretch;
    overflow: hidden;
    color: #000;
    text-overflow: ellipsis;
    font-size: 12px;
    font-family: Pretendard;
    font-weight: 500;
    line-height: 14px;
    border-bottom: 1.5px solid #F0F0F0;
    padding-bottom: 16px;
    box-sizing: border-box;
`

export const DetailContentBottom = styled.div`
    display: flex;
    width: 100%;
    padding: 10px;
    justify-content: space-between;
    align-items: center;
    border-radius: 20px;
    background: #F4F4F5;
    box-sizing: border-box; 
`

export const DetailBottomColorCircle = styled.div<{ color:string; }>`
    width: 16px;
    height: 16px;
    background-color: ${(props) => props.color};
    border-radius: 50%;
`

export const CommentInputBox = styled.textarea`
    width: 229px;
    min-height: 16px;
    height: 16px;
    line-height: 16px;
    overflow: hidden;
    border: none;
    background: transparent;
    resize: none;
    font-size: 12px;
    outline: none;
    font-family: Pretendard;
    box-sizing: border-box;
    padding: 0;

    &::placeholder {
        color: #BABABA;
    }
`

export const CommentSendBtn = styled.img`

`

export const DetailCommentBox = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`

export const CommentLeft = styled.div`
    display: flex;
    flex-direction: column;
    gap:4px;
`

export const CommentTop = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;
`

export const CommentMiddle = styled.p`
    color:#21272A;
    font-size: 12px;
    font-weight: 500;
    padding-left: 20px;
`

export const CommentBottom = styled.p`
    color:#999;
    font-size: 10px;
    font-weight: 500;
    padding-left: 20px;
`

export const CommentNickname = styled.div`
    color:#21272A;
    font-size: 12px;
    font-weight: 600;
`

export const CommentDelete = styled.img`
    
`

// write 부분 스타일

export const WriteContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    box-sizing: border-box;
`

export const WriteTitleInputBox = styled.textarea`
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 20px;

    border: none;
    width: 297px;
    height: 25px;
    background: transparent;
    resize: none;
    outline: none;
    box-sizing: border-box;
    padding: 0;

    &::placeholder{
        font-family: Pretendard;
        font-size: 16px;
        font-weight: 700;
        line-height: 20px;
        color: #999;
    }
`

export const WriteContentInputBox = styled.textarea`
    border: none;
    width: 297px;
    height: 260px;
    background: transparent;
    resize: none;
    font-size: 12px;
    outline: none;
    font-weight: 500;
    line-height: 16px;
    font-family: Pretendard;
    box-sizing: border-box;
    padding: 0;
    margin-top: 6px;

    &::placeholder{
        font-family: Pretendard;
        font-size: 12px;
        font-weight: 500;
        line-height: 16px;
        color: #999;
    }
`

export const ImgBox = styled.div`
    display: flex;
    gap: 11px;
    align-items: center;
    margin-top: 16px;
`

export const ImgSlot = styled.div`
    width: 100px;
    height: 100px;
    background: transparent;
    overflow: hidden;
`

export const Img = styled.img`
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 10px;
    box-shadow: 0 1px 4px rgba(144, 144, 144, 0.25);
`

export const WriteContentBottom = styled.div`
    width: 297px;
    display: flex;
    align-items: center;
    gap: 10px;
`

export const FileIcon = styled.img`

`

export const VoteIcon = styled.img`

`

export const WriteContentLast = styled.div`
    width: 297px;
    display: flex;
    flex-direction: row-reverse;
    margin-top: 8px;
`

export const WriteFinBtn = styled.button`
    display: flex;
    padding: 8px 14px;
    align-items: center;
    border-radius: 30px;
    background-color: #4DAFFEE5;
    box-sizing: border-box;
    border: none;

    color: #FFF;
    font-family: Pretendard;
    font-size: 14px;
    font-weight: 700;
    line-height: 26px;
    letter-spacing: 0.84px;
`