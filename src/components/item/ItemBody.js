import React from 'react';
import styled from 'styled-components';

const ItemBodyWrapper = styled.div`
  width: 100%;
  background-color: #fafafa;
  display: flex;
  justify-content: center;
`;

const ItemBodyBlock = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 900px;
  padding: 0;
  margin-bottom: 0;

  .banner {
    cursor: pointer;
    width: 98%;
    height: 50px;
    background-color: #ffdf27;
    margin: 10px;
    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .list {
    display: flex;
    flex-direction: row;
    width: 900px;
    align-items: center;
    padding-left: 0;
    margin-top: 0;
    flex-wrap: wrap;
  }

  li {
    cursor: pointer;
    list-style: none;
    width: 150px;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    img {
      width: 130px;
      height: 130px;
      position: absolute;
    }
    img:last-child {
      display: none;
    }

    &:hover {
      img:last-child {
        display: inline;
      }
    }
  }

  .guideBox {
    width: 98%;
    display: flex;
    flex-direction: column;
    margin: 0 10px;

    .guide {
      cursor: pointer;
      display: flex;
      height: 50px;
      justify-content: space-between;

      span {
        display: flex;
        align-items: center;
      }
    }

    .guide + .guide {
      border-top: 1px solid #ebebeb;
    }
  }
`;

const ItemBody = () => {
  return (
    <ItemBodyWrapper>
      <ItemBodyBlock>
        <div className="banner">Banner space</div>
        <div className="list">
          <li>
            <img src="/image/emoticon1.png" alt="emoticon1" />
            <img className="send" src="/image/send.png" alt="send" />
          </li>
          <li>
            <img src="/image/emoticon2.png" alt="emoticon1" />
            <img className="send" src="/image/send.png" alt="send" />
          </li>
          <li>
            <img src="/image/emoticon3.png" alt="emoticon1" />
            <img className="send" src="/image/send.png" alt="send" />
          </li>
          <li>
            <img src="/image/emoticon4.png" alt="emoticon1" />
            <img className="send" src="/image/send.png" alt="send" />
          </li>
          <li>
            <img src="/image/emoticon5.png" alt="emoticon1" />
            <img className="send" src="/image/send.png" alt="send" />
          </li>
          <li>
            <img src="/image/emoticon6.png" alt="emoticon1" />
            <img className="send" src="/image/send.png" alt="send" />
          </li>
          <li>
            <img src="/image/emoticon7.png" alt="emoticon1" />
            <img className="send" src="/image/send.png" alt="send" />
          </li>
          <li>
            <img src="/image/emoticon8.png" alt="emoticon1" />
            <img className="send" src="/image/send.png" alt="send" />
          </li>
          <li>
            <img src="/image/emoticon1.png" alt="emoticon1" />
            <img className="send" src="/image/send.png" alt="send" />
          </li>
          <li>
            <img src="/image/emoticon2.png" alt="emoticon1" />
            <img className="send" src="/image/send.png" alt="send" />
          </li>
        </div>
        <div className="guideBox">
          <div className="guide">
            <span>상품안내</span>
            <span>∨</span>
          </div>
          <div className="guide">
            <span>해지 및 환불 안내</span>
            <span>∨</span>
          </div>
        </div>
      </ItemBodyBlock>
    </ItemBodyWrapper>
  );
};

export default ItemBody;
