import React from 'react'

const Navigation = () => {
  
  return (
    <header className='navbar'>
        <div className='container'>
            <ul>
                <li>Personal</li>
                <li>NRI</li>
                <li>Business</li>
                <li>Corporate</li>
            </ul>

        </div>
        <div class="dropdown">
  <button class="dropbtn" onclick="myFunction()">Investor Relations
    <i class="fa fa-caret-down"></i>
  </button>
  <div class="dropdown-content" id="myDropdown">
    <a href="#">Annual Reports</a>
    <a href="#">Investor Presentations</a>
    <a href="#">Quaterly Results</a>
    <a href="#">Notice</a>
    <a href="#">Investor Contact</a>
  </div>
  </div> 

    </header>
  )
}

export default Navigation