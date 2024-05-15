import React from 'react';
import { NavLink } from 'react-router-dom';
// import Button from 'react-bootstrap/Button';

function Issue_create() {
  return (
    <div>
      <div className="header">
        <h1 id="hd">Action Plan</h1>
      </div>

      <div className="main">
        <div className="head1">
          <p>
            <link rel="stylesheet" href="" />Manual for Unit Role /
          </p>
          <p>
            <link rel="stylesheet" href="" />Manual for ORM Role{' '}
          </p>
        </div>
        <div className="tables">
          <div className="table1">
            <div className="head">
              <div className="Open_issue">
                <div className="vr_line"></div>
                <div className="l">Open Issue Dashboard</div>
              </div>
              <div className="r">
                <button className="report">Report</button>
                <button className="export">Export Open Issues</button>
                <NavLink to={'/addopen'}>
                  <button className="add">+Add Open Point</button>
                </NavLink>
              </div>
            </div>
            <div className="T">
              <div className="top">
                <div className="le">
                  <p>Show</p>
                  <select name="" id="">
                    {[...Array(20).keys()].map((index) => (
                      <option key={index} value="">
                        {index + 1}
                      </option>
                    ))}
                  </select>
                  <p>entries</p>
                </div>
                <div className="ri">
                  <p>Search</p>
                  <input type="text" name="" id="" />
                </div>
              </div>
              <div className="mainT">
  <table border={1} className="tableT">
    <thead>
      <tr>
        <th rowspan="3">Business Unit</th>
      </tr>
      <tr>
        <th colspan="2">OR Events</th>
        <th colspan="2">RCSA</th>
        <th colspan={2}>RA</th>
        <th colspan={2}>ORMC</th>
        <th colspan={2}>VRR</th>
        <th colspan={2}>PPAC</th>
        <th colspan={3}>Total</th>
      </tr>
      <tr>
        <th>Overdue</th>
        <th>Not Overdue</th>
        <th>Overdue</th>
        <th>Not Overdue</th>
        <th>Overdue</th>
        <th>Not Overdue</th>
        <th>Overdue</th>
        <th>Not Overdue</th>
        <th>Overdue</th>
        <th>Not Overdue</th>
        <th>Overdue</th>
        <th>Not Overdue</th>
        <th>Overdue</th>
        <th>Not Overdue</th>
        <th>Total</th>
      </tr>
      <tr>
        <td rowspan="2">Branch Banking</td>
        <td rowspan="2">0</td>
        <td rowspan="2">0</td>
        <td rowspan="2">0</td>
        <td rowspan="2">0</td>
        <td rowspan="2">0</td>
        <td rowspan="2">0</td>
        <td rowspan="2">0</td>
        <td rowspan="2">0</td>
        <td rowspan="2">0</td>
        <td rowspan="2">0</td>
        <td rowspan="2">0</td>
        <td rowspan="2">0</td>
        <td rowspan="2">0</td>
        <td rowspan="2">0</td>
      </tr>
      <tr>
        <td>0</td>
      </tr>
      <tr>
        <td rowspan="1">Total</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td rowspan="1.5">0</td>
      </tr>
    </thead>
  </table>
</div>

              <div className="bottom">
                <div className="buttons1">
                  <button>Previous </button>
                  <button className="one">1</button>
                  <button>Next</button>
                </div>
              </div>
            </div>
          </div>
          <div className="table2">
            <div className="My_actionable">
              <div className="vr_line"></div>
              <div className="l">My Actionable</div>
            </div>
            <div className="T">
              <div className="top">
              <div className="le">
                
                    <p>Show</p>
                    <select name="" id="">
                        <option value="">1</option>
                        <option value="">2</option>
                        <option value="">3</option>
                        <option value="">4</option>
                        <option value="">5</option>
                        <option value="">6</option>
                        <option value="">7</option>
                        <option value="">8</option>
                        <option value="">9</option>
                        <option value="">10</option>
                        <option value="">11</option>
                        <option value="">12</option>
                        <option value="">13</option>
                        <option value="">14</option>
                        <option value="">15</option>
                        <option value="">16</option>
                        <option value="">17</option>
                        <option value="">18</option>
                        <option value="">19</option>
                        <option value="">20</option>
                    </select>
                    
                    <p>entries</p>
                    </div>
                <div className="ri">
                  <p>Search</p>
                  <input type="text" name="" id="" />
                </div>
                
              </div>
              <div className="Tab">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th scope="col">Issue ID</th>
                      <th scope="col"> Action ID</th>
                      <th scope="col">Unit</th>
                      <th scope="col">Type of Action</th>
                      <th scope="col">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td colspan="2"></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="Bottom">
          <div className="left">Showing 0 to 0 at 0 entries</div>
          <div className="right">
            <button>Previous</button>
            <button>Next</button>
          </div>
        </div>
      </div>

      <div className="footer">
        <h6 id="ft">copyright@2024</h6>
      </div>
    </div>
  );
}

export default Issue_create;
