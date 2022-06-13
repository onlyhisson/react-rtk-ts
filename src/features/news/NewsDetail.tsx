import styled from "styled-components";
import { BsXLg } from "react-icons/bs";
import { Span } from "styles/global-styeld";
import NewsComments from "./NewsComments";

const NewsDetail = ({ news, onClick }: any) => {
  return (
    <NewsWrapper>
      <div className="nd-img">
        <div className="nd-close" onClick={onClick}>
          <BsXLg/>
        </div>
        <img
          src={news.img}
          alt="news"
        />
      </div>
      <div className="nd-title">
        <Span>{news.title}</Span>
      </div>
      <div className="nd-mdata">
        <div className="nd-mdata-item date">
          <Span>{news.date}</Span>
        </div>
        <div className="nd-mdata-item refer">
          <Span>Yahoo Lite</Span>
        </div>
      </div>
      <div className="nd-content" dangerouslySetInnerHTML={{__html: news.content}}></div>
      <NewsComments newsId={news.id}/>
    </NewsWrapper>
  );
};

const NewsWrapper = styled.div`
  padding: 10px;
  color: ${(props) => props.theme.colors.font};

  .nd-close {
    position: absolute;
    top: 4px;
    right: 7px;
    display: flex;
    justify-content: flex-end;
    padding-bottom: 10px;

    svg {
      width: 25px;
      height: 25px;
      color:  ${(props) => props.theme.colors.grey1};
    }

    span {
      font-size: ${(props) => props.theme.fonts.size.xlg}px;
    }

    svg:hover {
      color: white;
    }
  }

  .nd-img {
    position: relative;
    display: flex;
    justify-content: center;
    img {
      object-fit: cover;
      width: 100%;
      height: 500px;
    }
  }

  .nd-title {
    padding: 20px 0;
    span {
      font-size: ${(props) => props.theme.fonts.size.h3}px;
      font-weight: ${(props) => props.theme.fonts.weight.bold};
    }
  }

  .nd-mdata {
    display: flex;
  }

  .nd-mdata-item {
    margin-right: 10px;
  }

  .nd-content {
    padding-top: 10px;
    padding-bottom: 10px;
  }
  
  .date {
    color: ${(props) => props.theme.colors.main2};
  }

  .refer {
    color: ${(props) => props.theme.colors.grey1};
  }
`;

export default NewsDetail;
