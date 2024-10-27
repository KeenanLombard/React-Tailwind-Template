import logo from "./logo.svg";
import "./App.css";
import Button from "./components/UI/Button";
import Input from "./components/UI/Input";
import Card from "./components/UI/Card";
import Modal from "./components/UI/Modal";

function App() {
  return (
    <div className='App'>
      <section>
        <header className='text-xl font-bold'>Buttons</header>
        <div className='m-10'>
          <Button size='sm' label='Small' />
          <Button size='md' label='Medium' />
          <Button size='lg' label='Large' />
        </div>
        <hr></hr>
        <div className='m-10'>
          <Button variant='primary' label='Primary' />
          <Button variant='secondary' label='Secondary' />
          <Button variant='danger' label='Danger' />
          <Button variant='info' label='Info' />
        </div>
        <hr></hr>
        <div className='m-10'>
          <Button variant='primary' label='Enabled' />
          <Button variant='primary' disabled='true' label='Disabled' />
        </div>
      </section>
      <section>
        <header className='text-xl font-bold'>Inputs</header>
        <div className='m-10'>
          <Input
            error='display error message'
            placeholder='text'
            type='text'
            label='Text'
          />
          <Input placeholder='number' type='number' label='Number' />
          <Input placeholder='email' type='email' label='Email' />
          <Input placeholder='password' type='password' label='Password' />
          <Input placeholder='checkbox' type='checkbox' label='checkbox' />
          <Input placeholder='color' type='color' label='color' />
          <Input placeholder='date' type='date' label='date' />
          <Input placeholder='file' type='file' label='file' />
          <Input placeholder='range' type='range' label='range' />
          <Input placeholder='time' type='time' label='time' />
          <Input placeholder='week' type='week' label='week' />
        </div>
      </section>
      <section>
        <header className='text-xl font-bold'>Cards</header>
        <div className='m-10 grid grid-cols-3 gap-5'>
          <Card title='Title' footer='Content'>
            Content
          </Card>
          <Card title='Title' footer='Content'>
            Helloooo
          </Card>
          <Card title='Title' footer='Content'>
            Helloooo
          </Card>
        </div>
      </section>
      <section>
        <header className='text-xl font-bold'>Modals</header>
        <div className='m-10 grid grid-cols-3 gap-5'>
          <Button label='Modal' variant='info' size='sm' />
          {/* Toogle isOpen */}
        </div>
      </section>
    </div>
  );
}

export default App;
