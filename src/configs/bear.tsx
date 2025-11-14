import type { BearData } from "~/types";

const bear: BearData[] = [
  {
    id: "profile",
    title: "Profile",
    icon: "i-fa-solid:paw",
    md: [
      {
        id: "about-me",
        title: "About Me",
        file: "markdown/about-me.md",
        icon: "i-la:dragon",
        excerpt: "Hey there! I'm the one who is building his own universe..."
      },
      {
        id: "github-stats",
        title: "Github Stats",
        file: "markdown/github-stats.md",
        icon: "i-icon-park-outline:github",
        excerpt: "Here are some status about my github account..."
      },
      {
        id: "about-site",
        title: "About This Site",
        file: "markdown/about-site.md",
        icon: "i-octicon:browser",
        excerpt: "Something about this personal portfolio site..."
      }
    ]
  },
  {
    id: "project",
    title: "Projects",
    icon: "i-octicon:repo",
    md: [
      {
        id: "paytm-web",
        title: "DeepFake Detector",
        file: "https://raw.githubusercontent.com/Pranesh-2005/AI-Generated-Video-Detector/main/README.md",
        icon: "i-carbon:face-neutral",
        excerpt: "A DeepFake detection project...",
        link: "https://github.com/Pranesh-2005/AI-Generated-Video-Detector"
      },
      {
        id: "portfolio-macos",
        title: "Portfolio",
        file: "https://raw.githubusercontent.com/pranesh-2005/Pranesh-2005.github.io/src/Readme.md",
        icon: "i-heroicons:computer-desktop",
        excerpt: "My portfolio website",
        link: "https://github.com/pranesh-2005/Pranesh-2005.github.io"
      },
      {
        id: "medium-2.0",
        title: "V0-like-website",
        file: "https://raw.githubusercontent.com/Pranesh-2005/V0-like-website/main/Readme.md",
        icon: "i-mdi:web",
        excerpt: "A website generator like v0.dev, bolt.new...",
        link: "https://github.com/Pranesh-2005/V0-like-website"
      },
      {
        id: "attendance-web",
        title: "Readme And License Generator",
        file: "https://raw.githubusercontent.com/Pranesh-2005/Free-Readme-and-License-Generator/main/Readme.md",
        icon: "i-heroicons:document-text",
        excerpt: "A Free Readme And License Generator for GitHub repositories...",
        link: "https://github.com/Pranesh-2005/Free-Readme-and-License-Generator"
      },
      {
        id: "aero-pay",
        title: "TextEmo",
        file: "https://raw.githubusercontent.com/pranesh-2005/Text-Emotion/main/README.md",
        icon: "i-heroicons:face-smile",
        excerpt: "A python package for text-based emotions...",
        link: "https://github.com/pranesh-2005/Text-Emotion"
      },
      {
        id: "rasl",
        title: "Research Paper RAG",
        file: "https://raw.githubusercontent.com/Pranesh-2005/ResearchPaperRAG/main/Readme.md",
        icon: "i-heroicons:document-magnifying-glass",
        excerpt: "AI that summarizes research papers...",
        link: "https://github.com/Pranesh-2005/ResearchPaperRAG"
      }
    ]
  }
];

export default bear;