'use client';

import Image from 'next/image';
import styles from './page.module.css';
export default function Home() {
  return (
    // style tag
    <>
      <style jsx>{`
        .form-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background-color: #7ef7a5;
        }
        .form {
          display: flex;
          flex-direction: column;
          gap: 10px;
          background-color: #ffffff;
          padding: 30px;
          width: 450px;
          border-radius: 20px;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
            Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
          align-self: center;
        }

        .form button {
          align-self: flex-end;
        }

        .flex-column > label {
          color: #151717;
          font-weight: 600;
        }

        .inputForm {
          border: 1.5px solid #ecedec;
          border-radius: 10px;
          height: 50px;
          display: flex;
          align-items: center;
          padding-left: 10px;
          transition: 0.2s ease-in-out;
        }

        .input {
          margin-left: 10px;
          border-radius: 10px;
          border: none;
          width: 100%;
          height: 100%;
        }

        .input:focus {
          outline: none;
        }

        .inputForm:focus-within {
          border: 1.5px solid #2d79f3;
        }

        .flex-row {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 10px;
          justify-content: space-between;
        }

        .flex-row > div > label {
          font-size: 14px;
          color: black;
          font-weight: 400;
        }

        .span {
          font-size: 14px;
          margin-left: 5px;
          color: #2d79f3;
          font-weight: 500;
          cursor: pointer;
        }

        .button-submit {
          margin: 20px 0 10px 0;
          background-color: #151717;
          border: none;
          color: white;
          font-size: 15px;
          font-weight: 500;
          border-radius: 10px;
          height: 50px;
          width: 100%;
          cursor: pointer;
        }

        .p {
          text-align: center;
          color: black;
          font-size: 14px;
          margin: 5px 0;
        }

        .btn {
          margin-top: 10px;
          width: 100%;
          height: 50px;
          border-radius: 10px;
          display: flex;
          justify-content: center;
          align-items: center;
          font-weight: 500;
          gap: 10px;
          border: 1px solid #ededef;
          background-color: white;
          cursor: pointer;
          transition: 0.2s ease-in-out;
        }

        .btn:hover {
          border: 1px solid #2d79f3;
        }
      `}</style>
      <div className="form-container">
        <form className="form">
          <div className="flex-column">
            <label>Email </label>
          </div>
          <div className="inputForm">
            <input
              placeholder="Enter your Email"
              className="input"
              type="text"
            />
          </div>

          <div className="flex-column">
            <label>Password </label>
          </div>
          <div className="inputForm">
            <input
              placeholder="Enter your Password"
              className="input"
              type="password"
            />
          </div>

          <span className="span">Forgot password?</span>

          <button className="button-submit">Sign In</button>
        </form>
      </div>
    </>
  );
}
