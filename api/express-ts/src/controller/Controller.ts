import { Request, Response } from 'express';

import validator from '../validations/schema';
// import Activity from '../models/Activity';

export default {
  default: async (req: Request, res: Response) => {
    res.status(200).json({ "ok": "ok" });
  },
  test: async (req: Request, res: Response) => {
    const { param1, param2 } = req.body;

    const data = { param1, param2 };

    await validator(data);

    res.status(200).json({ data });
  }
}
