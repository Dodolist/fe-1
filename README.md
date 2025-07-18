# fe-1

# 헤더 영역

-   1
    -   [x] 왼쪽 로고 표시
    -   [x] 로고 클릭 시 메인화면 이동
-   2
    -   [x] 중앙에 현재 연월 및 화살표 표시
    -   [x] 화살표 클릭 시 선택된 월 변경
-   3
    -   [x] 내역/달력/통계 탭 표시
    -   [x] 해당 탭에 위치한 경우 active 기능 구현
    -   [x] 각 탭 클릭 시 화면 이동

# 새로운 내역 입력

-   1
    -   [x] 날짜 인풋 박스 표시
    -   [x] 기본값을 오늘로 설정
-   2
    -   [x] 마이너스 / 플러스 레이아웃 생성
    -   [x] 마이너스 / 플러스 토글 기능 생성
-   3
    -   [x] 금액 입력용 입력창 표시
    -   [x] 자동으로 세자리마다 쉼표 표현 추가
    -   [x] 쉼표 앞뒤로 예외처리 테스트
-   4
    -   [x] 내용 입력용 입력창 및 글자 수 표시
    -   [x] 최대 32자 제한 기능 구현
    -   [x] 글자 수 카운트 기능 구현
-   5
    -   [x] 결제수단 입력하는 셀렉트 박스 표시
    -   [x] 클릭 시 패널 표시 기능 구현
-   6
    -   [x] 항목마다 X 버튼 표시
    -   [x] X 버튼 클릭 시 모달 표시 기능 구현
    -   [x] 결제 수단 삭제 모달 구현
    -   [x] 모달의 삭제 버튼 클릭 시 삭제 기능 구현
    -   [ ] 삭제된 결제수단이 포함된 수입 지출 내역을 빈칸으로 변경
-   7
    -   [x] 추가하기 버튼 클릭 시 모달 표시
    -   [x] 결제 수단 추가 모달 구현
    -   [x] 결제 수단 모달에서 결제수단 이름 입력기능 추가
-   8
    -   [x] 셀렉트 박스 클릭 시 드롭다운 패널 표시
    -   [x] 수입 / 지출 상태에 따라 표시 목록 변경 구현
-   9
    -   [x] 확인 버튼 표시하기
    -   [x] 모든 내용 입력되었는지 유효성 검증 기능 구현
    -   [x] 클릭 시 수입지출 내역 저장
    -   [x] 내역 목록에 표시 기능 구현

# 수입 지출 내역 목록

-   1
    -   [x] 총 건수, 해당월의 수입액과 지출액 각각 표시
    -   [x] 체크박스 기능을 통해 필터링 기능 구현
-   2
    -   [x] 결제 내역 표시
    -   [ ] 정렬 기능 구현: 일자 순으로 최신 정렬
    -   [ ] 정렬 기능 구현: 시간 순으로 최신 정렬
-   3
    -   [x] 일별 리스트 상단에 일자, 요일, 일별 수입액, 일별 지출액 표시
    -   [x] 표시를 위한 계산 기능 구현
-   4
    -   [x] 지출 내역은 빨간색, 수입 내역은 초록색으로 표시
-   5
    -   [x] 수입지출 Hover 기능: 배경 색상 변경
    -   [x] 수입지출 Hover 기능: 삭제 버튼 표시
    -   [x] 삭제버튼 클릭 시 모달 표시 기능 구현
    -   [x] 내역 삭제를 위한 모달 구현
    -   [ ] 모달에서 삭제 클릭 시 1초 지연 뒤에 삭제 기능 구현
-   6
    -   [x] 내역에서 다른 영역 클릭 시 입력바에 해당 내역 내용 입력기능 구현
-   7
    -   [x] 내역 수정 기능 구현: 입력바 내용 삭제
    -   [x] 내역 수정 기능 구현: 기존 수정 내용 반영
    -   [ ] 내역 수정이 된 경우 확인 버튼 활성화 기능 구현
    -   [ ] 다른 영역 클릭 시 hover/selected 상태 해제 기능 구현

# 달력 화면

-   1
    -   [x] 달력 레이아웃 표시
-   2
    -   [x] 오늘 날짜에 해당하는 날의 배경색 변경 기능 구현
-   3
    -   [x] 수입, 지출, 일별 합계 각각의 색상 변경
-   4
    -   [x] 달력 하단에 총 수입, 총 지출, 총합 표시
    -   [x] 달력 하단에 월의 총 수입, 총 지출, 총합 표시를 위한 계산 기능 구현

# 통계 화면

-   1
    -   [ ] 통계 레이아웃 표시
-   2
    -   [ ] 해당 월의 총 지출금액 표시
    -   [ ] 총 지출금액 표시를 위한 계산 기능 구현
-   3
    -   [ ] 정렬 기능 구현: 비율이 큰 순서로 정렬
    -   [ ] 각 리스트 아이템에 카테고리 명, 비율, 해당 카테고리의 지출합 표시
-   (Optional)
    -   [ ] 애니메이션 적용: 그래프
    -   [ ] 애니메이션 적용: 각 카테고리 리스트
-   4
    -   [ ] 상세 내역 레이아웃 표시
    -   [ ] 리스트 아이템 클릭 시 상세 내역 표시 기능 구현
-   5
    -   [ ] 소비 추이 그래프를 6개월 지출 내역으로 표시
    -   [ ] 상세 내역 표시(메인에서 리스트와 동일)
