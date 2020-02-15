import React, {Component} from 'react';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Mission from './components/Mission';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';

class App extends Component
{
    render ()
    {
        return(
           <div className="App">
               {/* <Greet name="Peter Mwangi" heroName ="Mwanga">
                   <p>Peter Mwangi is awesome, repeat till you get it.</p>
               </Greet>
               <Greet name="Ayatollah Khomeini" heroName ="Rohoullah">
                   <button>Click Me</button>
               </Greet>
               <Greet name="Ayatollah Khamenei" heroName ="Sayyed">
                   <a href ="#">This is a link</a>
               </Greet>

               <Welcome name ="Peter Mwangi" workOccupation ="Programmer"/>
               <Welcome name ="Sharon Njuki" workOccupation ="Lawyer"/>
               <Welcome name ="Anthony Gakugi" workOccupation ="Doctor"/>


               <Hello name = "Peter"/>
               <Hello name="Ali"/>
               <Hello name="Khomeini"/> */}

               {/* <Message /> */}

               {/* <Counter /> */}

               {/* <FunctionClick /> */}

               {/* <ClassClick /> */}

               {/* <EventBind /> */}

               <ParentComponent />

           </div>
        );
    }
}
export default App;