export const initialState = {
  houses: [],
  inputs: {
    requires: {
      location: "",
      deposit: "",
      monthlyFee: "",
      maintenenceFee: "",
      contact: "",
      floor: null,
      area: null,
      direction: null,
      housetype: null,
      housestructure: null,
      bus: null,
      subway: null,
      workdistance: null
    },
    includes: {
      가스비: false,
      전기세: false,
      수도세: false,
      정화조: false,
      공동청소비: false,
      공동전기비: false,
      주차비: false,
      TV: false,
      인터넷: false,
      기타: ""
    },
    options: {
      신발장: false,
      디지털도어락: false,
      싱크대: false,
      아일랜드식탁: false,
      가스레인지: false,
      냉장고: false,
      세탁기: false,
      에어컨: false,
      TV: false,
      옷장: false,
      침대: false,
      책상: false,
      수납장: false,
      테라스: false,
      CCTV: false,
      입구도어락: false,
      택배보관함: false,
      주차: false,
      엘리베이터: false,
      기타: ""
    },
    education: {
      어린이집: false,
      유치원: false,
      초등학교: false,
      중학교: false,
      고등학교: false
    },
    convenience: {
      시장: false,
      마트: false,
      편의점: false,
      코인빨래방: false,
      카페: false,
      음식점: false,
      패스트푸드: false,
      헬스장: false
    },
    lifestyle: {
      공원: false,
      한강: false,
      내천: false,
      등산: false
    },
    checklist: {
      융자: false,
      대출: false,
      반려동물: false,
      환기: false,
      누수: false,
      수압: false,
      일조량: false,
      층간소음: false,
      외풍: false,
      도배: false,
      장판: false,
      소음: false
    },
    photos: []
  },
  infomations: {
    공통: [
      {
        key: "1",
        title: "APT2you",
        url: "https://m.apt2you.com/apt/saleHouse/selectHouseName.do"
      },
      {
        key: "2",
        title: "SH - 주택분양",
        url:
          "https://www.i-sh.co.kr/app/lay2/program/S48T1581C1617/www/brd/m_244/list.do?multi_itm_seq=1"
      },
      {
        key: "3",
        title: "SH - 주택임대",
        url:
          "https://www.i-sh.co.kr/app/lay2/program/S48T1581C563/www/brd/m_247/list.do?multi_itm_seq=2"
      },
      {
        key: "4",
        title: "등기부등본 보는 방법",
        url:
          "https://m.blog.naver.com/PostView.nhn?blogId=umkr61&logNo=220799926472&proxyReferer=&proxyReferer=https%3A%2F%2Fwww.google.co.kr%2F"
      },
      {
        key: "5",
        title: "중개수수료 계산기",
        url: "http://portal.r114.co.kr/std/order/etc/10.asp?only=321&m_=4&g_=2"
      },
      {
        key: "6",
        title: "대출이자 계산기",
        url:
          "https://m.search.naver.com/search.naver?where=m&sm=mtb_etc&query=%EB%8C%80%EC%B6%9C%EC%9D%B4%EC%9E%90%EA%B3%84%EC%82%B0"
      },
      {
        key: "7",
        title: "2019 신혼부부를 위한 주거정책",
        url: "https://1boon.kakao.com/cidermics/1739"
      }
    ],
    매매: [
      {
        key: "1",
        title: "LTV, DTI란?",
        url: "https://brunch.co.kr/@peoplefund/113"
      },
      {
        key: "2",
        title: "주택담보대출",
        url: "https://google.com"
      }
    ],
    전세: [
      {
        key: "1",
        title: "신혼부부 전세대출",
        url:
          "https://m.blog.naver.com/PostView.nhn?blogId=mltmkr&logNo=221625827450&categoryNo=49&proxyReferer=https%3A%2F%2Fwww.google.co.kr%2F"
      },
      {
        key: "2",
        title: "전세자금대출시 체크포인트",
        url:
          "https://banksalad.com/contents/%EC%A0%84%EC%84%B8%EC%9E%90%EA%B8%88%EB%8C%80%EC%B6%9C-%EA%B0%80%EC%9E%85-%EC%8B%9C-%EC%B2%B4%ED%81%AC%ED%8F%AC%EC%9D%B8%ED%8A%B8-3d2d"
      },
      {
        key: "3",
        title: "묵시적갱신",
        url:
          "https://1boon.kakao.com/ktestate/021302"
      }
    ],
    월세: [
      {
        key: "1",
        title: "google",
        url: "https://google.com"
      }
    ]
  }
};
