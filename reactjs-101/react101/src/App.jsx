import { useState, useRef, useEffect } from "react"; // hock
import "./App.css";
import Students from "./Students";
import Counter from "./Counter";

function App() {
  let name = "Mhulo";
  let age = 39;
  let gender = "Male";
  let a = 2024;
  let b = 1;
  let commonPasswords = ["password", "password123", "whyme", "me"];
  let tries = 5;

  // use useState hocks
  const [phoneNumber, setPhoneNumber] = useState(611);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [errorH, setErrorH] = useState("");
  const [phoneErr, setPhoneErr] = useState("");
  const [passErr, setPassErr] = useState("");

  // use ref
  const passwordRef = useRef(null);
  const phoneRef = useRef(null);
  const errorHRef = useRef(null);
  const btnRef = useRef(null);

  function sum(a, b) {
    return a + b;
  }

  function handleClickEvent(e) {
    e.preventDefault();
    console.log(phoneNumber);
    if (
      phoneNumber.length != 9 ||
      password.length < 6 ||
      commonPasswords.includes(password) ||
      password == phoneNumber
    ) {
      console.log();
      setError("You shall not pass.");
      console.log("You shall not pass!");
    } else {
      setError("");
      console.log("Form Validated!");
    }
  }

  function mouseEnter() {
    console.log("Mouse IN");
  }

  function mouseLeave(e) {
    console.log("Mouse Out");
  }

  function handlePhoneChange(e) {
    // extract password
    setPhoneNumber(e.target.value);
  }

  function handlePasswordChange(e) {
    // extract value
    setPassword(e.target.value);
  }

  // home work
  function handleFormValidation(e) {
    e.preventDefault();
    tries--;
    errorHRef.current.style.color = "white";
    if (
      phoneNumber.length != 9 ||
      password.length < 6 ||
      commonPasswords.includes(password) ||
      password === phoneNumber
    ) {
      setErrorH("");
      // check if the form data macth the rules
      // Send specific feedbacks
      if (phoneNumber.length != 9) {
        setPhoneErr("Phone Number must be 9 digits");
        isInputPhoneError(true);
      } else {
        setPhoneErr("");
        isInputPhoneError(false);
      }
      if (
        password.length < 6 ||
        commonPasswords.includes(password) ||
        password === phoneNumber
      ) {
        if (password.length < 6) {
          setPassErr("Password must have at least 6 characters\n");
          isInputPasswordError(true);
        }
        if (commonPasswords.includes(password)) {
          setPassErr("Password can not be " + password);
          isInputPasswordError(true);
        }
        if (password === phoneNumber) {
          setPassErr("Password must be different from " + password);
          isInputPasswordError(true);
        }
      } else {
        setPassErr("");
        isInputPasswordError(false);
      }
      if (tries <= 0) {
        tries == 0;
        setErrorH("Attempt limits reach!");
        errorHRef.current.style.backgroundColor = "red";
        btnRef.current.disabled = true;
      }
    } else {
      tries = 5;
      setPhoneErr("");
      setPassErr("");
      setErrorH("Form successfully validated!");
      errorHRef.current.style.backgroundColor = "green";
    }
  }

  function isInputPhoneError(status) {
    if (status == false) {
      phoneRef.current.style.border = "none";
      return false;
    } else {
      phoneRef.current.style.border = "3px solid red";
      return true;
    }
  }

  function isInputPasswordError(status) {
    if (status === false) {
      passwordRef.current.style.border = "none";
      return false;
    } else {
      passwordRef.current.style.border = "3px solid red";
      return true;
    }
  }

  return (
    <>
      <h1>Hello RRN24 </h1>
      <h2>1. VARIABLES</h2>
      <div>
        <p>My name is {name}</p>
        <p>My age is {age}</p>
        <p>My genre is {gender}</p>
      </div>
      <hr />

      <h2>2. ARITHMETIC OPERATIONS</h2>
      <div>
        <p>Next year will be {sum(a, b)}</p>
      </div>
      <hr />

      <h2>3. Events</h2>
      <form>
        <span>{error}</span>
        <div>
          <span>
            Phone: <input onChange={handlePhoneChange} />
          </span>
          <br />
          <span>
            Password: <input type="password" onChange={handlePasswordChange} />
          </span>
        </div>
        <button
          onClick={handleClickEvent}
          onMouseEnter={mouseEnter}
          onMouseLeave={mouseLeave}
        >
          Login
        </button>
      </form>
      <hr />

      <h2>4. Component</h2>
      <Students name="Mhulo" matricule="RRN24-200" />
      <Students name="Djiotsa" matricule="RRN24-201" />
      <Students name="Djouake" matricule="RRN24-300" />
      <Students name="Christian" matricule="RRN24-400" />
      <Students name="Daryn" matricule="RRN24-301" />
      <hr />

      <h3>Home Task</h3>
      <div className="home-task">
        <span ref={errorHRef}>{errorH}</span>
        <form>
          <small>{phoneErr}</small>
          <div id="phone" ref={phoneRef}>
            <span>Phone Number:</span>
            <input
              placeholder="enter phone number"
              onChange={handlePhoneChange}
            />
          </div>
          <small>{passErr}</small>
          <div id="pass" ref={passwordRef}>
            <span>Password:</span>
            <input
              placeholder="Enter password"
              type="password"
              onMouseOver={handlePasswordChange}
              onChange={handlePasswordChange}
            />
          </div>

          <div className="submit">
            <button id="submitH" ref={btnRef} onClick={handleFormValidation}>
              Login
            </button>
          </div>
        </form>
      </div>
      <hr />

      <div>
        <h2>5. useEffect</h2>
        <Counter />
      </div>
    </>
  );
}

export default App;
