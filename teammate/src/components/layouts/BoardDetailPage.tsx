import React from 'react'
import * as B from '../../style/BoardPageStyled';
import { useNavigate,useParams } from "react-router-dom";
import { useState, useRef } from "react";
import api from "../../lib/axios";

import leftIcon from '../../img/left.svg';
import menuIcon from '../../img/ellipsis-vertical.svg'
import pencilIcon from '../../img/pencilBlack.svg';
import pinoffIcon from '../../img/pin-off.svg';
import trashIconBlack from '../../img/trash-2.svg';
import pinIcon from '../../img/pin.svg';
import sendIcon from '../../img/send.svg';
import commentTrash from '../../img/trash-outline.svg';

function BoardDetailPage() {
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);
    const [comment, setComment] = useState("");
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const { postId } = useParams();

    const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);

    if (!textareaRef.current) return;

    const textarea = textareaRef.current;

    textarea.style.height = "16px";
    if (textarea.scrollHeight > 16) {
        textarea.style.height = textarea.scrollHeight + "px";
    }
    };
    const handleSendComment = async () => {
    if (!comment.trim()) return; // 빈 댓글 방지

    try {
        const res = await api.post(`/api/v1/comments/${postId}`, {
        content: comment,
        });

        console.log("댓글 작성 성공:", res.data);

        setComment(""); // 입력창 초기화
    } catch (err) {
        console.error("댓글 작성 실패:", err);
    }
    };
    const [comments, setComments] = useState([
    {
        id: 1,
        nickname: "홍길동",
        content: "확인했습니다.",
        createdAt: "11/10 14:26",
        mine: false,
    },
    {
        id: 2,
        nickname: "김채연",
        content: "확인했습니다.",
        createdAt: "11/10 14:26",
        mine: true, // ← 내가 쓴 댓글
    },
    ]);
    const handleDeleteComment = (commentId: number) => {
    console.log("삭제 요청:", commentId);

    setComments(prev =>
        prev.filter(comment => comment.id !== commentId)
    );
    };
    return (
        <B.DetailGroup>
            <B.DetailTop>
                <B.leftIcon src={leftIcon} onClick={()=>navigate("/board/1")}></B.leftIcon>
            </B.DetailTop>
            <B.DetailContentBox>
                <B.DetailContentTop>
                    <B.DetailTopLeft>
                        <B.DetailColorCircle color="#E6D4FF"></B.DetailColorCircle>
                        <B.DetailTopBox>
                            <B.DetailName>홍길순</B.DetailName>
                            <B.DetailDate>11/10 14:26</B.DetailDate>
                        </B.DetailTopBox>
                    </B.DetailTopLeft>
                    <B.menuImg src={menuIcon} onClick={() => setMenuOpen(prev => !prev)}></B.menuImg>
                    {menuOpen && (
                    <B.Dropdown>
                        <B.DropdownItem>
                            <B.DropdownIcon src={pencilIcon}></B.DropdownIcon>
                            <B.DropdownContent>수정하기</B.DropdownContent>
                        </B.DropdownItem>
                        <B.DropdownItem className='line'>
                            <B.DropdownIcon src={pinoffIcon}></B.DropdownIcon>
                            <B.DropdownContent>고정취소</B.DropdownContent>
                        </B.DropdownItem>
                        <B.DropdownItem className='line'>
                            <B.DropdownIcon src={trashIconBlack}></B.DropdownIcon>
                            <B.DropdownContent>삭제하기</B.DropdownContent>
                        </B.DropdownItem>
                    </B.Dropdown>
                    )}
                </B.DetailContentTop>
                <B.DetailContent>
                    <B.ContentTop>
                        <B.ContentTitleBox>
                            <B.PinIcon src={pinIcon}></B.PinIcon>
                            <B.ContentTitle>팀프로젝트 공지</B.ContentTitle>
                        </B.ContentTitleBox>
                    </B.ContentTop>
                    <B.DetailContentMiddle>
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
                        Schedule<br/>
                        -Presentation Dates: October 27 (Mon) & October 29 (Wed)<br/>
                        -Presentation Time: 15 minutes + 5 minutes Q&A<br/>
                        Evaluation<br/>
                        Your performance will be assessed on:<br/>
                        1.Structure & content<br/>
                        2.Use of visuals (table, chart, graph)<br/>
                        3.Language use<br/>
                        4.Delivery & teamwork
                    </B.DetailContentMiddle>
                    <B.DetailContentBottom>
                        <B.DetailBottomColorCircle color='#4DAFFE'></B.DetailBottomColorCircle>
                        <B.CommentInputBox 
                        ref={textareaRef}
                        placeholder="댓글을 입력하세요."
                        value={comment}
                        onChange={handleCommentChange}>
                        </B.CommentInputBox>
                        <B.CommentSendBtn src={sendIcon} onClick={handleSendComment}></B.CommentSendBtn>
                    </B.DetailContentBottom>
                    {comments.map(comment => (
                        <B.DetailCommentBox key={comment.id}>
                            <B.CommentLeft>
                            <B.CommentTop>
                                <B.DetailBottomColorCircle color="#4DAFFE" />
                                <B.CommentNickname>{comment.nickname}</B.CommentNickname>
                            </B.CommentTop>

                            <B.CommentMiddle>{comment.content}</B.CommentMiddle>
                            <B.CommentBottom>{comment.createdAt}</B.CommentBottom>
                            </B.CommentLeft>

                            {comment.mine && (
                            <B.CommentDelete
                                src={commentTrash}
                                onClick={() => handleDeleteComment(comment.id)}
                            />
                            )}
                        </B.DetailCommentBox>
                        ))}
                </B.DetailContent>
            </B.DetailContentBox>
        </B.DetailGroup>
    )
}

export default BoardDetailPage