import React from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const Qna = () => {
  return (
    <div className="container">
      <h2 className="qna">Q & A</h2>
      <Tabs>
        <TabList>
          <Tab>자주 묻는 질문</Tab>
          <Tab>1:1 문의</Tab>
        </TabList>

        <TabPanel>
          <h2>자주 묻는 질문</h2>
          <div className="qnaList">
            <div>
              <p className="q">배송 기간은 얼마나 걸리나요?</p>
              <p className="a">결제 완료 후 <span>영업일 기준 1~3일</span> 내 발송되며, 택배사 사정에 따라 지역별로 총 2~5일 정도 소요될 수 있습니다.</p>
            </div>
            <div>
              <p className="q">교환·반품은 어떻게 신청하나요?</p>
              <p className="a">상품 수령 후 7일 이내 마이페이지 → 주문내역에서 <span>‘교환/반품 신청’</span>을 해주시면 됩니다.</p>
            </div>
            <div>
              <p className="q">사이즈가 애매할 때 어떻게 선택하면 좋을까요?</p>
              <p className="a">각 상품 상세 페이지의 <span>실측 사이즈와 모델 착용 정보(신장·체형)</span>를 참고해 주세요.</p>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <h2>1:1 문의</h2>
          <textarea name="inquiry" id="inquiry" placeholder="문의를 입력해주세요"></textarea>
          <button type="submit">문의 등록</button>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Qna;
