import { useForm } from "react-hook-form";
import "./index.scss";

const Subscribe = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // handle form submission
  };

  return (
    <div className="Subscribe">
      <div className="CustomContainer">
        <div className="SubsCribeInfo">
          <div className="SubsCribeInfoContainer">
            <h4>Newsletter</h4>
            <p>
              Subscribe to our newsletter and get 20% off your first purchase
            </p>
          </div>
        </div>
        <div className="SubscribeForm">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="SubscribeFormContainer">
              <div className="inputContainer">
                <input
                  type="email"
                  placeholder="Your email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                      message: "Invalid email address",
                    },
                  })}
                />
                {errors.email && (
                  <p className="error-message">{errors.email.message}</p>
                )}
              </div>
              <button type="submit">Subscribe</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
