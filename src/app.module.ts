import { Module, NestMiddleware, MiddlewareConsumer } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { CatsModule } from './cats/cats.module';

@Module({
  imports: [CatsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

// Middleware is a function which is called before the route handler. Middleware functions have access to the request and response objects and the next() middleware function in the application's request-response cycle.

// Middleware functions can perform the following tasks:
// 1.execute any code
// 2. make changes to the request and the response objects.
// 3. end the request-response cycle
// 4. call the next middleware function in the stack
// 5. if the current middleware func doesn't end the request-response cycle, it must call next() to pass control to the next middleware function. Otherwise, the request will be left hanging.
