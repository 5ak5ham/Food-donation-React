import Base from "../Components/Base";
import "./about.css";
import download from "../images/download.jpeg";
import download2 from "../images/download2.jpeg";
import th from "../images/th.jpeg";

function About() {
  return (
    <Base>
      <div id="services">
        <div class="box">
          <img src={download2} alt="" />
          <h2 class="Secondary-center">Mission</h2>
          <p class="center">
            "To combat food waste and alleviate hunger, our mission is to create
            an inclusive online platform that bridges the gap between surplus
            food providers and those facing food insecurity. We strive to
            empower communities to share resources, foster compassion, and build
            a sustainable future."
          </p>
        </div>
        <div class="box">
          <img src={download} alt="" />
          <h2 class="Secondary-center">Vision</h2>
          <p class="center">
            "Our vision is to cultivate a world where no one goes hungry, and
            where surplus food is a catalyst for positive change. Through our
            website, we aim to establish a thriving network that not only
            redistributes excess food but also promotes awareness about
            sustainable consumption. Together, we envision building a
            compassionate community dedicated to eradicating hunger and
            minimizing food waste."
          </p>
        </div>
        <div class="box">
          <img src={th} alt="" />
          <h2 class="Secondary-center">Achievements</h2>
          <p class="center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            incidunt aperiam suscipit id porro est laboriosam dignissimos dolore
            quod repellendus voluptatum officia fugit nulla nostrum sint hic
            neque, itaque voluptate!
          </p>
        </div>
      </div>
    </Base>
  );
}

export default About;
