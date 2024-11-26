import "./NameTag.css";
import keychain from "../assets/MietisKeychain.png";

const NameTag = () => {
  return (
    <section>
      <div className="step3">
        <h2>Add a Keychain</h2>
      </div>
      <div className="nametag">
        <img src={keychain} alt="keychain" />
        <p></p>
        <form className="name-form">
          <label className="input-label">
            <input className="input" type="text" />
          </label>
          <span className="price-check">
            <label class="checkbox">
              <input type="checkbox" checked="false" />
            </label>
            <p>+ € 40, 00</p>
          </span>
        </form>

        <button className="product-overview">PRODUCT OVERVIEW</button>
      </div>
    </section>
  );
};

export default NameTag;
