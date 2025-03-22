"use client";

import { useState } from "react";
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle,
  CardDescription,
  CardFooter
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  Shield, 
  Edit, 
  Clock,
  CreditCard
} from "lucide-react";
import Layout from "@/app/Components/Layout";

export default function Page() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <Layout>
      <div className="max-w-6xl mx-auto py-8 px-4 md:px-8 mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <Card className="lg:col-span-1 h-fit">
            <CardContent className="p-6 flex flex-col items-center">
              <div className="w-full flex flex-col items-center justify-center py-4">
                <Avatar className="h-24 w-24 mb-4">
                  <AvatarImage src="https://github.com/shadcn.png" alt="John Doe" />
                  <AvatarFallback className="text-2xl">JD</AvatarFallback>
                </Avatar>
                <h2 className="text-xl font-semibold">John Doe</h2>
                <p className="text-muted-foreground">Software Engineer</p>
                <div className="flex items-center mt-2 space-x-2">
                  <Badge variant="outline" className="bg-green-100 text-green-800 hover:bg-green-100 border-green-200 dark:bg-green-900/30 dark:text-green-400 dark:border-green-800">
                    <Shield className="h-3 w-3 mr-1" /> Verified
                  </Badge>
                  <Badge variant="outline">Pro</Badge>
                </div>
              </div>
              
              <div className="w-full mt-6 space-y-3 text-sm">
                <ProfileStat icon={<Clock className="h-4 w-4 text-muted-foreground" />} label="Member since" value="March 2022" />
                <ProfileStat icon={<CreditCard className="h-4 w-4 text-muted-foreground" />} label="Subscription" value="Pro Plan" />
              </div>
              
              <div className="w-full mt-6 pt-6 border-t">
                <Button variant="secondary" className="w-full">
                  View Activity
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="lg:col-span-3">
            <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid grid-cols-3 mb-6">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="personal">Personal Info</TabsTrigger>
                <TabsTrigger value="account">Account</TabsTrigger>
              </TabsList>
              
              <div className="w-full">
                <TabsContent value="overview" className="mt-0 w-full">
                  <div className="space-y-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <User className="mr-2 h-5 w-5 text-primary" />
                          About
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">
                          Experienced software engineer with expertise in web development and cloud technologies. 
                          Passionate about building user-friendly applications and solving complex problems.
                        </p>
                      </CardContent>
                    </Card>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-base flex items-center">
                            <Mail className="mr-2 h-4 w-4 text-primary" />
                            Contact Information
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="pt-2">
                          <ul className="space-y-2">
                            <ContactItem icon={<Mail />} label="Email" value="john@example.com" />
                            <ContactItem icon={<Phone />} label="Phone" value="+1 (555) 123-4567" />
                            <ContactItem icon={<MapPin />} label="Address" value="123 Main St, New York, USA" />
                          </ul>
                        </CardContent>
                        <CardFooter className="pt-0">
                          <Button variant="ghost" size="sm" className="text-xs">
                            Update contact info
                          </Button>
                        </CardFooter>
                      </Card>
                      
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-base flex items-center">
                            <Shield className="mr-2 h-4 w-4 text-primary" />
                            Account Status
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="pt-2">
                          <div className="space-y-4">
                            <div className="flex justify-between items-center">
                              <span className="text-sm font-medium">Email verification</span>
                              <Badge>Verified</Badge>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-sm font-medium">Phone verification</span>
                              <Badge>Verified</Badge>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-sm font-medium">Two-factor auth</span>
                              <Badge variant="outline">Disabled</Badge>
                            </div>
                          </div>
                        </CardContent>
                        <CardFooter className="pt-0">
                          <Button variant="ghost" size="sm" className="text-xs">
                            Security settings
                          </Button>
                        </CardFooter>
                      </Card>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="personal" className="mt-0 w-full">
                  <Card className="w-full">
                    <CardHeader>
                      <CardTitle>Personal Information</CardTitle>
                      <CardDescription>
                        Your personal details and preferences
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-1">
                          <label className="text-sm font-medium text-muted-foreground">Full Name</label>
                          <p className="font-medium">John Doe</p>
                        </div>
                        
                        <div className="space-y-1">
                          <label className="text-sm font-medium text-muted-foreground">Date of Birth</label>
                          <p className="font-medium flex items-center">
                            <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                            January 15, 1990
                          </p>
                        </div>
                        
                        <div className="space-y-1">
                          <label className="text-sm font-medium text-muted-foreground">Gender</label>
                          <p className="font-medium">Male</p>
                        </div>
                        
                        <div className="space-y-1">
                          <label className="text-sm font-medium text-muted-foreground">Location</label>
                          <p className="font-medium">New York, USA</p>
                        </div>
                        
                        <div className="space-y-1">
                          <label className="text-sm font-medium text-muted-foreground">Language</label>
                          <p className="font-medium">English (US)</p>
                        </div>
                        
                        <div className="space-y-1">
                          <label className="text-sm font-medium text-muted-foreground">Timezone</label>
                          <p className="font-medium">Eastern Time (ET)</p>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" size="sm">
                        <Edit className="mr-2 h-4 w-4" /> Edit Personal Information
                      </Button>
                    </CardFooter>
                  </Card>
                </TabsContent>
                
                <TabsContent value="account" className="mt-0 w-full">
                  <Card className="w-full">
                    <CardHeader>
                      <CardTitle>Account Information</CardTitle>
                      <CardDescription>
                        Your account details and preferences
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-1">
                          <label className="text-sm font-medium text-muted-foreground">Username</label>
                          <p className="font-medium">johndoe123</p>
                        </div>
                        
                        <div className="space-y-1">
                          <label className="text-sm font-medium text-muted-foreground">Member Since</label>
                          <p className="font-medium">March 2022</p>
                        </div>
                        
                        <div className="space-y-1">
                          <label className="text-sm font-medium text-muted-foreground">Subscription</label>
                          <p className="font-medium">Pro Plan</p>
                        </div>
                        
                        <div className="space-y-1">
                          <label className="text-sm font-medium text-muted-foreground">Next Billing</label>
                          <p className="font-medium">April 15, 2025</p>
                        </div>
                      </div>
                      
                      <div className="border rounded-md p-4 bg-muted/30">
                        <h3 className="font-medium mb-2">Pro Plan Benefits</h3>
                        <ul className="text-sm space-y-1">
                          <li className="flex items-center">
                            <Shield className="h-3 w-3 mr-2 text-green-600" />
                            Premium customer support
                          </li>
                          <li className="flex items-center">
                            <Shield className="h-3 w-3 mr-2 text-green-600" />
                            Unlimited projects
                          </li>
                          <li className="flex items-center">
                            <Shield className="h-3 w-3 mr-2 text-green-600" />
                            Advanced analytics
                          </li>
                        </ul>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="outline" size="sm">
                        Manage Subscription
                      </Button>
                      <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-600 hover:bg-red-50">
                        Delete Account
                      </Button>
                    </CardFooter>
                  </Card>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </Layout>
  );
}

function ContactItem({ icon, label, value }) {
  return (
    <li className="flex items-start">
      <div className="mt-0.5 mr-3 h-5 w-5 text-muted-foreground">
        {icon}
      </div>
      <div>
        <span className="block text-xs text-muted-foreground">{label}</span>
        <span className="block text-sm font-medium">{value}</span>
      </div>
    </li>
  );
}

function ProfileStat({ icon, label, value }) {
  return (
    <div className="flex items-center">
      <div className="mr-2">{icon}</div>
      <div className="flex-1">
        <p className="text-muted-foreground">{label}</p>
        <p className="font-medium">{value}</p>
      </div>
    </div>
  );
}