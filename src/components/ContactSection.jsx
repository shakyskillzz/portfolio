import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitch,
  Twitter,
} from "lucide-react";
import { useState } from "react";

export const ContactSection = () => {


  
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate... or simply want to say hi. 
          Feel free to reach out for anything!
        </p>

        <div className="flex justify-center">
          <div className="space-y-8 w-full max-w-md">
            <h3 className="text-2xl font-semibold mb-6">
              {" "}
              Contact Information
            </h3>

            <div className="space-y-6 pl-24">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium pr-12"> Email</h4>
                  <a
                    href="mailto:vallejosalex10@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    vallejosalex10@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium"> Phone</h4>
                  <a
                    href="tel:+15612555712"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +1 (561) 255-5712
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium"> Location</h4>
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Orlando, FL, USA
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4"> Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a href="https://www.linkedin.com/in/alexander-vallejos/" target="_blank">
                  <Linkedin />
                </a>
                <a href="https://x.com/Vallejosalex00" target="_blank">
                  <Twitter />
                </a>
                <a href="https://www.instagram.com/alex_vall10" target="_blank">
                  <Instagram />
                </a>
                {/* <a href="#" target="_blank">
                  <Twitch />
                </a> */}
              </div>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
};