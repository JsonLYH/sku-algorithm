export const TOGGLE = "spec";

export type CommoditySpecsType = {
  title: string;
  list: Array<string>;
  listIds?: Array<string>;
};

export type SpecCategoryType = {
  id: string;
  specs: Array<string>;
  specsIds: Array<string>;
};

export type SpecStateType = {
  specList: Array<CommoditySpecsType>;
  specCombinationList: Array<SpecCategoryType>;
};

const initialState: SpecStateType = {
  // 规格类别列表
  specList: [
    { title: "颜色", list: ["红色", "紫色", "白色", "黑色"], listIds: [] },
    { title: "套餐", list: ["套餐一", "套餐二", "套餐三", "套餐四"], listIds: [] },
    { title: "内存", list: ["64G", "128G", "256G"], listIds: [] },
  ],
  // 可选规格组合列表
  specCombinationList: [
    { id: "1", specs: ["紫色", "套餐一", "64G"],specsIds:[] },
    { id: "2", specs: ["紫色", "套餐一", "128G"],specsIds:[] },
    { id: "3", specs: ["紫色", "套餐二", "128G"],specsIds:[] },
    { id: "4", specs: ["黑色", "套餐三", "256G"],specsIds:[] },
  ],
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case TOGGLE: {
      return {
        ...state,
      };
    }

    default: {
      return {
        ...state,
      };
    }
  }
};
