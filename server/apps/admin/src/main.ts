import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.enableCors()//跨域请求
  app.useStaticAssets('uploads' , {
    prefix:'/uploads'
  })
  
  const options = new DocumentBuilder()
  .setTitle('Cats example')
  .setDescription('The cats API description')
  .setVersion('1.0')
  .addTag('cats')
  .build();
const document = SwaggerModule.createDocument(app, options);
SwaggerModule.setup('api-docs', app, document)
  const POST = process.env.ADMIN_PORT || 3001
  await app.listen(POST);
  console.log(`http://localhost:${POST}/api-docs`)
}
bootstrap();
