const API_URL = 'http://192.168.45.234:3000/api';  // 여기서 x는 실제 IP 주소로 변경해야 합니다

export interface Issue {
  _id: string;
  factoryId: string;
  title: string;
  description: string;
  images: string[];
  status: 'OPEN' | 'IN_PROGRESS' | 'RESOLVED';
  createdBy: string;
  assignedTo?: string;
  createdAt: Date;
  updatedAt: Date;
}

export const api = {
  async getIssuesByFactory(factoryId: string): Promise<Issue[]> {
    const response = await fetch(`${API_URL}/issues/factory/${factoryId}`);
    if (!response.ok) {
      throw new Error('이슈 목록을 가져오는데 실패했습니다.');
    }
    return response.json();
  },

  async createIssue(data: {
    factoryId: string;
    title: string;
    description: string;
    createdBy: string;
  }): Promise<Issue> {
    const response = await fetch(`${API_URL}/issues`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error('이슈 생성에 실패했습니다.');
    }
    return response.json();
  },

  async updateIssueStatus(issueId: string, status: Issue['status']): Promise<Issue> {
    const response = await fetch(`${API_URL}/issues/${issueId}/status`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ status }),
    });
    if (!response.ok) {
      throw new Error('이슈 상태 업데이트에 실패했습니다.');
    }
    return response.json();
  },
};
