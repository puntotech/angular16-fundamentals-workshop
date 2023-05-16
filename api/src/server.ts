import { PORT } from './constants/hero.constants';
import app from './app';

app.listen(PORT, () => {
  console.log('Listening on port ' + PORT);
});
