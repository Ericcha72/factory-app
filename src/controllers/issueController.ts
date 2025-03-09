import { Request, Response, NextFunction } from 'express';
import { Issue } from '../models/Issue';

type AsyncRequestHandler = (req: Request, res: Response, next: NextFunction) => Promise<void>;

export const issueController = {
  // 이슈 생성
  createIssue: (async (req: Request, res: Response) => {
    try {
      const issue = new Issue(req.body);
      await issue.save();
      res.status(201).json(issue);
    } catch (error) {
      res.status(400).json({ message: '이슈 생성 실패', error });
    }
  }) as AsyncRequestHandler,

  // 공장별 이슈 목록 조회
  getIssuesByFactory: (async (req: Request, res: Response) => {
    try {
      const { factoryId } = req.params;
      const issues = await Issue.find({ factoryId }).sort({ createdAt: -1 });
      res.json(issues);
    } catch (error) {
      res.status(400).json({ message: '이슈 조회 실패', error });
    }
  }) as AsyncRequestHandler,

  // 이슈 상태 업데이트
  updateIssueStatus: (async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const { status } = req.body;
      const issue = await Issue.findByIdAndUpdate(
        id,
        { status, updatedAt: new Date() },
        { new: true }
      );
      if (!issue) {
        return res.status(404).json({ message: '이슈를 찾을 수 없습니다.' });
      }
      res.json(issue);
    } catch (error) {
      res.status(400).json({ message: '이슈 업데이트 실패', error });
    }
  }) as AsyncRequestHandler
};