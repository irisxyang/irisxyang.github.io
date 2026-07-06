import "./blogstyle.css";

export default function SiteUpdate() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <p>
        I've had this site for a while, and frankly have not been particularly
        diligent about keeping it up to date. Recently, I decided that I wanted
        to update this site--change up the whole theme, add some more features,
        etc. etc. Specifically, I settled on a few loose goals:
      </p>
      <ol style={{ margin: 0, padding: "0 20px" }}>
        <li>Simplify and modernize the UI.</li>
        <li>Add a blog page for writing pieces like this!</li>
        <li>Comprehensively update all information on the site.</li>
        <li>Bonus: Accommodate for viewing on mobile UI.</li>
      </ol>
      <p>Below is a screenshot of what my site used to look like.</p>
      <img src="/blog_images/2026-07-oldsite.png" alt="old site" />
      <p>
        I was doing some research on personal sites and stumbled upon this one
        from <a href="https://www.sj.land/">SJ Zhang</a>. I really love the
        clean UI and the addition of the sidebar, which allowed for more
        flexibility in adding subcategories to my site compared to a typical
        top-aligned NavBar. This new version of my site is heavily inspired by
        this design (with some personal touches).
      </p>
      <p>Below is a summary of the major updates I made:</p>
      <ul
        style={{
          margin: 0,
          padding: "0 20px",
          display: "flex",
          flexDirection: "column",
          gap: "8px",
        }}
      >
        <li>
          <strong>Switching from a NavBar to a SideBar:</strong> As mentioned
          previously, I like the flexibility that a sidebar offers while still
          looking clean and uncluttered.
        </li>
        <li>
          <strong>Separate Pages for Different Sections:</strong> Previously, my
          home page contained all relevant information. However, I wanted
          options to add more in-depth information about projects without having
          to cram everything onto one page. Also, I've been wanting to start
          doing more blog-style writing! Most of my writing is in the form of
          haphazard scrawling in my Moleskine notebook or furiously typed dumps
          in my Notes app. Super excited to have a medium where I am encouraged
          to be a bit more intentional with my words, as well as explore some
          new CSS/formatting possibilities with this new feature!
        </li>
        <li>
          <strong>A New Font:</strong> The first major UI switch that I made was
          the switch to a sans-serif font.{" "}
          <span className="line">
            This was a tough one--I had originally opted for a serif font
            because I prefer the way that my name looks in serif.
            <span className="line__popup">
              Fun fact: Every time I write anything in a Google Doc, I set the
              font to Times New Roman 11pt (NOT 12pt).
            </span>
          </span>{" "}
          Specifically, I like how the "I" has the top and bottom serifs, which
          clearly distinguishes the character from a lowercase "L". I actually
          spent an embarrassingly long time trying to figure out what font to
          use. My options included Roboto, Inter, Arial, Helvetica, and an
          assortment of more niche sans serif Google fonts such as Barlow,
          Figtree, Google Sans, Instrument Serif, and Archivo Narrow. I won't
          lie, they all sort of look the same. In the end, I settled on Inter
          Tight.
        </li>
        <li>
          <strong>Clean, Modern UI:</strong> To pair with my shiny new sans
          serif font, I wanted the site to match the modern vibe. I knew I
          wanted modular-looking components that could be reused across pages,
          and a simple color scheme.{" "}
          <span className="line">
            Following my inspiration site, I also added a light/dark mode
            feature that would update theme colors accordingly.{" "}
            <span className="line__popup">
              I actually never really opt for dark mode on any of my devices
              (unless it happens to be the default). While the dark mode theme
              coloring is definitely easier on the eyes, it honestly just never
              looks as... cohesive as the light mode colors. My theory is that
              it has something to do with Gestalt-adjacent properties--for
              example, it doesn't make sense intuitively to have
              borders/outlines that are *lighter* than the panels.
            </span>{" "}
          </span>
          I am particularly proud of the hero banner on the home page that
          transitions from sunrise colors to sunset colors depending on the site
          theme. Just thought it was a nice touch :)
        </li>
      </ul>

      <p>
        These are the changes I have made so far--I am planning to continue
        revamping this site and work on some of the UI details such as resizing.
        Still haven't gotten around to figuring out mobile UIs yet--that's a
        very new territory for me, so we'll see how it goes! For now, I'm super
        happy with the progress that I have made.{" "}
      </p>
    </div>
  );
}
