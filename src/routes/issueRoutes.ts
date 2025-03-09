import express, { Router } from 'express';
import { issueController } from '../controllers/issueController';

const router: Router = express.Router();

router.post('/', issueController.createIssue);
router.get('/factory/:factoryId', issueController.getIssuesByFactory);
router.patch('/:id/status', issueController.updateIssueStatus);

export default router;