import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-background py-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link to="/" className="text-2xl font-bold text-primary">FitTrack</Link>
        <nav>
          <ul className="flex items-center gap-x-6">
            <li><Link to="/" className="text-foreground hover:text-primary">Home</Link></li>
            <li><Link to="/features" className="text-foreground hover:text-primary">Features</Link></li>
            <li><Link to="/pricing" className="text-foreground hover:text-primary">Pricing</Link></li>
            <li><Button variant="default">Download App</Button></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;