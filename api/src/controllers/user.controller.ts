import { NextFunction, Request, Response, Router } from 'express';

import { UserService } from '../services/user.service';

export class UserController {
  public router = Router();
  constructor(private userService: UserService) {
    this.setRoutes();
  }

  public setRoutes() {
    this.router.route('/login').post(this.login);
    this.router.route('/register').post(this.register);
  }


  private login = (req: Request, res: Response, next: NextFunction) => {
    try{
      const response = this.userService.login(req.body);
      res.send(response);
    }catch {
      return res.status(400).json({ msg: "Error: username/password." });
    }
  };

  private register = (req: Request, res: Response, next: NextFunction) => {
    try{
      const user = this.userService.register(req.body);
    }catch {
        return res.status(400).json({ msg: "Error: User already exists, please login." });
    }
    res.json({
        msg: "Successfully created user, please login"
    });
  }
}
