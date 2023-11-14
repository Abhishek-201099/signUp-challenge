import { useForm } from "react-hook-form";
import CtaForm from "../features/cta/CtaForm";
import CtaHeading from "../features/cta/CtaHeading";
import CtaList from "../features/cta/CtaList";
import CtaListItem from "../features/cta/CtaListItem";
import CtaPara from "../features/cta/CtaPara";
import { useNavigate } from "react-router-dom";

export default function SignUpPage() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  function onSubmit(data) {
    navigate(`/signup-success/${data.email}`);
    reset();
  }

  return (
    <div className="container-cta">
      <div className="cta-text-container">
        <CtaHeading>Stay updated!</CtaHeading>
        <CtaPara>
          Join 60,000+ product managers receiving monthly updates on:
        </CtaPara>
        <CtaList>
          <CtaListItem>
            <img src="./public/images/icon-list.svg" alt="list icons" />
            <span>Product discovery and building what matters</span>
          </CtaListItem>
          <CtaListItem>
            <img src="./public/images/icon-list.svg" alt="list icons" />
            <span>Measuring to ensure updates are a success</span>
          </CtaListItem>
          <CtaListItem>
            <img src="./public/images/icon-list.svg" alt="list icons" />
            <span>And much more!</span>
          </CtaListItem>
        </CtaList>
        <CtaForm onSubmit={handleSubmit(onSubmit)}>
          <div className="cta-label">
            <label htmlFor="email">Email address</label>
            <p>{errors?.email?.message}</p>
          </div>
          <input
            type="email"
            id="email"
            placeholder="email@company.com"
            className={errors?.email?.message ? "input-error" : ""}
            {...register("email", {
              required: "Your email is required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Please enter a valid email",
              },
            })}
          />
          <button type="submit">Subscribe to monthly newsletter</button>
        </CtaForm>
      </div>
      <div className="cta-img-container">
        <img
          src="./public/images/illustration-sign-up-desktop.svg"
          alt="cta-img"
        />
      </div>
    </div>
  );
}
