import { Fragment } from 'react';

export default function ListItem({ children }) {
  return (
    <Fragment>
      <li>
        {children}
      </li>
      <style jsx>
        {`
          li {
            display: flex;
            flex-direction: row;
            align-items: center;
            margin: 0px -12px;
            padding: 4px 12px;
          }

          li:hover {
            background: #f0f0f0;
          }
        `}
      </style>
    </Fragment>
  );
}
