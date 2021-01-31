import React from 'react';
import './App.css';
import { Counter } from './Counter';
import Product from './homework-6/Product';
import Input from './Input';

function Greeting() {

  const name = "Alex";

  return (
    <div>

      <h4>Hello, I am a function component!!!</h4>
      <h3>Hello, I am {name}!</h3>
    </div>
  );
}

function Name(props) {
  return (
    <span>{props.name}</span>
  );
}

function Surname(props) {
  return (
    <span>{props.surname}</span>
  );
}


function User(props) {
  // let surname;
  // if(props.surname){
  //   surname = props.surname;
  // }
  // else{
  //   surname='no surname';
  // }

  return (
    <div >
      <h3>Hello, I am <Name name={props.name} /> <Surname surname={props.surname || 'no surname'} />, and I am {props.age}!</h3>
      <a href={props.href}>Go to Google</a>
    </div>

  );
}

const fruits = [
  {
    name: 'apple',
    price: '2$',
    desc: 'Aples from Armenia',
    icon: '🍏'
  },
  {
    name: 'banana',
    price: '2.2$',
    desc: 'Fresh bananas from from Ecuador',
    icon: '🍌'
  },
  {
    name: 'lemons',
    price: '3$',
    desc: 'Golden lemons',
    icon: '🍋'
  },
  {
    name: 'avocado',
    price: '4$',
    desc: 'Fresh avocados',
    icon: '🥑'
  },
];

function App() {
  console.log(fruits)

  const li = fruits.map((fruit, index) => {
    return <li key={index}>
      <Product
        icon={fruit.icon}
        name={fruit.name}
        price={fruit.price}
        description={fruit.desc}
      />
    </li>

  });

  console.log('li', li);
  // const li = [
  //   <li key={'sdfsdf'}>{fruits[0]}</li>,
  //   <li key={'dsfsg'}>{fruits[1]}</li>,
  //   <li key={'asdasd'}>{fruits[2]}</li>,
  //   <li key={'oiuytr'}>{fruits[3]}</li>
  // ];

  return (
    <div className="App">
      <Input />


      <header className={"App-header"}>

        <ol>
          {li}
        </ol>
        {/*
                <div>
        <Product
            name='banana '
            price='2$'
            description='Fresh bananas from Ecuador'
          />
          <br/>
        </div>

        <div>
        <Product
            name='apple '
            price='4$'
            description='Fresh bananas from Ecuador'
          />
          <br/>
        </div>

        <Greeting /> 

        <User
         name='Alex'
          age={25}
          surname='Doe'
        />

        <User
          name='John'
          age={38}
          surname='Smith'
        />

        <User
          name='Sarah'
          age={46}
          href='https://google.com'
        />

      

        <Counter 
        title='The counter N1'
        defaultValue={50}/>
  */}
      </header>
    </div>
  );
}



export default App;
