// 아파트 찾기 결과 데이터 (실행일 2026-11-27 · 매매 8억·전세 5.5억 · 중학교 우선순위 제외)
window.RUN = {
 "date": "2026-11-27",
 "params": {
  "maxPrice": 8,
  "base": "충무로역(3·4호선)",
  "commuteMax": 70,
  "area": "전용 84㎡ 이상",
  "age": "준공 15년 이내",
  "households": 500,
  "walkMax": 850,
  "walkEdge": 1000,
  "schoolMax": 10,
  "sale": "84㎡↑·10억↓ 매매 매물 있는 단지만",
  "priority": "초교 도보 10분 우선(중학교 제외)"
 },
 "chungmuro": {
  "lat": 37.561243,
  "lng": 126.994157
 },
 "transfers": {
  "서울역": {
   "lat": 37.55465,
   "lng": 126.9706
  }
 },
 "lineColor": {
  "3호선": "#EF7C1C",
  "4호선": "#00A5DE",
  "GTX-A": "#9A6292",
  "경의중앙선": "#77C4A3"
 },
 "notes": [
  "매물: 호갱노노 매물 목록 기준 전용 84㎡ 이상 매매 8억 이하·전세 보증금 5억5천 이하 매물 수와 가격 범위(2026-11-27 오전 조회). 상단 버튼으로 매매/전세 전환. 호갱노노 전세 매물은 수가 적어 실제 시장보다 적을 수 있음.",
  "이번 실행은 중학교 우선순위를 제외했습니다(정렬·표시에서 중학교 거리 미사용).",
  "도보 시간은 2026-11-25 카카오맵 측정값 재사용(단지·역 위치 변동 없음).",
  "역→충무로역 소요는 이전 실행의 카카오맵 실측값(조회 시각 기준)이며 이번 실행에서 재측정하지 않음. 일산은 추정.",
  "경로선은 개략도(단지→역 도보 + 역→환승역→충무로 직선 연결)로 실제 선로 모양과 다름.",
  "통학구역은 호갱노노 표기이며 실제 배정은 교육청 확인 필요.",
  "도보는 카카오맵 최단 경로 기준. 일부 단지는 지번 주소로 측정(단지 출입구 기준과 다를 수 있음)."
 ],
 "modes": [
  "sale",
  "jeonse"
 ],
 "limits": {
  "sale": 8,
  "jeonse": 5.5
 }
};
window.APTS = [
 {"id":"dCN4b","cat":"추천","region":"일산","name":"e편한세상일산어반스카이","built":"2022-12","hh":552,"lat":37.683663,"lng":126.769819,"station":"일산역","line":"경의중앙선","stLat":37.682229,"stLng":126.769508,"walkMin":3,"walkM":204,"rideMin":57,"rideEstimated":true,"commute":60,"school":"일산초","schoolMin":9,"schoolM":568,"schoolDistrict":"일산초","memo":"역→충무로 57분은 추정(환승 경로 미확인).","deals":{"sale":{"n":5,"min":7,"max":7.5}}},
 {"id":"cO02f","cat":"추천","region":"운정","name":"한울마을1단지 운정신도시아이파크","built":"2020-07","hh":3042,"lat":37.715024,"lng":126.734476,"station":"운정중앙역","line":"GTX-A","stLat":37.716127,"stLng":126.728145,"via":"서울역","transferLine":"4호선","walkMin":13,"walkM":764,"rideMin":35,"commute":48,"school":"동패초","schoolMin":11,"schoolM":774,"schoolDistrict":"동패초","memo":"매물설명 '초품아' 있음. 대단지라 동별 차이 큼.","deals":{"sale":{"n":2,"min":8,"max":8,"area":"85~110㎡"},"jeonse":{"n":1,"min":5.2,"max":5.2,"area":"110㎡"}}},
 {"id":"aQ0e2","cat":"추천","region":"운정","name":"산내마을10단지 운정센트럴푸르지오","built":"2018-07","hh":1956,"lat":37.71935,"lng":126.734519,"station":"운정중앙역","line":"GTX-A","stLat":37.716127,"stLng":126.728145,"via":"서울역","transferLine":"4호선","walkMin":13,"walkM":808,"rideMin":35,"commute":48,"school":"산내초","schoolMin":11,"schoolM":759,"schoolDistrict":"산내초","memo":"30평 1개월 실거래 평균 6억.","deals":{"sale":{"n":6,"min":6.7,"max":7.5}}},
 {"id":"5Lb14","cat":"경계","region":"원흥","name":"삼송리슈빌센트럴파크","built":"2012-12","hh":1024,"lat":37.65224,"lng":126.880841,"station":"원흥역","line":"3호선","stLat":37.650692,"stLng":126.873025,"walkMin":14,"walkM":866,"rideMin":34,"commute":48,"school":"삼송초","schoolMin":7,"schoolM":396,"schoolDistrict":"삼송초","memo":"매물설명 '삼송초 인접/초품아'. 삼송역은 24분 1.5km.","deals":{"sale":{"n":11,"min":7.5,"max":8},"jeonse":{"n":1,"min":5.4,"max":5.4}}},
 {"id":"5LLef","cat":"경계","region":"삼송","name":"삼송마을동원로얄듀크","built":"2012-09","hh":598,"lat":37.653145,"lng":126.8861,"station":"삼송역","line":"3호선","stLat":37.653265,"stLng":126.895734,"walkMin":16,"walkM":1000,"rideMin":32,"commute":48,"school":"삼송초","schoolMin":8,"schoolM":493,"schoolDistrict":"삼송초","memo":"역 도보 약 1.0km.","deals":{"sale":{"n":6,"min":7.3,"max":8,"area":"85~111㎡"}}},
 {"id":"5LK1e","cat":"경계","region":"원흥","name":"삼송마을19단지 스타클래스","built":"2014-12","hh":627,"lat":37.649253,"lng":126.882496,"station":"원흥역","line":"3호선","stLat":37.650692,"stLng":126.873025,"walkMin":16,"walkM":1000,"rideMin":34,"commute":50,"school":"고양동산초","schoolMin":13,"schoolM":776,"schoolDistrict":"고양동산초·원흥초 공동","memo":"역 도보 약 1.0km.","deals":{"sale":{"n":3,"min":7.8,"max":8},"jeonse":{"n":1,"min":5.5,"max":5.5}}}
];
