import React from 'react'
import * as B from '../../style/BoardPageStyled';
import { useNavigate } from "react-router-dom";

import menuIcon from '../../img/ellipsis-vertical.svg';
import writeIcon from '../../img/pencil.svg';
import pinIcon from '../../img/pin.svg';
import duksae from '../../img/duksae.png';

function BoardListPage() {
    const navigate = useNavigate();
    return (
        <>
            <B.deathDayBox>
                <B.deathTitle>마감일</B.deathTitle>
                <B.deathDayLeft>
                    <B.dDay>D-16</B.dDay>
                    <B.menuImg src={menuIcon}></B.menuImg>
                </B.deathDayLeft>
            </B.deathDayBox>
            <B.ContentBox>
                {/* <B.NoneContent>첫 게시물을 등록하세요.</B.NoneContent>  게시물 없을 때 */}
                <B.Content onClick={() => navigate("/board/1")}>
                    <B.ContentTop>
                        <B.ContentTitleBox>
                            <B.PinIcon src={pinIcon}></B.PinIcon>
                            <B.ContentTitle>팀프로젝트 공지</B.ContentTitle>
                        </B.ContentTitleBox>
                        <B.ColorCircle color="#E6D4FF"></B.ColorCircle>
                    </B.ContentTop>
                    <B.ContentMiddle>
                        Task<br/>
                        -Work in teams (3–4 students).<br/>
                        -Choose a company from one of the categories:<br/>
                        a.Public company<br/>
                        b.Logistics company (Shipping)<br/>
                        c.Logistics company (3PL or Other)<br/>
                        d.Trading company<br/>
                        e.Culture & Art<br/>
                        f.TBD (To Be Decided)<br/>
                        -Prepare a Powerful Presentation about your company.<br/>
                        -Use three figures: a table, a pie chart, and a line graph.<br/>
                        -Include key information such as company background, main business, and future outlook<br/>
                        Schedule
                    </B.ContentMiddle>
                    <B.ContentBottom>
                        <B.ContentCommentBox>
                            <B.ContentCommentTop>
                                <B.CommentColorCircle color="#4DAFFE"></B.CommentColorCircle>
                                <B.CommentName>김채연</B.CommentName>
                            </B.ContentCommentTop>
                            <B.ContentCommentMiddle>확인했습니다.</B.ContentCommentMiddle>
                            <B.ContentCommentBottom>11/10 14:26</B.ContentCommentBottom>
                        </B.ContentCommentBox>
                        <B.ContentCommentBox>
                            <B.ContentCommentTop>
                                <B.CommentColorCircle color="#FFD4E9"></B.CommentColorCircle>
                                <B.CommentName>홍길동</B.CommentName>
                            </B.ContentCommentTop>
                            <B.ContentCommentMiddle>확인했습니다.</B.ContentCommentMiddle>
                            <B.ContentCommentBottom>11/10 14:26</B.ContentCommentBottom>
                        </B.ContentCommentBox>
                    </B.ContentBottom>
                </B.Content>
                <B.Content>
                    <B.ContentTop>
                        <B.ContentTitleBox>
                            <B.ContentTitle>로고 디자인 변경 안내</B.ContentTitle>
                        </B.ContentTitleBox>
                        <B.ColorCircle color="#4DAFFE"></B.ColorCircle>
                    </B.ContentTop>
                    <B.ContentMiddle>
                        1번에서 2번으로 변경됨을 안내드립니다. <br/>
                        아래 사진 첨부합니다.
                        <B.ContentImgBox>
                            <B.ContentImg src={duksae}></B.ContentImg>
                            <B.ContentImg src={duksae}></B.ContentImg>
                        </B.ContentImgBox>
                    </B.ContentMiddle>
                </B.Content>
            </B.ContentBox>
            <B.WriteBtn onClick={() => navigate("/board/write")}>
                <B.WriteIcon src={writeIcon}></B.WriteIcon>
                <B.Write>작성하기</B.Write>
            </B.WriteBtn>
            <B.MarginArea></B.MarginArea>
        </>
    )
}

export default BoardListPage