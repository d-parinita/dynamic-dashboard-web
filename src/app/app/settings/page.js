"use client";
import Layout from "@/app/Components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";

export default function Page() {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto p-8 space-y-8 mt-15">
        <h1 className="text-3xl font-bold text-center">Settings</h1>
        <Card>
          <CardHeader>
            <CardTitle>General</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <SettingItem label="Performance Issue Alerts" description="Get notifications that suggest ways to improve detected performance issues." enabled />
            <Separator />
            <SettingItem label="Inactive Tabs Appearance" description="A dotted circle appears around site icons for inactive tabs." enabled />
            <Separator />
            <SettingItem label="Tab Hover Preview" description="Memory usage and images appear in the tab hover preview card." enabled />
            <Separator />
            <SettingItem label="Always Keep These Sites Active" description="Sites you add will always stay active, and memory won’t be freed up from them." />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Memory</CardTitle>
          </CardHeader>
          <CardContent>
            <SettingItem label="Memory Saver" description="Chrome frees up memory from inactive tabs to keep active tabs and other apps running smoothly." enabled />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Power</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <SettingItem label="Energy Saver" description="Chrome conserves battery power by limiting background activity and visual effects." enabled />
            <ul className="list-disc ml-6 text-sm text-gray-500">
              <li>Turn on when battery is at 20% or lower</li>
              <li>Turn on when computer is unplugged</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Speed</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <SettingItem label="Preload Pages" description="Chrome preloads pages to make browsing and searching faster." enabled />
            <Separator />
            <SettingItem label="Preloading Mode" description="More pages are preloaded, and pages may be preloaded through Google servers." enabled />
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}

function SettingItem({ label, description, enabled }) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <p className="font-medium text-lg">{label}</p>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
      <Switch defaultChecked={enabled} />
    </div>
  );
}
