"use client"

import type React from "react"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Asterisk } from "lucide-react"

export default function SignUpForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Add your form submission logic here
  }

  return (
    <div className="w-full max-w-7xl mx-auto md:rounded-2xl overflow-hidden bg-[#1a2e44] text-white">
      <div className="grid md:grid-cols-2 items-center">
        {/* Left side - Heading */}
        <div className="p-8 md:p-10 lg:p-16 flex flex-col items-start">
          <div className="flex items-center gap-4 mb-4">
            <Asterisk className="w-10 h-10 text-sky-300" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold leading-tight">
            We help you grow
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white/80"> with purpose</span>
          </h2>
        </div>

        {/* Right side - Form */}
        <div className="relative p-8 md:p-10 lg:p-16">
          {/* Vertical divider line - only visible on md and larger screens */}
          <div className="absolute left-0 top-10 bottom-10 w-px bg-gray-500 opacity-30 hidden md:block"></div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                className="bg-white text-gray-600 border-none px-4 h-14 rounded-xl"
                required
              />
              <Input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className="bg-white text-gray-600 border-none px-4 h-14 rounded-xl"
                required
              />
            </div>
            <Input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="bg-white text-gray-600 border-none px-4 h-14 rounded-xl"
              required
            />

            <Button
              variant="default"
              type="submit"
              className="px-5 sm:px-6 py-6 hover:bg-blue-400 cursor-pointer bg-indigo-400 text-white rounded-xl font-semibold text-sm md:text-lg btn-cta group w-full"
            >
              <span className="flex items-center justify-center gap-3 btn-content">
                <span className="whitespace-nowrap text-sm">Sign Up</span>
              </span>
            </Button>

            {/* <Button
              type="submit"
              className="w-full bg-sky-400 hover:bg-sky-500 text-white h-14 rounded-xl transition-colors duration-300"
            >
              Sign Up
            </Button> */}

          </form>
        </div>
      </div>
    </div>
  )
}
