import { Asset } from "expo-asset";

const house1 = {
  requires: {
    location: "강남구 역삼동",
    deposit: "45000",
    monthlyFee: "70",
    maintenenceFee: "15",
    contact: "010-1234-5664",
    floor: "3",
    area: "45",
    direction: "남동향",
    housetype: "단독주택",
    housestructure: "쓰리룸+",
    bus: "7",
    subway: "5",
    workdistance: "60"
  },
  includes: {
    가스비: false,
    전기세: false,
    수도세: true,
    정화조: true,
    공동청소비: false,
    공동전기비: false,
    주차비: true,
    TV: false,
    인터넷: false,
    기타: ""
  },
  options: {
    신발장: true,
    디지털도어락: false,
    싱크대: true,
    아일랜드식탁: false,
    가스레인지: false,
    냉장고: true,
    세탁기: true,
    에어컨: true,
    TV: false,
    옷장: false,
    침대: false,
    책상: false,
    수납장: false,
    테라스: false,
    CCTV: true,
    입구도어락: true,
    택배보관함: false,
    주차: true,
    엘리베이터: true,
    기타: ""
  },
  education: {
    어린이집: true,
    유치원: false,
    초등학교: true,
    중학교: false,
    고등학교: false
  },
  convenience: {
    시장: false,
    마트: false,
    편의점: true,
    코인빨래방: false,
    카페: true,
    음식점: true,
    패스트푸드: true,
    헬스장: true
  },
  lifestyle: {
    공원: true,
    한강: false,
    내천: false,
    등산: false
  },
  checklist: {
    융자: true,
    대출: true,
    반려동물: false,
    환기: true,
    누수: true,
    수압: true,
    일조량: false,
    층간소음: false,
    외풍: false,
    도배: false,
    장판: false,
    소음: true
  },
  photos: [
    Asset.fromModule(require("../assets/houses/house1_1.jpg")).uri,
    Asset.fromModule(require("../assets/houses/house1_2.jpg")).uri,
    Asset.fromModule(require("../assets/houses/house1_3.jpg")).uri,
    Asset.fromModule(require("../assets/houses/house1_4.jpg")).uri
  ],
  id: 1,
  key: "1"
};
const house2 = {
  requires: {
    location: "강남구 청담동",
    deposit: "30000",
    monthlyFee: "20",
    maintenenceFee: "15",
    contact: "010-1234-5664",
    floor: "1",
    area: "25",
    direction: "남동향",
    housetype: "단독주택",
    housestructure: "쓰리룸+",
    bus: "15",
    subway: "15",
    workdistance: "45"
  },
  includes: {
    가스비: true,
    전기세: true,
    수도세: true,
    정화조: true,
    공동청소비: true,
    공동전기비: true,
    주차비: true,
    TV: true,
    인터넷: true,
    기타: ""
  },
  options: {
    신발장: true,
    디지털도어락: true,
    싱크대: true,
    아일랜드식탁: true,
    가스레인지: true,
    냉장고: true,
    세탁기: true,
    에어컨: true,
    TV: true,
    옷장: true,
    침대: true,
    책상: true,
    수납장: true,
    테라스: true,
    CCTV: true,
    입구도어락: true,
    택배보관함: true,
    주차: true,
    엘리베이터: true,
    기타: ""
  },
  education: {
    어린이집: true,
    유치원: true,
    초등학교: true,
    중학교: true,
    고등학교: true
  },
  convenience: {
    시장: true,
    마트: true,
    편의점: true,
    코인빨래방: true,
    카페: true,
    음식점: true,
    패스트푸드: true,
    헬스장: true
  },
  lifestyle: {
    공원: true,
    한강: true,
    내천: true,
    등산: true
  },
  checklist: {
    융자: true,
    대출: true,
    반려동물: true,
    환기: true,
    누수: true,
    수압: true,
    일조량: true,
    층간소음: true,
    외풍: true,
    도배: true,
    장판: true,
    소음: true
  },
  photos: [
    Asset.fromModule(require("../assets/houses/house2_1.jpg")).uri,
    Asset.fromModule(require("../assets/houses/house2_2.jpg")).uri,
    Asset.fromModule(require("../assets/houses/house2_3.jpg")).uri,
    Asset.fromModule(require("../assets/houses/house2_4.jpg")).uri
  ],
  id: 2,
  key: "2"
};

