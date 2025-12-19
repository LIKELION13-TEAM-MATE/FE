import React,{ useState } from 'react'
import * as N from '../../style/NewPageStyled';
import { useNavigate } from "react-router-dom";
import api from "../../lib/axios";

function NewPage() {
  const [projectName, setProjectName] = useState("");
  const [category, setCategory] = useState("");
  const [deadline, setDeadline] = useState("");
  
  const COLORS = [
  "#FA6D6A",
  "#FFA09E",
  "#FFA565",
  "#FFD79E",
  "#FFF59E",
  "#E6FF76",
  "#D4FFEC",
  "#D4EBFF",
  "#AAB6FF",
  "#E6D4FF",
  "#FFD4E9",
];

const [selectedColor, setSelectedColor] = useState(COLORS[0]);

const navigate = useNavigate();

const handleCreateProject = async () => {
  try {
    await api.post("/api/v1/projects", {
      projectName,
      category,
      deadline: deadline.split("T")[0], // 날짜만 추출
      themeColor: selectedColor,
    });

    alert("프로젝트가 생성되었습니다.");
    navigate("/");
  } catch (err: any) {
    console.error(err);

    if (err.response?.status === 401) {
      console.error("로그인이 필요합니다.");
    } else if (err.response?.status === 400) {
      console.error("입력값을 확인해주세요.");
    } else {
      console.error("프로젝트 생성 실패");
    }
  }
};

  return (
    <N.container>
        <N.newBox>
            <N.newTitle>새 프로젝트 생성</N.newTitle>
            <N.newContent>
                <N.inputBox>
                    <N.inputTitle>프로젝트 이름</N.inputTitle>
                    <N.input type="text" value={projectName} onChange={(e) => setProjectName(e.target.value)}></N.input>
                </N.inputBox>
                <N.inputBox>
                    <N.inputTitle>카테고리</N.inputTitle>
                    <N.input type="text" value={category} onChange={(e) => setCategory(e.target.value)}></N.input>
                </N.inputBox>
                <N.inputBox>
                    <N.inputTitle>마감일</N.inputTitle>
                    <N.input type="datetime-local" min={new Date().toISOString().slice(0, 16)} value={deadline} onChange={(e) => setDeadline(e.target.value)}></N.input>
                </N.inputBox>
                <N.inputBox>
                    <N.inputTitle>테마 색상</N.inputTitle>
                    <N.colorPalette>
                        {COLORS.map((c) => (
                            <N.colorCircle
                            key={c}
                            color={c}
                            $isSelected={selectedColor === c}
                            onClick={() => setSelectedColor(c)}
                            />
                        ))}
                        <N.RainbowPicker
                        selectedColor={selectedColor}
                        $isSelected={COLORS.indexOf(selectedColor) === -1} 
                        onClick={() => {
                            document.getElementById("hiddenColorPicker")?.click();
                        }}
                        />
                    </N.colorPalette>
                    <input
                    id="hiddenColorPicker"
                    type="color"
                    style={{ display: "none" }}
                    value={selectedColor}
                    onChange={(e) => setSelectedColor(e.target.value)}
                    />
                </N.inputBox>
            </N.newContent>
            <N.newLast>
                <N.cancel onClick={() => navigate("/")}>취소</N.cancel>
                <N.make onClick={handleCreateProject}>생성</N.make>
            </N.newLast>
        </N.newBox>
    </N.container>
  )
}

export default NewPage