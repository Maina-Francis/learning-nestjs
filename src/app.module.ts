import { Module, MiddlewareConsumer, NestModule } from '@nestjs/common';
import { logger } from './cats/logger.middleware';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { CatsModule } from './cats/cats.module';
import { CatsController } from './cats/cats.controller';

@Module({
  imports: [CatsModule],
  controllers: [AppController],
  providers: [AppService],
})
// Modules that include middleware have to implement the NestModule interface using the configure() method of the module class
export class AppModule implements NestModule {
  async configure(consumer: MiddlewareConsumer) {
    await consumer.apply(logger).forRoutes(CatsController);
  }
}

// Middleware is a function which is called before the route handler. Middleware functions have access to the request and response objects and the next() middleware function in the application's request-response cycle.

// Middleware functions can perform the following tasks:
// 1.execute any code
// 2. make changes to the request and the response objects.
// 3. end the request-response cycle
// 4. call the next middleware function in the stack
// 5. if the current middleware func doesn't end the request-response cycle, it must call next() to pass control to the next middleware function. Otherwise, the request will be left hanging.

// You implement custom Nest middleware in either a function, or in a class with an @injectable() decorator. The class should implement the NestMiddleware interface, while the function does not have any special requirements.