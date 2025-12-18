import React, {useState} from 'react'
import * as B from '../../style/BoardPageStyled';
import { useNavigate,useParams } from "react-router-dom";
import api from "../../lib/axios";

import x from '../../img/x.svg';
import fileIcon from '../../img/file-plus-corner.svg';
import voteIcon from '../../img/vote.svg';

function BoardWritePage() {
  const navigate = useNavigate();
  const { projectId } = useParams();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [image1, setImage1] = useState<string | null>(null);
  const [image2, setImage2] = useState<string | null>(null);

  const handleCreatePost = async () => {
    if (!projectId) {
      console.error("projectId가 없습니다. 라우트 확인: /board/:projectId/write");
      return;
    }

    if (!title.trim() || !content.trim()) {
      console.error("제목/내용 비어있음", { title, content });
      return;
    }

    const payload = { title, content };
    console.log("게시물 생성 요청 payload:", payload);

    try {
      const res = await api.post(`/api/v1/projects/${projectId}/posts`, payload);
      console.log("게시물 생성 성공:", res.data);

      // 생성 후 게시판으로 돌아가기
      navigate(`/board/${projectId}`);
    } catch (err: any) {
      const status = err?.response?.status;
      console.error("게시물 생성 실패", { status, data: err?.response?.data, err });
    }
  };

  return (
    <B.DetailGroup>
            <B.DetailTop>
                <B.leftIcon src={x} onClick={()=>navigate(`/board/${projectId ?? 1}`)}></B.leftIcon>
            </B.DetailTop>
            <B.DetailContentBox>
                <B.WriteContent>
                    <B.ContentTop>
                        <B.ContentTitleBox>
                          <B.WriteTitleInputBox placeholder="제목을 입력해주세요."
                          value={title}
                          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setTitle(e.target.value)}>
                          </B.WriteTitleInputBox>
                        </B.ContentTitleBox>
                    </B.ContentTop>
                    <B.DetailContentMiddle>
                        <B.WriteContentInputBox placeholder="내용을 입력해주세요."
                        value={content}
                        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setContent(e.target.value)}>
                        </B.WriteContentInputBox>
                        <B.ImgBox>
                          <B.ImgSlot>
                            {image1 && <B.Img src={image1} />}
                          </B.ImgSlot>

                          <B.ImgSlot>
                            {image2 && <B.Img src={image2} />}
                          </B.ImgSlot>
                        </B.ImgBox>
                    </B.DetailContentMiddle>
                    <B.WriteContentBottom>
                      <B.FileIcon src={fileIcon}></B.FileIcon>
                      <B.VoteIcon src={voteIcon}></B.VoteIcon>
                    </B.WriteContentBottom>
                    <B.WriteContentLast>
                      <B.WriteFinBtn onClick={handleCreatePost}>작성하기</B.WriteFinBtn>
                    </B.WriteContentLast>
                </B.WriteContent>
            </B.DetailContentBox>
        </B.DetailGroup>
  )
}

export default BoardWritePage