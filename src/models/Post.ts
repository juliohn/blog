import _mockData from '../../MOCK_DATA_POSTS.json';

export type POST = {
  id: string;
  title: string;
  description: string | null;
  publishedAt: string;
  uriImage: string;
  category: string;
};

const mockData: [POST] = _mockData as [POST];

export {mockData};
