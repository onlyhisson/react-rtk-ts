import React from "react";
import moment from "moment";
import styled, { css } from "styled-components";
import { BsClock, BsHandThumbsUp, BsHandThumbsDown, BsReply } from "react-icons/bs";
import { Span } from './../../styles/global-styeld';

type TNewsIdProps = {
    newsId: string;
}

const comments = [
    {
        id: "1",
        newsId: "1",
        date: "2022-06-13 13:32:00",
        content: "U.S. oil producers profiting from sky-high prices are doling out billions to shareholders and building cash reserves, a strategy irking lawmakers an",
        good: "10",
        bad: "5",
        user: {
            name: "Jang",
            img: "",
        },
        reply: {
            replyId: null,
            items:[]
        }

    },
    {
        id: "2",
        newsId: "1",
        date: "2022-06-10 13:32:00",
        content: "With the Autocopy feature, you can access and start copying thousands of active real-money traders with a few simple clicks! Follow trades with a fixed investment or copy their trades in percentages, and enjoy a fully automated trade opening & closing by the trade-master!",
        good: "1",
        bad: "0",
        user: {
            name: "Kim",
            img: "",
        },
        reply: {
            replyId: null,
            items:[ "3" ]
        }
    },
    {
        id: "3",
        newsId: "1",
        date: "2022-06-11 13:32:00",
        content: "NAGA has also had one of the most successful IPOs of all time on the Frankfurt Stock Exchange. The NAGA Group AG, holding company of Naga Markets Europe Ltd, is publicly listed on the Frankfurt Stock Exchange, as well as backed by a multi-billion holding, FOSUN. The EU platform, operated by NAGA Markets Europe Ltd is licensed and regulated by the Cyprus Securities and Exchange Commission.",
        good: "10",
        bad: "5",
        user: {
            name: "Kim",
            img: "",
        },
        reply: {
            replyId: 2,
            items:[]
        }
    }
]

const NewsCommentBox = ({ comment }: any) => {
    const { id, date, content, user, reply, good, bad } = comment;
    return <CommentBox key={id} reply={reply.replyId != null}>
        <CommentBoxLeft><img src={user.img ? user.img : `${process.env.PUBLIC_URL}/assets/img/user.png`} alt="user"/></CommentBoxLeft>
        <CommentBoxRight>
            <div className="c-user">
                <Span className="c-user-name">{user.name}</Span>
                <BsClock />
                <Span className="c-user-date">{moment(date).fromNow()}</Span>
            </div>
            <div className="c-content">{content}</div>
            <div className="c-bottom">
                <div>
                    <Span>Reply</Span>
                </div>
                { reply.items.length > 0 ? 
                    <div>
                        <BsReply />
                        <Span>{reply.items.length}</Span>
                    </div> : null
                } 
                <div>
                    <BsHandThumbsUp />
                    <Span>{good}</Span>
                </div>
                <div>
                    <BsHandThumbsDown />
                    <Span>{bad}</Span>
                </div>
            </div>
        </CommentBoxRight>
    </CommentBox>
}

const NewsComments = ({newsId}: TNewsIdProps) => {
    const nComments = comments.filter((el) => el.newsId === newsId && el.reply.replyId === null);
    const renderedItem = nComments.map((comment, idx) => {
        return <div key={idx}>
            <NewsCommentBox comment={comment} />
            {comment.reply.items.length > 0 && comment.reply.items.map((el2, idx2) => {
                const rComment = comments.find(el3 => el3.id === el2);
                return <NewsCommentBox key={idx2} comment={rComment} />
            })}
        </div>
    });

    return <CommentWrapper>
        <div className="c-top">
            <Span>{comments.length}</Span>&nbsp;<Span>Comments</Span>
        </div>
        <div>
            {renderedItem}
        </div>
    </CommentWrapper>
}

const CommentBox = styled.div<{ reply: boolean }>`
    display: flex;
    justify-content: flex-start;
    padding-top: 10px;
    padding-bottom: 10px;
    margin: 10px 0;

    ${(props) => {
        if(props.reply) {
            return css`
                padding-left: 50px;
                border-left: solid 1px;
            `
        }
    }}

    .c-user-name {
        color: ${props => props.theme.colors.main3};
    }

    .c-user-date {
        color: ${props => props.theme.colors.grey2};
    }

    .c-bottom {
        color: ${props => props.theme.colors.grey2};
        display: felx;
        justify-content: flex-start;
        margin-top: 10px;
        
        div {
            margin-right: 8px;
        }

        div:hover {
            color: ${props => props.theme.colors.main3};
        }

        span {
            margin-left: 3px;
            margin-right: 3px;
        }
    }

    .c-user {
        line-height: 30px;
        display: flex;
        justify-content: flex-start;
        align-items: center;

        svg {
            margin-left: 10px;
            margin-right: 5px;
            color: ${props => props.theme.colors.grey2};
        }
    }

    .c-content {

    }
`;

const CommentBoxLeft = styled.div`
    margin-right: 10px;

    img {
        width: 45px;
    }
`;

const CommentBoxRight = styled.div`
    font-size: ${props => props.theme.fonts.size.sm}px;
`;

const CommentWrapper = styled.div`
    padding-top: 20px;
    .c-top {
        line-height: 40px;
        border-bottom: solid 1px;
        span {
            font-size: ${(props) => props.theme.fonts.size.xlg}px;
        }
    }
`;

export default NewsComments;