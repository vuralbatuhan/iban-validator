import 'bv-proje';

const IBANValidator = require('bv-proje');
const message = IBANValidator.isValid('TR330006 1005 1978 6457 8413 26');
console.log(message); // true

const message1 =IBANValidator.isValid('TR330006 1005 1978 6457 8');
console.log(message1); //false


function App() {
  return (
    <div>
    </div>
  );
}

export default App;
