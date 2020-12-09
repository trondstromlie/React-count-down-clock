import React, { Component, useState , useRef} from 'react'
import "./components/InfoBox"
import InfoBox from './components/InfoBox';
import "./App.css";

export class App extends Component {
  constructor(props) {

    super(props);
    this.update_clock = this.update_clock.bind(this);

    

    // define the functions in the constructor to initialize the this keyword

    this.state = {
      remaining_time:500000000,
      timer_seconds: [0],
      timer_minutes:[0],
      timer_hours:[0],
      timer_days:[0],
      timer_class: null,
    }
  }
  componentDidMount() {
    this.timer()
    
    document.title = "webinaret starter om ikke så lenge";
  }
  componentDidUpdate() {
    
    
  }
 

  interval;

  update_clock() {
    const { remaining_time } = this.state;

    const days    = Math.floor(remaining_time / (1000 * 60 *60 * 24));
    const hours   = Math.floor((remaining_time % (1000 * 60 * 60 * 24)) / (1000 * 60 *60));
    const minutes = Math.floor((remaining_time % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((remaining_time % (1000 * 60)) /1000);

    
  // Update state
  

  if(this.state.timer_seconds[0] != seconds) {
    this.setState({timer_seconds: [...this.state.timer_seconds, seconds ]});
    setTimeout(()=>{
      this.setState({timer_seconds: [ seconds ]});
    } ,500)
  }
  if(this.state.timer_minutes[0] != minutes) {
    this.setState({timer_minutes : [...this.state.timer_minutes, minutes ]});
    setTimeout(()=>{
      this.setState({timer_minutes: [ minutes ]});
    } ,500)
  }
  if(this.state.timer_hours[0] != hours) {
    this.setState({timer_hours: [...this.state.timer_hours, hours ]});
    setTimeout(()=>{
      this.setState({timer_hours: [ hours ]});
    } ,500)
  }
  if(this.state.timer_days[0] != days) {
    this.setState({timer_days: [...this.state.timer_days, days ]});
    setTimeout(()=>{
      this.setState({timer_days: [ days ]});
    } ,500)
  }
  
  
  
  console.log(this.state);


  this.setState({remaining_time: remaining_time - 1000})
  }

  timer() {
    setInterval(this.update_clock,1000);
  }

  



  render() {


    
    
    const {text_toggle,countDown} = this.state;

    return (
    
        <section className="timer-container ">
          <section className="timer">

            <div>
              {console.log("render")}
              <i className=" mt-4 fab fa-react mr-3 fa-8x timer-icon"></i>
              <h2>Countdown timer</h2>
            
              <p>Buildt in React</p>
              </div>

            <div>
                <section>
                <div id="letterbox"  >{this.state.timer_days.length === 1?<p>{this.state.timer_days[0]} </p> : <p className={this.state.timer_days.length > 1? "animate": "reset" }>{this.state.timer_days[0]}<br></br>{this.state.timer_days[1]}</p> }</div>

                <p><small>days</small></p>
                </section>
                <span>:</span>
                
                <section>
                <div id="letterbox"  >{this.state.timer_hours.length === 1?<p>{this.state.timer_hours[0]} </p> : <p className={this.state.timer_hours.length > 1? "animate": "reset" }>{this.state.timer_hours[0]}<br></br>{this.state.timer_hours[1]}</p> }</div>

                <p><small>Hours</small></p>
                </section>
                <span>:</span>
               
                <section>
                <div id="letterbox"  >{this.state.timer_minutes.length === 1?<p>{this.state.timer_minutes[0]} </p> : <p className={this.state.timer_minutes.length > 1? "animate": "reset" }>{this.state.timer_minutes[0]}<br></br>{this.state.timer_minutes[1]}</p> }</div>

                <p><small>minutes</small></p>
                </section>
                <span>:</span>
                
                <section>
               <div id="letterbox"  >{this.state.timer_seconds.length === 1?<p>{this.state.timer_seconds[0]} </p> : <p className={this.state.timer_seconds.length > 1? "animate": "reset" }>{this.state.timer_seconds[0]}<br></br>{this.state.timer_seconds[1]}</p> }</div>
                <p><small>seconds</small></p>
                </section>

             
            
             
               
            </div>
          </section>
        </section>
    
    
    )
  }
  
}

export default App
