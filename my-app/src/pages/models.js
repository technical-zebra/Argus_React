import item1 from "../Images/Item1.jpg";
import item2 from "../Images/Item2.jpg";
import item3 from "../Images/Item3.jpg";
import item4 from "../Images/Item4.jpg";
import item5 from "../Images/Item5.jpg";
import character1 from "../Images/Character1.jpg";
import character2 from "../Images/Character2.jpg";
import character3 from "../Images/Character3.jpg";
import character4 from "../Images/Character4.png";
import character5 from "../Images/Character5.jpg";
import environment1 from "../Images/Environment1.jpg";
import environment2 from "../Images/Environment2.jpg";
import environment3 from "../Images/Environment3.jpg";
import environment4 from "../Images/Environment4.jpg";
import environment5 from "../Images/Environment5.jpg";
import environment6 from "../Images/Environment6.jpg";
import environment7 from "../Images/Environment7.jpg";
import environment8 from "../Images/Environment8.png";
import environment9 from "../Images/Environment9.png";
import environment10 from "../Images/Environment10.jpg";
import architecture1 from "../Images/Architecture1.png";
import architecture2 from "../Images/Architecture2.png";
import architecture3 from "../Images/Architecture3.png";
import architecture4 from "../Images/Architecture4.jpg";
import architecture5 from "../Images/Architecture5.jpg";
import architecture6 from "../Images/Architecture6.png";
import architecture7 from "../Images/Architecture7.jpg";
import architecture8 from "../Images/Architecture8.jpg";
import Gallery from "../components/gallery";

function Models() {
  return (
    <div>
      <div className="row justify-content-center">
        <div className="d-flex justify-content-center home-col" id="Characters">
          <Gallery
            title="Characters"
            images={[character1, character2, character3, character4, character5]}
            bgcolor="#FFFFFF"
          />
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="d-flex justify-content-center home-col" id="Items">
          <Gallery
            title="Items"
            images={[item1, item2, item3, item4, item5]}
            bgcolor="#FFFFFF"
          />
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="d-flex justify-content-center home-col" id="Environment">
          <Gallery
            title="Environment"
            images={[environment1, environment2, environment3, environment4, environment5, environment6, environment7, environment8, environment9, environment10]}
            bgcolor="#FFFFFF"
          />
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="d-flex justify-content-center home-col" id="ArchitecturalVisualization">
          <Gallery
            title="Architectural Visualization"
            images={[architecture1, architecture2, architecture3, architecture4, architecture5, architecture6, architecture7, architecture8]}
            bgcolor="#FFFFFF"
          />
        </div>
      </div>
    </div>
  );
}

export default Models;
