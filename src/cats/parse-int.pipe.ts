// Example of Transform Property of ValidationPipes using ParseIntPipe
import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  BadRequestException,
} from '@nestjs/common';

@Injectable()
export class ParseIntPipe implements PipeTransform<string, number> {
  transform(value: string, metadata: ArgumentMetadata): number {
    const val = parseInt(value, 10);
    if (isNaN(val)) {
      throw new BadRequestException('Validation Failed');
    }
    return val;
  }
}

// Parse* pipes expect a parameter's value to be defined. They throw an exception upon receiving null or undefined values. To allow an endpoint to handle missing querystring parameter values, we have to provide a default value to be injected before the Parse* popes operate on these values. The 'DefaultValuePipe' serves that purpose
