import AsyncStorage from '@react-native-async-storage/async-storage';
import { Issue, IssueStatus } from '../types/issue';

export const issueService = {
  async createIssue(data: {
    factoryId: string;
    title: string;
    description: string;
    images: string[];
  }): Promise<Issue> {
    const newIssue: Issue = {
      id: Date.now().toString(),
      ...data,
      status: 'OPEN',
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    // 기존 이슈 목록 가져오기
    const issues = await this.getIssues(data.factoryId);
    
    // 새 이슈 추가
    await AsyncStorage.setItem(
      `issues_${data.factoryId}`,
      JSON.stringify([newIssue, ...issues])
    );

    return newIssue;
  },

  async getIssues(factoryId: string): Promise<Issue[]> {
    const issues = await AsyncStorage.getItem(`issues_${factoryId}`);
    return issues ? JSON.parse(issues) : [];
  },

  async updateIssueStatus(issueId: string, factoryId: string, status: IssueStatus): Promise<void> {
    const issues = await this.getIssues(factoryId);
    const updatedIssues = issues.map(issue => 
      issue.id === issueId 
        ? { ...issue, status, updatedAt: new Date() }
        : issue
    );

    await AsyncStorage.setItem(
      `issues_${factoryId}`,
      JSON.stringify(updatedIssues)
    );
  }
}; 