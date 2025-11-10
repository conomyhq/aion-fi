import React from 'react';

interface HeaderProps {
  title: string;
  description: string;
}

export default function Header({ title, description }: HeaderProps) {
  return (
    <div className="fspace-y-4 mb-8">
            <div className="flex items-center justify-between">
                <div className="items-left">
                 <h1 className="text-4xl font-bold">{title}</h1>
                 <p className="text-xl text-muted-foreground">{description}</p>
                </div>
            </div>
      </div>
  );
}
