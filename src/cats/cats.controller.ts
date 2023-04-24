import {
  Controller,
  Get,
  Post,
  HttpCode,
  Header,
  Redirect,
} from '@nestjs/common';
// import { Request } from 'express';

@Controller('cats')
export class CatsController {
  // Get Request
  @Get()
  // @Redirect('https://mainafrancis.com', 301)
  findAll() {
    return 'This action returns all cats';
  }

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
}

// Nest provides decorators for all standard HTTP methods: @Get(), @Post(), @Put(), @Delete(), @Patch(), @Options() and @Head(). In addition, @All() defines an endpoint that handles all of them.
