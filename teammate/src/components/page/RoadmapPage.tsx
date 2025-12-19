import React, { useEffect, useState } from 'react';
import * as R from '../../style/RoadmapPageStyled';
import { Outlet, useParams } from "react-router-dom";
import api from "../../lib/axios";

import Header from "../../components/layouts/HeaderComponent";
import Nav from "../../components/layouts/NavComponent";

function RoadmapPage() {
  const { projectId } = useParams();
  const [project, setProject] = useState<any>(null);

  useEffect(() => {
    if (!projectId) return;

    api.get(`/api/v1/projects/${projectId}`)
      .then(res => setProject(res.data))
      .catch(err => console.error("프로젝트 조회 실패:", err));
  }, [projectId]);

  return (
    <R.container>

      {/* 프로젝트 제목/카테고리 동기화 */}
      <Header
        category={project?.category ?? "프로젝트"}
        title={project?.projectName ?? ""}
      />

      {/* Nav도 현재 projectId 기준으로 이동하도록 해야 함 */}
      <Nav projectId={projectId} />

      <Outlet />

    </R.container>
  );
}

export default RoadmapPage;