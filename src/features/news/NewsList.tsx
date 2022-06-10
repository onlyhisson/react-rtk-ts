import React, { useState } from "react";
import styled from "styled-components";
import { Span } from "styles/global-styeld";
import NewsDetail from "./NewsDetail";
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
  {
    id: "3",
    type: "Notice",
    title: "Title3",
    content: "내용3",
    ref: "FundSTOA",
    img: "https://media.istockphoto.com/photos/young-handsome-african-man-wearing-headphones-listening-to-music-and-picture-id1320722438",
  },
  {
    id: "4",
    type: "Notice",
    title: "Title4",
    content: "내용4",
    ref: "FundSTOA",
    img: "https://media.istockphoto.com/photos/musician-and-sound-engineer-mixing-new-album-inside-boutique-studio-picture-id1313634740",
  },
  {
    id: "5",
    type: "News",
    title: "Title5",
    content: "내용5",
    ref: "FundSTOA",
    img: "https://media.istockphoto.com/photos/party-people-enjoy-concert-at-festival-summer-music-festival-picture-id1324561072",
  },
];

const TYPE_BOARD = ["Total", "News", "Notice"];

const Pagination = () => {
  return (
    <PaginationWrapper>
      <div className="pagination">
        <a href="#">&laquo;</a>
        <a href="#">1</a>
        <a href="#" className="active">
          2
        </a>
        <a href="#">3</a>
        <a href="#">4</a>
        <a href="#">5</a>
        <a href="#">6</a>
        <a href="#">&raquo;</a>
      </div>
    </PaginationWrapper>
  );
};

const NewsList = () => {
  const [type, setType] = useState(0); // 게시물 타입
  const [postId, setPostId] = useState("0"); // 선택한 게시물

  const renderedNews = newList.map((el: INews, idx: number) => (
    <NewsItem
      key={idx}
      onClick={() => setPostId(el.id)}
      active={el.id === postId}
    >
      <div className="news-excerpt">
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
      </div>
      {el.id === postId && <NewsDetail />}
    </NewsItem>
  ));
  return (
    <>
      <TypeWrapper>
        {TYPE_BOARD.map((el, idx) => (
          <TypeItem
            key={idx}
            active={TYPE_BOARD.indexOf(el) === type}
            onClick={() => setType(idx)}
          >
            <Span>{el}</Span>
          </TypeItem>
        ))}
      </TypeWrapper>
      {renderedNews}
      <Pagination />
    </>
  );
};

const PaginationWrapper = styled.div`
  .pagination {
    display: inline-block;
  }

  .pagination a {
    color: ${(props) => props.theme.colors.font};
    float: left;
    padding: 8px 16px;
    text-decoration: none;
    transition: background-color 0.3s;
    border: 1px solid ${(props) => props.theme.colors.grey3};
    margin: 0 4px;
  }

  .pagination a.active {
    background-color: ${(props) => props.theme.colors.main2};
    border: 1px solid ${(props) => props.theme.colors.main2};
    color: white;
  }

  .pagination a:hover:not(.active) {
    background-color: ${(props) => props.theme.colors.theme3};
  }
`;

const TypeItem = styled.div<{ active: boolean }>`
  margin: 0 10px;
  padding: 5px 20px;
  color: ${(props) =>
    props.active ? props.theme.colors.white : props.theme.colors.font};
  background-color: ${(props) =>
    props.active ? props.theme.colors.main : props.theme.colors.theme1};
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  transition: background-color 0.1s;
`;

const TypeWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px 0 20px 0;

  .type-item:hover {
    background-color: ${(props) => props.theme.colors.main};
    color: ${(props) => props.theme.colors.white};
  }

  span {
    font-size: ${(props) => props.theme.fonts.size.sm};
  }
`;

const NewsItem = styled.div<{ active: boolean }>`
  display: flex;
  flex-direction: column;
  padding: 10px 10px;
  margin-bottom: 20px;
  background-color: ${(props) => props.theme.colors.theme9};
  box-shadow: ${(props) => props.theme.colors.bk} 2px 5px 3px;
  max-width: ${(props) => props.theme.size.maxWidth};

  .news-excerpt {
    display: flex;
  }

  .b-type {
    margin-right: 10px;
    font-size: ${(props) => props.theme.fonts.size.base}px;
    color: ${(props) => props.theme.colors.main2};
  }
  .b-refer {
    font-size: ${(props) => props.theme.fonts.size.base}px;
    color: ${(props) => props.theme.colors.grey1};
  }
  .b-title {
    font-size: ${(props) => props.theme.fonts.size.lg}px;
    color: ${(props) => props.theme.colors.font};
  }
  .b-content {
    font-size: ${(props) => props.theme.fonts.size.base}px;
    color: ${(props) => props.theme.colors.grey1};
  }
`;
const NewsItemLeft = styled.div`
  display: flex;
  padding: 10px;
  img {
    width: 180px;
    height: 130px;
    border-radius: 3px;
    object-fit: cover;
  }
`;
const NewsItemRight = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: start-flex
  align-items: center;
`;
const NewsItemRow = styled.div`
  line-height: 30px;
`;

export default NewsList;
