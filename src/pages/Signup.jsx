import axios from 'axios';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

function Signup() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('http://localhost:8080/users', data)
      alert('User registered successfully');
      location.assign('/Signin')
    } catch (error) {
      alert('Error:', error.response ? error.response.data : error.message)
    }
  };

  return (
    <div className="body">
    <img className="w" src="/img/Vector (16).png" alt="" />
    <img className="w" src="/img/Vector (17).png" alt="" />
    <div className="wrap">
      <div className="left">
        <form onSubmit={handleSubmit(onSubmit)} style={{ paddingBlock: "40px 0" }}>
          <h2 style={{ marginBlock: "0px 30px" }}>Welcome!</h2>
          <div className="input_box">
            <input
              placeholder="name"
              {...register('name', {
                required: true,
                pattern: /^[A-Za-z\s]+$/,
              })}
              style={{
                border: errors.name ? '2px solid red' : 'none',
              }}
            />
            <div className="circle">
              <img src="/img/Group 2 (3).png" alt="" />
            </div>

            <input
              placeholder="surname"
              {...register('surname', {
                required: true,
                pattern: /^[A-Za-z\s]+$/,
              })}
              style={{
                border: errors.surname ? '2px solid red' : 'none',
              }}
            />
            <div
              style={{
                cursor: "pointer",
                position: "absolute",
                zIndex: 111,
                top: "168px",
                left: "15px",
                width: "35px",
                height: "35px",
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                border: "2px solid #5fb2ff",
              }}
            >
              <img src="/img/Group 2 (3).png" alt="" />
            </div>

            <input
              placeholder="email"
              type="email"
              {...register('email', {
                required: true,
                pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              })}
              style={{
                border: errors.email ? '2px solid red' : 'none',
              }}
            />
            <div
              style={{
                cursor: "pointer",
                position: "absolute",
                zIndex: 111,
                top: "90px",
                left: "15px",
                width: "35px",
                height: "35px",
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                border: "2px solid #5fb2ff",
              }}
            >
              <img src="/img/Group 2 (3).png" alt="" />
            </div>

            <input
              name="password"
              placeholder="password"
              type="password"
              {...register('password', {
                required: true,
                pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
              })}
              style={{
                border: errors.password ? '2px solid red' : 'none',
              }}
            />
            <div
              style={{
                cursor: "pointer",
                position: "absolute",
                zIndex: 111,
                top: "245px",
                left: "15px",
                width: "35px",
                height: "35px",
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                border: "2px solid #5fb2ff",
              }}
            >
              <img src="/img/Vector (15).png" alt="" />
            </div>
          </div>
          <div style={{ paddingBlock: "40px" }} className="buttons">
            <button type="submit">SIGN UP</button>
            <Link to={"/signin"}>
              <button
                style={{
                  background:
                    "linear-gradient(271.88deg, #3887fe 4.26%, #3ba0ff 51.37%, #5fb2ff 99.01%)",
                  border: "none",
                  color: "white",
                  padding: "10px 20px",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                SIGN IN
              </button>
            </Link>
          </div>
          <div className="Forgot">
            <a href="#">Forgot your password?</a>
          </div>
        </form>
        <img className="one" src="/img/Polygon 2.svg" alt="" />
        <img className="two" src="/img/Rectangle 8.svg" alt="" />
        <img className="three" src="/img/Polygon.svg" alt="" />
      </div>
      <div className="right">
        <h1>valuet</h1>
        <div className="tire"></div>
        <h4>Your currency dashboard</h4>
      </div>
    </div>
  </div>
  );
}

export default Signup;
