import { Fragment } from 'react';
import css from 'styled-jsx/css';


const style = css`
input[type=text] {
    border-radius: 3px 3px 0px 0px;
    padding: .5rem;
    background-color: #eee;
    border: none;
    border-bottom: 2px solid gray;
}

input[type=text]:focus {
    border-bottom: 2px solid blue;
}`;


export default function TextInput(props) {
  return (
    <Fragment>
      <input {...props} type="text" />
      <style jsx>{style}</style>
    </Fragment>
  );
}
