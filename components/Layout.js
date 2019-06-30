import { colors } from '../theme';

const layoutStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  background: colors.background,
  padding: '12px',
};

const Layout = ({ children }) => (
  <div style={layoutStyle}>
    <div style={{ width: '100%', maxWidth: '600px' }}>{children}</div>
    <style jsx global>
      {`html, body {
        font-family: -apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Oxygen','Ubuntu', 'Cantarell','Fira Sans','Droid Sans','Helvetica Neue',sans-serif;
        color: #333;
        background-color: ${colors.background};
        margin: 0;
        padding: 0;
      }`}
    </style>
  </div>
);

export default Layout;
