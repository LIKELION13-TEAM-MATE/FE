import React, { useState } from 'react';
import * as B from '../../style/BoardPageStyled';
import { useNavigate, useParams } from "react-router-dom";
import api from "../../lib/axios";

import x from '../../img/x.svg';
import fileIcon from '../../img/file-plus-corner.svg';
import voteIcon from '../../img/vote.svg';

function BoardWritePage() {
  const navigate = useNavigate();
  const { projectId } = useParams();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [images, setImages] = useState<File[]>([]);

  // 이미지 선택 핸들러
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const fileList = Array.from(e.target.files);
    setImages(fileList);
  };

  const handleCreatePost = async () => {
    if (!projectId) {
      alert("projectId 없음");
      return;
    }

    if (!title.trim() || !content.trim()) {
      alert("제목과 내용을 입력해주세요.");
      return;
    }

    // 🔥 multipart/form-data 생성
    const formData = new FormData();

    // 🔥 게시글 정보는 request 문자열(JSON)로 넣어야 함
    const requestJson = JSON.stringify({
      title,
      content
    });

    formData.append("request", requestJson);

    // 🔥 files 배열 추가
    images.forEach(file => {
      formData.append("files", file);
    });

    try {
      const res = await api.post(
        `/api/v1/projects/${projectId}/posts`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        }
      );

      console.log("게시글 생성 성공:", res.data);
      navigate(`/board/${projectId}`);
    } catch (err: any) {
      console.error("게시글 생성 실패", err.response || err);
      alert("게시글 생성 실패");
    }
  };

  return (
    <B.DetailGroup>
      <B.DetailTop>
        <B.leftIcon src={x} onClick={() => navigate(`/board/${projectId}`)} />
      </B.DetailTop>

      <B.DetailContentBox>
        <B.WriteContent>

          <B.ContentTop>
            <B.ContentTitleBox>
              <B.WriteTitleInputBox
                placeholder="제목을 입력해주세요."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </B.ContentTitleBox>
          </B.ContentTop>

          <B.DetailContentMiddle>
            <B.WriteContentInputBox
              placeholder="내용을 입력해주세요."
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />

            {/* 이미지 미리보기 */}
            {images.length > 0 && (
              <B.ImgBox>
                {images.map((file, idx) => (
                  <B.ImgSlot key={idx}>
                    <B.Img src={URL.createObjectURL(file)} />
                  </B.ImgSlot>
                ))}
              </B.ImgBox>
            )}
          </B.DetailContentMiddle>

          <B.WriteContentBottom>
            {/* 파일 업로드 input */}
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={handleImageChange}
              style={{ display: "none" }}
              id="fileUpload"
            />

            <label htmlFor="fileUpload">
              <B.FileIcon src={fileIcon} />
            </label>

            <B.VoteIcon src={voteIcon} />
          </B.WriteContentBottom>

          <B.WriteContentLast>
            <B.WriteFinBtn onClick={handleCreatePost}>
              작성하기
            </B.WriteFinBtn>
          </B.WriteContentLast>

        </B.WriteContent>
      </B.DetailContentBox>
    </B.DetailGroup>
  );
}

export default BoardWritePage;
