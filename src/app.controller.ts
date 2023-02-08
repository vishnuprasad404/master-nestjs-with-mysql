import { createUserDto } from './app.dto';
import { AppService } from './app.service';
import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common'


@Controller('/user')

export class AppController {

  constructor(
    private appService: AppService
  ) { }

  @Get()
  getAllUser(){
    return this.appService.getAllUser();
  }

  @Post()
  createUser(@Body() requestBody: createUserDto){
    return this.appService.createUser(requestBody)
  }

  @Put(":id")
  updateUserToPremium(@Param('id') id: string){
    return this.appService.updateUserToPremium(id)
  }




}