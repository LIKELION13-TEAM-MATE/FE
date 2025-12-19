import React,{ useState, useEffect } from 'react'
import * as N from '../../style/NewPageStyled';
import { useNavigate,useParams } from "react-router-dom";
import api from "../../lib/axios";

function ProjectEditPage() {
  const navigate = useNavigate();
  const { projectId } = useParams();

  const [title, setTitle] = useState("");
  const [deadline, setDeadline] = useState("");

 // 프로젝트 정보 가져오기
  useEffect(() => {
    api.get(`/api/v1/projects/${projectId}`)
      .then(res => {
        const data = res.data;

        // 백엔드가 projectName 또는 title 둘 중 하나를 쓸 수 있으므로 둘 다 체크
        setTitle(data.projectName ?? data.title ?? "");

        // deadline -> date input에 들어가려면 '2025-01-30' 형식이어야 함
        if (data.deadline) {
          const trimmed = data.deadline.split("T")[0];
          setDeadline(trimmed);
        }
      })
      .catch(err => {
        console.error("프로젝트 조회 실패:", err);
      });
  }, [projectId]);

  // 수정 요청
  const handleUpdate = async () => {
    try {
      await api.put(`/api/v1/projects/${projectId}`, {
        projectName: title,   // 백엔드는 이걸 가장 많이 씀
        deadline: deadline
      });

      alert("프로젝트가 수정되었습니다.");
      navigate(`/board/${projectId}`);
    } catch (err) {
      console.error(err);
      alert("수정 중 오류가 발생했습니다.");
    }
  };

  return (
    <N.container>
        <N.newBox>
            <N.newTitle>프로젝트 수정</N.newTitle>
            <N.newContent>
                <N.inputBox>
                    <N.inputTitle>프로젝트 이름</N.inputTitle>
                    <N.input value={title} onChange={(e) => setTitle(e.target.value)} />
                </N.inputBox>
                <N.inputBox>
                    <N.inputTitle>마감일</N.inputTitle>
                    <N.input type="date"
                    value={deadline}
                    onChange={(e) => setDeadline(e.target.value)}></N.input>
                </N.inputBox>
            </N.newContent>
            <N.newLast>
                <N.cancel onClick={() => navigate("/")}>취소</N.cancel>
                <N.make onClick={handleUpdate}>수정</N.make>
            </N.newLast>
        </N.newBox>
    </N.container>
  )
}

export default ProjectEditPage