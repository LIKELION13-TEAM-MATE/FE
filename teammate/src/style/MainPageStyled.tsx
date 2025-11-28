import styled from "styled-components";

export const container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 40px;
    overflow-y: auto;
    margin-bottom: 40px;
    p{
        margin: 0;
        font-family: Pretendard;
    }
`

export const header = styled.div`
    width: 345px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 40px;
`

export const logoBox = styled.div`
    display: flex;
    align-items: center;

`

export const logo = styled.p`
    font-weight: bold;
    font-size: 24px;
    letter-spacing: 0.06em;
`

export const logoBlue = styled.p`
    font-weight: bold;
    font-size: 24px;
    color: #4DAFFE;
    letter-spacing: 0.06em;
`

export const alarm = styled.img`
    width: 23px;
    height: 23px;
`

export const newProject = styled.div`
    display: flex;
    width: 345px;
    padding: 16px 20px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
    border-radius: 16px;
    background: #FFF;
    box-shadow: 0 1px 6px 0 rgba(128, 128, 128, 0.20);
    box-sizing: border-box;
`

export const newProjectTitle = styled.div`
    width: 100%;
    font-weight: 700;
    font-size: 17px;
    letter-spacing: 1.02px;
`


export const newProjectBtn = styled.button`
    display: flex;
    padding: 8px 10px;
    align-items: center;
    gap: 4px;
    border-radius: 16px;
    background-color: #4DAFFE;
    border: 0;
    outline: 0;

    &:focus {
    outline: 0;
  }
`

export const plus = styled.img`
    width: 14px;
    height: 14px;
`

export const newProjectBtnContent = styled.div`
    color: #fff;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 0.84px;
    line-height: 26px;
`

export const newProjectContent = styled.div`
    color: #7A7A7A;
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.66px;
    line-height: 16px;
`

export const ingProject = styled.div`
    width: 345px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`

export const ingProjectHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 345px;
`

export const ingProjectTitleBox = styled.div`
    display: flex;
    flex-direction: column;
`

export const ingProjectMiniTitle = styled.p`
    color: #7A7A7A;
    font-size: 16px;
    font-weight: 500;
    line-height: 26px;
`

export const ingProjectTitle = styled.p`
    font-size: 20px;
    font-weight: 700;
    line-height: 26px;
`

export const ingProjectCount = styled.div`
    display: flex;
    padding: 5px 10px 6px 10px;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    background: #4DAFFE;
    box-shadow: 0 2px 4px 0 rgba(134, 134, 134, 0.25);
    color: #FFF;
    font-size: 16px;
    font-weight: 600;
    line-height: 26px;
    letter-spacing: 0.96px;
`

export const ingProjectBody = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`

export const ingProjectBox = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
    align-items: center;
    border-radius: 16px;
    background: #FFF;
    box-shadow: 0 1px 6px 0 rgba(128, 128, 128, 0.20);
    width: 345px;
    box-sizing: border-box;
`

export const ingProjectContent = styled.p`
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 0.96px;
`

export const ingProjectDdayBox = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`

export const ingProjectDday = styled.p<{ dday: number }>`
    color: ${(props) => (props.dday <= 3 ? "#FD1414" : "#000")};
    font-size: 14px;
    font-weight: 600;
    line-height: 26px;
    letter-spacing: 0.84px;
`

export const ingProjectColor = styled.div<{ color?: string }>`
    width: 14px;
    height: 14px;
    border-radius: 7px;
    background-color: ${(props) => props.color || "#4DAFFE"};
`

export const endProject = styled.div`
    width: 345px;
    display: flex;
    justify-content: end;
    align-items: center;
`

export const sideIcon = styled.img`
    width: 12px;
    height: 12px;
`

export const endProjectContent = styled.p`
    color: #3C3C3C;
    font-size: 13px;
    font-weight: 500;
`

export const mySchedule = styled.div`
    display: flex;
    width: 345px;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
`

export const myScheduleTitle = styled.p`
    font-size: 20px;
    font-weight: 700;
    line-height: 26px;
`

export const myScheduleContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`

export const calendar = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    align-self: stretch;
`

export const yearMonth = styled.p`
    font-size: 16px;
    font-weight: 600;
    line-height: 16px;
    letter-spacing: 0.96px;
`

export const week = styled.div`
    display: flex;
    width: 345px;
    justify-content: space-between;
`

export const daySet = styled.div`
    display: flex;
    width: 40px;
    height: 48px;
    padding: 0 10px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 6px;
`

export const dayOfTheWeek = styled.p`
    color:#7A7A7A;
    text-align: center;
    font-size: 12px;
    font-weight: 500;
    line-height: 16px;
`

export const day = styled.p<{ isToday?: boolean }>`
    width: 26px;
    height: 26px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 16px;
    font-weight: 600;
    line-height: 16px;

    background: ${(props) =>
        props.isToday ? "rgba(77, 175, 254, 0.40)" : "transparent"};
    color: ${(props) =>
        props.isToday ? "#000" : "#000"};
`

export const toDo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const toDoBigBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
`

export const date = styled.p`
    color: #999;
    font-size: 10px;
    font-weight: 500;
    line-height: 16px;
`

export const toDoBox = styled.div<{ color?: string }>`
    display: flex;
    padding: 10px 16px 8px 16px;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
    border-radius: 4px;
    border-left: 3px solid ${(props) => props.color || "#4DAFFE"};
    background: #FFF;
    width: 345px;
    height: 56px;
    box-sizing: border-box;
`

export const toDoContentBigBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`

export const toDoContentBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
`

export const toDoTitle = styled.div`
    font-size: 14px;
    font-weight: 600;
    line-height: 16px;
`

export const toDoCategoryBox = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;
`

export const miniColor = styled.div<{ color?: string }>`
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: ${(props) => props.color || "#4DAFFE"};
`

export const toDoCategory = styled.p`
    color: #3C3C3C;
    font-size: 12px;
    font-weight: 500;
    line-height: 16px;
`

export const Time = styled.p`
    color: #7A7A7A;
    font-size: 12px;
    font-weight: 500;
    line-height: 16px;
`