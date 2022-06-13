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
  background-color: ${(props) => props.theme.colors.theme8};
  .news-b-lt {
    padding-top: 10px;
    padding-bottom: 10px;
  }

  .news-b-lb {
    padding-top: 10px;
    padding-bottom: 10px;
    padding-right: 14px;
  }

  .news-b-rt {
    background-color: ${(props) => props.theme.colors.theme1};
    height: 450px;
    padding: 10px;
    margin-bottom: 20px;
  }

  .news-b-rb {
    background-color: ${(props) => props.theme.colors.theme1};
    padding: 10px;
  }
`;

const NewsMain = styled.div``;
const NewsBody = styled.div`
  display: flex;
  justify-content: center;
  padding-left: 80px;
  padding-right: 80px;
  padding-top: 10px;
  padding-bottom: 10px;
`;
const NewsBodyLeft = styled.div`
  max-width: 900px;
  padding-right: 20px;
`;
const NewsBodyRight = styled.div`
  min-width: 350px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
