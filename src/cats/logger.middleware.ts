import { Request, Response, NextFunction } from 'express';

export function logger(req: Request, res: Response, next: NextFunction) {
  console.log('Functional Middleware request');
  next();
}

// Nest middleware fully supports Dependency injection. Just as with providers and controllers, they are able to inject dependancies that are available within the same module. This is done through the constructor.
