import { useNavigate, useParams } from "react-router-dom";

export default function SignUpSuccessPage() {
  const { emailId } = useParams();
  const navigate = useNavigate();

  return (
    <div className="success-container">
      <img src="/public/images/icon-list.svg" alt="success icon" />
      <h2 className="success-heading">Thanks for subscribing!</h2>
      <p className="success-text">
        A confirmation email has been sent to{" "}
        <strong>{emailId && emailId}</strong>. Please open it and click the
        button inside to confirm your subscription.
      </p>
      <button
        className="dismiss-btn"
        onClick={() => navigate(-1, { replace: true })}
      >
        Dismiss message
      </button>
    </div>
  );
}
