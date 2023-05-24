import { NextFunction, Request, Response, Router } from 'express';

import { HeroDTO } from '../interfaces/hero.dto';
import { HeroService } from '../services/hero.service';

export class HeroController {
  public router = Router();
  constructor(private heroService: HeroService) {
    this.setRoutes();
  }

  public setRoutes() {
    this.router.route('/').get(this.findAll);

    this.router.route('/').post(this.add);

    this.router.route('/:id').delete(this.delete).put(this.update);
  }

  private findAll = (_: Request, res: Response, next: NextFunction) => {
    const heroes = this.heroService.findAll();
    const heroesDTO = heroes.map(heroe => new HeroDTO(heroe).toJson());
    res.send(heroesDTO);
  };

  private add = (req: Request, res: Response, next: NextFunction) => {
   // const hero = new Hero(req.body);
    const addHeroResult = this.heroService.add(req.body);
    res.send(addHeroResult);
  };

  private delete = (req: Request, res: Response, next: NextFunction) => {
    const deleteHeroResult = this.heroService.delete(req.params.id);
    res.send(deleteHeroResult);
  };

  private update = (req: Request, res: Response, next: NextFunction) => {
    const updateHeroResult = this.heroService.update(req.params.id, req.body);
    res.send(updateHeroResult);
  };
}
