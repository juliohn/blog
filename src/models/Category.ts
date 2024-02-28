import _mockCategories from '../../MOCK_DATA_CATEGORY.json';

export type CATEGORYPROPS = {
  key: string;
  value: string;
};

const mockCategories: [CATEGORYPROPS] = _mockCategories as [CATEGORYPROPS];

export {mockCategories};
