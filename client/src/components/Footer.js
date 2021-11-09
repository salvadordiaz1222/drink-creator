import react from "react";
import tachyons from "tachyons";

export default function Footer() {
  return (
    <footer className="pv4 ph3 ph5-m ph6-l mid-gray">
      <small className="f6 db tc">
        © 2021 <b className="ttu">The Drink Creator</b>.
      </small>
      <div className="tc mt3">
        <a href="#" title="Terms" className="f6 dib ph2 link mid-gray dim">
          Terms
        </a>
      </div>
    </footer>
  );
}
