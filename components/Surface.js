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
            border: 1px solid #aaa;
            border-radius: 3px;
            background: ${colors.surface};
          }
      `}
      </style>
    </div>
  );
}
