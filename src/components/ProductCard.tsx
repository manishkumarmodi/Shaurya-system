import { Card, CardContent } from "@/components/ui/card";
import React, { useState } from "react";

interface ProductCardProps {
  title: string;
  description: string;
  image: string;
}



const ProductCard = ({ title, description, image }: ProductCardProps) => {
  const [showModal, setShowModal] = useState(false);
  const isTacticalDrone = title === "Tactical Drone";

  return (
    <Card className="group overflow-hidden bg-gradient-card border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-card hover:-translate-y-1">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>
        <div className="mt-4 h-1 w-0 bg-gradient-primary group-hover:w-full transition-all duration-500 ease-out" />
        <button
          className="block w-full mt-4 bg-gradient-to-r from-saffron to-green-600 text-white py-2 px-4 rounded-lg font-semibold shadow hover:shadow-lg transition-all duration-300"
          onClick={() => setShowModal(true)}
        >
          View Details
        </button>
      </CardContent>
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl w-full relative overflow-y-auto max-h-[80vh]">
            <h2 className="text-2xl font-bold mb-4 text-primary">{title} Details</h2>
            <pre className="text-sm text-foreground whitespace-pre-wrap mb-4" style={{ fontFamily: 'inherit' }}>
              {isTacticalDrone ? tacticalDroneInfo : description}
            </pre>
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-primary text-xl font-bold"
              onClick={() => setShowModal(false)}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </Card>
  );
};

export default ProductCard;