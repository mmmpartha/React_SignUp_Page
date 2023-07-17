import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <div class="main">
        <input type="checkbox" id="chk" aria-hidden="true" />
        <div class="signup">
          <form>
            <label for="chk" aria-hidden="true">Sign up</label>
            <input type="text" name="txt" placeholder="Name" required="" />
            <input type="text" name="txt" placeholder="Mobile Number" required="" />
            <input type="email" name="email" placeholder="Email" required="" />
            <input type="password" name="pswd" placeholder="Password" required="" />
            <input type="password" name="pswd" placeholder="Confirm Password" required="" />
            <select name="country" class="select">
              <option>Select</option>
              <option>Chennai</option>
              <option>Madurai</option>
              <option>Tirunelveli</option>
              <option>Tenkasi</option>
            </select>
            <div class="gender">
              <input class="form-check-input" type="radio" name="gender" id="male" />
              <label class="form-check-label" for="flexRadioDefault1">
                Male
              </label>
              <input class="form-check-input" type="radio" name="gender" id="female" />
              <label class="form-check-label" for="flexRadioDefault1">
                Female
              </label>
            </div>
            <button>Sign up</button>
          </form>
        </div>
      </div>
    </div>

  );
}

export default App;
