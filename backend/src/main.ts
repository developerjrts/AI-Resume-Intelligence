import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import cookieParser from "cookie-parser";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT ?? 5001;
  
  const frontendUrl = process.env.FRONTEND_URL || "http://localhost:3000";
  const backendUrl = process.env.BACKEND_URL || `http://localhost:${port}`;

  app.enableCors({
    origin: process.env.NODE_ENV === "production" 
      ? [frontendUrl, backendUrl] 
      : ["http://localhost:3000", "http://localhost:5001"],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', 
    allowedHeaders: 'Content-Type,Authorization,Cookie', 
    credentials: true,        
})

  app.use(cookieParser());
  await app.listen(port);
  console.log(`http://localhost:${port}`);
}
bootstrap();