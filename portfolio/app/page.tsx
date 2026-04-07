import { HomeClient, ProjectData } from "@/components/home-client"
import { promises as fs } from 'fs'
import path from 'path'

export default async function Home() {
  let featuredProjects: ProjectData[] = []

  try {
    const filePath = path.join(process.cwd(), 'public', 'data.json')
    const fileContents = await fs.readFile(filePath, 'utf8')
    const data = JSON.parse(fileContents)
    
    // Proper typing and strictly filtered mapping
    featuredProjects = data.projects
      .filter((project: any) => project.featured === "yes")
      .map((project: any) => ({
        id: project.slug,
        title: project.title,
        description: project.overview,
        tags: Array.isArray(project.techStack) ? project.techStack.slice(0, 4) : [],
        slug: project.slug,
      }))
  } catch (error) {
    console.error("Error loading project data on server:", error)
    // Fallback in case file read fails during dev/build
    featuredProjects = []
  }

  return <HomeClient featuredProjects={featuredProjects} />
}
