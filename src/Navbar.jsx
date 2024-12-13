import React from "react";

export default function Navbar()
{
    return(
        <>
        <nav class="navbar bg-black">
            <div class="p-2">
                <span class="navbar-text text-warning fs-3 fst-italic m-2">
                    Staff management app
                </span>
                <span class="text-warning fs-5 text-start position-relative p-5">Welcome Admin</span>
            </div>
            <button class='m-2 fs-6 btn btn-success'>Login</button>
        </nav>
        </>
    );
};



