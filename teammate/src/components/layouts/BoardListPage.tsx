import React, { useEffect, useState } from 'react';
import * as B from '../../style/BoardPageStyled';
import { useNavigate, useParams } from "react-router-dom";
import api from '../../lib/axios';

import menuIcon from '../../img/ellipsis-vertical.svg';
import writeIcon from '../../img/pencil.svg';
import pinIcon from '../../img/pin.svg';
import duksae from '../../img/duksae.png';
import pencilIcon from '../../img/pencilBlack.svg';
import trashIconBlack from '../../img/trash-2.svg';

function BoardListPage() {
  interface CommentPreview {
    id: number;
    author: string;
    content: string;
    createdAt: string;
  }

  interface Post {
    id: number;
    title: string;
    content: string;
    authorUsername: string;
    projectId: number;
    pinned: boolean;
    comments: CommentPreview[];
  }

  const navigate = useNavigate();
  const { projectId } = useParams();

  const [menuOpen, setMenuOpen] = useState(false);
  const [posts, setPosts] = useState<Post[]>([]);
  const [projectInfo, setProjectInfo] = useState<any>(null);

  // --------------------------
  // D-Day 계산 함수
  // --------------------------
  const calculateDday = (deadline: string): number => {
    const today = new Date();
    const end = new Date(deadline);

    today.setHours(0, 0, 0, 0);
    end.setHours(0, 0, 0, 0);

    const diff = end.getTime() - today.getTime();
    return Math.ceil(diff / (1000 * 60 * 60 * 24));
  };

  // --------------------------
  // 📌 프로젝트 삭제
  // --------------------------
  const handleDeleteProject = async () => {
    if (!projectId) return;

    if (!window.confirm("프로젝트를 삭제하시겠습니까?")) return;

    try {
      await api.delete(`/api/v1/projects/${projectId}`);
      alert("프로젝트가 삭제되었습니다.");
      navigate("/");
    } catch (err) {
      console.error("프로젝트 삭제 실패:", err);
      alert("삭제 권한이 없거나 오류가 발생했습니다.");
    }
  };

  // --------------------------
  // 📌 프로젝트 정보 가져오기
  // --------------------------
  useEffect(() => {
    if (!projectId) return;

    api.get(`/api/v1/projects/${projectId}`)
      .then(res => {
        setProjectInfo(res.data);
      })
      .catch(err => {
        console.error("프로젝트 정보 조회 실패:", err);
      });
  }, [projectId]);

  // --------------------------
  // 게시글 가져오기
  // --------------------------
  useEffect(() => {
    if (!projectId) return;

    api
      .get(`/api/v1/projects/${projectId}/posts`)
      .then(res => {
        console.log("게시글 조회:", res.data);
        setPosts(res.data); // 실제 데이터
      })
      .catch(err => {
        console.error("게시글 조회 실패 → 더미 데이터 사용:", err);

        // 백엔드 안 붙었을 때 테스트용 더미
        const dummyPosts: Post[] = [
          {
            id: 1,
            title: "팀프로젝트 공지",
            content: `Task
- Work in teams (3–4 students).
- Choose a company from categories.
- Prepare a Powerful Presentation.`,
            authorUsername: "김채연",
            projectId: Number(projectId),
            pinned: true,
            comments: [
              { id: 1, author: "김채연", content: "확인했습니다.", createdAt: "11/10 14:26" },
              { id: 2, author: "홍길동", content: "확인했습니다.", createdAt: "11/10 14:26" },
            ],
          },
          {
            id: 2,
            title: "로고 디자인 변경 안내",
            content: "1번 시안에서 2번 시안으로 변경합니다.",
            authorUsername: "홍길동",
            projectId: Number(projectId),
            pinned: false,
            comments: [],
          },
        ];

        setPosts(dummyPosts);
      });
  }, [projectId]);

  useEffect(() => {
  if (!projectId) return;

  const fetchPostsWithComments = async () => {
    try {
      const postRes = await api.get(`/api/v1/projects/${projectId}/posts`);
      const postsData = postRes.data;

      // 📌 각 게시글 댓글 목록을 병렬로 가져오기
      const postsWithComments = await Promise.all(
        postsData.map(async (post: any) => {
          try {
            const commentRes = await api.get(`/api/v1/comments/post/${post.id}`);

            return {
              ...post,
              comments: commentRes.data.map((c: any) => ({
                id: c.id,
                author: c.nickname,
                content: c.content,
                createdAt: new Date(c.createdDate).toLocaleString("ko-KR", {
                  month: "2-digit",
                  day: "2-digit",
                  hour: "2-digit",
                  minute: "2-digit",
                })
              }))
            };
          } catch {
            // 댓글 조회 실패 시 빈 배열
            return { ...post, comments: [] };
          }
        })
      );

      setPosts(postsWithComments);

    } catch (err) {
      console.error("게시글 조회 실패:", err);
    }
  };

  fetchPostsWithComments();
}, [projectId]);

  return (
    <>
      {/* ------------------ D-day 영역 ------------------ */}
      <B.deathDayBox>
        <B.deathTitle>마감일</B.deathTitle>
        <B.deathDayLeft>
          <B.dDay>
            {projectInfo
              ? `D-${calculateDday(projectInfo.deadline)}`
              : "D-?"}
          </B.dDay>

          <B.menuImg src={menuIcon} onClick={() => setMenuOpen(prev => !prev)} />

          {menuOpen && (
            <B.Dropdown>
              <B.DropdownItem
                onClick={() => navigate(`/project/${projectId}/edit`)}
                >
                <B.DropdownIcon src={pencilIcon} />
                <B.DropdownContent>수정하기</B.DropdownContent>
              </B.DropdownItem>

              <B.DropdownItem className="line" onClick={handleDeleteProject}>
                <B.DropdownIcon src={trashIconBlack} />
                <B.DropdownContent>삭제하기</B.DropdownContent>
              </B.DropdownItem>
            </B.Dropdown>
          )}
        </B.deathDayLeft>
      </B.deathDayBox>

      {/* ------------------ 게시글 리스트 ------------------ */}
      <B.ContentBox>
        {posts && posts.length > 0 ? (
            posts.map(post => (
                <B.Content
                key={post.id}
                onClick={() => navigate(`/board/${projectId}/${post.id}`)}
                >
                <B.ContentTop>
                    <B.ContentTitleBox>
                    {post.pinned && <B.PinIcon src={pinIcon} />}
                    <B.ContentTitle>{post.title}</B.ContentTitle>
                    </B.ContentTitleBox>
                    <B.ColorCircle color="#E6D4FF" />
                </B.ContentTop>

                <B.ContentMiddle>
                    {post.content}
                </B.ContentMiddle>

                {(post.comments?.length ?? 0) > 0 && (
                    <B.ContentBottom>
                    {post.comments!.map(comment => (
                        <B.ContentCommentBox key={comment.id}>
                        <B.ContentCommentTop>
                            <B.CommentColorCircle color="#4DAFFE" />
                            <B.CommentName>{comment.author}</B.CommentName>
                        </B.ContentCommentTop>
                        <B.ContentCommentMiddle>{comment.content}</B.ContentCommentMiddle>
                        <B.ContentCommentBottom>{comment.createdAt}</B.ContentCommentBottom>
                        </B.ContentCommentBox>
                    ))}
                    </B.ContentBottom>
                )}
                </B.Content>
            ))
            ) : (
            <B.NoneContent>첫 게시물을 등록하세요.</B.NoneContent>
            )}
      </B.ContentBox>

      {/* ------------------ 작성하기 버튼 ------------------ */}
      <B.WriteBtn onClick={() => navigate(`/board/${projectId}/write`)}>
        <B.WriteIcon src={writeIcon} />
        <B.Write>작성하기</B.Write>
      </B.WriteBtn>

      <B.MarginArea />
    </>
  );
}

export default BoardListPage;
