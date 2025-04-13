
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { 
  MessageCircle, 
  Star, 
  ThumbsUp, 
  ThumbsDown, 
  Lightbulb, 
  AlertTriangle 
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const FeedbackType = ({ icon, title, description, value }: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
  value: string;
}) => (
  <div className="flex items-start space-x-2">
    <RadioGroupItem value={value} id={value} />
    <div className="grid gap-1.5">
      <Label htmlFor={value} className="flex items-center gap-2 text-base font-medium cursor-pointer">
        {icon}
        {title}
      </Label>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  </div>
);

const Feedback = () => {
  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Your Feedback Matters</h1>
            <p className="text-xl text-muted-foreground">
              Help us improve InstantConnect by sharing your thoughts, suggestions, and experiences.
            </p>
          </div>

          <div className="bg-card rounded-lg border border-border p-8 shadow-sm">
            <form className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">What type of feedback do you have?</h2>
                <RadioGroup defaultValue="general">
                  <div className="grid gap-4">
                    <FeedbackType 
                      icon={<Star className="h-5 w-5 text-yellow-500" />} 
                      title="General Feedback" 
                      description="Share your overall experience with InstantConnect"
                      value="general"
                    />
                    <FeedbackType 
                      icon={<ThumbsUp className="h-5 w-5 text-green-500" />} 
                      title="Feature Praise" 
                      description="Tell us what you love about InstantConnect"
                      value="praise"
                    />
                    <FeedbackType 
                      icon={<ThumbsDown className="h-5 w-5 text-red-500" />} 
                      title="Issue Report" 
                      description="Let us know about any problems you're experiencing"
                      value="issue"
                    />
                    <FeedbackType 
                      icon={<Lightbulb className="h-5 w-5 text-amber-500" />} 
                      title="Feature Request" 
                      description="Suggest new features or improvements"
                      value="feature"
                    />
                    <FeedbackType 
                      icon={<AlertTriangle className="h-5 w-5 text-orange-500" />} 
                      title="Bug Report" 
                      description="Report technical issues or bugs"
                      value="bug"
                    />
                  </div>
                </RadioGroup>
              </div>

              <Separator />

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Feedback Title</Label>
                  <Input id="title" placeholder="Brief summary of your feedback" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea 
                    id="description" 
                    placeholder="Please provide details about your feedback..." 
                    className="min-h-[150px]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Your Email (optional)</Label>
                  <Input id="email" type="email" placeholder="email@example.com" />
                  <p className="text-sm text-muted-foreground">
                    So we can follow up with you if needed
                  </p>
                </div>
              </div>

              <div className="pt-4">
                <Button type="submit" className="w-full sm:w-auto">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Submit Feedback
                </Button>
              </div>
            </form>
          </div>

          <div className="mt-12 text-center">
            <h2 className="text-xl font-bold mb-3">Other Ways to Reach Us</h2>
            <p className="text-muted-foreground mb-6">
              We're always looking for ways to improve. Connect with us through any of these channels:
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="outline">Community Forum</Button>
              <Button variant="outline">Discord Server</Button>
              <Button variant="outline">Twitter</Button>
              <Button variant="outline">GitHub</Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Feedback;