const house3 = {
  requires: {
    location: "강남구 대치동",
    deposit: "35000",
    monthlyFee: "100",
    maintenenceFee: "17",
    contact: "010-1234-5664",
    floor: "13",
    area: "33",
    direction: "남동향",
    housetype: "아파트",
    housestructure: "쓰리룸+",
    bus: "10",
    subway: "15",
    workdistance: "60"
  },
  includes: {
    가스비: true,
    전기세: true,
    수도세: true,
    정화조: true,
    공동청소비: true,
    공동전기비: true,
    주차비: true,
    TV: true,
    인터넷: true,
    기타: ""
  },
  options: {
    신발장: true,
    디지털도어락: true,
    싱크대: true,
    아일랜드식탁: true,
    가스레인지: true,
    냉장고: true,
    세탁기: true,
    에어컨: true,
    TV: true,
    옷장: true,
    침대: true,
    책상: true,
    수납장: true,
    테라스: true,
    CCTV: true,
    입구도어락: true,
    택배보관함: true,
    주차: true,
    엘리베이터: true,
    기타: ""
  },
  education: {
    어린이집: true,
    유치원: true,
    초등학교: true,
    중학교: true,
    고등학교: true
  },
  convenience: {
    시장: true,
    마트: true,
    편의점: true,
    코인빨래방: true,
    카페: true,
    음식점: true,
    패스트푸드: true,
    헬스장: true
  },
  lifestyle: {
    공원: true,
    한강: true,
    내천: true,
    등산: true
  },
  checklist: {
    융자: true,
    대출: true,
    반려동물: true,
    환기: true,
    누수: true,
    수압: true,
    일조량: true,
    층간소음: true,
    외풍: true,
    도배: true,
    장판: true,
    소음: true
  },
  photos: [
    Asset.fromModule(require("../assets/houses/house3_1.jpg")).uri,
    Asset.fromModule(require("../assets/houses/house3_2.jpg")).uri,
    Asset.fromModule(require("../assets/houses/house3_3.jpg")).uri,
    Asset.fromModule(require("../assets/houses/house3_4.jpg")).uri,
    Asset.fromModule(require("../assets/houses/house3_5.jpg")).uri
  ],
  id: 3,
  key: "3"
};

const house4 = {
  requires: {
    location: "강남구 삼성동",
    deposit: "35000",
    monthlyFee: "0",
    maintenenceFee: "7",
    contact: "010-1234-5664",
    floor: "5",
    area: "27",
    direction: "서향",
    housetype: "빌라",
    housestructure: "투룸",
    bus: "7",
    subway: "5",
    workdistance: "30"
  },
  includes: {
    가스비: true,
    전기세: true,
    수도세: true,
    정화조: true,
    공동청소비: true,
    공동전기비: true,
    주차비: true,
    TV: true,
    인터넷: true,
    기타: ""
  },
  options: {
    신발장: true,
    디지털도어락: true,
    싱크대: true,
    아일랜드식탁: true,
    가스레인지: true,
    냉장고: true,
    세탁기: true,
    에어컨: true,
    TV: true,
    옷장: true,
    침대: true,
    책상: true,
    수납장: true,
    테라스: true,
    CCTV: true,
    입구도어락: true,
    택배보관함: true,
    주차: true,
    엘리베이터: true,
    기타: ""
  },
  education: {
    어린이집: true,
    유치원: true,
    초등학교: true,
    중학교: true,
    고등학교: true
  },
  convenience: {
    시장: true,
    마트: true,
    편의점: true,
    코인빨래방: true,
    카페: true,
    음식점: true,
    패스트푸드: true,
    헬스장: true
  },
  lifestyle: {
    공원: true,
    한강: true,
    내천: true,
    등산: true
  },
  checklist: {
    융자: true,
    대출: true,
    반려동물: true,
    환기: true,
    누수: true,
    수압: true,
    일조량: true,
    층간소음: true,
    외풍: true,
    도배: true,
    장판: true,
    소음: true
  },
  photos: [
    Asset.fromModule(require("../assets/houses/house4_1.jpg")).uri,
    Asset.fromModule(require("../assets/houses/house4_2.jpg")).uri,
    Asset.fromModule(require("../assets/houses/house4_3.jpg")).uri,
    Asset.fromModule(require("../assets/houses/house4_4.jpg")).uri
  ],
  id: 4,
  key: "4"
};

