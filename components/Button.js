import { colors } from '../theme';


export default function Button({ onClick, children, buttonStyle = 'outline' }) {
  return (
    <button className={buttonStyle} onClick={onClick} type="button">
      {children}
      <style jsx>
        {`button {
          text-transform: uppercase;
          
          transition: box-shadow 0.1s ease-out 0s;
          color: ${colors.primary};
          background: rgba(0, 0, 0, 0);
          border: 1px solid ${colors.primary};
          border-radius: 3px;
          margin: .3rem;
          padding: .5rem 1rem;
        }
        
        button:hover {
          box-shadow: 0 2px 3px rgba(0,0,0,0.2);
        }
        
        button:active {
          background: ${colors.primaryLigher};
          box-shadow: 0 3px 5px rgba(0,0,0,0.4);
        }

        .text {
          border: none;
          box-shadow: none;
        }

        .text:hover, .text:active {
          box-shadow: none;
          background: ${colors.primaryLigher};
        }
      `}
      </style>
    </button>
  );
}
