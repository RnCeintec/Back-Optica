import { Request, Response } from 'express';

export default async (req: Request, res: Response, next: Function) => {
  const { path } = req;

  if (!path.includes('/local')) return next();
  const { user } = res.locals;
  if (!user) return res.status(401).json({ message: 'Please Login' });
  return next();
};
