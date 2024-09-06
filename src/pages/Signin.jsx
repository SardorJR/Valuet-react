import axios from "axios";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

function Signin() {
  
  const { register, handleSubmit, formState: { errors } } = useForm() 

  const onSubmit = async (data) => {
    try {
      const response = await axios.get(`http://localhost:8080/users?email=${data.email}`);
      const user = response.data.find(user => user.password === data.password)
  
      if (user) {
        const token = ''
        localStorage.setItem('authToken', token);
        localStorage.setItem('userName', user.name);
        localStorage.setItem('userEmail', user.email);
        localStorage.setItem('id',user.id)
        
        alert('Success')
        location.assign('/Overview')
      } else {
        alert('Unsuccess');
      }
    } catch (error) {
      alert('Error:', error.response ? error.response.data : error.message);
    }
 
    }
  

  return (
    <div className="body">
    <img className="w" src="/img/Vector (16).png" alt="" />
    <img className="w" src="/img/Vector (17).png" alt="" />
      <div className="wrap">
        <div className="left">
          <form onSubmit={handleSubmit(onSubmit)}>
          <h2>Welcome!</h2>
          <div className="input_box">
            <input   {...register('email', {
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
                  }
                })}
                style={{
                  border: errors.email ? '2px solid red' : 'none',
                }} name="email" placeholder="email" type="text" />
            <div className="circle">
              <img src="/img/Group 2 (3).png" alt="" />
            </div>
            <input  {...register('password', {
                  pattern: {
                    value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
                  }
                })}
                style={{
                  border: errors.password ? '2px solid red' : 'none',
                }} placeholder="password" name="password" type="password" />
            <div className="circle2">
              <img src="/img/Vector (15).png" alt="" />
            </div>
          </div>
          <div className="buttons">
          <Link to={'/signup'}>  <button> SIGN UP</button></Link>
            <button type="submit">SIGN IN</button>
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

export default Signin;
