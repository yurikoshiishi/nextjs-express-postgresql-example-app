import {NextFunction, Request, Response} from 'express';

const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log(err);
  res.status(500).send({message: 'something went wrong'});
};

export default errorHandler;
