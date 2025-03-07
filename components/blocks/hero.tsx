import { Github, Package } from "lucide-react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

const background = "linear-gradient(to top left,#ff6e7f,#bfe9ff)"

export const Hero = () => (
  <div className="w-full h-[100vh]">
    <div className="container mx-auto">
      <div className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col">
        <div>
          <Badge variant="outline">We&apos;re live!</Badge>
        </div>
        <div className="flex gap-4 flex-col">
          <h1
            style={{ background }}
            className="inline-block text-center text-7xl font-semibold !bg-clip-text text-transparent !bg-cover !bg-center transition-all"
          >
            Tranzit
          </h1>
          <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center">
            Make beautiful transitions between light/dark mode
          </p>
        </div>
        <div className="flex flex-row gap-3">
          <Button
            size="lg"
            className="gap-2"
            onClick={() => {
              window.open("https://github.com/Alioo11/tranzit", "_blank");
            }}
          >
            Repo on Github <Github className="w-4 h-4" />
          </Button>

          <Button
            size="lg"
            className="gap-2"
            onClick={() => {
              window.open("https://www.npmjs.com/package/tranzit", "_blank");
            }}
          >
            NPM <Package className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  </div>
);
