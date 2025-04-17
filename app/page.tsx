import {
  Mail,
  MapPin,
  Phone,
  Github,
  Calendar,
  User,
  Award,
  BookOpen,
  Briefcase,
  Code,
  Heart,
  Info,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header/Hero Section */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-8 md:py-12">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <div className="w-32 h-32 md:w-40 md:h-40 relative rounded-full overflow-hidden border-4 border-gray-100 shadow-md">
              <Image
                src="/placeholder.svg?height=160&width=160"
                alt="Nha Le Thanh"
                width={160}
                height={160}
                className="object-cover"
                priority
              />
            </div>
            <div className="text-center md:text-left space-y-2 flex-1">
              <h1 className="text-3xl md:text-4xl font-bold">NHA LE THANH</h1>
              <h2 className="text-xl md:text-2xl text-gray-600">Back-end Developer</h2>

              <div className="flex flex-col sm:flex-row gap-3 mt-4 justify-center md:justify-start">
                <div className="flex items-center gap-2">
                  <Phone size={16} className="text-gray-500" />
                  <span>0346783250</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={16} className="text-gray-500" />
                  <a href="mailto:thanhnha141001@gmail.com" className="hover:underline">
                    thanhnha141001@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Github size={16} className="text-gray-500" />
                  <a
                    href="https://github.com/Nha1410"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    github.com/Nha1410
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-gray-500" />
                  <span>Go Vap, Ho Chi Minh</span>
                </div>
              </div>

              <div className="flex gap-3 mt-2 justify-center md:justify-start">
                <div className="flex items-center gap-2">
                  <Calendar size={16} className="text-gray-500" />
                  <span>14/10/2001</span>
                </div>
                <div className="flex items-center gap-2">
                  <User size={16} className="text-gray-500" />
                  <span>Male</span>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <Button asChild className="bg-gray-800 hover:bg-gray-700">
                <a href="mailto:thanhnha141001@gmail.com">Contact Me</a>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="space-y-6">
          {/* Objective Section */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2">
                <Award size={20} />
                Objective
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-sm text-gray-500">Short-term goals (1-2 years):</h3>
                  <ul className="list-disc pl-5 mt-2 space-y-1 text-sm">
                    <li>
                      Master the basic knowledge and skills of Backend Developer, proficient in 2 programming languages
                      Golang and PHP.
                    </li>
                    <li>
                      Become an active member of the development team, effectively contributing to common projects.
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium text-sm text-gray-500">Long-term goals (3-5 years):</h3>
                  <ul className="list-disc pl-5 mt-2 space-y-1 text-sm">
                    <li>
                      Become a professional Backend Developer, capable of developing and maintaining complex backend
                      applications.
                    </li>
                    <li>
                      Have in-depth knowledge of backend software architectures, databases and distributed systems.
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Skills Section */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2">
                <Code size={20} />
                Skills
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">PHP</span>
                    <span className="text-xs text-gray-500">85%</span>
                  </div>
                  <Progress value={85} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Golang</span>
                    <span className="text-xs text-gray-500">90%</span>
                  </div>
                  <Progress value={90} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">VueJS</span>
                    <span className="text-xs text-gray-500">75%</span>
                  </div>
                  <Progress value={75} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">English</span>
                    <span className="text-xs text-gray-500">70%</span>
                  </div>
                  <Progress value={70} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Git</span>
                    <span className="text-xs text-gray-500">85%</span>
                  </div>
                  <Progress value={85} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">SQL</span>
                    <span className="text-xs text-gray-500">80%</span>
                  </div>
                  <Progress value={80} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">HTML5, CSS3, JS</span>
                    <span className="text-xs text-gray-500">75%</span>
                  </div>
                  <Progress value={75} className="h-2" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Education Section */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2">
                <BookOpen size={20} />
                Education
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <h3 className="font-bold">HO CHI MINH CITY UNIVERSITY OF TECHNOLOGY</h3>
                <p className="text-sm text-gray-500">OCT 2019 - NOV 2023</p>
                <p className="text-sm">Major: Electronics and Telecommunications</p>
                <p className="text-sm">GPA: 7.48/10</p>
              </div>
            </CardContent>
          </Card>

          {/* Interests Section */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2">
                <Heart size={20} />
                Interests
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Travelling</li>
                <li>Online courses</li>
                <li>Music</li>
              </ul>
            </CardContent>
          </Card>

          {/* Honors & Awards Section */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2">
                <Award size={20} />
                Honors & Awards
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <p className="text-sm font-medium">Scholarship for academic excellence</p>
                  <p className="text-sm text-gray-500">8-2021</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Certifications Section */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2">
                <Award size={20} />
                Certifications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-1">
                  <div className="flex justify-between">
                    <p className="text-sm font-medium">TOEIC 690 (Listening and reading)</p>
                    <p className="text-sm text-gray-500">12-2022</p>
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between">
                    <p className="text-sm font-medium">Certificate of completion for the Golang Basic course</p>
                    <p className="text-sm text-gray-500">9-2023</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column (Main Content) */}
        <div className="md:col-span-2 space-y-6">
          {/* Work Experience Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Briefcase size={20} />
                Work Experience
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              {/* Current Job */}
              <div className="space-y-3">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                  <h3 className="font-bold text-lg">BACK-END DEVELOPER</h3>
                  <Badge variant="outline" className="w-fit mt-1 sm:mt-0">
                    6/2024 - present
                  </Badge>
                </div>
                <p className="font-medium">TEL4VN Company</p>
                <div>
                  <p className="font-medium text-sm">Project: Quality Control Bot</p>
                  <p className="font-medium text-sm mt-2">Missions:</p>
                  <ul className="list-disc pl-5 mt-1 space-y-1 text-sm">
                    <li>Develop and maintain a microservice-based system for evaluating call quality.</li>
                    <li>
                      Write APIs for analyzing audio transcripts, scoring criteria, and managing QC-related
                      configurations.
                    </li>
                    <li>Implement real-time processing with RabbitMQ and Redis for message queuing and caching.</li>
                  </ul>
                  <p className="font-medium text-sm mt-2">Technologies:</p>
                  <ul className="list-disc pl-5 mt-1 space-y-1 text-sm">
                    <li>Golang - with Gin Framework</li>
                    <li>ORM: Bun ORM</li>
                    <li>Database: PostgreSQL, Elasticsearch</li>
                    <li>Messaging Queue: RabbitMQ</li>
                    <li>Caching: Redis</li>
                    <li>Architecture: Microservices</li>
                  </ul>
                </div>
              </div>

              <Separator />

              {/* Previous Job */}
              <div className="space-y-3">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                  <h3 className="font-bold text-lg">BACK-END DEVELOPER</h3>
                  <Badge variant="outline" className="w-fit mt-1 sm:mt-0">
                    8/2022 - 6/2024
                  </Badge>
                </div>
                <p className="font-medium">VOYAGER INC</p>

                {/* Project 1 */}
                <div>
                  <p className="font-medium text-sm">Project: SAAS backend company management (6/2023 - 6/2024)</p>
                  <p className="font-medium text-sm mt-2">Missions: Write APIs for employee shift management project</p>
                  <ul className="list-disc pl-5 mt-1 space-y-1 text-sm">
                    <li>Technologies: Golang - with fiber Framework</li>
                    <li>ORM: Gorm, gorm.io</li>
                    <li>PaaS: Google Cloud Platform (Cloud run, Cloud SQL)</li>
                    <li>CI/CD: GitHub Action</li>
                    <li>Database: PostgreSQL</li>
                    <li>API Method: restAPI (with openAPI and oapi-generator)</li>
                  </ul>
                  <p className="font-medium text-sm mt-2">Duties:</p>
                  <ul className="list-disc pl-5 mt-1 space-y-1 text-sm">
                    <li>Apply Clean Architecture software structure</li>
                    <li>Write unit test (Table-driven tests)</li>
                    <li>Practical knowledge of Google Cloud Platform deployment</li>
                    <li>How to write code clean, logical and scalability.</li>
                    <li>Daily direct communication with customers in English</li>
                    <li>Documented test results and worked on bug fixes to improve system stability.</li>
                  </ul>
                </div>

                {/* Project 2 */}
                <div className="mt-4">
                  <p className="font-medium text-sm">Project: Golang Clean Architecture (1/2023 - 6/2023)</p>
                  <p className="font-medium text-sm mt-2">
                    Missions: Proficient in Golang programming, data structures, algorithms, and concurrency concepts.
                  </p>
                  <ul className="list-disc pl-5 mt-1 space-y-1 text-sm">
                    <li>Technologies: Golang - with fiber Framework</li>
                    <li>ORM: Gorm, gorm.io</li>
                    <li>API Method: restAPI</li>
                  </ul>
                  <p className="font-medium text-sm mt-2">Duties:</p>
                  <ul className="list-disc pl-5 mt-1 space-y-1 text-sm">
                    <li>Build well-structured RESTful APIs using Golang frameworks like Fiber.</li>
                    <li>Implement secure user authentication with JWT in Golang applications.</li>
                    <li>Employed Docker for containerization.</li>
                    <li>Write clean, logical, and scalable code following Golang development best practices.</li>
                  </ul>
                </div>

                {/* Project 3 */}
                <div className="mt-4">
                  <p className="font-medium text-sm">Project: Nursing Home Management System (8/2022 - 1/2023)</p>
                  <p className="font-medium text-sm mt-2">Missions: Maintained and developed a web-based system.</p>
                  <p className="font-medium text-sm mt-2">Technologies:</p>
                  <ul className="list-disc pl-5 mt-1 space-y-1 text-sm">
                    <li>BE: PHP Laravel (Laravel 8)</li>
                    <li>FE: VueJS (Vue2), TailwindCSS</li>
                  </ul>
                  <p className="font-medium text-sm mt-2">Knowledge:</p>
                  <ul className="list-disc pl-5 mt-1 space-y-1 text-sm">
                    <li>Understanding Axios and Promise usage in VueJS</li>
                    <li>UI design implementation based on provided designs</li>
                    <li>Understanding how to make websites responsive for different screen sizes</li>
                    <li>Quickly identify and resolve system errors</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Additional Skills Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code size={20} />
                Additional Skills
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                In addition to the mentioned above projects, I have also worked on several small personal projects and
                gained additional skills through assisting with other projects. These include:
              </p>
              <ul className="list-disc pl-5 mt-3 space-y-1 text-sm">
                <li>Experience with Node.js (Express.js framework)</li>
                <li>Knowledge of NoSQL databases</li>
                <li>
                  Experience using WebSockets (Pusher) for real-time communication between client and server in a mini
                  Facebook-clone project.
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Activities Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart size={20} />
                Activities
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                  <h3 className="font-bold">MEMBER OF BACH KHOA SOCIAL GROUP</h3>
                  <Badge variant="outline" className="w-fit mt-1 sm:mt-0">
                    2020-2023
                  </Badge>
                </div>
                <p className="font-medium text-sm">Participated in Social Activities</p>
                <ul className="list-disc pl-5 mt-1 space-y-1 text-sm">
                  <li>Take part in activities to help children in orphanages.</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Additional Information Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Info size={20} />
                Additional Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>
                  High responsibility, can work under pressure, ready for field service in all nationwide, eager to
                  learn.
                </li>
                <li>Good at Teamwork skills.</li>
                <li>Comprehension of English documents.</li>
                <li>Can control and manage time on project.</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">© {new Date().getFullYear()} Nha Le Thanh. All rights reserved.</p>
          <div className="flex justify-center gap-4 mt-4">
            <Link href="mailto:thanhnha141001@gmail.com" className="hover:text-gray-300">
              <Mail size={18} />
              <span className="sr-only">Email</span>
            </Link>
            <Link
              href="https://github.com/Nha1410"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              <Github size={18} />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="tel:0346783250" className="hover:text-gray-300">
              <Phone size={18} />
              <span className="sr-only">Phone</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
