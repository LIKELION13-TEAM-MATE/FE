import React from 'react'
import * as B from '../../style/BoardPageStyled';
import { useNavigate, useParams } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import api from "../../lib/axios";

import leftIcon from '../../img/left.svg';
import menuIcon from '../../img/ellipsis-vertical.svg'
import pencilIcon from '../../img/pencilBlack.svg';
import pinoffIcon from '../../img/pin-off.svg';
import pinonIcon from '../../img/pinOutLine.svg';
import trashIconBlack from '../../img/trash-2.svg';
import pinIcon from '../../img/pin.svg';
import sendIcon from '../../img/send.svg';
import commentTrash from '../../img/trash-outline.svg';

function BoardDetailPage() {
  const navigate = useNavigate();
  const { projectId, postId } = useParams();

  const [menuOpen, setMenuOpen] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const [comment, setComment] = useState("");

  const [post, setPost] = useState<any>(null);  // 전체 게시글 데이터
  const [pinned, setPinned] = useState<boolean>(false);
  const [comments, setComments] = useState<any[]>([]);

  // 댓글 입력 핸들러
  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);

    if (!textareaRef.current) return;
    const textarea = textareaRef.current;

    textarea.style.height = "16px";
    if (textarea.scrollHeight > 16) {
      textarea.style.height = textarea.scrollHeight + "px";
    }
  };

  // 댓글 작성
  const handleSendComment = async () => {
    if (!comment.trim() || !postId) return;

    try {
        const res = await api.post(`/api/v1/comments/${postId}`, {
        content: comment
        });

        console.log("댓글 작성 성공:", res.data);

        // ✨ 화면 즉시 갱신
        setComments(prev => [
        ...prev,
        {
            id: res.data.id,
            nickname: res.data.nickname ?? res.data.authorUsername ?? "",
            content: res.data.content,
            createdAt: new Date().toLocaleString("ko-KR", {
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            }),
            mine: true,
        }
        ]);

        setComment("");

        fetchComments();
    } catch (err) {
        console.error("댓글 작성 실패:", err);
    }
    };

  // 댓글 삭제
  const handleDeleteComment = async (commentId: number) => {
    try {
      await api.delete(`/api/v1/comments/${commentId}`);

      // 목록 재조회
      fetchPost();
    } catch (err) {
      console.error("댓글 삭제 실패:", err);
    }
  };

  // 게시글 삭제
  const handleDeletePost = async () => {
    if (!postId) return;

    const confirmDelete = window.confirm("게시글을 삭제하시겠습니까?");
    if (!confirmDelete) return;

    try {
      await api.delete(`/api/v1/posts/${postId}`);
      navigate(`/board/${projectId}`);
    } catch (err) {
      console.error("게시글 삭제 실패:", err);
      alert("삭제 권한이 없거나 오류가 발생했습니다.");
    }
  };

  // 게시글 핀 토글
  const handleTogglePin = async () => {
  if (!postId) return;

  try {
    const res = await api.post(`/api/v1/posts/${postId}/pin`);

    // 1) pinned 상태 업데이트
    setPinned(res.data.pinned);

    // 2) post 객체도 같이 업데이트 → UI 즉시 반영됨!
    setPost((prev: any) => ({
    ...prev,
    pinned: res.data.pinned,
    }));

    setMenuOpen(false);
  } catch (err) {
    console.error("핀 토글 실패:", err);
  }
};

  // 게시글 상세 조회 API
  const fetchPost = async () => {
    if (!postId) return;

    try {
      const res = await api.get(`/api/v1/posts/${postId}`);
      console.log("📌 게시글 상세:", res.data);

      setPost(res.data);
      setPinned(res.data.pinned);
      setComments(res.data.comments ?? []);
    } catch (err) {
      console.error("게시글 조회 오류:", err);
    }
  };

  //댓글목록
  const fetchComments = async () => {
    if (!postId) return;

    try {
        const res = await api.get(`/api/v1/comments/post/${postId}`);
        console.log("📌 댓글 목록:", res.data);

        setComments(
        res.data.map((c: any) => ({
            id: c.id,
            nickname: c.nickname,
            content: c.content,
            createdAt: new Date(c.createdDate).toLocaleString("ko-KR", {
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            }),
            mine: c.username === localStorage.getItem("username"),
            avatarColor: c.avatarColor,
        }))
        );
    } catch (err) {
        console.error("댓글 목록 조회 오류:", err);
    }
    };



  useEffect(() => {
  fetchPost();
  fetchComments();
}, [postId]);


  if (!post) {
    return (
      <B.DetailGroup>
        <B.DetailTop>
          <B.leftIcon src={leftIcon} onClick={() => navigate(`/board/${projectId}`)} />
        </B.DetailTop>
        <p style={{ padding: 20 }}>로딩 중...</p>
      </B.DetailGroup>
    );
  }

  

  return (
    <B.DetailGroup>
      <B.DetailTop>
        <B.leftIcon src={leftIcon} onClick={() => navigate(`/board/${projectId}`)} />
      </B.DetailTop>

      <B.DetailContentBox>

        {/* 상단 정보 */}
        <B.DetailContentTop>
          <B.DetailTopLeft>
            <B.DetailColorCircle color="#E6D4FF" />
            <B.DetailTopBox>
              <B.DetailName>{post.authorUsername}</B.DetailName>
              <B.DetailDate>
                {post.createdDate
                    ? new Date(post.createdDate).toLocaleString("ko-KR", {
                        month: "2-digit",
                        day: "2-digit",
                        hour: "2-digit",
                        minute: "2-digit",
                    })
                    : "-"}
              </B.DetailDate>
            </B.DetailTopBox>
          </B.DetailTopLeft>

          <B.menuImg src={menuIcon} onClick={() => setMenuOpen(prev => !prev)} />

          {menuOpen && (
            <B.Dropdown>

              <B.DropdownItem
                onClick={() => {
                    navigate(`/board/${projectId}/${postId}/edit`);
                }}
                >
                <B.DropdownIcon src={pencilIcon} />
                <B.DropdownContent>수정하기</B.DropdownContent>
              </B.DropdownItem>

              <B.DropdownItem className="line" onClick={handleTogglePin}>
                <B.DropdownIcon src={pinned ? pinoffIcon : pinonIcon} />
                <B.DropdownContent>{pinned ? "고정취소" : "고정하기"}</B.DropdownContent>
              </B.DropdownItem>

              <B.DropdownItem className="line" onClick={handleDeletePost}>
                <B.DropdownIcon src={trashIconBlack} />
                <B.DropdownContent>삭제하기</B.DropdownContent>
              </B.DropdownItem>

            </B.Dropdown>
          )}
        </B.DetailContentTop>

        {/* 게시글 본문 */}
        <B.DetailContent>
          <B.ContentTop>
            <B.ContentTitleBox>
              {pinned && <B.PinIcon src={pinIcon} />}
              <B.ContentTitle>{post.title}</B.ContentTitle>
            </B.ContentTitleBox>
          </B.ContentTop>

          <B.DetailContentMiddle>
            {post.content.split("\n").map((line: string, i: number) => (
              <span key={i}>
                {line}
                <br />
              </span>
            ))}
          </B.DetailContentMiddle>

          {/* 댓글 입력 */}
          <B.DetailContentBottom>
            <B.DetailBottomColorCircle color='#4DAFFE' />
            <B.CommentInputBox
              ref={textareaRef}
              placeholder="댓글을 입력하세요."
              value={comment}
              onChange={handleCommentChange}
            />
            <B.CommentSendBtn src={sendIcon} onClick={handleSendComment} />
          </B.DetailContentBottom>

          {/* 댓글 목록 */}
          {comments.map(c => (
            <B.DetailCommentBox key={c.id}>
              <B.CommentLeft>
                <B.CommentTop>
                  <B.DetailBottomColorCircle color="#4DAFFE" />
                  <B.CommentNickname>{c.nickname}</B.CommentNickname>
                </B.CommentTop>

                <B.CommentMiddle>{c.content}</B.CommentMiddle>
                <B.CommentBottom>{c.createdAt}</B.CommentBottom>
              </B.CommentLeft>

              {c.mine && (
                <B.CommentDelete
                  src={commentTrash}
                  onClick={() => handleDeleteComment(c.id)}
                />
              )}
            </B.DetailCommentBox>
          ))}

        </B.DetailContent>
      </B.DetailContentBox>
    </B.DetailGroup>
  );
}

export default BoardDetailPage;
