import { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import moment from "moment";
import { Span } from "styles/global-styeld";
import Modal from "components/modal/Modal";
import FundingDetail from "features/funding/FundingDetail";
import FundingList from "features/funding/FundingList";

type TModalType = 0 | 1; // 0: 펀딩상세, 1: 펀딩 목록

const typeColor: any = {
  "1": "rgba(98,89,225, 0.8)",
  "2": "rgba(89,225,98, 0.8)",
  "3": "rgba(225,166,89, 0.8)",
};

const sType: string[] = ["All", "Funding", "NFT"];

const schedule = [
  {
    date: "2022-06-06",
    item: [
      { id: "1", type: "1", title: "event1" },
      { id: "2", type: "3", title: "event2" },
    ],
  },
  {
    date: "2022-06-07",
    item: [
      { id: "4", type: "2", title: "event4" },
      { id: "5", type: "1", title: "event5" },
    ],
  },
  {
    date: "2022-06-08",
    item: [
      { id: "6", type: "2", title: "event6" },
      { id: "7", type: "3", title: "event7" },
    ],
  },
  {
    date: "2022-06-09",
    item: [
      { id: "8", type: "1", title: "event8" },
      { id: "9", type: "2", title: "event9" },
    ],
  },
  {
    date: "2022-06-10",
    item: [
      { id: "10", type: "3", title: "event10" },
      { id: "11", type: "1", title: "event11" },
    ],
  },
  {
    date: "2022-06-11",
    item: [
      { id: "12", type: "2", title: "event12" },
      { id: "13", type: "3", title: "event13" },
      { id: "14", type: "1", title: "event14" },
      { id: "15", type: "2", title: "event15" },
    ],
  },
];

const Schedule = () => {
  const [type, setType] = useState(0);

  const [modalOpen, setModalOpen] = useState({ show: false, type: 0 });

  const toggleModal = () => {
    setModalOpen({
      ...modalOpen,
      show: !modalOpen
    });
  };

  const openModal = (type: TModalType) => {
    setModalOpen({
      ...modalOpen,
      show: true,
      type
    });
  }

  /* modal open 시 뒷 배경 고정 */
  useEffect(() => {
    if(modalOpen.show) {
      document.body.style.cssText = `
        position: fixed; 
        top: -${window.scrollY}px;
        overflow-y: scroll;
        width: 100%;
      `;
    } else {
      const scrollY = document.body.style.top;
      document.body.style.cssText = '';
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    }

  }, [modalOpen])

  const renderedBox = schedule.map((el, idx) => (
    <ScheduleBox key={idx}>
      <ScheduleDate>
        <Span className="sch-date">{moment(el.date).format("DD MMM")}</Span>
        <Span className="sch-day">{moment(el.date).format(" ddd")}</Span>
      </ScheduleDate>
      {el.item.map((el2, idx2) => {
        return idx2 < 3 ? (
            <ScheduleOne
              key={idx2}
              color={el2.type}
              onClick={() => openModal(0)}>
              <Span>{el2.title}</Span>
            </ScheduleOne>
          ) : null;
      })}
      {el.item.length > 3 && 
        <ScheduleMore onClick={() => openModal(1)}>
          <Span>more...</Span>
        </ScheduleMore>}
    </ScheduleBox>
  ));

  return (
    <>
      <Tabs>
        <div className="tab-items">
          {sType.map((el, idx) => (
            <TabItem 
              key={idx}
              active={type === idx}
              onClick={() => setType(idx)}>
              <div>
                <Span>{el}</Span>
              </div>
            </TabItem>
          ))}
        </div>
      </Tabs>
      <ScheduleDiv>
        <div className="icon-wrapper">
          <BsChevronLeft />
        </div>
        {renderedBox}

        <div className="icon-wrapper">
          <BsChevronRight />
        </div>
      </ScheduleDiv>
      <Modal show={modalOpen.show} maxWidth={modalOpen.type === 0 ? 900 : 500}>
        {
          modalOpen.type === 0 ? 
            <FundingDetail onClick={toggleModal}/> : <FundingList  onClick={toggleModal}>test</FundingList>
        } 
      </Modal>
    </>
  );
};

const ScheduleDiv = styled.div`
  padding: 10px 0;
  display: flex;

  .icon-wrapper {
    padding: 0 5px;
    display: flex;
    align-items: center;
    color: ${(props) => props.theme.colors.main2};
    background-color: ${(props) => props.theme.colors.theme3};
    box-shadow: ${(props) => props.theme.colors.bk} 2px 5px 3px;
    transition: box-shadow 300ms ease-in-out, transform 300ms ease-in-out;
  }

  .icon-wrapper:hover { 
    box-shadow: ${(props) => props.theme.colors.bk} 0px 0px 10px 2px;
  }

  .sch-date {
    font-weight: 700;
    font-size: ${(props) => props.theme.fonts.size.sm}px;
    color: ${(props) => props.theme.colors.font};
  }

  .sch-day {
    margin-left: 3px;
    font-weight: 400;
    font-size: ${(props) => props.theme.fonts.size.xs}px;
    color: ${(props) => props.theme.colors.grey1};
  }
`;

const Tabs = styled.div`
  padding-left: 10px;
  padding-right: 10px;
  margin-bottom: 10px;
  
  .tab-items {
    height: 37px;
    display: flex;
    border-bottom: solid 1px;
    border-color: ${(props) => props.theme.colors.grey3};
  }
`;

const TabItem = styled.div<{ active: boolean }>`
  width: 70px;
  color: ${(props) => props.theme.colors.font};
  line-height: 35px;
  margin-right: 10px;

  div {
    text-align: center;
    transition: color .3s, border .3s;
    border-bottom: solid 2px;
    border-color: rgba(0, 0, 0, 0);
    ${(props: any) => {
      if (props.active) {
        return css`
          color: ${(props) => props.theme.colors.main3};
          border-color: ${(props) => props.theme.colors.main3};
        `;
        }
    }}
  }

  div:hover {
    color: ${(props) => props.theme.colors.main3};
    border-bottom: solid 2px;
  }

  span {
    //text-transform: uppercase;
    transition: color .3s;
    ${(props: any) => {
      if (props.active) {
        return css`
          color: ${(props) => props.theme.colors.main3};
        `;
        }
    }}
  }

  span:hover {
    color: ${(props) => props.theme.colors.main3};
  }
`;

const ScheduleDate = styled.div`
  padding: 3px 0;
`;

const ScheduleBox = styled.div`
  width: 150px;
  height: 150px;
  background-color: ${(props) => props.theme.colors.theme3};
  margin: 0 5px;
  padding: 5px 10px 10px 10px;
  box-shadow: ${(props) => props.theme.colors.bk} 2px 5px 3px;
`;

const ScheduleOne = styled.div<{ color: string }>`
  margin: 6px 0;
  padding: 2px 8px;
  border-radius: 3px;
  ${(props: any) => {
    const color = typeColor[props.color];
    return css`
      background: ${color};
    `;
  }}
  transition: box-shadow .3s;
  
  &:hover {
    box-shadow: ${(props) => props.theme.colors.theme5} 4px 4px 6px;
  }

  span {
    font-size: ${(props) => props.theme.fonts.size.xs}px;
    color: ${(props) => props.theme.colors.font};
  }
`;

const ScheduleMore = styled.div`
  text-align: center;
  margin: 6px 0;
  padding: 2px 8px;
  border-radius: 3px;

  span {
    font-size: ${(props) => props.theme.fonts.size.xs}px;
    color: ${(props) => props.theme.colors.font};
  }

  span:hover {
    color: ${(props) => props.theme.colors.main3};
  }
`;

export default Schedule;
