import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  HttpCode,
  HostParam,
  Header,
  Redirect,
} from '@nestjs/common';
// import { Request } from 'express';
import { Cat } from './interfaces/cats.interfaces';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  // Nest provides decorators for all standard HTTP methods: @Get(), @Post(), @Put(), @Delete(), @Patch(), @Options() and @Head(). In addition, @All() defines an endpoint that handles all of them.

  constructor(private catsService: CatsService) {} //Dependancy Injection

  //**** */ Get Request*****
  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  // handling Redirects
  @Get('profile')
  @Redirect('https://mainafrancis.com', 301)

  // Post Request
  @Post()
  // @HttpCode(210) //We can set custom status codes using the @HttpCode decorator at a handler level
  @Header('Cache-Control', 'none')
  create(): string {
    return 'This action adds a new cat';
  }

  // Route wildcards
  // For instance, the asterisk is used as a wildcard, and will match any combination of characters

  @Get('ab*cd')
  wildcard(): string {
    return 'This route uses a wildcard';
    // The "ab*cd" route path will match 'abcd', 'ab_cd', 'abecd', and so on.
  }

  // ****Route Parameters*****
  // In order to define routes with parameters, we can add route parameter tokens in the path of the route to capture the dynamic value at that position in the request URL
  // Note: Routes with parameters should be declared after any static paths. This prevents the parameterized paths from intercepting traffic destined for the static paths.

  @Get(':id')
  findOne(@Param() params: any): string {
    return `This is the cat's id:${params.id}`;
  }
}

// **** Sub-Domain Routing*****
// The @Controller decorator can take a 'host' option to require that the HTTP host of the incoming request matches some specific value
@Controller({ host: 'admin.example.com' })
export class AdminController {
  @Get('admin')
  index(): string {
    return 'Admin Page';
  }
}

// Similar to a route 'path', 'hosts' ooption can use tokens to capture the dynamic value at that position in the host name. Host parameters declared in this way can be accessed using the '@HostParam()' decorator
@Controller({ host: ':account.example.com' })
export class AccountController {
  @Get()
  getInfo(@HostParam() params: string) {
    return params;
  }
}
