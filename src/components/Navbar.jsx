import React from 'react'

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav container">
                        <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="/about">About Us</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link active" href="/product">Product</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link active" href="/transaction">Transaction</a>
                        </li>
                    </ul>
                </div>
            </div>
            </nav>
        </div>
    )
}
