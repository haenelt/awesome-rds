import RDS from './components/RDS';
import { initArray } from './utils/helper';
import config from './utils/config';

function App() {
  const arr = initArray(config.n_data);

  return (
    <div>
      <RDS color="red" data={arr} />
      <RDS color="green" data={arr} />
    </div>
  );
}

export default App;
