import React from 'react';







export default function Form(props) {
    return (
        <div>
            <form>
             <label htmlFor="name">
             Name
             <input type="text" name="name" />
             </label>
             <label htmlFor="email">
             <input type="email" name="email" />
             </label>
             <label htmlFor="password">
             <input type="password" name="password" />
             </label>        
            </form>

        </div>
    )

    
    
}
    
