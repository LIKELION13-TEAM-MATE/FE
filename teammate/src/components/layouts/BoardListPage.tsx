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
        interface Post {
        id: number;
        title: string;
        content: string;
        authorUsername: string;
        projectId: number;
        pinned: boolean;
        comments: CommentPreview[];
        }

        interface CommentPreview {
        id: number;
        author: string;
        content: string;
        createdAt: string;
        }

        const [projectInfo, setProjectInfo] = useState<{ deadline: string } | null>(null);

        const calculateDday = (deadline: string): number => {
        const today = new Date();
        const end = new Date(deadline);

        today.setHours(0,0,0,0);
        end.setHours(0,0,0,0);

        const diff = end.getTime() - today.getTime();
        return Math.ceil(diff / (1000 * 60 * 60 * 24));
        };

        const dummyProjectInfo = {
        deadline: "2025-12-31"
        };

        // 실제 데이터 불러오기 전 테스트용
        const dday = calculateDday(dummyProjectInfo.deadline);

        const dummyPosts: Post[] = [
        {
            id: 1,
            title: "팀프로젝트 공지",
            content: `Task
        - Work in teams (3–4 students).
        - Choose a company from categories.
        - Prepare a Powerful Presentation.`,
            authorUsername: "김채연",
            projectId: 1,
            pinned: true,
            comments: [
            {
                id: 1,
                author: "김채연",
                content: "확인했습니다.",
                createdAt: "11/10 14:26",
            },
            {
                id: 2,
                author: "홍길동",
                content: "확인했습니다.",
                createdAt: "11/10 14:26",
            },
            ],
        },
        {
            id: 2,
            title: "로고 디자인 변경 안내",
            content: "1번에서 2번으로 변경됨을 안내드립니다.",
            authorUsername: "홍길동",
            projectId: 1,
            pinned: false,
            comments: [],
        },
        ];


        const navigate = useNavigate();
        const { projectId } = useParams(); 
        const [menuOpen, setMenuOpen] = useState(false);

        const [posts, setPosts] = useState<Post[]>(dummyPosts);

        const handleDeleteProject = async () => {
            if (!projectId) return;

            const confirmDelete = window.confirm("프로젝트를 삭제하시겠습니까?");
            if (!confirmDelete) return;

            try {
                await api.delete(`/api/v1/projects/${projectId}`);
                console.log("프로젝트 삭제 성공");

                // 삭제 후 → 프로젝트 목록(메인)으로 이동
                navigate("/");
            } catch (err) {
                console.error("프로젝트 삭제 실패:", err);
                alert("삭제 권한이 없거나 오류가 발생했습니다.");
            }
        };

        useEffect(() => {
        if (!projectId) return;

        api.get(`/api/v1/projects/${projectId}`)
            .then(res => {
            console.log("프로젝트 정보:", res.data);
            setProjectInfo(res.data);
            })
            .catch(err => {
            console.error("프로젝트 정보 조회 실패:", err);
            });
        }, [projectId]);


        return (
            <>
                <B.deathDayBox>
                    <B.deathTitle>마감일</B.deathTitle>
                    <B.deathDayLeft>
                        <B.dDay>{projectInfo
                        ? `D-${calculateDday(projectInfo.deadline)}`
                        : "D-?"}
                        </B.dDay>
                        <B.menuImg src={menuIcon} onClick={() => setMenuOpen(prev => !prev)}></B.menuImg>
                        {menuOpen && (
                        <B.Dropdown>
                            <B.DropdownItem>
                                <B.DropdownIcon src={pencilIcon}></B.DropdownIcon>
                                <B.DropdownContent>수정하기</B.DropdownContent>
                            </B.DropdownItem>
                            <B.DropdownItem className='line' onClick={handleDeleteProject}>
                                <B.DropdownIcon src={trashIconBlack}></B.DropdownIcon>
                                <B.DropdownContent>삭제하기</B.DropdownContent>
                            </B.DropdownItem>
                        </B.Dropdown>
                        )}
                    </B.deathDayLeft>
                </B.deathDayBox>
                <B.ContentBox>
                    {posts.length === 0 ? (
                    <B.NoneContent>첫 게시물을 등록하세요.</B.NoneContent>
                    ) : (
                    posts.map(post => (
                        <B.Content
                        key={post.id}
                        onClick={() =>
                            navigate(`/board/${projectId}/${post.id}`)
                        }
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

                            {/* 예시 이미지 (더미) */}
                            {post.id === 2 && (
                            <B.ContentImgBox>
                                <B.ContentImg src={duksae} />
                                <B.ContentImg src={duksae} />
                            </B.ContentImgBox>
                            )}
                        </B.ContentMiddle>

                        {post.comments.length > 0 && (
                            <B.ContentBottom>
                            {post.comments.map(comment => (
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
                    )}
                </B.ContentBox>
                <B.WriteBtn onClick={() => navigate(`/board/${projectId}/write`)}>
                    <B.WriteIcon src={writeIcon}></B.WriteIcon>
                    <B.Write>작성하기</B.Write>
                </B.WriteBtn>
                <B.MarginArea></B.MarginArea>
            </>
        )
    }

    export default BoardListPage