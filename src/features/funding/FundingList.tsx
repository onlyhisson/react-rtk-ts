import React from "react";
import styled from "styled-components";
import { Span } from "styles/global-styeld";
import { CloseBtn } from "components/html-elements/Buttons";
import moment from "moment";

const F_LIST = [
    {
        id: 1,
        title: 'XXX의 신곡',
        content: `Ellie Goulding(엘리 굴딩)은 영국 출신의 싱어송 라이터로 영화 '그레이의 50가지 그림자'의 OST인 Love Me Like You Do'라는 곡으로 국내에서 유명한 아티스트 입니다.`,
        thumbnail: "https://images.unsplash.com/photo-1642505172378-a6f5e5b15580?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2xlYW5lcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        type: "funding"
    },
    {
        id: 2,
        title: 'XXX의 신곡',
        content: `Ellie Goulding(엘리 굴딩)은 영국 출신의 싱어송 라이터로 영화 '그레이의 50가지 그림자'의 OST인 Love Me Like You Do'라는 곡으로 국내에서 유명한 아티스트 입니다.`,
        thumbnail: "https://images.unsplash.com/photo-1642505172378-a6f5e5b15580?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2xlYW5lcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        type: "nft"
    },
    {
        id: 3,
        title: 'XXX의 신곡',
        content: `Ellie Goulding(엘리 굴딩)은 영국 출신의 싱어송 라이터로 영화 '그레이의 50가지 그림자'의 OST인 Love Me Like You Do'라는 곡으로 국내에서 유명한 아티스트 입니다.`,
        thumbnail: "https://images.unsplash.com/photo-1642505172378-a6f5e5b15580?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2xlYW5lcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        type: "funding"
    },
    {
        id: 4,
        title: 'XXX의 신곡',
        content: `Ellie Goulding(엘리 굴딩)은 영국 출신의 싱어송 라이터로 영화 '그레이의 50가지 그림자'의 OST인 Love Me Like You Do'라는 곡으로 국내에서 유명한 아티스트 입니다.`,
        thumbnail: "https://images.unsplash.com/photo-1642505172378-a6f5e5b15580?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2xlYW5lcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        type: "funding"
    },
]


const FundingList = ({ onClick }: any) => {

    const renderdFundings = F_LIST.map((el, idx) => {
        return (
        <div key={idx} className="prod-item">
            <div className="prod-item-box">
                <div className="prod-item-img">
                    <img src={el.thumbnail} alt="product"/>
                </div>
                <div className="prod-content-wrapper">
                    <div className="prod-title"><Span>{el.title}</Span></div>
                    <div className="prod-content">
                        <Span>
                            {el.content.length > 80 ? 
                                el.content.substring(0 , 80) + "..." : el.content}
                        </Span>
                    </div>
                    <div className="prod-tags">
                        <div><Span>{el.type}</Span></div>            
                    </div>
                </div>
            </div>
        </div>
        )})

    return <Wrapper>
        <div className="fl-top">
            <div>
                <Span>
                    {moment('2022-06-16 18:10:20').format("DD MMM ddd")}
                </Span>
            </div>
            <CloseBtn onClick={onClick} />
        </div>
        <div className="fl-body">
            {renderdFundings}
        </div>
    </Wrapper>
}

const Wrapper = styled.div`
    padding: 10px;
    color: ${props => props.theme.colors.font};
    font-size: ${props => props.theme.fonts.size.xs}px;

    .fl-top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 5px 5px 10px 15px;

        span {
            font-size: ${props => props.theme.fonts.size.base}px;
        }
    }

    .fl-body {
        
    }

    .prod-item {
        display: inline-block;
        padding: 10px;
        margin: 5px;
        background-color: ${props => props.theme.colors.theme7};
        img {
            width: 140px;
            height: 100px;
            object-fit: cover;
            opacity: 0.8;
            transition: opacity 300ms ease-in-out, box-shadow 300ms ease-in-out;
        }
        box-shadow: ${(props) => props.theme.colors.bk} 2px 5px 3px;
        transition: box-shadow 300ms ease-in-out;
    }

    .prod-item:hover {
        box-shadow: ${(props) => props.theme.colors.bk} 0px 0px 10px 3px;
        img {
            opacity: 1;
            box-shadow: ${(props) => props.theme.colors.bk} 2px 5px 3px;
        }
    }

    .prod-item-box {
        display: flex;
    }

    .prod-item-img {
        margin-right: 15px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .prod-content-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .prod-title {
        line-height: 24px;
        font-size: ${props => props.theme.fonts.size.sm}px;
        border-bottom: solid 1px;
        border-color: ${props => props.theme.colors.grey4};
    }

    .prod-content {
        padding: 3px 0px;
    }

    .prod-tags {
        text-transform: uppercase;

        div {
            color: ${props => props.theme.colors.main3};
            padding: 1px 4px;
            width: fit-content;
            border: solid 1px;
            border-radius: 0px;
        }

        span {
            color: ${props => props.theme.colors.main3};
        }
    }

    span {
        color: ${props => props.theme.colors.font};
    }
`;

export default FundingList;
