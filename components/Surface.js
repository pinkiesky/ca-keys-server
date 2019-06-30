import { colors } from '../theme';

export default function Surface({ children }) {
  return (
    <div className="surface">
      {children}
      <style jsx>
        {`
          .surface {
            padding: 12px;
            margin: 8px;
            border: 1px solid #ccc;
            border-radius: 3px;
            background: ${colors.surface};
            box-shadow: 0 1px 2px rgba(0,0,0,0.1);
          }
      `}
      </style>
    </div>
  );
}
