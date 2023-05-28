import { User } from '../interfaces/user.interface';
import { sign } from 'jsonwebtoken';

export class UserService {
  users: User[] = [];

  login(user: User){
    const userDB = this.find(user);
    if(!userDB){
      throw Error('Error al autenticar el usuario');
    }
    if(userDB.password !== user.password){
      throw Error('Error al autenticar el usuario');
    }
    return {
      msg: "Successfully logged in",
      token: sign({ user: user.username }, "SECRET")
    }

  }
  register(user: User){
    if(this.find(user)){
      throw Error('Usuario ya registrado');
    }
    this.users.push(user);

  }

  find(user: any): User | undefined{
    return this.users.find(({username}) => username === user.username);
  }
}

