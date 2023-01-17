/*import {React} from React;
import {ReactDOM} from ReactDOM;
*/

var React = require("react");
var ReactDOM = require("react-dom");

ReactDOM.render(
  <div class="workspace">
    <div class="container">
      <div class="nav-pane">
        <div class="nav-button">
          <div class="nav-button-icon">i</div>
          <div class="nav-button-text">Dashboard</div>
          <div class="nav-button-notification">x</div>
        </div>
        <div class="nav-button">Chats</div>
        <div class="nav-button">Partners</div>
        <div class="nav-button">Tracking</div>
        <div class="nav-button">Requests</div>
        <div class="nav-button">Analysis</div>
        <div class="nav-button">History</div>
      </div>
      <div class="tracking-pane"></div>
      <div class="info-pane"></div>
    </div>
    <div class="footer"></div>
  </div>,
  document.getElementById("root")
);
