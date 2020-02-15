import React, {Component} from 'react';

class Mission extends Component
{
    render()
    {
        return(
            <div className="App">
                
                   
                   <fieldset>
                       <legend>Contact details form</legend>
                       First Name: <input type="text" name ="firstName" placeholder="First Name"/>
                       Last Name: <input type="text" name ="lastName" placeholder="Last Name"/>
                       Email: <input type="email" name ="email" placeholder="Email"/>
                       Password: <input type="password" name ="password" placeholder="Password"/>
                       <br></br>
                       <br></br>
                       <input type="submit"  value="Submit"/>
                   </fieldset>
            </div>
        );
    }
}
export default Mission;