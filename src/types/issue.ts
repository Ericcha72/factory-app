export type IssueStatus = 'OPEN' | 'IN_PROGRESS' | 'RESOLVED';

export interface Issue {
  id: string;
  factoryId: string;
  title: string;
  description: string;
  images: string[];
  status: IssueStatus;
  createdAt: Date;
  updatedAt: Date;
} 