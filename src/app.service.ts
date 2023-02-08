import { Body, Injectable, Ip } from '@nestjs/common'
import { DataModel, UserAccountType } from 'src/data.model'
import { createUserDto } from './app.dto'
import { uuid } from 'uuidv4'
@Injectable()

export class AppService {

  getAllUser() {
    return DataModel.user; 
  }

  createUser(requestBody: createUserDto) {
    const userObj = {
      id: uuid(),
      ...requestBody,
      userType: UserAccountType.NORMAL,
      created_at: new Date(),
      updated_at: new Date()
    }
    DataModel.user.push(userObj)
    return DataModel.user
  }

  updateUserToPremium(id: String) {
    const selectedUser = DataModel.user.find((data) => { return data.id === id })
    if (!selectedUser) return { isError: true, message: "No user found on this id!" }
    const selectedUserIndex = DataModel.user.findIndex((user) => { return user.id === selectedUser?.id })
    DataModel.user[selectedUserIndex].userType = UserAccountType.PREMIUM
    return DataModel.user[selectedUserIndex]

  }

}
