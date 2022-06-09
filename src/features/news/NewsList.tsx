import styled from "styled-components";
import { Span } from "styles/global-styeld";

export interface INews {
  id: string;
  type: string;
  title: string;
  content: string;
  ref: string;
  img: string;
}

const newList: INews[] = [
  {
    id: "1",
    type: "News",
    title: "Title",
    content: "내용",
    ref: "Yahoo lite",
    img: "https://media.istockphoto.com/photos/young-asian-man-with-eyes-closed-enjoying-music-over-headphones-while-picture-id1347685599",
  },
  {
    id: "2",
    type: "Notice",
    title: "Title2",
    content: "내용2",
    ref: "FundSTOA",
    img: "https://media.istockphoto.com/photos/young-woman-relaxing-at-home-and-listening-music-picture-id1280339057",
  },
];

const NewsList = () => {
  const renderedNews = newList.map((el: INews, idx: number) => (
    <NewsItem key={idx}>
      <NewsItemLeft>
        <img src={el.img} alt="news-img" />
      </NewsItemLeft>
      <NewsItemRight>
        <NewsItemRow>
          <Span className="b-type">{el.type}</Span>
          <Span className="b-refer">{el.ref}</Span>
        </NewsItemRow>
        <NewsItemRow>
          <Span className="b-title">{el.title}</Span>
        </NewsItemRow>
        <NewsItemRow>
          <Span className="b-content">{el.content}</Span>
        </NewsItemRow>
      </NewsItemRight>
    </NewsItem>
  ));
  return (
    <>
      <div>
        <Span>Totol</Span>
        <Span>News</Span>
        <Span>Notice</Span>
      </div>
      {renderedNews}
    </>
  );
};

const NewsItem = styled.div`
  display: flex;
  .b-type {
    margin-right: 10px;
    font-size: ${(props) => props.theme.fonts.size.base}px;
    color: ${(props) => props.theme.colors.main};
  }
  .b-refer {
    font-size: ${(props) => props.theme.fonts.size.base}px;
    color: ${(props) => props.theme.colors.grey6};
  }
  .b-title {
    font-size: ${(props) => props.theme.fonts.size.lg}px;
    color: ${(props) => props.theme.colors.font2};
  }
  .b-content {
    font-size: ${(props) => props.theme.fonts.size.base}px;
    color: ${(props) => props.theme.colors.font2};
  }
`;
const NewsItemLeft = styled.div`
  padding: 8px 0px;
  img {
    width: 180px;
    border-radius: 3px;
  }
`;
const NewsItemRight = styled.div`
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  justify-content: start-flex
  align-items: center;
`;
const NewsItemRow = styled.div`
  line-height: 30px;
`;

export default NewsList;
