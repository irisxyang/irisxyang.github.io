import "./Portfolio.css";
import Frame from "../components/Frame";

export default function Portfolio() {
  return (
    <div className="portfolio-container">
      <h1 className="portfolio-title">ART PORTFOLIO</h1>
      <p className="portfolio-description">
        Welcome to my art portfolio! Below are some of the artworks that I've
        done over the years. These pieces include traditional, photography,
        graphic design, and more. I don't specialize in a certain medium,
        although lately I have been doing mostly digital art out of convenience.
      </p>
      <p
        className="portfolio-description"
        style={{ justifyContent: "center", marginBottom: "20px" }}
      >
        Enjoy!
      </p>
      <span className="portfolio-row">
        <Frame
          img="url('/portfolio/mirror.png')"
          title="Media: Graphite"
          width="600px"
          height="750px"
        >
          A self portrait using standard graphite pencil on paper.
        </Frame>
        <div>
          <Frame
            img="url('/portfolio/pixelca.png')"
            title="Media: Digital (Pixel)"
            width="450px"
            height="300px"
          >
            This is a pixel rendition I did of an image I took while on a road
            trip <br />
            in California {"(see below)"}.
          </Frame>
          <Frame
            img="url('/portfolio/pictureca.png')"
            title="Media: Photography"
            width="450px"
            height="300px"
          >
            The original photograph reference for the pixel version above.{" "}
            <br />
          </Frame>
        </div>
      </span>
      <Frame
        img="url('/portfolio/bigsur.png')"
        title="Final Product, Media: Digital"
        width="525px"
        height="700px"
      >
        Below are snapshots of my process for this piece, inspired by sights
        along Big Sur.
      </Frame>
      <h1 className="portfolio-subheading">Work Progression</h1>
      <span className="portfolio-row">
        <Frame
          img="url('/portfolio/bigsur0.png')"
          title="Version 1, Media: Digital"
          width="375px"
          height="500px"
        >
          Starting with a rough sketch of the original reference <br /> to
          identify correct values.
        </Frame>
        <Frame
          img="url('/portfolio/bigsur1.png')"
          title="Version 2, Media: Digital"
          width="375px"
          height="500px"
        >
          Outlined flowers, slowly adding color to background <br /> using tones
          from base sketch.
        </Frame>
        <Frame
          img="url('/portfolio/bigsur2.png')"
          title="Version 3, Media: Digital"
          width="375px"
          height="500px"
        >
          Filling in the color on flowers with a semi-translucent <br />
          effect, again using base sketch as a reference.
        </Frame>
      </span>

      <span className="portfolio-row">
        <div>
          <Frame
            img="url('/portfolio/flower1.png')"
            title="Media: Acrylic"
            width="400px"
            height="300px"
          >
            This is a semi-abstract interpretation of a flower, focusing on{" "}
            <br /> creating shading via defined shapes.
          </Frame>
          <Frame
            img="url('/portfolio/bluescreen.png')"
            title="Media: Digital"
            width="350px"
            height="350px"
          >
            A quick self-portrait inspired by the blue lights of a <br />
            computer screen.
          </Frame>
        </div>
        <Frame
          img="url('/portfolio/eye.png')"
          title="Media: Digital"
          width="600px"
          height="750px"
        >
          This is a digital self-portrait that was displayed in a local art
          exhibition in 2021 spotlighting
          <br />
          local Asian American artists called{" "}
          <a
            href="https://nwasianweekly.com/2021/07/our-culture-our-voice-an-exhibition-to-showcase-art-by-local-asian-american-high-school-students/"
            target="_blank"
            style={{ color: "white" }}
          >
            "Our Culture, Our Voice"
          </a>
          .
        </Frame>
      </span>

      <Frame
        img="url('/portfolio/harvardbridge.PNG')"
        title="Media: Digital (Pixel)"
        width="500px"
        height="500px"
      >
        This final piece was inspired by one of my first days at MIT, watching
        the <br />
        sun rise over the Charles River—also marking the first (of many!)
        traversals
        <br /> across Harvard Bridge.
      </Frame>
    </div>
  );
}
