"use client";
import { skillsData } from "@/lib/data"; 
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import React from 'react';

export function SkillsSection() {
  return (
    <section id="skills" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">My Technical Toolkit</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The technologies and platforms I use to build robust, intelligent solutions for my clients.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {skillsData.map((skill, index) => (
            <Card 
              key={skill.name} 
              className="bg-card hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <CardHeader className="pb-3">
                <div className="flex items-center space-x-4">
                  {skill.icon && <skill.icon className="h-8 w-8 text-primary" />}
                  <CardTitle className="text-xl font-headline">{skill.name}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                {skill.description && (
                  <p className="text-sm text-muted-foreground h-12">
                    {skill.description}
                  </p>
                )}
                {skill.level && (
                  <div className="pt-2">
                    <Progress value={skill.level} aria-label={`${skill.name} proficiency ${skill.level}%`} className="h-2 bg-secondary" />
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
