import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('Request....');
    next();
  }
}

// Nest middleware fully supports Dependency injection. Just as with providers and controllers, they are able to inject dependancies that are available within the same module. This is done through the constructor.
