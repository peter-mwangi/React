import React, {Component} from 'react';

class HighScore extends Component
{
    render()
    {
       if(this.props.overTen)
       {
        return(
            <div>
                <h3>You Beat highscore of 10</h3>

            <button onClick={(e) => this.props.onReset(e)}>Reset</button>
            </div>
        );
       }
       else
       {
           return null;
       }
    }

}
export default HighScore;