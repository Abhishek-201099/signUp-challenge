export default function CtaForm({ children, onSubmit }) {
  return (
    <form className="cta-form" onSubmit={onSubmit}>
      {children}
    </form>
  );
}
