import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.send('ברוכה הבאה למערכת ניהול המשתמשים!');
});

export default router;
