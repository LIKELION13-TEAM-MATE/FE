import React, {useState} from 'react'
import * as B from '../../style/BoardPageStyled';
import { useNavigate } from "react-router-dom";

import x from '../../img/x.svg';
import fileIcon from '../../img/file-plus-corner.svg';
import voteIcon from '../../img/vote.svg';

function BoardWritePage() {
  const navigate = useNavigate();
  const [image1, setImage1] = useState<string | null>(null);
  const [image2, setImage2] = useState<string | null>(null);
  return (
    <B.DetailGroup>
            <B.DetailTop>
                <B.leftIcon src={x} onClick={()=>navigate("/board")}></B.leftIcon>
            </B.DetailTop>
            <B.DetailContentBox>
                <B.WriteContent>
                    <B.ContentTop>
                        <B.ContentTitleBox>
                          <B.WriteTitleInputBox placeholder="제목을 입력해주세요."></B.WriteTitleInputBox>
                        </B.ContentTitleBox>
                    </B.ContentTop>
                    <B.DetailContentMiddle>
                        <B.WriteContentInputBox placeholder="내용을 입력해주세요."></B.WriteContentInputBox>
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
                      <B.WriteFinBtn>작성하기</B.WriteFinBtn>
                    </B.WriteContentLast>
                </B.WriteContent>
            </B.DetailContentBox>
        </B.DetailGroup>
  )
}

export default BoardWritePage