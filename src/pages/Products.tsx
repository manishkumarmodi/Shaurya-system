import ProductCard from "@/components/ProductCard";
import { Link } from "react-router-dom";
import TricolorCursor from "@/components/TricolorCursor";

const products = [
  {
    id: 1,
    title: "Tactical Drone",
    description: "Advanced surveillance and reconnaissance drone with cutting-edge AI capabilities for modern defense operations.",
    image: "https://plus.unsplash.com/premium_photo-1714618849685-89cad85746b1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHJvbmV8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 2,
    title: "Advanced Helmet",
    description: "Next-generation tactical helmet with integrated HUD, night vision, and real-time communication systems.",
    image: "https://images.unsplash.com/photo-1650627807081-aaedee179703?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWR2YW5jZWQlMjBtaWxpdGFyeSUyMGhlbG1ldHxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    id: 3,
    title: "Night Vision Optics",
    description: "Military-grade night vision equipment with thermal imaging and long-range target acquisition capabilities.",
    image: "https://images.unsplash.com/photo-1602667341932-6e6404cd20ba?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fG5pZ2h0JTIwdmlzaW9uJTIwb3B0aWNzJTIwdXNlZCUyMGJ5JTIwYXJteXxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    id: 4,
    title: "Combat Vest",
    description: "Lightweight ballistic protection vest with integrated communication systems and modular attachments.",
    image: "https://images.unsplash.com/photo-1703763731188-071576176011?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29tYmF0JTIwdmVzdHxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    id: 5,
    title: "Tactical Radio",
    description: "Secure military communication device with encrypted channels and long-range capability.",
    image: "https://images.unsplash.com/photo-1717749789408-f6f73c9e6aac?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGFjdGljYWwlMjByYWRpb3xlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    id: 6,
    title: "Defense Radar",
    description: "High-precision radar system for air defense and surveillance with advanced threat detection.",
    image: "https://images.unsplash.com/photo-1742608383899-9b5f2658616c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGRlZmVuY2UlMjByYWRhcnxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    id: 7,
    title: "Armored Vehicle",
    description: "Multi-purpose armored vehicle with enhanced protection and all-terrain mobility.",
    image: "https://images.unsplash.com/photo-1630719003242-cc15a7244d16?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXJtb3JlZCUyMHZlaGljbGV8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 8,
    title: "Missile System",
    description: "Precision-guided missile system with advanced targeting and navigation capabilities.",
    image: "https://images.unsplash.com/photo-1710750266544-d5b41e6847aa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWlzc2lsZSUyMHN5c3RlbXxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    id: 9,
    title: "Cyber Defense",
    description: "Advanced cybersecurity solutions for military networks and critical infrastructure protection.",
    image: "https://images.unsplash.com/photo-1606549000874-1ddeec0ae234?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y3liZXIlMjBkZWZlbmNlJTIwcmFkYXJ8ZW58MHx8MHx8fDA%3D"
  }
];

const Products = () => {
  return (
    <>
      <TricolorCursor />
      <div className="min-h-screen bg-background text-foreground py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
              Our Defense Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Cutting-edge technology designed for India's defense needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Link key={product.id} to={`/product/${product.id}`} className="animate-fade-in-up" style={{ animationDelay: `${product.id * 0.2}s` }}>
                <ProductCard {...product} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
