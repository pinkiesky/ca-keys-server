import { Fragment } from 'react';
import ListItem from './ListItem';


export default function List({ children }) {
  return (
    <Fragment>
      <ul>
        {children}
      </ul>
      <style jsx>
        {`
        ul {
          width: 100%;
          list-style: none;
          padding: 0;
          margin: 8px 0px;
        }
        `}
      </style>
    </Fragment>
  );
}

export { ListItem };
