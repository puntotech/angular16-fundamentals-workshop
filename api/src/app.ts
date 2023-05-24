import { HeroController } from './controllers/hero.controller';
import { HeroService } from './services/hero.service';
import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import { handleErrors } from './middleware/error-handler.middleware';

class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.setConfig();
    this.setControllers();
    this.setErrorHandlingMiddleware();
  }

  private setConfig() {
    this.app.use(bodyParser.json({ limit: '50mb' }));
    this.app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
    this.app.use(cors());
  }

  private setControllers() {
    const heroController = new HeroController(new HeroService());
    this.app.use('/heroes', heroController.router);
  }

  private setErrorHandlingMiddleware() {
    this.app.use(handleErrors);
  }
}

export default new App().app;
