import CardElectronic from './components/Elements/Card';
import tv from './assets/tv.png';
import riceCooker from './assets/ricecooker.png';
import vacuum from './assets/vacuum.png';
import purifier from './assets/purifier.png';

function App() {
  return (
    <div className="flex gap-5 justify-center items-center h-screen">
      <CardElectronic nama="TV" gambar={tv} harga="11.500"/>
      <CardElectronic nama="Elektronik Dapur" gambar={riceCooker} harga="5.000"/>
      <CardElectronic nama="Vacuum Cleaner" gambar={vacuum} harga="35.000" />
      <CardElectronic nama="Purifier & Humidifier" gambar={purifier} harga="6.999"/>
    </div>
  )
}

export default App
