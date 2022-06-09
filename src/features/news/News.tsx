import styled from "styled-components";
import { Container, RowDiv } from "styles/global-styeld";
import AdvertisesSlider from "features/advertises/AdvertisesSlider";
import Schedule from "./Schedule";
import NewsList from "./NewsList";

export const News = () => {
  return (
    <NewsWapper>
      <NewsMain>
        <AdvertisesSlider />
      </NewsMain>
      <NewsBody>
        <NewsBodyLeft>
          <div className="news-b-lt">
            <Schedule />
          </div>
          <div className="news-b-lb">
            <NewsList />
          </div>
        </NewsBodyLeft>
        <NewsBodyRight>
          <Container className="news-b-rt">광고</Container>
          <Container className="news-b-rb">채팅</Container>
        </NewsBodyRight>
      </NewsBody>
    </NewsWapper>
  );
};

const NewsWapper = styled.div`
  background-color: #303846;

  .news-b-lt {
    padding-top: 10px;
    padding-bottom: 10px;
  }

  .news-b-lb {
    padding-top: 10px;
    padding-bottom: 10px;
  }

  .news-b-rt {
    background-color: #00f091;
  }

  .news-b-rb {
    background-color: #0af11f;
  }
`;

const NewsMain = styled.div``;
const NewsBody = styled.div`
  background-color: white;
  display: flex;
  justify-content: center;
  padding-left: 80px;
  padding-right: 80px;
  padding-top: 10px;
  padding-bottom: 10px;
`;
const NewsBodyLeft = styled.div`
  padding-right: 10px;
`;
const NewsBodyRight = styled.div`
  width: 350px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: #ffff1f;
`;
