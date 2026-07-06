export type ProjectLink = {
  label: string;
  href: string;
};

// project type
export type Project = {
  id: string;
  title: string;
  overview: string; // ~one sentence summary
  description: string[]; // 2-4 bullets in more detail
  date: string;
  image?: string;
  links?: ProjectLink[];
  tools?: string[];
};

export const projects: Project[] = [
  {
    id: "masters-thesis",
    title:
      "Master's Thesis: Causal Framework for Attribution in Vision Transformers",
    overview:
      "Developed a multi-granularity causal framework for cross-validating ViT interpretability methods.",
    description: [
      "Developed a multi-granularity causal framework for cross-validating ViT interpretability methods",
      "Found propagation-based attribution to be more causally grounded than gradient-based methods",
      "Demonstrated no tradeoff between causal accuracy and perceptual interpretability in ViT attribution",
    ],
    date: "2026-05",
    image: "project_images/masters-thesis2.png",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/irisxyang/irisxyang.github.io",
      },
    ],
    tools: ["PyTorch"],
  },
  {
    id: "plantit",
    title: "PlantIt: Full Stack Team Task Scheduler",
    overview:
      "A project management site that gamifies task completion with cute plants.",
    description: [
      "Designed a task-dependency engine with cycle detection, task prioritization, and completion tracking across linked tasks",
      "Built and shipped the full stack end-to-end, from user research and architecture design through implementation and testing",
      "Modeled many-to-many user–task relationships with a table/timeline view for team-wide scheduling and visibility",
    ],
    date: "2024-12",
    image: "project_images/plantit.png",
    links: [
      { label: "GitHub", href: "https://github.com/irisxyang/plant-it" },
      { label: "Deployed Site", href: "https://plant-it-beta.vercel.app/" },
    ],
    tools: ["TypeScript", "Vite", "MongoDB", "Node.js"],
  },
  {
    id: "threadchef",
    title: "ThreadChef: Agentic LLM Cooking Assistant",
    overview:
      "An LLM scheduling assistant that converts text-based recipes into verified, parallelized cooking schedules.",
    description: [
      "Built and deployed an LLM scheduling assistant that converts text-based recipes into verified, parallelized cooking schedules",
      "Implemented internal Python checks for LLM output to enforce graph-consistency, with corrective re-prompting on failure",
      "Validated extraction against hand-labeled benchmark at 91% classification accuracy",
    ],
    date: "2026-05",
    image: "project_images/threadchef.png",
    links: [
      { label: "GitHub", href: "https://github.com/irisxyang/threadchef" },
      {
        label: "HuggingFace Deployment",
        href: "https://huggingface.co/spaces/ixyang/threadchef",
      },
    ],
    tools: ["Python", "Llama 3.1 8B", "Gradio", "HuggingFace Spaces"],
  },
  {
    id: "beamsearch",
    title: "Dynamic Beam Width for LLM Decoding",
    overview:
      "Implemented a self-adjusting beam search algorithm driven by token-level attention entropy and perplexity.",
    description: [
      "Developed a self-adjusting beam search algorithm driven by token-level attention entropy and perplexity",
      "Achieved up to 1.9x faster decoding speed vs. standard beam search while maintaining comparable output quality",
    ],
    image: "project_images/beamsearch.png",
    date: "2024-12",
    links: [
      {
        label: "Paper",
        href: "https://irisxyang.github.io/beam_search_paper.pdf",
      },
    ],
    tools: ["PyTorch", "GPT-2"],
  },
  {
    id: "pixelthis",
    title: "PixelThis: Full Stack Web App",
    overview:
      "A full-stack social media web app centered around creating pixel art based on a daily prompt.",
    description: [
      "Built a full-stack social media web app from scratch with OAuth-authenticated users and posting functionality",
      "Engineered an interactive canvas rendering feature and state handling to support drawing and saving creations",
    ],

    date: "2023-01",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/weblab-class/irisxyang-kingstonlew",
      },
      { label: "Deployed Site", href: "https://p1xel-th1s.herokuapp.com/" },
    ],
    image: "project_images/pixelthis.png",
    tools: ["JavaScript", "React", "MongoDB", "Node.js"],
  },
  {
    id: "htr-proj",
    title: "Handwriting Transcription App",
    overview:
      "A tool that takes handwritten notes and extracts text and sketches using OpenCV and clustering techniques.",
    description: [
      "Built end-to-end OCR pipeline with Google Cloud Vision API + OpenCV , served through a Python Flask UI",
      "Achieved 90% accuracy on transcription and 95% sketch extraction through adaptive thresholding and contour detection in OpenCV",
    ],
    date: "2024-04",
    links: [
      { label: "GitHub", href: " https://github.com/irisxyang/htr-proj" },
    ],
    image: "project_images/htr.png",
    tools: ["Google CV API", "OpenCV", "Python", "Flask"],
  },
];

export const projectsByDate = [...projects].sort((a, b) =>
  b.date.localeCompare(a.date),
);

// FEATURED PROJECTS ON HOME PAGE
export const homeHighlights: string[] = [
  "masters-thesis",
  "plantit",
  "threadchef",
  "beamsearch",
];

// export in list order
export const featuredProjects: Project[] = homeHighlights
  .map((id) => projects.find((p) => p.id === id))
  .filter((p): p is Project => Boolean(p));
