"use client"

import { useEffect, useState } from "react"


export default function Calendly() {
  const [isLoading, setIsLoading] = useState(true)


  useEffect(() => {
    const head = document.querySelector("head");
    const script = document.createElement("script");
    script.setAttribute(
      "src",
      "https://assets.calendly.com/assets/external/widget.js"
    );
    script.onload = () => setIsLoading(false)
    if (head) {
      head.appendChild(script);
    }
  }, []);


  return (

    <>

      <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/stanford-s/30min"
        data-auto-embed="true"
        style={{
          minWidth: "320px",
          height: `700px`,
          width: "100%",
          opacity: isLoading ? 0 : 1,
          transition: "opacity 0.3s ease-in-out",
        }}
      ></div>


      {/* <Card className="w-full max-w-5xl mx-auto overflow-hidden border border-gray-200 shadow-lg">
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
            data-url="https://calendly.com/stanford-s/30min"
            data-auto-embed="true"
            style={{
            minWidth: "420px",
            height: `${height}px`,
            opacity: isLoading ? 0 : 1,
            transition: "opacity 0.3s ease-in-out",
          }}
          ></div>

        </CardContent>
      </Card> */}

    </>
  )
}
