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
      소음: false,
    },
    photos: []
  }
};
