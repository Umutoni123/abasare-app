import React from "react";
import "../Footer/footer.css";
// import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="tb">
    <table className="my-table">
    <thead >
      <tr className="header-cell">
        <th  id="header1">ABASARE</th>
        <th id="header2">RIDER</th>
        <th id="header3">DRIVER</th>
      </tr>
    </thead>
    <tbody className="t-body">
      <tr>
        <td id="header1">How it works</td>
        <td id="header2">Safety features</td>
        <td id="header3">Community</td>
        
      </tr>
      <tr>
        <td id="header1">Guidelines</td>
        <td id="header2">Cities we’re in</td>
        <td id="header3">Support</td>
      </tr>
      <tr>
        <td id="header1">Partnerships</td>
        <td id="header2">Rider support</td>
        <td id="header3">Requirements</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td>Footer 1</td>
        <td>Footer 2</td>
        <td>Footer 3</td>
      </tr>
    </tfoot>
  </table>
  </div>
    
  );
}
