import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import cookieParser from "cookie-parser";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT ?? 5001
  app.use(cookieParser());
  await app.listen(port);
  console.log(`http://localhost:${port}`);
  
}
bootstrap();
