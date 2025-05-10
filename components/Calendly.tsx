"use client"

import { useEffect, useState } from "react"
import { Calendar, Clock } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface CalendlySchedulerProps {
  calendlyUrl: string
  height?: number
  title?: string
  description?: string
}

export default function Calendly({
  calendlyUrl = "https://calendly.com/stanford-s",
  height = 700,
  title = "Schedule a Meeting",
  description = "Choose a time that works best for you. I'm looking forward to our conversation!",
}: CalendlySchedulerProps) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Load the Calendly script
    const script = document.createElement("script")
    script.src = "https://assets.calendly.com/assets/external/widget.js"
    script.async = true
    script.onload = () => setIsLoading(false)
    document.body.appendChild(script)

    return () => {
      // Clean up the script when component unmounts
      document.body.removeChild(script)
    }
  }, [])

  return (
    <Card className="w-full max-w-5xl mx-auto overflow-hidden border border-gray-200 shadow-lg">
      <CardHeader className="bg-gradient-to-r from-indigo-400 to-indigo-300 text-white">
        <div className="flex items-center gap-2">
          <Calendar className="h-6 w-6" />
          <CardTitle className="text-xl md:text-2xl">{title}</CardTitle>
        </div>
        <CardDescription className="text-gray-100 mt-2 flex items-center gap-2">
          <Clock className="h-4 w-4" />
          <span>{description}</span>
        </CardDescription>  
      </CardHeader>
      <CardContent className="p-0">
        {isLoading && (
          <div className="flex items-center justify-center h-[400px]">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-500"></div>
          </div>
        )}
        <div
          className="calendly-inline-widget"
          data-url={calendlyUrl}
          style={{
            minWidth: "320px",
            height: `${height}px`,
            opacity: isLoading ? 0 : 1,
            transition: "opacity 0.3s ease-in-out",
          }}
        />
      </CardContent>
    </Card>
  )
}
