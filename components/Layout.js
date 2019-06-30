const layoutStyle = {
    margin: 20,
    padding: 20,
    border: '1px solid #DDD'
};
  
const Layout = (props) => (
  <div style={layoutStyle}>
    {props.children}
    <style jsx global>{`
      html, body {
        font-family: -apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Oxygen','Ubuntu', 'Cantarell','Fira Sans','Droid Sans','Helvetica Neue',sans-serif;
        color: #333;
        background-color: #fefefe;
        margin: 0;
        padding: 0;
      }
    `}</style>
  </div>
);

export default Layout;