// *******GUARDS *******
// Guards have a single responsibility, they determine whether a given request will be handled by the route handler or not. This is often referred to as authorization/authentication

// Guards have access to the ExecutionContext instance, and thus know exactly what's going to be executed next.

// Guards are executed after all middleware, but before any interceptor or pipe.

// The AuthGuard below assumes  an authenticated user, therefore a token is attached to the request headers.

import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    return validateRequest(request);

    function validateRequest(request: boolean): boolean {
      console.log(request);
      return request;
    }

    // The logic inside validateRequest() func can be as simple or sophisticated as needed.
  }
}

// Note: Every guard must implement the canActicate() function. This function should return a boolean, indicating whether the current request is allowed or not.