const house5 = {
  requires: {
    location: "강남구 압구정동",
    deposit: "40000",
    monthlyFee: "150",
    maintenenceFee: "27",
    contact: "010-1234-5664",
    floor: "4",
    area: "53",
    direction: "남동향",
    housetype: "다가구주택",
    housestructure: "쓰리룸+",
    bus: "15",
    subway: "15",
    workdistance: "60"
  },
  includes: {
    가스비: true,
    전기세: true,
    수도세: true,
    정화조: true,
    공동청소비: true,
    공동전기비: true,
    주차비: true,
    TV: true,
    인터넷: true,
    기타: ""
  },
  options: {
    신발장: true,
    디지털도어락: true,
    싱크대: true,
    아일랜드식탁: true,
    가스레인지: true,
    냉장고: true,
    세탁기: true,
    에어컨: true,
    TV: true,
    옷장: true,
    침대: true,
    책상: true,
    수납장: true,
    테라스: true,
    CCTV: true,
    입구도어락: true,
    택배보관함: true,
    주차: true,
    엘리베이터: true,
    기타: ""
  },
  education: {
    어린이집: true,
    유치원: true,
    초등학교: true,
    중학교: true,
    고등학교: true
  },
  convenience: {
    시장: true,
    마트: true,
    편의점: true,
    코인빨래방: true,
    카페: true,
    음식점: true,
    패스트푸드: true,
    헬스장: true
  },
  lifestyle: {
    공원: true,
    한강: true,
    내천: true,
    등산: true
  },
  checklist: {
    융자: true,
    대출: true,
    반려동물: true,
    환기: true,
    누수: true,
    수압: true,
    일조량: true,
    층간소음: true,
    외풍: true,
    도배: true,
    장판: true,
    소음: true
  },
  photos: [
    Asset.fromModule(require("../assets/houses/house5_1.jpg")).uri,
    Asset.fromModule(require("../assets/houses/house5_2.jpg")).uri,
    Asset.fromModule(require("../assets/houses/house5_3.jpg")).uri,
    Asset.fromModule(require("../assets/houses/house5_4.jpg")).uri
  ],
  id: 5,
  key: "5"
};

const house6 = {
  requires: {
    location: "성동구 성수동",
    deposit: "100000",
    monthlyFee: "100",
    maintenenceFee: "35",
    contact: "010-1234-5664",
    floor: "47",
    area: "68",
    direction: "남향",
    housetype: "아파트",
    housestructure: "쓰리룸+",
    bus: "7",
    subway: "15",
    workdistance: "75"
  },
  includes: {
    가스비: true,
    전기세: true,
    수도세: true,
    정화조: true,
    공동청소비: true,
    공동전기비: true,
    주차비: true,
    TV: true,
    인터넷: true,
    기타: ""
  },
  options: {
    신발장: true,
    디지털도어락: true,
    싱크대: true,
    아일랜드식탁: true,
    가스레인지: true,
    냉장고: true,
    세탁기: true,
    에어컨: true,
    TV: true,
    옷장: true,
    침대: true,
    책상: true,
    수납장: true,
    테라스: true,
    CCTV: true,
    입구도어락: true,
    택배보관함: true,
    주차: true,
    엘리베이터: true,
    기타: ""
  },
  education: {
    어린이집: true,
    유치원: true,
    초등학교: true,
    중학교: true,
    고등학교: true
  },
  convenience: {
    시장: true,
    마트: true,
    편의점: true,
    코인빨래방: true,
    카페: true,
    음식점: true,
    패스트푸드: true,
    헬스장: true
  },
  lifestyle: {
    공원: true,
    한강: true,
    내천: true,
    등산: true
  },
  checklist: {
    융자: true,
    대출: true,
    반려동물: true,
    환기: true,
    누수: true,
    수압: true,
    일조량: true,
    층간소음: true,
    외풍: true,
    도배: true,
    장판: true,
    소음: true
  },
  photos: [
    Asset.fromModule(require("../assets/houses/house6_1.jpg")).uri,
    Asset.fromModule(require("../assets/houses/house6_2.jpg")).uri,
    Asset.fromModule(require("../assets/houses/house6_3.jpg")).uri,
    Asset.fromModule(require("../assets/houses/house6_4.jpg")).uri
  ],
  id: 6,
  key: "6"
};

