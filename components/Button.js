export default function Button({ onClick, children }) {
    return <button onClick={onClick}>
        {children}
        <style jsx>{`
            button {
                text-transform: uppercase;
            
                transition: box-shadow 0.1s ease-out 0s;
                color: blue;
                background: white;
                border: 1px solid #aaa;
                border-radius: 3px;
                margin: .3rem;
                padding: .5rem 1rem;
            }
    
            button:hover {
                box-shadow: 0 2px 3px rgba(0,0,0,0.2);
            }
    
            button:active {
                box-shadow: 0 3px 5px rgba(0,0,0,0.4);
            }
        `}</style>
    </button>;
}