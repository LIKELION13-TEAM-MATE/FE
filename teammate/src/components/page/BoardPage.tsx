import React,{ useEffect, useState } from 'react'
import * as B from '../../style/BoardPageStyled';
import { Outlet,useParams } from "react-router-dom";
import api from "../../lib/axios";

import Header from "../../components/layouts/HeaderComponent";
import Nav from "../../components/layouts/NavComponent";

function BoardPage() {
  const { projectId } = useParams();
  const [project, setProject] = useState<any>(null);

  useEffect(() => {
    api.get(`/api/v1/projects/${projectId}`)
      .then(res => {
        setProject(res.data);
      })
      .catch(err => {
        console.error(err);
      });
  }, [projectId]);

  return (
    <B.container>

      {/* props 전달 */}
      <Header
        category={project?.category ?? ""}
        title={project?.projectName ?? ""}
        projectId={projectId}
      />

      <Nav projectId={projectId} />
      <Outlet />
    </B.container>
  )
}

export default BoardPage;
