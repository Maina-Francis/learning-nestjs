// ******* PIPES *******
// Pipes have two typical use cases:
// 1. transformation: transform input data to the desired form
// 2. validation: evaluate input data and if valid, simply pass it through unchanged; otherwise throw an exception

// Pipes run inside the exception zone. This means that when a Pipe throws an exception, it is handled by the exceptions layer.When an exception is thrown in a pipe, no controller method is subsequently executed. This gives you a best-practice technique for validating data coming into the application from external sources at the system boundary.

// Nest comes with 9 built in pipes exported from the '@nestjs/common' package
// 1. ValidationPipe
// 2. ParseIntPipe
// 3. ParseFloatPipe
// 4. ParseBoolPipe
// 5. ParseArrayyPipe
// 6. ParseUUIDPipe
// 7. ParseEnumPipe
// 8. DefaultValuePipe
// 9. ParseFilePipe

// Custom ValidationPipe
import { PipeTransform, Injectable, ArgumentMetadata } from '@nestjs/common';

@Injectable()
export class ValidationPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    return value;
  }
}
