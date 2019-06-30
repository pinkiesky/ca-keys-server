import Surface from './Surface';

export default function withSurface(Wrapped) {
  return props => (
    <Surface>
      <Wrapped {...props} />
    </Surface>
  );
}
