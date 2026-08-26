import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import cookieParser from "cookie-parser";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT ?? 5001;
  app.enableCors({
    origin: [
      "http://localhost:3000",
      "https://ai-resume-intelligence-woad.vercel.app"
    ],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', 
    allowedHeaders: 'Content-Type,Authorization',
    credentials: true,        
  })

  app.use(cookieParser());
  await app.listen(port);
  console.log(`http://localhost:${port}`);
  
}
bootstrap();