const house7 = {
  requires: {
    location: "강남구 도곡동",
    deposit: "30000",
    monthlyFee: "0",
    maintenenceFee: "5",
    contact: "010-1234-5664",
    floor: "3",
    area: "25",
    direction: "남향",
    housetype: "다가구주택",
    housestructure: "쓰리룸+",
    bus: "20",
    subway: "30",
    workdistance: "75"
  },
  includes: {
    가스비: true,
    전기세: true,
    수도세: true,
    정화조: true,
    공동청소비: true,
    공동전기비: true,
    주차비: true,
    TV: true,
    인터넷: true,
    기타: ""
  },
  options: {
    신발장: true,
    디지털도어락: true,
    싱크대: true,
    아일랜드식탁: true,
    가스레인지: true,
    냉장고: true,
    세탁기: true,
    에어컨: true,
    TV: true,
    옷장: true,
    침대: true,
    책상: true,
    수납장: true,
    테라스: true,
    CCTV: true,
    입구도어락: true,
    택배보관함: true,
    주차: true,
    엘리베이터: true,
    기타: ""
  },
  education: {
    어린이집: true,
    유치원: true,
    초등학교: true,
    중학교: true,
    고등학교: true
  },
  convenience: {
    시장: true,
    마트: true,
    편의점: true,
    코인빨래방: true,
    카페: true,
    음식점: true,
    패스트푸드: true,
    헬스장: true
  },
  lifestyle: {
    공원: true,
    한강: true,
    내천: true,
    등산: true
  },
  checklist: {
    융자: true,
    대출: true,
    반려동물: true,
    환기: true,
    누수: true,
    수압: true,
    일조량: true,
    층간소음: true,
    외풍: true,
    도배: true,
    장판: true,
    소음: true
  },
  photos: [
    Asset.fromModule(require("../assets/houses/house7_1.jpg")).uri,
    Asset.fromModule(require("../assets/houses/house7_2.jpg")).uri,
    Asset.fromModule(require("../assets/houses/house7_3.jpg")).uri,
    Asset.fromModule(require("../assets/houses/house7_4.jpg")).uri
  ],
  id: 7,
  key: "7"
};

const house8 = {
  requires: {
    location: "강남구 개포동",
    deposit: "60000",
    monthlyFee: "70",
    maintenenceFee: "15",
    contact: "010-1234-5664",
    floor: "1",
    area: "45",
    direction: "남동향",
    housetype: "단독주택",
    housestructure: "쓰리룸+",
    bus: "30",
    subway: "30",
    workdistance: "60"
  },
  includes: {
    가스비: true,
    전기세: true,
    수도세: true,
    정화조: true,
    공동청소비: true,
    공동전기비: true,
    주차비: true,
    TV: true,
    인터넷: true,
    기타: ""
  },
  options: {
    신발장: true,
    디지털도어락: true,
    싱크대: true,
    아일랜드식탁: true,
    가스레인지: true,
    냉장고: true,
    세탁기: true,
    에어컨: true,
    TV: true,
    옷장: true,
    침대: true,
    책상: true,
    수납장: true,
    테라스: true,
    CCTV: true,
    입구도어락: true,
    택배보관함: true,
    주차: true,
    엘리베이터: true,
    기타: ""
  },
  education: {
    어린이집: true,
    유치원: true,
    초등학교: true,
    중학교: true,
    고등학교: true
  },
  convenience: {
    시장: true,
    마트: true,
    편의점: true,
    코인빨래방: true,
    카페: true,
    음식점: true,
    패스트푸드: true,
    헬스장: true
  },
  lifestyle: {
    공원: true,
    한강: true,
    내천: true,
    등산: true
  },
  checklist: {
    융자: true,
    대출: true,
    반려동물: true,
    환기: true,
    누수: true,
    수압: true,
    일조량: true,
    층간소음: true,
    외풍: true,
    도배: true,
    장판: true,
    소음: true
  },
  photos: [
    Asset.fromModule(require("../assets/houses/house8_1.jpg")).uri,
    Asset.fromModule(require("../assets/houses/house8_2.jpg")).uri,
    Asset.fromModule(require("../assets/houses/house8_3.jpg")).uri,
    Asset.fromModule(require("../assets/houses/house8_4.jpg")).uri
  ],
  id: 8,
  key: "8"
};

export const initialState = {
  houses: [house1, house2, house3, house4, house5, house6, house7, house8],
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
        url: "https://www.i-sh.co.kr/app/lay2/program/S48T1581C1617/www/brd/m_244/list.do?multi_itm_seq=1"
      },
      {
        key: "3",
        title: "SH - 주택임대",
        url: "https://www.i-sh.co.kr/app/lay2/program/S48T1581C563/www/brd/m_247/list.do?multi_itm_seq=2"
      }
    ],
    매매: [
      {
        key: "1",
        title: "google",
        url: "https://google.com"
      },
      {
        key: "2",
        title: "google",
        url: "https://google.com"
      },
      {
        key: "3",
        title: "google",
        url: "https://google.com"
      }
    ],
    전세: [
      {
        key: "1",
        title: "google",
        url: "https://google.com"
      },
      {
        key: "2",
        title: "google",
        url: "https://google.com"
      },
      {
        key: "3",
        title: "google",
        url: "https://google.com"
      }
    ],
    월세: [
      {
        key: "1",
        title: "google",
        url: "https://google.com"
      },
      {
        key: "2",
        title: "google",
        url: "https://google.com"
      },
      {
        key: "3",
        title: "google",
        url: "https://google.com"
      }
    ]
  }
};
