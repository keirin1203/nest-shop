import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3031, () => {console.log(`App started at http://localhost:3031`)});
}
bootstrap();
