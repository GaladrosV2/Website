import { useContext } from "react";
import { gameContext } from "../../Context/context";
function Header() {
  return (
    <header>
      <div className="welcome">
        <h2>Web developer - freelancer, lives here</h2>
        <button className="pulse">Click</button>
      </div>
      <img
        src="https://media.discordapp.net/attachments/1080489199297364059/1081670472145567855/Galadros_Canadian_mountains_hit_by_a_lightning_clouds_make_a_sw_4210cc07-8918-4541-985c-d80d59386956.png?width=1172&height=669"
        alt="Link corrupted"
      />
    </header>
  );
}

export default Header;
