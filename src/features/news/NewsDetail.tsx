import styled from "styled-components";
import { Span } from "styles/global-styeld";
import moment from "moment";

const NewsDetail = ({ news }: any) => {
  return (
    <NewsWrapper>
      <div className="nd-img">
        <img
          src={"https://images.unsplash.com/photo-1587161584760-f51779fb276a"}
          alt="news"
        />
      </div>
      <div className="nd-title">
        <Span>
          European Stock Futures Lower; Investors Digest ECB Statement
        </Span>
      </div>
      <div className="nd-mdata">
        <div className="nd-mdata-item date">
          <Span>{moment("2022-06-10").format("DD MMM ddd")}</Span>
        </div>
        <div className="nd-mdata-item refer">
          <Span>Yahoo Lite</Span>
        </div>
      </div>
    </NewsWrapper>
  );
};

const NewsWrapper = styled.div`
  padding: 10px;
  max-width: ${(props) => props.theme.size.maxWidth};
  color: ${(props) => props.theme.colors.font};

  .nd-img {
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

  .date {
    color: ${(props) => props.theme.colors.main2};
  }

  .refer {
    color: ${(props) => props.theme.colors.grey1};
  }
`;

export default NewsDetail;
