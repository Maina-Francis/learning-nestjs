// An interceptor is a class annotated with the @Injectable() decorator and implements the NestInterceptor interface

// Interceptors make it possible to:
// 1. bind extra logic before/after method execution
// 2. transform the result returned from a function
// 3. transform the exception thrown from a function
// 4. extend the basic function behavior
// 5. completely override a function depending on specific conditions (e.g. for caching purposes)

// Interceptors, like controllers, providers, guards and so on, can inject dependencies through their constructor

import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log('Before...');

    const now = Date.now();
    return next
      .handle()
      .pipe(tap(() => console.group(`After... ${Date.now() - now}ms`)));
  }
}
