import React from 'react';
import './App.css';
import { toHaveDisplayValue } from '@testing-library/jest-dom/matchers';




const expensesArray = [];
class App extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      expenses: expensesArray

    };
    this.handleSubmit = this.handleSubmit.bind(this);
    
  }

  handleSubmit(e) {
    e.preventDefault();
    const form=e.target;
    const {expenses} = this.state;
    const formData = new FormData(form);

    this.setState({
        expenses: [...expenses,
          Object.fromEntries(formData.entries())
       
        ]})
        
    

  }
 
//  handleDelete(e){
//   e.preventDefault();
//   const form=e.target;
//   const {expenses} = this.state;
//   this.setState({
//         expenses: [...expenses,
//          formData.delete()
       
//         ]})
//  }
  
  // <td><button className="trash"><i className="fa-solid fa-trash"></i></button></td>
  
  render(){
    const {expenses } = this.state;
    console.log('message',this.state.contacts);
  return (
    <div className="App">
      <div className="row">
        <div className="green header col-2"> </div>
        <div className="green header col-10">
          <h1 className="text-center"> Expense Tracker</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-2" style={{ backgroundColor: "#87AE73" }}>

          <nav className=" navbar navbar-expand-lg bg-body-tertiary lengthFixed ">
            <div className="container-fluid ">

              <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav flex-column green padding ">
                  <h3> Summary</h3>
                  <li className="nav-item">
                    Current Month: <span className="currentMonth output">February </span>
                  </li>
                  <li className="nav-item">
                    Necessary Expenses: <span className="expenses output">$1,167 </span>
                  </li>
                  <li className="nav-item">
                    Income: <span className="income output">$2,000 </span>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <div className="col-10">
          <div className="container d-flex flex-column parent align-items-center">
            {/* this is just a placeholder cause I need to find a program that will help me build a responsive pie chart */}
            <div className="piechart"></div>

            {/* CATEGORY SECTION */}

            <div className=" container d-flex flex-row justify-content-evenly ">
              <div className="rent-category categories d-flex flex-column">
                <div>Rent:</div>
                <div className="rent output">$2,000 </div>
              </div>
              <div className="utilities-category categories  d-flex flex-column">
                <div>Utilities:</div>
                <div className="utilities output">$2,000 </div>
              </div>
              <div className="groceries-category categories  d-flex flex-column">
                <div>Groceries:</div>
                <div className="groceries output">$2,000 </div>
              </div>
              <div className="transportation-category categories  d-flex flex-column">
                <div>Transportation:</div>
                <div className="transportation output">$2,000 </div>
              </div>
              <div className="funAndGames-category categories  d-flex flex-column">
                <div>Fun & Games:</div>
                <div className="funAndGames output">$2,000 </div>
              </div>
              <div className="miscellaneous-category categories  d-flex flex-column">
                <div>Miscellaneous:</div>
                <div className="miscellaneous output">$2,000 </div>
              </div>
            </div>
            {/* END CATEGORY SECTION */}

            {/* INPUT SECTION */}
            <form className="d-flex justify-content-evenly"
                  onSubmit={this.handleSubmit}>
              
              <input 
              placeholder="Date"
              name="date"
              // value={expenses.date}
              //onChange={handleDateChange}
               />
              <label> 
                <select name="category" defaultValue="funAndGames" >
                  <option value="rent">Rent</option>
                  <option value="utilities">Utilities</option>
                  <option value="groceries">Groceries</option>
                  <option value="transportation">Transportation</option>
                  <option value="funAndGames">Fun & Games</option>
                  <option value="miscellaneous">Miscellaneous</option>
                </select>
              </label>
              <input 
              name="amount"
              placeholder="Amount"
              
               />
              <input 
              name="comments"
              placeholder="Comments"
           
              />
<button type='submit'> submit</button>
            </form>
            {/* this is just a placeholder cuase i will probs use useState to build out the table and the data will be stored
    in an array with a map filter creating the table. that way I can delete from the array and it will update the table */}
            <table className="table table-striped expenses-table">
              <thead>
                <tr>
                  <th scope="col">Date</th>
                  <th scope="col">Category</th>
                  <th scope="col">Amount ($)</th>
                  <th scope="col">Comments</th>
                  <th scope="col"> Delete </th>
                </tr>
              </thead>
              <tbody>
              {expenses.map((expenses) =>
              <tr >
                <td> {expenses.date}</td>
                <td> {expenses.category}</td>
                <td> {expenses.amount}</td>
                <td> {expenses.comments}</td>
                <td> <button  className="trash"><i className="fa-solid fa-trash"></i></button></td>
              </tr>
              )}
                
              </tbody>
            </table>
          </div>
        </div>
      </div>

    </div >
  );
}
}
export default App;
